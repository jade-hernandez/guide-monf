import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, ArrowLeft, Check, X } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { content } from "@/config/content";
import { useUser } from "@/context/UserContext";
import { baseDonneesFodmap } from "@/lib/fodmap-db";
import type { Food, FoodCategory } from "@/types";

const categories: Array<{ value: FoodCategory; label: string }> = [
  { value: "cereales", label: content.explorer.filters.categories.cereales },
  { value: "legumes", label: content.explorer.filters.categories.legumes },
  { value: "legumineuses", label: content.explorer.filters.categories.legumineuses },
  { value: "fruits", label: content.explorer.filters.categories.fruits },
  { value: "produits-laitiers", label: content.explorer.filters.categories["produits-laitiers"] },
  { value: "edulcorants", label: content.explorer.filters.categories.edulcorants },
  { value: "alternatives-vegetales", label: content.explorer.filters.categories["alternatives-vegetales"] },
  { value: "noix-graines", label: content.explorer.filters.categories["noix-graines"] },
];

export default function Explorer() {
  const navigate = useNavigate();
  const { profile, isCompatible } = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Set<FoodCategory>>(new Set());
  const [showCompatibleOnly, setShowCompatibleOnly] = useState(false);

  // Redirect if no profile
  if (!profile) {
    navigate("/profile");
    return null;
  }

  // Filter foods
  const filteredFoods = useMemo(() => {
    let foods = baseDonneesFodmap.foods;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      foods = foods.filter(food =>
        food.name.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategories.size > 0) {
      foods = foods.filter(food => selectedCategories.has(food.category));
    }

    // Compatibility filter
    if (showCompatibleOnly) {
      foods = foods.filter(food => isCompatible(food));
    }

    return foods;
  }, [searchQuery, selectedCategories, showCompatibleOnly, isCompatible]);

  const toggleCategory = (category: FoodCategory) => {
    setSelectedCategories(prev => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <EnhancedButton
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              aria-label={content.common.buttons.back}
            >
              <ArrowLeft className="h-5 w-5" />
            </EnhancedButton>
            <h1 className="text-2xl font-bold text-foreground">
              {content.explorer.header.title}
            </h1>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={content.explorer.search.placeholder}
              className="w-full h-12 pl-10 pr-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              aria-label={content.explorer.search.ariaLabel}
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-6 space-y-4">
          {/* Compatible Toggle */}
          <button
            onClick={() => setShowCompatibleOnly(!showCompatibleOnly)}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all min-h-[44px]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              showCompatibleOnly
                ? "bg-success text-success-foreground"
                : "bg-muted text-foreground hover:bg-muted/80"
            )}
            aria-pressed={showCompatibleOnly}
          >
            <Filter className="h-5 w-5" />
            <span>{content.explorer.filters.safeForMe.label}</span>
          </button>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => toggleCategory(value)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-all min-h-[40px]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  selectedCategories.has(value)
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                )}
                aria-pressed={selectedCategories.has(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="mb-4 text-sm text-muted-foreground">
          {filteredFoods.length} aliment(s) trouvé(s)
        </p>

        {/* Food Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        {filteredFoods.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              {content.explorer.emptyStates.noResults}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function FoodCard({ food }: { food: Food }) {
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
          aria-label={compatible ? content.explorer.foodCard.compatible : content.explorer.foodCard.avoid}
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
        {categories.find(c => c.value === food.category)?.label}
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

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
