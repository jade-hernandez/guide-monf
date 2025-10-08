import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { UserProfile, Food, FODMAPType, UserContextType } from "@/types";
import { baseDonneesFodmap } from "@/lib/fodmap-db";

const UserContext = createContext<UserContextType | undefined>(undefined);

const STORAGE_KEY = "monguide_fodmap_profile";

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  // Load profile from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setProfile(parsed);
      }
    } catch (error) {
      console.warn("Cannot load profile from localStorage (private browsing?)");
    }
  }, []);

  const updateProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProfile));
    } catch (error) {
      console.warn("Cannot save profile to localStorage (private browsing?)");
    }
  };

  const clearProfile = () => {
    setProfile(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn("Cannot clear profile from localStorage");
    }
  };

  // Get list of FODMAPs the user is intolerant to (avoids)
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

  // Check if a food is compatible with user's profile
  // CRITICAL: A food is INCOMPATIBLE if it contains ANY FODMAP the user avoids
  const isCompatible = (food: Food): boolean => {
    if (!profile) return true; // No profile = show all foods
    
    const intolerances = getIntolerances();
    if (intolerances.length === 0) return true; // No intolerances = all foods compatible
    
    // Check if food contains ANY FODMAP the user is intolerant to
    return !food.fodmaps.some(fodmap => 
      intolerances.includes(fodmap.type)
    );
  };

  // Get all compatible foods
  const getCompatibleFoods = (): Food[] => {
    return baseDonneesFodmap.foods.filter(food => isCompatible(food));
  };

  const value: UserContextType = {
    profile,
    updateProfile,
    clearProfile,
    isCompatible,
    getCompatibleFoods,
    getIntolerances,
    hasProfile: () => !!profile,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
