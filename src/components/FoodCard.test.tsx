// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { content } from '../config/content';
import type { UserContextType } from '../context/UserContext';
import type { Food } from '../types';
import { FoodCard } from './FoodCard';

const { useUserMock } = vi.hoisted(() => ({
  useUserMock: vi.fn<() => UserContextType>(),
}));

vi.mock('../hooks/use-user', () => ({
  useUser: useUserMock,
}));

const food: Food = {
  id: 'fraise',
  name: 'Fraise',
  category: 'fruits',
  limitGrams: 80,
  fodmaps: [{ type: 'sorbitol', isPrimary: true }],
  confidence: 'elevee',
  lastUpdated: '2026-07-01',
  source: 'fixture',
};

const createUserContext = (compatible: boolean): UserContextType => ({
  profile: null,
  isLoading: false,
  updateProfile: vi.fn(() => true),
  clearProfile: vi.fn(),
  isCompatible: vi.fn(() => compatible),
  getIntolerances: vi.fn(() => []),
  hasProfile: vi.fn(() => false),
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe('FoodCard semantics', () => {
  it.each([
    [true, content.explorer.foodCard.compatibleAria, content.explorer.foodCard.compatible],
    [false, content.explorer.foodCard.avoidAria, content.explorer.foodCard.avoid],
  ])('exposes the profile-relative state and reference portion', (compatible, ariaLabel, text) => {
    useUserMock.mockReturnValue(createUserContext(compatible));

    render(<FoodCard food={food} />);

    expect(screen.getByLabelText(ariaLabel)).toBeTruthy();
    expect(screen.getByText(text)).toBeTruthy();
    const portion = screen.getByText(
      `${content.explorer.foodCard.referencePortion} : ${food.limitGrams}g`
    );
    expect(portion.tagName).toBe('P');
  });
});
