// @vitest-environment jsdom
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { content } from '../config/content';
import type { UserContextType, UserProfile } from '../context/UserContext';
import type { FODMAPType, Food } from '../types';
import Explorer from './Explorer';

const { foods, useUserMock } = vi.hoisted(() => ({
  foods: [
    {
      id: 'banane',
      name: 'Banane',
      category: 'fruits',
      limitGrams: 100,
      fodmaps: [{ type: 'fructose', isPrimary: true }],
      confidence: 'elevee',
      lastUpdated: '2026-07-01',
      source: 'fixture',
    },
    {
      id: 'fraise',
      name: 'Fraise',
      category: 'fruits',
      limitGrams: 80,
      fodmaps: [{ type: 'sorbitol', isPrimary: true }],
      confidence: 'elevee',
      lastUpdated: '2026-07-01',
      source: 'fixture',
    },
    {
      id: 'avoine',
      name: 'Avoine',
      category: 'cereales',
      limitGrams: 60,
      fodmaps: [{ type: 'fructanes', isPrimary: true }],
      confidence: 'elevee',
      lastUpdated: '2026-07-01',
      source: 'fixture',
    },
    {
      id: 'carotte',
      name: 'Carotte',
      category: 'legumes',
      limitGrams: 75,
      fodmaps: [{ type: 'mannitol', isPrimary: true }],
      confidence: 'elevee',
      lastUpdated: '2026-07-01',
      source: 'fixture',
    },
    ...Array.from({ length: 36 }, (_, index): Food => ({
      id: `item-${String(index + 1).padStart(2, '0')}`,
      name: `Item ${String(index + 1).padStart(2, '0')}`,
      category: 'cereales',
      limitGrams: 50,
      fodmaps: [{ type: 'mannitol', isPrimary: true }],
      confidence: 'elevee',
      lastUpdated: '2026-07-01',
      source: 'fixture',
    })),
  ] satisfies Food[],
  useUserMock: vi.fn<() => UserContextType>(),
}));

vi.mock('../lib/fodmap-db', () => ({
  baseDonneesFodmap: { foods },
}));

vi.mock('../components/FoodCard', () => ({
  FoodCard: ({ food }: { food: Food }) => <article>{food.name}</article>,
}));

vi.mock('../hooks/use-user', () => ({
  useUser: useUserMock,
}));

const savedProfile: UserProfile = {
  fodmapIntolerances: {
    fructanes: true,
    galactanes: true,
    lactose: true,
    fructose: false,
    mannitol: true,
    sorbitol: true,
  },
  createdAt: '2026-07-01T10:00:00.000Z',
  lastUpdated: '2026-07-22T12:00:00.000Z',
};

const createUserContext = (overrides: Partial<UserContextType> = {}): UserContextType => ({
  profile: savedProfile,
  isLoading: false,
  updateProfile: vi.fn(() => true),
  clearProfile: vi.fn(),
  isCompatible: vi.fn(() => true),
  getCompatibleFoods: vi.fn(() => []),
  getIntolerances: vi.fn((): FODMAPType[] => ['fructose']),
  hasProfile: vi.fn(() => true),
  ...overrides,
});

const renderExplorer = () =>
  render(
    <MemoryRouter initialEntries={['/explorer']}>
      <Routes>
        <Route path='/explorer' element={<Explorer />} />
        <Route path='/profile' element={<h1>Profil cible</h1>} />
      </Routes>
    </MemoryRouter>
  );

const getSearch = () =>
  screen.getByRole('searchbox', {
    name: content.explorer.search.ariaLabel,
  }) as HTMLInputElement;

const getProfileFilter = () =>
  screen.getByRole('button', {
    name: content.explorer.filters.safeForMe.ariaLabel,
  });

const getLoadMore = () =>
  screen.getByRole('button', {
    name: content.explorer.search.loadMore,
  });

beforeEach(() => {
  useUserMock.mockReturnValue(createUserContext());
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe('Explorer workflow', () => {
  it('initially renders only the first 16 matching foods', () => {
    renderExplorer();

    expect(screen.getAllByRole('article')).toHaveLength(16);
    expect(screen.getByText('Banane')).toBeTruthy();
    expect(screen.getByText('Item 12')).toBeTruthy();
    expect(screen.queryByText('Item 13')).toBeNull();
    expect(getLoadMore()).toBeTruthy();
  });

  it('loads more foods in fixed increments and hides the control at the final state', () => {
    renderExplorer();

    fireEvent.click(getLoadMore());

    expect(screen.getAllByRole('article')).toHaveLength(32);
    expect(screen.getByRole('status').textContent).toContain('32 affiché(s)');
    expect(screen.getByText('Item 28')).toBeTruthy();

    fireEvent.click(getLoadMore());

    expect(screen.getAllByRole('article')).toHaveLength(40);
    expect(screen.getByRole('status').textContent).toContain('40 affiché(s)');
    expect(screen.queryByRole('button', { name: content.explorer.search.loadMore })).toBeNull();
  });

  it('keeps total matches distinct from the visible count', () => {
    renderExplorer();

    const resultStatus = screen.getByRole('status');

    expect(resultStatus.textContent).toContain('40 aliment(s) trouvé(s)');
    expect(resultStatus.textContent).toContain('16 affiché(s)');
  });

  it('combines search, category, and saved-profile filtering', () => {
    renderExplorer();

    fireEvent.change(getSearch(), { target: { value: 'a' } });
    fireEvent.click(screen.getByRole('button', { name: 'Fruits' }));

    expect(screen.getByRole('status').textContent).toContain('2 aliment(s) trouvé(s)');
    expect(screen.getByText('Banane')).toBeTruthy();
    expect(screen.getByText('Fraise')).toBeTruthy();

    fireEvent.click(getProfileFilter());

    expect(screen.getByRole('status').textContent).toContain('1 aliment(s) trouvé(s)');
    expect(screen.queryByText('Banane')).toBeNull();
    expect(screen.getByText('Fraise')).toBeTruthy();
  });

  it('resets the visible limit after a search changes the result set', () => {
    renderExplorer();

    fireEvent.click(getLoadMore());
    expect(screen.getAllByRole('article')).toHaveLength(32);

    fireEvent.change(getSearch(), { target: { value: 'Item' } });

    expect(screen.getByRole('status').textContent).toContain('36 aliment(s) trouvé(s)');
    expect(screen.getByRole('status').textContent).toContain('16 affiché(s)');
    expect(screen.getAllByRole('article')).toHaveLength(16);
    expect(screen.getByText('Item 01')).toBeTruthy();
    expect(screen.queryByText('Item 17')).toBeNull();
  });

  it('resets the visible limit after a category change', () => {
    renderExplorer();

    fireEvent.click(getLoadMore());
    fireEvent.click(screen.getByRole('button', { name: 'Céréales' }));

    expect(screen.getByRole('status').textContent).toContain('37 aliment(s) trouvé(s)');
    expect(screen.getByRole('status').textContent).toContain('16 affiché(s)');
    expect(screen.getAllByRole('article')).toHaveLength(16);
    expect(screen.getByText('Avoine')).toBeTruthy();
    expect(screen.queryByText('Item 16')).toBeNull();
  });

  it('resets the visible limit after the profile-relative filter changes', () => {
    renderExplorer();

    fireEvent.click(getLoadMore());
    fireEvent.click(getProfileFilter());

    expect(screen.getByRole('status').textContent).toContain('39 aliment(s) trouvé(s)');
    expect(screen.getByRole('status').textContent).toContain('16 affiché(s)');
    expect(screen.getAllByRole('article')).toHaveLength(16);
    expect(screen.queryByText('Banane')).toBeNull();
    expect(screen.queryByText('Item 16')).toBeNull();
  });

  it('updates the polite live result count after a search', () => {
    renderExplorer();

    const resultStatus = screen.getByRole('status');
    expect(resultStatus.getAttribute('aria-live')).toBe('polite');
    expect(resultStatus.getAttribute('aria-atomic')).toBe('true');

    fireEvent.change(getSearch(), { target: { value: 'avoine' } });

    expect(resultStatus.textContent).toContain('1 aliment(s) trouvé(s)');
    expect(screen.getByText('Avoine')).toBeTruthy();
  });

  it('clears only the search while preserving active filters', () => {
    renderExplorer();

    fireEvent.click(screen.getByRole('button', { name: 'Fruits' }));
    fireEvent.click(getProfileFilter());
    fireEvent.change(getSearch(), { target: { value: 'introuvable' } });

    expect(screen.getByRole('status').textContent).toContain('0 aliment(s) trouvé(s)');
    fireEvent.click(screen.getByRole('button', { name: content.explorer.search.clearButton }));

    expect(getSearch().value).toBe('');
    expect(screen.getByRole('button', { name: 'Fruits' }).getAttribute('aria-pressed')).toBe(
      'true'
    );
    expect(getProfileFilter().getAttribute('aria-pressed')).toBe('true');
    expect(screen.getByRole('status').textContent).toContain('1 aliment(s) trouvé(s)');
  });

  it('resets only filters while preserving the active search and valid pagination', () => {
    renderExplorer();

    fireEvent.change(getSearch(), { target: { value: 'banane' } });
    fireEvent.click(getProfileFilter());

    expect(screen.getByRole('status').textContent).toContain('0 aliment(s) trouvé(s)');
    fireEvent.click(
      screen.getByRole('button', {
        name: content.explorer.emptyStates.resetFilters,
      })
    );

    expect(getSearch().value).toBe('banane');
    expect(getProfileFilter().getAttribute('aria-pressed')).toBe('false');
    expect(screen.getByRole('status').textContent).toContain('1 aliment(s) trouvé(s)');
    expect(screen.getByText('Banane')).toBeTruthy();
  });

  it('resets pagination when empty-state recovery restores a larger result set', () => {
    renderExplorer();

    fireEvent.change(getSearch(), { target: { value: 'Item' } });
    fireEvent.click(getLoadMore());
    expect(screen.getAllByRole('article')).toHaveLength(32);

    fireEvent.change(getSearch(), { target: { value: 'introuvable' } });
    fireEvent.click(screen.getByRole('button', { name: content.explorer.search.clearButton }));

    expect(screen.getByRole('status').textContent).toContain('40 aliment(s) trouvé(s)');
    expect(screen.getByRole('status').textContent).toContain('16 affiché(s)');
    expect(screen.getAllByRole('article')).toHaveLength(16);
    expect(screen.getByText('Banane')).toBeTruthy();
    expect(screen.queryByText('Item 13')).toBeNull();
  });

  it('routes users without a profile to the recovery path', () => {
    useUserMock.mockReturnValue(
      createUserContext({
        profile: null,
        getIntolerances: vi.fn(() => []),
        hasProfile: vi.fn(() => false),
      })
    );

    renderExplorer();
    fireEvent.click(screen.getByRole('button', { name: 'Remplir mon profil' }));

    expect(screen.getByRole('heading', { name: 'Profil cible' })).toBeTruthy();
  });
});
