import { createContext } from "react";
import type { UserProfile, Food, FODMAPType } from "@/types";

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
