import type { FODMAPType, Food, FoodCategory } from '../types';

const FODMAP_TYPES: readonly FODMAPType[] = [
  'fructanes',
  'galactanes',
  'lactose',
  'fructose',
  'mannitol',
  'sorbitol',
];

export interface ExplorerFoodFilterOptions {
  query: string;
  selectedCategories: ReadonlySet<FoodCategory>;
  avoidedFodmaps: readonly FODMAPType[] | null;
}

export function getSavedAvoidedFodmapTypes(
  answers: Readonly<Record<FODMAPType, boolean>>
): FODMAPType[] {
  return FODMAP_TYPES.filter((type) => !answers[type]);
}

/**
 * Compares recorded food tags with the FODMAP types avoided in the saved profile.
 * Portion, confidence, primary-tag status, and source do not participate in this rule.
 */
export function foodPassesSavedAvoidedFodmapFilter(
  food: Food,
  avoidedFodmaps: readonly FODMAPType[]
): boolean {
  return !food.fodmaps.some((fodmap) => avoidedFodmaps.includes(fodmap.type));
}

export function selectExplorerFoods(
  foods: Food[],
  { query, selectedCategories, avoidedFodmaps }: ExplorerFoodFilterOptions
): Food[] {
  let selectedFoods = foods;

  if (query.trim()) {
    const normalizedQuery = query.toLowerCase();
    selectedFoods = selectedFoods.filter((food) =>
      food.name.toLowerCase().includes(normalizedQuery)
    );
  }

  if (selectedCategories.size > 0) {
    selectedFoods = selectedFoods.filter((food) => selectedCategories.has(food.category));
  }

  if (avoidedFodmaps !== null) {
    selectedFoods = selectedFoods.filter((food) =>
      foodPassesSavedAvoidedFodmapFilter(food, avoidedFodmaps)
    );
  }

  return selectedFoods;
}
