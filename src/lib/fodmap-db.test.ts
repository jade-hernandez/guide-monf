import { describe, expect, it } from 'vitest';

import type { ConfidenceLevel, FODMAPType, Food, FoodCategory } from '../types';
import { baseDonneesFodmap } from './fodmap-db';

const EXPECTED_FOOD_COUNT = 104;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

const REQUIRED_FIELDS = [
  'id',
  'name',
  'category',
  'limitGrams',
  'fodmaps',
  'confidence',
  'lastUpdated',
  'source',
] as const satisfies readonly (keyof Food)[];

const ALLOWED_CATEGORIES = new Set<FoodCategory>([
  'cereales',
  'legumes',
  'legumineuses',
  'fruits',
  'produits-laitiers',
  'edulcorants',
  'alternatives-vegetales',
  'noix-graines',
]);

const ALLOWED_CONFIDENCE_LEVELS = new Set<ConfidenceLevel>(['elevee', 'moyenne', 'faible']);

const ALLOWED_FODMAP_TYPES = new Set<FODMAPType>([
  'fructanes',
  'galactanes',
  'lactose',
  'fructose',
  'mannitol',
  'sorbitol',
]);

function getRecordLabel(food: Food, index: number): string {
  return typeof food.id === 'string' && food.id.trim() ? food.id : `record at index ${index}`;
}

function expectNonEmptyString(value: unknown, label: string): void {
  expect(typeof value, `${label} must be a string`).toBe('string');
  if (typeof value !== 'string') return;

  expect(value.trim(), `${label} must not be empty`).not.toBe('');
}

function expectValidDate(value: unknown, label: string): void {
  expect(typeof value, `${label} must be a string`).toBe('string');
  if (typeof value !== 'string') return;

  const hasExpectedShape = DATE_PATTERN.test(value);
  expect(hasExpectedShape, `${label} must use YYYY-MM-DD`).toBe(true);
  if (!hasExpectedShape) return;

  const parsedDate = new Date(`${value}T00:00:00.000Z`);
  const isRealDate =
    !Number.isNaN(parsedDate.getTime()) && parsedDate.toISOString().slice(0, 10) === value;

  expect(isRealDate, `${label} must be a real calendar date`).toBe(true);
}

describe('FODMAP food dataset', () => {
  const foods = baseDonneesFodmap.foods;

  it('contains exactly 104 records with unique, non-empty IDs', () => {
    expect(foods).toHaveLength(EXPECTED_FOOD_COUNT);

    const ids = foods.map((food, index) => {
      const id = typeof food.id === 'string' ? food.id : '';
      expectNonEmptyString(food.id, `record at index ${index} ID`);
      return id;
    });

    const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
    expect(duplicateIds, `duplicate IDs: ${duplicateIds.join(', ')}`).toEqual([]);
    expect(new Set(ids).size).toBe(EXPECTED_FOOD_COUNT);
  });

  it('provides every required field and non-empty names and sources', () => {
    foods.forEach((food, index) => {
      const label = getRecordLabel(food, index);

      REQUIRED_FIELDS.forEach((field) => {
        expect(Object.hasOwn(food, field), `${label} is missing ${field}`).toBe(true);
      });

      expectNonEmptyString(food.name, `${label} name`);
      expectNonEmptyString(food.source, `${label} source`);
    });
  });

  it('uses positive finite gram values and real YYYY-MM-DD dates', () => {
    expectValidDate(baseDonneesFodmap.lastUpdated, 'database lastUpdated');

    foods.forEach((food, index) => {
      const label = getRecordLabel(food, index);

      expect(Number.isFinite(food.limitGrams), `${label} limitGrams must be finite`).toBe(true);
      expect(food.limitGrams, `${label} limitGrams must be positive`).toBeGreaterThan(0);
      expectValidDate(food.lastUpdated, `${label} lastUpdated`);
    });
  });

  it('uses only the supported categories and confidence levels', () => {
    foods.forEach((food, index) => {
      const label = getRecordLabel(food, index);

      expect(
        ALLOWED_CATEGORIES.has(food.category),
        `${label} has invalid category ${food.category}`
      ).toBe(true);
      expect(
        ALLOWED_CONFIDENCE_LEVELS.has(food.confidence),
        `${label} has invalid confidence ${food.confidence}`
      ).toBe(true);
    });
  });

  it('gives every food at least one supported FODMAP entry with a boolean primary flag', () => {
    foods.forEach((food, index) => {
      const label = getRecordLabel(food, index);

      expect(Array.isArray(food.fodmaps), `${label} fodmaps must be an array`).toBe(true);
      if (!Array.isArray(food.fodmaps)) return;

      expect(food.fodmaps.length, `${label} must have at least one FODMAP entry`).toBeGreaterThan(
        0
      );

      food.fodmaps.forEach((fodmap, fodmapIndex) => {
        expect(
          ALLOWED_FODMAP_TYPES.has(fodmap.type),
          `${label} FODMAP entry ${fodmapIndex} has invalid type ${fodmap.type}`
        ).toBe(true);
        expect(
          typeof fodmap.isPrimary,
          `${label} FODMAP entry ${fodmapIndex} isPrimary must be boolean`
        ).toBe('boolean');
      });
    });
  });
});
