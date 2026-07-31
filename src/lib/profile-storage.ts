import type { UserProfile } from '../context/UserContext';

export const CURRENT_PROFILE_STORAGE_VERSION = 1;

const PROFILE_KEYS = ['fodmapIntolerances', 'createdAt', 'lastUpdated'] as const;
const FODMAP_ANSWER_KEYS = [
  'fructanes',
  'galactanes',
  'lactose',
  'fructose',
  'mannitol',
  'sorbitol',
] as const;

interface StoredProfileEnvelope {
  version: typeof CURRENT_PROFILE_STORAGE_VERSION;
  profile: UserProfile;
}

export interface ParsedStoredProfile {
  profile: UserProfile;
  isLegacy: boolean;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function hasExactKeys(value: Record<string, unknown>, expectedKeys: readonly string[]): boolean {
  const keys = Object.keys(value);
  return (
    keys.length === expectedKeys.length && expectedKeys.every((key) => Object.hasOwn(value, key))
  );
}

function isValidDateString(value: unknown): value is string {
  return typeof value === 'string' && value.trim() !== '' && !Number.isNaN(Date.parse(value));
}

export function isUserProfile(value: unknown): value is UserProfile {
  if (!isRecord(value) || !hasExactKeys(value, PROFILE_KEYS)) {
    return false;
  }

  const answers = value.fodmapIntolerances;
  if (!isRecord(answers) || !hasExactKeys(answers, FODMAP_ANSWER_KEYS)) {
    return false;
  }

  const hasBooleanAnswers = FODMAP_ANSWER_KEYS.every(
    (fodmap) => typeof answers[fodmap] === 'boolean'
  );

  return (
    hasBooleanAnswers &&
    isValidDateString(value.createdAt) &&
    isValidDateString(value.lastUpdated)
  );
}

export function parseStoredProfile(json: string): ParsedStoredProfile | null {
  let value: unknown;

  try {
    value = JSON.parse(json) as unknown;
  } catch {
    return null;
  }

  if (isUserProfile(value)) {
    return { profile: value, isLegacy: true };
  }

  if (!isRecord(value) || !hasExactKeys(value, ['version', 'profile'])) {
    return null;
  }

  if (value.version !== CURRENT_PROFILE_STORAGE_VERSION || !isUserProfile(value.profile)) {
    return null;
  }

  return { profile: value.profile, isLegacy: false };
}

export function serializeStoredProfile(profile: UserProfile): string {
  const storedProfile: StoredProfileEnvelope = {
    version: CURRENT_PROFILE_STORAGE_VERSION,
    profile,
  };

  return JSON.stringify(storedProfile);
}
