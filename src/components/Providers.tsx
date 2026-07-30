import { type ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { TooltipProvider } from '../components/ui/tooltip';
import { UserProvider } from '../context/UserProvider';

const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}
