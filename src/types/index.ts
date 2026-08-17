// ============================================================================
// FODMAP TYPES
// ============================================================================

export type FODMAPType =
  'fructanes' | 'galactanes' | 'lactose' | 'fructose' | 'mannitol' | 'sorbitol';

export type FoodCategory =
  | 'cereales'
  | 'legumes'
  | 'legumineuses'
  | 'fruits'
  | 'produits-laitiers'
  | 'edulcorants'
  | 'alternatives-vegetales'
  | 'noix-graines';

export type ConfidenceLevel = 'elevee' | 'moyenne' | 'faible';

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
  limitGrams: number; // Reference portion recorded in grams
  fodmaps: FODMAPEntry[]; // Which FODMAPs are present in this food
  confidence: ConfidenceLevel; // Data confidence level
  lastUpdated: string; // ISO date string (YYYY-MM-DD)
  source: string; // Free-text source label; not independently verified provenance
  notes?: string; // Optional additional information
}

export interface FoodDatabase {
  version: string;
  lastUpdated: string;
  validationStatus: string;
  foods: Food[];
}
