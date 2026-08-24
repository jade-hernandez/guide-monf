import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Leaf } from 'lucide-react';

export function SiteHeader({ children }: { children?: ReactNode }) {
  return (
    <header className='sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm'>
      <div className='mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>
        <Link
          to='/'
          className='inline-flex min-h-[44px] items-center gap-2 font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
        >
          <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground'>
            <Leaf className='h-4 w-4' aria-hidden='true' />
          </span>
          <span>MonGuide FODMAP</span>
        </Link>
        {children}
      </div>
    </header>
  );
}
