import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { ArrowLeft, Filter, Info, RotateCcw, Search, X } from 'lucide-react';

import { ExplorerSkeleton } from '../components/ExplorerSkeleton';
import { FoodCard } from '../components/FoodCard';
import { Footer } from '../components/Footer';
import { NoProfileUser } from '../components/NoProfileUser';
import { SiteHeader } from '../components/SiteHeader';
import { Button } from '../components/ui/button';
import { content, replacePlaceholders } from '../config/content';
import { categories } from '../config/food-categories';
import { useUser } from '../hooks/use-user';
import { getSavedAvoidedFodmapTypes, selectExplorerFoods } from '../lib/compatibility';
import { baseDonneesFodmap } from '../lib/fodmap-db';
import { cn } from '../lib/utils';
import type { FoodCategory } from '../types';

const EXPLORER_PAGE_SIZE = 16;

export default function Explorer() {
  const { profile, isLoading } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<Set<FoodCategory>>(new Set());
  const [showCompatibleOnly, setShowCompatibleOnly] = useState(false);
  const [visibleLimit, setVisibleLimit] = useState(EXPLORER_PAGE_SIZE);

  const trimmedSearchQuery = searchQuery.trim();
  const activeFilterLabels = [
    ...(showCompatibleOnly ? [content.explorer.filters.safeForMe.label] : []),
    ...categories.filter(({ value }) => selectedCategories.has(value)).map(({ label }) => label),
  ];
  const hasActiveSearch = trimmedSearchQuery.length > 0;
  const hasActiveFilters = activeFilterLabels.length > 0;

  const filteredFoods = useMemo(() => {
    const avoidedFodmaps =
      showCompatibleOnly && profile ? getSavedAvoidedFodmapTypes(profile.fodmapIntolerances) : null;

    return selectExplorerFoods(baseDonneesFodmap.foods, {
      query: searchQuery,
      selectedCategories,
      avoidedFodmaps,
    });
  }, [searchQuery, selectedCategories, showCompatibleOnly, profile]);

  const visibleFoods = filteredFoods.slice(0, visibleLimit);
  const visibleFoodCount = visibleFoods.length;
  const hasMoreFoods = visibleFoodCount < filteredFoods.length;

  const resetVisibleLimit = () => {
    setVisibleLimit(EXPLORER_PAGE_SIZE);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    resetVisibleLimit();
  };

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
    resetVisibleLimit();
  };

  const toggleCompatibleOnly = () => {
    setShowCompatibleOnly((current) => !current);
    resetVisibleLimit();
  };

  const clearSearch = () => {
    setSearchQuery('');
    resetVisibleLimit();
  };

  const resetFilters = () => {
    setSelectedCategories(new Set());
    setShowCompatibleOnly(false);
    resetVisibleLimit();
  };

  const showMoreFoods = () => {
    setVisibleLimit((current) => current + EXPLORER_PAGE_SIZE);
  };

  if (isLoading) {
    return <ExplorerSkeleton />;
  }

  if (!profile) {
    return <NoProfileUser />;
  }

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <SiteHeader>
        <Link
          to='/profile'
          className='inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
          aria-label='Modifier le profil'
        >
          <ArrowLeft className='h-4 w-4' aria-hidden='true' />
          <span className='sr-only sm:not-sr-only'>Modifier le profil</span>
        </Link>
      </SiteHeader>

      <main className='mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end'>
          <div>
            <p className='mb-2 text-sm font-semibold uppercase text-primary'>104 aliments</p>
            <h1 className='font-editorial text-4xl font-semibold text-foreground sm:text-5xl'>
              {content.explorer.header.title}
            </h1>
          </div>
          <p className='max-w-md text-sm leading-6 text-muted-foreground'>
            Comparez le jeu local à votre profil enregistré. Les résultats sont des repères, pas une
            garantie de tolérance.
          </p>
        </div>

        <section aria-label='Recherche et filtres' className='border-y border-border py-5'>
          <div className='relative'>
            <Search
              className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground'
              aria-hidden='true'
            />
            <input
              type='search'
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder={content.explorer.search.placeholder}
              className='h-12 w-full rounded-lg border border-border bg-card pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary'
              aria-label={content.explorer.search.ariaLabel}
            />
          </div>

          <div className='mt-4 flex flex-col gap-4 lg:flex-row lg:items-start'>
            <button
              onClick={toggleCompatibleOnly}
              className={cn(
                'inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                showCompatibleOnly
                  ? 'border-success bg-success text-success-foreground'
                  : 'border-border bg-card text-foreground hover:border-success/50'
              )}
              aria-pressed={showCompatibleOnly}
              aria-label={content.explorer.filters.safeForMe.ariaLabel}
            >
              <Filter className='h-5 w-5' aria-hidden='true' />
              <span>{content.explorer.filters.safeForMe.label}</span>
            </button>

            <div className='flex flex-wrap gap-2'>
              {categories.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => toggleCategory(value)}
                  className={cn(
                    'min-h-[40px] rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                    selectedCategories.has(value)
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-card text-foreground hover:border-primary/40'
                  )}
                  aria-pressed={selectedCategories.has(value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div
          className='my-6 flex items-start gap-3 border-l-2 border-primary bg-primary/5 px-4 py-3 text-sm text-muted-foreground'
          role='note'
        >
          <Info className='mt-0.5 h-4 w-4 shrink-0' aria-hidden='true' />
          <p className='leading-relaxed'>{content.explorer.banner.info}</p>
        </div>

        <p
          className='mb-4 text-sm font-medium text-foreground'
          role='status'
          aria-live='polite'
          aria-atomic='true'
        >
          {replacePlaceholders(content.explorer.search.resultsCount, {
            count: filteredFoods.length,
          })}
          {filteredFoods.length > 0 &&
            `, ${replacePlaceholders(content.explorer.search.visibleCount, {
              visible: visibleFoodCount,
            })}`}
        </p>

        <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {visibleFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        {hasMoreFoods && (
          <div className='mt-8 flex justify-center'>
            <Button type='button' variant='outline' onClick={showMoreFoods}>
              {content.explorer.search.loadMore}
            </Button>
          </div>
        )}

        {filteredFoods.length === 0 && (
          <div className='py-12 text-center'>
            <p className='text-lg text-muted-foreground'>
              {content.explorer.emptyStates.noResults}
            </p>
            <div className='mt-4 space-y-2 text-sm text-muted-foreground'>
              {hasActiveSearch && (
                <p>
                  {content.explorer.emptyStates.searchContext}{' '}
                  <span className='font-medium text-foreground'>« {trimmedSearchQuery} »</span>
                </p>
              )}
              {hasActiveFilters && (
                <p>
                  {content.explorer.emptyStates.filterContext}{' '}
                  <span className='font-medium text-foreground'>
                    {activeFilterLabels.join(', ')}
                  </span>
                </p>
              )}
            </div>
            {(hasActiveSearch || hasActiveFilters) && (
              <div className='mt-6 flex flex-col justify-center gap-3 sm:flex-row'>
                {hasActiveSearch && (
                  <Button
                    type='button'
                    variant='outline'
                    className='w-full gap-2 sm:w-auto'
                    onClick={clearSearch}
                  >
                    <X className='h-4 w-4' aria-hidden='true' />
                    {content.explorer.search.clearButton}
                  </Button>
                )}
                {hasActiveFilters && (
                  <Button
                    type='button'
                    variant='outline'
                    className='w-full gap-2 sm:w-auto'
                    onClick={resetFilters}
                  >
                    <RotateCcw className='h-4 w-4' aria-hidden='true' />
                    {content.explorer.emptyStates.resetFilters}
                  </Button>
                )}
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
