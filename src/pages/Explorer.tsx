import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ArrowLeft, Filter, Info, Search } from 'lucide-react';

import { ExplorerSkeleton } from '../components/ExplorerSkeleton';
import { FoodCard } from '../components/FoodCard';
import { Footer } from '../components/Footer';
import { NoProfileUser } from '../components/NoProfileUser';
import { Button } from '../components/ui/button';
import { content } from '../config/content';
import { categories } from '../config/food-categories';
import { useUser } from '../hooks/use-user';
import { getSavedAvoidedFodmapTypes, selectExplorerFoods } from '../lib/compatibility';
import { baseDonneesFodmap } from '../lib/fodmap-db';
import { cn } from '../lib/utils';
import type { FoodCategory } from '../types';

export default function Explorer() {
  const navigate = useNavigate();
  const { profile, isLoading } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<Set<FoodCategory>>(new Set());
  const [showCompatibleOnly, setShowCompatibleOnly] = useState(false);

  const filteredFoods = useMemo(() => {
    const avoidedFodmaps =
      showCompatibleOnly && profile
        ? getSavedAvoidedFodmapTypes(profile.fodmapIntolerances)
        : null;

    return selectExplorerFoods(baseDonneesFodmap.foods, {
      query: searchQuery,
      selectedCategories,
      avoidedFodmaps,
    });
  }, [searchQuery, selectedCategories, showCompatibleOnly, profile]);

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
    <div className='min-h-screen bg-background pb-8'>
      <header className='sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur-sm'>
        <div className='mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4'>
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/profile")}
              aria-label={content.common.buttons.back}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button> */}
            <Button
              asChild={true}
              className='inline-flex shrink-0 items-center gap-2 border border-border bg-transparent text-muted-foreground transition-colors hover:text-foreground'
            >
              <Link to='/profile'>
                <ArrowLeft className='h-4 w-4' />
                Retour au profil
              </Link>
            </Button>
            <h1 className='text-2xl font-bold text-foreground'>
              {content.explorer.header.title}
            </h1>
          </div>

          {/* <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={content.explorer.search.placeholder}
              className="w-full h-12 pl-10 pr-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              aria-label={content.explorer.search.ariaLabel}
            />
          </div> */}
        </div>
      </header>

      <main className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
        {/* Search Bar */}
        <div className='relative mb-4'>
          <Search className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground' />
          <input
            type='search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={content.explorer.search.placeholder}
            className='h-12 w-full rounded-xl border border-border bg-card pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary'
            aria-label={content.explorer.search.ariaLabel}
          />
        </div>
        {/* Filters */}
        <div className='mb-6 space-y-4'>
          {/* Compatible Toggle */}
          <button
            onClick={() => setShowCompatibleOnly(!showCompatibleOnly)}
            className={cn(
              'inline-flex min-h-[44px] items-center gap-2 rounded-lg px-4 py-2 font-medium transition-all',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
              showCompatibleOnly
                ? 'bg-success text-success-foreground'
                : 'bg-muted text-foreground hover:bg-muted/80'
            )}
            aria-pressed={showCompatibleOnly}
            aria-label={content.explorer.filters.safeForMe.ariaLabel}
          >
            <Filter className='h-5 w-5' />
            <span>{content.explorer.filters.safeForMe.label}</span>
          </button>

          {/* Category Chips */}
          <div className='flex flex-wrap gap-2'>
            {categories.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => toggleCategory(value)}
                className={cn(
                  'min-h-[40px] rounded-full px-3 py-1.5 text-sm font-medium transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                  selectedCategories.has(value)
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                )}
                aria-pressed={selectedCategories.has(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div
          className='mb-4 flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-sm text-muted-foreground'
          role='note'
        >
          <Info className='mt-0.5 h-4 w-4 shrink-0' aria-hidden='true' />
          <p className='leading-relaxed'>{content.explorer.banner.info}</p>
        </div>

        {/* Results Count */}
        <p className='mb-4 text-sm text-muted-foreground'>
          {filteredFoods.length} aliment(s) trouvé(s)
        </p>

        {/* Food Grid */}
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        {filteredFoods.length === 0 && (
          <div className='py-12 text-center'>
            <p className='text-lg text-muted-foreground'>
              {content.explorer.emptyStates.noResults}
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
