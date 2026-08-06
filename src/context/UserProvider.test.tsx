// @vitest-environment jsdom
import type { ReactNode } from 'react';

import { act, cleanup, renderHook, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useUser } from '../hooks/use-user';
import { serializeStoredProfile } from '../lib/profile-storage';
import type { UserProfile } from './UserContext';
import { UserProvider } from './UserProvider';

const STORAGE_KEY = 'mon_guide_fodmap_profile';

const createMemoryStorage = (): Storage => {
  const values = new Map<string, string>();

  return {
    get length() {
      return values.size;
    },
    clear: () => values.clear(),
    getItem: (key) => values.get(key) ?? null,
    key: (index) => [...values.keys()][index] ?? null,
    removeItem: (key) => {
      values.delete(key);
    },
    setItem: (key, value) => {
      values.set(key, value);
    },
  };
};

const createProfile = (lastUpdated = '2026-07-22T12:00:00.000Z'): UserProfile => ({
  fodmapIntolerances: {
    fructanes: true,
    galactanes: false,
    lactose: true,
    fructose: true,
    mannitol: false,
    sorbitol: true,
  },
  createdAt: '2026-07-01T10:00:00.000Z',
  lastUpdated,
});

const wrapper = ({ children }: { children: ReactNode }) => <UserProvider>{children}</UserProvider>;

const renderUserContext = () => renderHook(() => useUser(), { wrapper });

let storage: Storage;

beforeEach(() => {
  storage = createMemoryStorage();
  vi.stubGlobal('localStorage', storage);
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  storage.clear();
  vi.unstubAllGlobals();
});

describe('UserProvider hydration', () => {
  it('hydrates a valid v1 profile and completes loading', async () => {
    const profile = createProfile();
    storage.setItem(STORAGE_KEY, serializeStoredProfile(profile));

    const { result } = renderUserContext();

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.profile).toEqual(profile);
    expect(result.current.hasProfile()).toBe(true);
  });

  it('hydrates a valid legacy profile and immediately rewrites it as v1', async () => {
    const profile = createProfile();
    storage.setItem(STORAGE_KEY, JSON.stringify(profile));
    const setItemSpy = vi.spyOn(storage, 'setItem');

    const { result } = renderUserContext();

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.profile).toEqual(profile);
    expect(setItemSpy).toHaveBeenCalledWith(STORAGE_KEY, serializeStoredProfile(profile));
    expect(storage.getItem(STORAGE_KEY)).toBe(serializeStoredProfile(profile));
  });

  it.each([
    ['malformed JSON', '{malformed'],
    ['an unknown version', JSON.stringify({ version: 2, profile: createProfile() })],
  ])('discards %s and completes loading', async (_caseName, storedValue) => {
    storage.setItem(STORAGE_KEY, storedValue);

    const { result } = renderUserContext();

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.profile).toBeNull();
    expect(result.current.hasProfile()).toBe(false);
  });

  it('stays usable with a null profile when reading localStorage fails', async () => {
    vi.spyOn(storage, 'getItem').mockImplementation(() => {
      throw new Error('Storage unavailable');
    });
    const warningSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    const { result } = renderUserContext();

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.profile).toBeNull();
    expect(result.current.hasProfile()).toBe(false);
    expect(warningSpy).toHaveBeenCalledWith(
      'Impossible de charger le profil depuis localStorage (navigation privée ?)'
    );
  });
});

describe('UserProvider profile updates', () => {
  it('writes a v1 profile before returning success and updating context', async () => {
    const previousProfile = createProfile();
    const nextProfile = createProfile('2026-07-22T13:00:00.000Z');
    storage.setItem(STORAGE_KEY, serializeStoredProfile(previousProfile));
    const setItemSpy = vi.spyOn(storage, 'setItem');
    const { result } = renderUserContext();
    await waitFor(() => expect(result.current.profile).toEqual(previousProfile));

    let saveSucceeded = false;
    act(() => {
      saveSucceeded = result.current.updateProfile(nextProfile);
    });

    expect(saveSucceeded).toBe(true);
    expect(setItemSpy).toHaveBeenCalledWith(STORAGE_KEY, serializeStoredProfile(nextProfile));
    await waitFor(() => expect(result.current.profile).toEqual(nextProfile));
    expect(storage.getItem(STORAGE_KEY)).toBe(serializeStoredProfile(nextProfile));
  });

  it('returns failure, warns, and preserves context when writing fails', async () => {
    const previousProfile = createProfile();
    const nextProfile = createProfile('2026-07-22T13:00:00.000Z');
    storage.setItem(STORAGE_KEY, serializeStoredProfile(previousProfile));
    const { result } = renderUserContext();
    await waitFor(() => expect(result.current.profile).toEqual(previousProfile));
    vi.spyOn(storage, 'setItem').mockImplementation(() => {
      throw new Error('Storage full');
    });
    const warningSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    let saveSucceeded = true;
    act(() => {
      saveSucceeded = result.current.updateProfile(nextProfile);
    });

    expect(saveSucceeded).toBe(false);
    await waitFor(() => expect(result.current.profile).toEqual(previousProfile));
    expect(warningSpy).toHaveBeenCalledWith(
      'Impossible d’enregistrer le profil dans localStorage (navigation privée ?)'
    );
  });
});
