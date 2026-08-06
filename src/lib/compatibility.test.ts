import { describe, expect, it } from 'vitest';

import type { FODMAPType, Food, FoodCategory } from '../types';
import {
  foodPassesSavedAvoidedFodmapFilter,
  getSavedAvoidedFodmapTypes,
  selectExplorerFoods,
} from './compatibility';

const FODMAP_TYPES = [
  'fructanes',
  'galactanes',
  'lactose',
  'fructose',
  'mannitol',
  'sorbitol',
] as const satisfies readonly FODMAPType[];

function createFood({
  id,
  name,
  category,
  fodmaps,
}: Pick<Food, 'id' | 'name' | 'category' | 'fodmaps'>): Food {
  return {
    id,
    name,
    category,
    limitGrams: 100,
    fodmaps,
    confidence: 'elevee',
    lastUpdated: '2024-12-01',
    source: 'Synthetic test fixture',
  };
}

function createAnswers(mask: number): Record<FODMAPType, boolean> {
  return Object.fromEntries(
    FODMAP_TYPES.map((type, index) => [type, Boolean(mask & (1 << index))])
  ) as Record<FODMAPType, boolean>;
}

const PROFILE_CASES = Array.from({ length: 64 }, (_, caseNumber) => {
  const answers = createAnswers(caseNumber);
  const expectedAvoidedFodmaps = FODMAP_TYPES.filter((type) => !answers[type]);

  return { caseNumber, answers, expectedAvoidedFodmaps };
});

const foods: Food[] = [
  createFood({
    id: 'bread',
    name: 'Pain complet',
    category: 'cereales',
    fodmaps: [{ type: 'fructanes', isPrimary: true }],
  }),
  createFood({
    id: 'apple',
    name: 'Pomme rouge',
    category: 'fruits',
    fodmaps: [
      { type: 'fructose', isPrimary: true },
      { type: 'sorbitol', isPrimary: false },
    ],
  }),
  createFood({
    id: 'banana',
    name: 'Banane mûre',
    category: 'fruits',
    fodmaps: [{ type: 'fructose', isPrimary: true }],
  }),
  createFood({
    id: 'milk',
    name: 'Lait entier',
    category: 'produits-laitiers',
    fodmaps: [{ type: 'lactose', isPrimary: true }],
  }),
  createFood({
    id: 'pear',
    name: 'Poire verte',
    category: 'fruits',
    fodmaps: [{ type: 'mannitol', isPrimary: false }],
  }),
];

function foodIds(selectedFoods: Food[]): string[] {
  return selectedFoods.map((food) => food.id);
}

describe('getSavedAvoidedFodmapTypes', () => {
  it.each(PROFILE_CASES)(
    'returns false answers in canonical order for binary profile $caseNumber',
    ({ answers, expectedAvoidedFodmaps }) => {
      expect(getSavedAvoidedFodmapTypes(answers)).toEqual(expectedAvoidedFodmaps);
    }
  );
});

describe('foodPassesSavedAvoidedFodmapFilter', () => {
  it('passes a food when the avoided list is empty', () => {
    expect(foodPassesSavedAvoidedFodmapFilter(foods[1]!, [])).toBe(true);
  });

  it('rejects a matching primary FODMAP tag', () => {
    expect(foodPassesSavedAvoidedFodmapFilter(foods[0]!, ['fructanes'])).toBe(false);
  });

  it('rejects a matching non-primary FODMAP tag', () => {
    expect(foodPassesSavedAvoidedFodmapFilter(foods[1]!, ['sorbitol'])).toBe(false);
  });

  it('passes a food when none of its recorded tags are avoided', () => {
    expect(foodPassesSavedAvoidedFodmapFilter(foods[3]!, ['fructanes', 'sorbitol'])).toBe(true);
  });

  it('ignores portion, confidence, source, and date metadata', () => {
    const original = foods[0]!;
    const changedMetadata: Food = {
      ...original,
      limitGrams: 1,
      confidence: 'faible',
      source: 'Different synthetic source',
      lastUpdated: '2030-01-01',
    };

    expect(foodPassesSavedAvoidedFodmapFilter(original, ['fructanes'])).toBe(false);
    expect(foodPassesSavedAvoidedFodmapFilter(changedMetadata, ['fructanes'])).toBe(false);
  });
});

describe('selectExplorerFoods', () => {
  const noCategories = new Set<FoodCategory>();

  it('preserves every food and its order when filters are empty', () => {
    const selected = selectExplorerFoods(foods, {
      query: '',
      selectedCategories: noCategories,
      avoidedFodmaps: null,
    });

    expect(foodIds(selected)).toEqual(['bread', 'apple', 'banana', 'milk', 'pear']);
  });

  it('treats a whitespace-only query as empty', () => {
    const selected = selectExplorerFoods(foods, {
      query: '   ',
      selectedCategories: noCategories,
      avoidedFodmaps: null,
    });

    expect(foodIds(selected)).toEqual(['bread', 'apple', 'banana', 'milk', 'pear']);
  });

  it('matches food names case-insensitively without trimming non-empty queries', () => {
    const caseInsensitive = selectExplorerFoods(foods, {
      query: 'lAiT',
      selectedCategories: noCategories,
      avoidedFodmaps: null,
    });
    const leadingSpace = selectExplorerFoods(foods, {
      query: ' lait',
      selectedCategories: noCategories,
      avoidedFodmaps: null,
    });

    expect(foodIds(caseInsensitive)).toEqual(['milk']);
    expect(leadingSpace).toEqual([]);
  });

  it('filters selected categories while preserving input order', () => {
    const selected = selectExplorerFoods(foods, {
      query: '',
      selectedCategories: new Set<FoodCategory>(['fruits']),
      avoidedFodmaps: null,
    });

    expect(foodIds(selected)).toEqual(['apple', 'banana', 'pear']);
  });

  it('includes multiple selected categories while preserving input order', () => {
    const selected = selectExplorerFoods(foods, {
      query: '',
      selectedCategories: new Set<FoodCategory>(['fruits', 'cereales']),
      avoidedFodmaps: null,
    });

    expect(foodIds(selected)).toEqual(['bread', 'apple', 'banana', 'pear']);
  });

  it('keeps avoided-tag foods when profile filtering is disabled with null', () => {
    const selected = selectExplorerFoods(foods, {
      query: '',
      selectedCategories: noCategories,
      avoidedFodmaps: null,
    });

    expect(foodIds(selected)).toContain('bread');
    expect(foodIds(selected)).toContain('apple');
  });

  it('removes foods with any avoided tag when profile filtering is enabled', () => {
    const selected = selectExplorerFoods(foods, {
      query: '',
      selectedCategories: noCategories,
      avoidedFodmaps: ['fructose'],
    });

    expect(foodIds(selected)).toEqual(['bread', 'milk', 'pear']);
  });

  it('combines name, category, and avoided-tag filters in the current order', () => {
    const selected = selectExplorerFoods(foods, {
      query: 'e',
      selectedCategories: new Set<FoodCategory>(['fruits']),
      avoidedFodmaps: ['sorbitol'],
    });

    expect(foodIds(selected)).toEqual(['banana', 'pear']);
  });

  it('does not mutate the input array or food fixtures', () => {
    const originalFoods = structuredClone(foods);

    selectExplorerFoods(foods, {
      query: 'e',
      selectedCategories: new Set<FoodCategory>(['fruits']),
      avoidedFodmaps: ['sorbitol'],
    });
    foodPassesSavedAvoidedFodmapFilter(foods[1]!, ['sorbitol']);

    expect(foods).toEqual(originalFoods);
  });
});
