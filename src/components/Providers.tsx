import { type ReactNode } from 'react';

import { UserProvider } from '../context/UserProvider';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <UserProvider>{children}</UserProvider>;
}
