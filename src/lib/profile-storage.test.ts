import { describe, expect, it } from 'vitest';

import type { UserProfile } from '../context/UserContext';
import {
  CURRENT_PROFILE_STORAGE_VERSION,
  isUserProfile,
  parseStoredProfile,
  serializeStoredProfile,
} from './profile-storage';

const createProfile = (): UserProfile => ({
  fodmapIntolerances: {
    fructanes: true,
    galactanes: false,
    lactose: true,
    fructose: true,
    mannitol: false,
    sorbitol: true,
  },
  createdAt: '2026-07-01T10:00:00.000Z',
  lastUpdated: '2026-07-22T12:00:00.000Z',
});

describe('isUserProfile', () => {
  it('accepts a profile with exactly the six boolean answers and valid dates', () => {
    expect(isUserProfile(createProfile())).toBe(true);
  });

  it.each([null, 'profile', 42, [], true])('rejects a non-object profile value: %j', (value) => {
    expect(isUserProfile(value)).toBe(false);
  });

  it('rejects missing and extra profile keys', () => {
    const { lastUpdated: _lastUpdated, ...missingKey } = createProfile();
    const extraKey = { ...createProfile(), displayName: 'Jade' };

    expect(isUserProfile(missingKey)).toBe(false);
    expect(isUserProfile(extraKey)).toBe(false);
  });

  it('rejects missing and extra FODMAP answer keys', () => {
    const profile = createProfile();
    const { sorbitol: _sorbitol, ...missingAnswer } = profile.fodmapIntolerances;
    const extraAnswer = {
      ...profile.fodmapIntolerances,
      polyols: true,
    };

    expect(isUserProfile({ ...profile, fodmapIntolerances: missingAnswer })).toBe(false);
    expect(isUserProfile({ ...profile, fodmapIntolerances: extraAnswer })).toBe(false);
  });

  it('rejects non-boolean FODMAP answers', () => {
    const profile = createProfile();

    expect(
      isUserProfile({
        ...profile,
        fodmapIntolerances: {
          ...profile.fodmapIntolerances,
          lactose: 'false',
        },
      })
    ).toBe(false);
  });

  it.each([
    ['createdAt', 'not-a-date'],
    ['lastUpdated', ''],
  ] as const)('rejects an invalid %s date', (field, value) => {
    expect(isUserProfile({ ...createProfile(), [field]: value })).toBe(false);
  });
});

describe('parseStoredProfile', () => {
  it('parses a valid v1 envelope as current storage', () => {
    const profile = createProfile();

    expect(
      parseStoredProfile(
        JSON.stringify({
          version: CURRENT_PROFILE_STORAGE_VERSION,
          profile,
        })
      )
    ).toEqual({ profile, isLegacy: false });
  });

  it('parses a valid unversioned profile as legacy storage', () => {
    const profile = createProfile();

    expect(parseStoredProfile(JSON.stringify(profile))).toEqual({
      profile,
      isLegacy: true,
    });
  });

  it.each(['{malformed', 'null', '[]', '"profile"'])(
    'rejects malformed JSON or a non-object value: %s',
    (storedValue) => {
      expect(parseStoredProfile(storedValue)).toBeNull();
    }
  );

  it('rejects unknown versions and extra envelope keys', () => {
    const profile = createProfile();

    expect(parseStoredProfile(JSON.stringify({ version: 2, profile }))).toBeNull();
    expect(
      parseStoredProfile(
        JSON.stringify({
          version: CURRENT_PROFILE_STORAGE_VERSION,
          profile,
          migratedAt: '2026-07-22',
        })
      )
    ).toBeNull();
  });
});

describe('serializeStoredProfile', () => {
  it('emits exactly the v1 envelope and round-trips the profile unchanged', () => {
    const profile = createProfile();
    const serialized = serializeStoredProfile(profile);

    expect(JSON.parse(serialized)).toEqual({
      version: CURRENT_PROFILE_STORAGE_VERSION,
      profile,
    });
    expect(Object.keys(JSON.parse(serialized))).toEqual(['version', 'profile']);
    expect(parseStoredProfile(serialized)).toEqual({
      profile,
      isLegacy: false,
    });
  });
});
