import { useState, useEffect, ReactNode } from "react";
import type { Food, FODMAPType } from "@/types";
import { baseDonneesFodmap } from "@/lib/fodmap-db";
import { UserContext } from "./UserContext";
import type { UserContextType, UserProfile } from "./UserContext";

const STORAGE_KEY = "mon_guide_fodmap_profile";

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setProfile(parsed);
      }
    } catch (error) {
      console.warn(
        "Impossible de charger le profil depuis localStorage (navigation privée ?)"
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProfile));
    } catch (error) {
      console.warn(
        "Impossible d’enregistrer le profil dans localStorage (navigation privée ?)"
      );
    }
  };

  const clearProfile = () => {
    setProfile(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn("Impossible de supprimer le profil de localStorage");
    }
  };

  const getIntolerances = (): FODMAPType[] => {
    if (!profile) return [];

    const intolerances: FODMAPType[] = [];
    Object.entries(profile.fodmapIntolerances).forEach(([key, tolerates]) => {
      if (!tolerates) {
        intolerances.push(key as FODMAPType);
      }
    });

    return intolerances;
  };

  const isCompatible = (food: Food): boolean => {
    if (!profile) return true;

    const intolerances = getIntolerances();
    if (intolerances.length === 0) return true;

    return !food.fodmaps.some((fodmap) => intolerances.includes(fodmap.type));
  };

  const getCompatibleFoods = (): Food[] => {
    return baseDonneesFodmap.foods.filter((food) => isCompatible(food));
  };

  const value: UserContextType = {
    profile,
    isLoading,
    updateProfile,
    clearProfile,
    isCompatible,
    getCompatibleFoods,
    getIntolerances,
    hasProfile: () => !!profile,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
