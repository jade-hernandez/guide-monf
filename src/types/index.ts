/**
 * TypeScript type definitions for FODMAP Personal Guide App
 */

// ============================================================================
// FODMAP TYPES
// ============================================================================

export type FODMAPType =
  | "fructanes"
  | "galactanes"
  | "lactose"
  | "fructose"
  | "mannitol"
  | "sorbitol";

export type FoodCategory =
  | "cereales"
  | "legumes"
  | "legumineuses"
  | "fruits"
  | "produits-laitiers"
  | "edulcorants"
  | "alternatives-vegetales"
  | "noix-graines";

export type ConfidenceLevel = "elevee" | "moyenne" | "faible";

// ============================================================================
// FOOD DATA STRUCTURES
// ============================================================================

export interface FODMAPEntry {
  type: FODMAPType;
  isPrimary: boolean; // Is this the primary FODMAP in this food?
}

export interface Food {
  id: string; // Unique identifier (kebab-case, e.g., "fraises")
  name: string; // Display name in French (e.g., "Fraises")
  category: FoodCategory;
  limitGrams: number; // Safe portion size in grams
  fodmaps: FODMAPEntry[]; // Which FODMAPs are present in this food
  confidence: ConfidenceLevel; // Data confidence level
  lastUpdated: string; // ISO date string (YYYY-MM-DD)
  source: string; // Data source (e.g., "Monash University 2024")
  notes?: string; // Optional additional information
}

export interface FoodDatabase {
  version: string;
  lastUpdated: string;
  totalFoods: number;
  validationStatus: string;
  foods: Food[];
}

// ============================================================================
// USER PROFILE
// ============================================================================

export interface UserProfile {
  fodmapIntolerances: {
    fructanes: boolean; // true = user tolerates this FODMAP
    galactanes: boolean; // false = user is intolerant to this FODMAP
    lactose: boolean;
    fructose: boolean;
    mannitol: boolean;
    sorbitol: boolean;
  };
  createdAt: string; // ISO date string
  lastUpdated: string; // ISO date string
}

// ============================================================================
// CONTEXT TYPES
// ============================================================================

export interface UserContextType {
  profile: UserProfile | null;
  isLoading: boolean; // Add this line
  updateProfile: (profile: UserProfile) => void;
  clearProfile: () => void;
  isCompatible: (food: Food) => boolean;
  getCompatibleFoods: () => Food[];
  getIntolerances: () => FODMAPType[];
  hasProfile: () => boolean;
}

// ============================================================================
// COMPONENT PROP TYPES
// ============================================================================

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  ariaLabel?: string;
}

export interface BadgeProps {
  variant: "safe" | "avoid" | "fodmap" | "category" | "confidence";
  children: React.ReactNode;
  className?: string;
}

export interface CardProps {
  variant?: "default" | "elevated" | "outline";
  padding?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export interface FoodCardProps {
  food: Food;
  isCompatible: boolean;
  userIntolerances: FODMAPType[];
  onClick?: () => void;
}

export interface FodmapToggleProps {
  fodmapType: FODMAPType;
  name: string;
  description: string;
  value: boolean | undefined;
  onChange: (value: boolean) => void;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
}

export interface FilterChipsProps {
  categories: FoodCategory[];
  selectedCategory: FoodCategory | "all";
  onCategoryChange: (category: FoodCategory | "all") => void;
  safeOnly: boolean;
  onSafeOnlyChange: (value: boolean) => void;
}

// ============================================================================
// HOOK RETURN TYPES
// ============================================================================

export interface UseSearchReturn {
  query: string;
  setQuery: (query: string) => void;
  filteredFoods: Food[];
  resultsCount: number;
  clearSearch: () => void;
}

export interface UseFiltersReturn {
  selectedCategory: FoodCategory | "all";
  setSelectedCategory: (category: FoodCategory | "all") => void;
  safeOnly: boolean;
  setSafeOnly: (value: boolean) => void;
  filteredFoods: Food[];
}

export interface UseLocalStorageReturn<T> {
  value: T | null;
  setValue: (value: T) => boolean;
  removeValue: () => void;
  isAvailable: boolean;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface LocalStorageOptions {
  key: string;
  validate?: (data: unknown) => boolean;
}

export interface SearchOptions {
  caseSensitive?: boolean;
  accentSensitive?: boolean;
}

export interface FilterOptions {
  category?: FoodCategory | "all";
  safeOnly?: boolean;
  fodmapTypes?: FODMAPType[];
}

// ============================================================================
// TYPE GUARDS
// ============================================================================

export function isFODMAPType(value: unknown): value is FODMAPType {
  return (
    typeof value === "string" &&
    [
      "fructanes",
      "galactanes",
      "lactose",
      "fructose",
      "mannitol",
      "sorbitol",
    ].includes(value)
  );
}

export function isFoodCategory(value: unknown): value is FoodCategory {
  return (
    typeof value === "string" &&
    [
      "cereales",
      "legumes",
      "legumineuses",
      "fruits",
      "produits-laitiers",
      "edulcorants",
      "alternatives-vegetales",
      "noix-graines",
    ].includes(value)
  );
}

export function isValidFood(value: unknown): value is Food {
  if (typeof value !== "object" || value === null) return false;

  const food = value as Record<string, unknown>;

  return (
    typeof food.id === "string" &&
    typeof food.name === "string" &&
    isFoodCategory(food.category) &&
    typeof food.limitGrams === "number" &&
    Array.isArray(food.fodmaps) &&
    food.fodmaps.every(
      (f: unknown) =>
        typeof f === "object" &&
        f !== null &&
        isFODMAPType((f as Record<string, unknown>).type) &&
        typeof (f as Record<string, unknown>).isPrimary === "boolean"
    ) &&
    ["elevee", "moyenne", "faible"].includes(food.confidence as string) &&
    typeof food.source === "string"
  );
}

export function isValidProfile(value: unknown): value is UserProfile {
  if (typeof value !== "object" || value === null) return false;

  const profile = value as Record<string, unknown>;

  if (
    typeof profile.fodmapIntolerances !== "object" ||
    profile.fodmapIntolerances === null
  )
    return false;

  const intolerances = profile.fodmapIntolerances as Record<string, unknown>;

  return (
    typeof intolerances.fructanes === "boolean" &&
    typeof intolerances.galactanes === "boolean" &&
    typeof intolerances.lactose === "boolean" &&
    typeof intolerances.fructose === "boolean" &&
    typeof intolerances.mannitol === "boolean" &&
    typeof intolerances.sorbitol === "boolean" &&
    typeof profile.createdAt === "string" &&
    typeof profile.lastUpdated === "string"
  );
}

// ============================================================================
// CONSTANTS
// ============================================================================

export const FODMAP_TYPES: readonly FODMAPType[] = [
  "fructanes",
  "galactanes",
  "lactose",
  "fructose",
  "mannitol",
  "sorbitol",
] as const;

export const FOOD_CATEGORIES: readonly FoodCategory[] = [
  "cereales",
  "legumes",
  "legumineuses",
  "fruits",
  "produits-laitiers",
  "edulcorants",
  "alternatives-vegetales",
  "noix-graines",
] as const;

export const CONFIDENCE_LEVELS: readonly ConfidenceLevel[] = [
  "elevee",
  "moyenne",
  "faible",
] as const;

// ============================================================================
// HELPER TYPE UTILITIES
// ============================================================================

/**
 * Make specific properties required in a type
 */
export type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Make specific properties optional in a type
 */
export type PartialFields<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

/**
 * Extract FODMAP types that user is intolerant to
 */
export type IntoleranceList = FODMAPType[];

/**
 * Readonly version of UserProfile (for display purposes)
 */
export type ReadonlyUserProfile = Readonly<UserProfile> & {
  readonly fodmapIntolerances: Readonly<UserProfile["fodmapIntolerances"]>;
};
