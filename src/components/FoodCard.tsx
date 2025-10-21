import { Check, X } from "lucide-react";
import { content } from "@/config/content";
import type { Food } from "@/types";
import { cn } from "@/lib/utils";
import { useUser } from "@/hooks/use-user";
import { categories } from "@/config/food-categories";

export function FoodCard({ food }: { food: Food }) {
  const { isCompatible } = useUser();
  const compatible = isCompatible(food);

  return (
    <div className="rounded-xl bg-card border border-border p-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Header with compatibility badge */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold text-foreground">{food.name}</h3>
        <div
          className={cn(
            "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold",
            compatible
              ? "bg-success/10 text-success"
              : "bg-destructive/10 text-destructive"
          )}
          aria-label={
            compatible
              ? content.explorer.foodCard.compatible
              : content.explorer.foodCard.avoid
          }
        >
          {compatible ? (
            <Check className="h-3 w-3" />
          ) : (
            <X className="h-3 w-3" />
          )}
          <span>{compatible ? "OK" : "Éviter"}</span>
        </div>
      </div>

      {/* Category */}
      <p className="text-sm text-muted-foreground mb-2">
        {categories.find((c) => c.value === food.category)?.label}
      </p>

      {/* Portion limit */}
      <p className="text-sm font-medium text-foreground mb-3">
        Portion sûre: {food.limitGrams}g
      </p>

      {/* FODMAP badges */}
      <div className="flex flex-wrap gap-1.5">
        {food.fodmaps.map((fodmap, idx) => (
          <span
            key={idx}
            className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
          >
            {content.explorer.foodCard.fodmapTypes[fodmap.type]}
          </span>
        ))}
      </div>
    </div>
  );
}
