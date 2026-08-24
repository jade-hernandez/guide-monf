import { Skeleton } from '../components/ui/skeleton';
import { SiteHeader } from './SiteHeader';

export function ExplorerSkeleton() {
  return (
    <div className='min-h-screen bg-background pb-8'>
      <SiteHeader>
        <Skeleton className='h-5 w-28 bg-foreground/10' />
      </SiteHeader>

      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mb-8 flex items-end justify-between gap-4'>
          <div>
            <Skeleton className='mb-3 h-4 w-24 bg-foreground/10' />
            <Skeleton className='h-12 w-64 bg-foreground/10' />
          </div>
          <Skeleton className='hidden h-12 w-96 bg-foreground/10 sm:block' />
        </div>

        <div className='border-y border-border py-5'>
          <Skeleton className='h-12 w-full rounded-lg bg-foreground/10' />
          <div className='mt-4 flex flex-wrap gap-2'>
            <Skeleton className='h-11 w-48 rounded-lg bg-foreground/10' />
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className='h-10 w-28 rounded-lg bg-foreground/10' />
            ))}
          </div>
        </div>

        <Skeleton className='my-6 h-16 w-full bg-foreground/10' />
        <Skeleton className='mb-4 h-5 w-40 bg-foreground/10' />

        <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {[...Array(12)].map((_, i) => (
            <Skeleton key={i} className='h-52 rounded-lg bg-foreground/10' />
          ))}
        </div>
      </div>
    </div>
  );
}
