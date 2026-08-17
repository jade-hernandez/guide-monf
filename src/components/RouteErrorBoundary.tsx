import { Component, type ErrorInfo, type ReactNode } from 'react';

import { House, RefreshCw, TriangleAlert } from 'lucide-react';

import { content } from '../config/content';
import { Button } from './ui/button';

interface RouteErrorBoundaryProps {
  children: ReactNode;
}

interface RouteErrorBoundaryState {
  hasError: boolean;
}

export class RouteErrorBoundary extends Component<
  RouteErrorBoundaryProps,
  RouteErrorBoundaryState
> {
  state: RouteErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): RouteErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('RouteErrorBoundary caught a route render error', error, errorInfo);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className='flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 text-center'>
        <TriangleAlert className='mb-4 h-10 w-10 text-destructive' aria-hidden='true' />
        <h1 className='text-3xl font-bold text-foreground'>{content.common.errors.route.title}</h1>
        <p className='mt-3 max-w-xl text-muted-foreground'>{content.common.errors.route.message}</p>
        <div className='mt-8 flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:justify-center'>
          <Button className='w-full gap-2' type='button' onClick={() => window.location.reload()}>
            <RefreshCw className='h-4 w-4' aria-hidden='true' />
            {content.common.errors.route.reload}
          </Button>
          <Button asChild={true} className='w-full gap-2' variant='outline'>
            <a href='/'>
              <House className='h-4 w-4' aria-hidden='true' />
              {content.common.errors.route.home}
            </a>
          </Button>
        </div>
      </main>
    );
  }
}
