import { createContext } from "react";
import type { Food, FODMAPType } from "@/types";

export interface UserProfile {
  fodmapIntolerances: {
    fructanes: boolean; // true = user tolerates this FODMAP
    galactanes: boolean; // false = user is intolerant to this FODMAP
    lactose: boolean;
    fructose: boolean;
    mannitol: boolean;
    sorbitol: boolean;
  };
  createdAt: string;
  lastUpdated: string;
}

export interface UserContextType {
  profile: UserProfile | null;
  isLoading: boolean;
  updateProfile: (profile: UserProfile) => void;
  clearProfile: () => void;
  isCompatible: (food: Food) => boolean;
  getCompatibleFoods: () => Food[];
  getIntolerances: () => FODMAPType[];
  hasProfile: () => boolean;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
