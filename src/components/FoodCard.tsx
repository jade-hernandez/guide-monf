import { Info, TriangleAlert } from 'lucide-react';

import { content } from '../config/content';
import { categories } from '../config/food-categories';
import { useUser } from '../hooks/use-user';
import { cn } from '../lib/utils';
import type { Food } from '../types';

export function FoodCard({ food }: { food: Food }) {
  const { isCompatible } = useUser();
  const compatible = isCompatible(food);

  return (
    <div className='rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md'>
      {/* Header with profile result badge */}
      <div className='mb-3 flex items-start justify-between gap-2'>
        <h3 className='text-lg font-bold text-foreground'>{food.name}</h3>
        <div
          className={cn(
            'flex max-w-36 shrink-0 items-center justify-center gap-1 rounded-full px-2 py-1 text-center text-xs font-semibold leading-tight',
            compatible ? 'bg-muted text-muted-foreground' : 'bg-primary/10 text-primary'
          )}
          aria-label={
            compatible
              ? content.explorer.foodCard.compatibleAria
              : content.explorer.foodCard.avoidAria
          }
        >
          {compatible ? (
            <Info className='h-3 w-3 shrink-0' />
          ) : (
            <TriangleAlert className='h-3 w-3 shrink-0' />
          )}
          <span>
            {compatible ? content.explorer.foodCard.compatible : content.explorer.foodCard.avoid}
          </span>
        </div>
      </div>

      {/* Category */}
      <p className='mb-2 text-sm text-muted-foreground'>
        {categories.find((c) => c.value === food.category)?.label}
      </p>

      {/* Reference portion */}
      <p className='mb-3 text-sm font-medium text-foreground'>
        {content.explorer.foodCard.referencePortion} : {food.limitGrams}g
      </p>

      {/* FODMAP badges */}
      <div className='flex flex-wrap gap-1.5'>
        {food.fodmaps.map((fodmap, idx) => (
          <span
            key={idx}
            className='rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary'
          >
            {content.explorer.foodCard.fodmapTypes[fodmap.type]}
          </span>
        ))}
      </div>
    </div>
  );
}
