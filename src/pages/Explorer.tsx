import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, ArrowLeft, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";
import { useUser } from "@/hooks/use-user";
import { baseDonneesFodmap } from "@/lib/fodmap-db";
import type { FoodCategory } from "@/types";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { categories } from "@/config/food-categories";
import { FoodCard } from "@/components/FoodCard";
import { NoProfileUser } from "@/components/NoProfileUser";
import { ExplorerSkeleton } from "@/components/ExplorerSkeleton";

export default function Explorer() {
  const navigate = useNavigate();
  const { profile, isLoading, isCompatible } = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<
    Set<FoodCategory>
  >(new Set());
  const [showCompatibleOnly, setShowCompatibleOnly] = useState(false);

  const filteredFoods = useMemo(() => {
    let foods = baseDonneesFodmap.foods;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      foods = foods.filter((food) => food.name.toLowerCase().includes(query));
    }

    if (selectedCategories.size > 0) {
      foods = foods.filter((food) => selectedCategories.has(food.category));
    }

    if (showCompatibleOnly) {
      foods = foods.filter((food) => isCompatible(food));
    }

    return foods;
  }, [searchQuery, selectedCategories, showCompatibleOnly, isCompatible]);

  const toggleCategory = (category: FoodCategory) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  if (isLoading) {
    return <ExplorerSkeleton />;
  }

  if (!profile) {
    return <NoProfileUser />;
  }

  return (
    <div className="min-h-screen bg-background pb-8">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4 ">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/profile")}
              aria-label={content.common.buttons.back}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold text-foreground">
              {content.explorer.header.title}
            </h1>
          </div>

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

      <Footer />
    </div>
  );
}
