import { CircleCheck, TriangleAlert } from 'lucide-react';

import { content } from '../config/content';
import { categories } from '../config/food-categories';
import { useUser } from '../hooks/use-user';
import { cn } from '../lib/utils';
import type { Food } from '../types';

export function FoodCard({ food }: { food: Food }) {
  const { isCompatible } = useUser();
  const compatible = isCompatible(food);

  return (
    <article className='flex min-h-52 flex-col rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40'>
      <div className='mb-3 flex items-start justify-between gap-2'>
        <div>
          <p className='mb-1 text-xs font-medium uppercase text-muted-foreground'>
            {categories.find((c) => c.value === food.category)?.label}
          </p>
          <h2 className='text-lg font-semibold text-foreground'>{food.name}</h2>
        </div>
        <div
          className={cn(
            'flex max-w-36 shrink-0 items-center justify-center gap-1 rounded-md px-2 py-1 text-center text-xs font-semibold leading-tight',
            compatible ? 'bg-success/10 text-success-dark' : 'bg-caution/15 text-caution-dark'
          )}
          aria-label={
            compatible
              ? content.explorer.foodCard.compatibleAria
              : content.explorer.foodCard.avoidAria
          }
        >
          {compatible ? (
            <CircleCheck className='h-3 w-3 shrink-0' />
          ) : (
            <TriangleAlert className='h-3 w-3 shrink-0' />
          )}
          <span>
            {compatible ? content.explorer.foodCard.compatible : content.explorer.foodCard.avoid}
          </span>
        </div>
      </div>

      <div className='mb-4 flex flex-wrap gap-1.5'>
        {food.fodmaps.map((fodmap, idx) => (
          <span
            key={idx}
            className='rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground'
          >
            {content.explorer.foodCard.fodmapTypes[fodmap.type]}
          </span>
        ))}
      </div>

      <p className='mt-auto border-t border-border pt-3 text-sm text-muted-foreground'>
        {content.explorer.foodCard.referencePortion} : {food.limitGrams}g
      </p>
    </article>
  );
}
