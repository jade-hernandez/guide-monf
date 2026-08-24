// @vitest-environment jsdom
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { content } from '../config/content';
import type { UserContextType, UserProfile } from '../context/UserContext';
import type { FODMAPType } from '../types';
import Profile from './Profile';

const { useUserMock } = vi.hoisted(() => ({
  useUserMock: vi.fn<() => UserContextType>(),
}));

vi.mock('../hooks/use-user', () => ({
  useUser: useUserMock,
}));

const savedProfile: UserProfile = {
  fodmapIntolerances: {
    fructanes: true,
    galactanes: false,
    lactose: true,
    fructose: false,
    mannitol: true,
    sorbitol: false,
  },
  createdAt: '2026-07-01T10:00:00.000Z',
  lastUpdated: '2026-07-22T12:00:00.000Z',
};

const createUserContext = (overrides: Partial<UserContextType> = {}): UserContextType => ({
  profile: null,
  isLoading: false,
  updateProfile: vi.fn(() => true),
  clearProfile: vi.fn(),
  isCompatible: vi.fn(() => true),
  getCompatibleFoods: vi.fn(() => []),
  getIntolerances: vi.fn(() => []),
  hasProfile: vi.fn(() => false),
  ...overrides,
});

const renderProfile = () =>
  render(
    <MemoryRouter initialEntries={['/profile']}>
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/explorer' element={<h1>Explorateur cible</h1>} />
      </Routes>
    </MemoryRouter>
  );

const getChoice = (typeName: string, choiceName: string) =>
  within(screen.getByRole('group', { name: `Configuration pour ${typeName}` })).getByRole(
    'button',
    { name: choiceName }
  );

const configureEveryFodmapAsTolerated = () => {
  content.profile.fodmaps.forEach(({ name }) => {
    fireEvent.click(getChoice(name, content.profile.toggleButtons.tolerate));
  });
};

beforeEach(() => {
  useUserMock.mockReturnValue(createUserContext());
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe('Profile workflow', () => {
  it('restores all six saved binary answers in the editor', () => {
    useUserMock.mockReturnValue(
      createUserContext({
        profile: savedProfile,
        hasProfile: vi.fn(() => true),
      })
    );

    renderProfile();

    content.profile.fodmaps.forEach(({ type, name }) => {
      const savedAnswer = savedProfile.fodmapIntolerances[type as FODMAPType];
      const selectedChoice = savedAnswer
        ? content.profile.toggleButtons.tolerate
        : content.profile.toggleButtons.avoid;
      const unselectedChoice = savedAnswer
        ? content.profile.toggleButtons.avoid
        : content.profile.toggleButtons.tolerate;

      expect(getChoice(name, selectedChoice).getAttribute('aria-pressed')).toBe('true');
      expect(getChoice(name, unselectedChoice).getAttribute('aria-pressed')).toBe('false');
    });
    expect(screen.getByText('6/6')).toBeTruthy();
  });

  it('keeps Continue disabled until all six answers are configured', () => {
    const updateProfile = vi.fn(() => true);
    useUserMock.mockReturnValue(createUserContext({ updateProfile }));

    renderProfile();

    const continueButton = screen.getByRole('button', {
      name: content.profile.continueButton.label,
    }) as HTMLButtonElement;

    expect(continueButton.disabled).toBe(true);
    fireEvent.click(continueButton);
    expect(updateProfile).not.toHaveBeenCalled();
    expect(screen.getByText(content.profile.validation.incomplete)).toBeTruthy();
  });

  it('preserves selections and announces recovery text when saving fails', () => {
    const updateProfile = vi.fn(() => false);
    useUserMock.mockReturnValue(createUserContext({ updateProfile }));

    renderProfile();
    configureEveryFodmapAsTolerated();
    fireEvent.click(
      screen.getByRole('button', {
        name: content.profile.continueButton.label,
      })
    );

    expect(updateProfile).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('alert').textContent).toContain(content.profile.validation.saveFailed);
    content.profile.fodmaps.forEach(({ name }) => {
      expect(
        getChoice(name, content.profile.toggleButtons.tolerate).getAttribute('aria-pressed')
      ).toBe('true');
    });
    expect(screen.queryByRole('heading', { name: 'Explorateur cible' })).toBeNull();
  });

  it('saves the completed profile and navigates to Explorer', () => {
    const updateProfile = vi.fn(() => true);
    useUserMock.mockReturnValue(createUserContext({ updateProfile }));

    renderProfile();
    configureEveryFodmapAsTolerated();
    fireEvent.click(
      screen.getByRole('button', {
        name: content.profile.continueButton.label,
      })
    );

    expect(updateProfile).toHaveBeenCalledWith({
      fodmapIntolerances: {
        fructanes: true,
        galactanes: true,
        lactose: true,
        fructose: true,
        mannitol: true,
        sorbitol: true,
      },
      createdAt: expect.any(String),
      lastUpdated: expect.any(String),
    });
    expect(screen.getByRole('heading', { name: 'Explorateur cible' })).toBeTruthy();
  });
});
