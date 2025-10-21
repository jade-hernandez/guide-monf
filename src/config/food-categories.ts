import { content } from "@/config/content";
import type { FoodCategory } from "@/types";

export const categories: Array<{ value: FoodCategory; label: string }> = [
  { value: "cereales", label: content.explorer.filters.categories.cereales },
  { value: "legumes", label: content.explorer.filters.categories.legumes },
  {
    value: "legumineuses",
    label: content.explorer.filters.categories.legumineuses,
  },
  { value: "fruits", label: content.explorer.filters.categories.fruits },
  {
    value: "produits-laitiers",
    label: content.explorer.filters.categories["produits-laitiers"],
  },
  {
    value: "edulcorants",
    label: content.explorer.filters.categories.edulcorants,
  },
  {
    value: "alternatives-vegetales",
    label: content.explorer.filters.categories["alternatives-vegetales"],
  },
  {
    value: "noix-graines",
    label: content.explorer.filters.categories["noix-graines"],
  },
];
