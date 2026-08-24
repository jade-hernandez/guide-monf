import { type ReactNode, useEffect, useState } from 'react';

import {
  foodPassesSavedAvoidedFodmapFilter,
  getSavedAvoidedFodmapTypes,
} from '../lib/compatibility';
import { parseStoredProfile, serializeStoredProfile } from '../lib/profile-storage';
import type { FODMAPType, Food } from '../types';
import type { UserContextType, UserProfile } from './UserContext';
import { UserContext } from './UserContext';

const STORAGE_KEY = 'mon_guide_fodmap_profile';

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProfile = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = parseStoredProfile(stored);
          if (parsed) {
            setProfile(parsed.profile);

            if (parsed.isLegacy) {
              localStorage.setItem(STORAGE_KEY, serializeStoredProfile(parsed.profile));
            }
          }
        }
      } catch (error) {
        console.warn('Impossible de charger le profil depuis localStorage (navigation privée ?)');
      } finally {
        setIsLoading(false);
      }
    };
    loadProfile();
  }, []);

  const updateProfile = (newProfile: UserProfile): boolean => {
    try {
      localStorage.setItem(STORAGE_KEY, serializeStoredProfile(newProfile));
      setProfile(newProfile);
      return true;
    } catch (error) {
      console.warn('Impossible d’enregistrer le profil dans localStorage (navigation privée ?)');
      return false;
    }
  };

  const clearProfile = () => {
    setProfile(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn('Impossible de supprimer le profil de localStorage');
    }
  };

  const getIntolerances = (): FODMAPType[] => {
    if (!profile) return [];

    return getSavedAvoidedFodmapTypes(profile.fodmapIntolerances);
  };

  const isCompatible = (food: Food): boolean => {
    return foodPassesSavedAvoidedFodmapFilter(food, getIntolerances());
  };

  const value: UserContextType = {
    profile,
    isLoading,
    updateProfile,
    clearProfile,
    isCompatible,
    getIntolerances,
    hasProfile: () => !!profile,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
