import { Check, X } from 'lucide-react';

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
      {/* Header with compatibility badge */}
      <div className='mb-3 flex items-start justify-between'>
        <h3 className='text-lg font-bold text-foreground'>{food.name}</h3>
        <div
          className={cn(
            'flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold',
            compatible ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
          )}
          aria-label={
            compatible ? content.explorer.foodCard.compatible : content.explorer.foodCard.avoid
          }
        >
          {compatible ? <Check className='h-3 w-3' /> : <X className='h-3 w-3' />}
          <span>{compatible ? 'OK' : 'Éviter'}</span>
        </div>
      </div>

      {/* Category */}
      <p className='mb-2 text-sm text-muted-foreground'>
        {categories.find((c) => c.value === food.category)?.label}
      </p>

      {/* Portion limit */}
      <p className='mb-3 text-sm font-medium text-foreground'>Portion sûre: {food.limitGrams}g</p>

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
