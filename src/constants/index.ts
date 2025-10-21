// ============================================================================
// CONSTANTS
// ============================================================================

import { ConfidenceLevel, FODMAPType, FoodCategory } from "@/types";

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
