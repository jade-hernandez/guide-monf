import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Providers } from './components/Providers';
import { RouteErrorBoundary } from './components/RouteErrorBoundary';
import { ScrollToTop } from './components/ScrollToTop';
import Landing from './pages/Landing';

const About = lazy(() => import('./pages/About'));
const Explorer = lazy(() => import('./pages/Explorer'));
const Legal = lazy(() => import('./pages/Legal'));
const Methodology = lazy(() => import('./pages/Methodology'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Profile = lazy(() => import('./pages/Profile'));

export function RouteLoadingFallback() {
  return (
    <main
      className='flex min-h-[60vh] items-center justify-center px-4 py-16'
      aria-busy='true'
      aria-label='Chargement de la page'
    >
      <p className='text-center text-sm font-medium text-muted-foreground' role='status'>
        Chargement de la page...
      </p>
    </main>
  );
}

const App = () => (
  <Providers>
    <BrowserRouter>
      <ScrollToTop />
      <RouteErrorBoundary>
        <Suspense fallback={<RouteLoadingFallback />}>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/explorer' element={<Explorer />} />
            <Route path='/legal' element={<Legal />} />
            <Route path='/about' element={<About />} />
            <Route path='/methodology' element={<Methodology />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </RouteErrorBoundary>
    </BrowserRouter>
  </Providers>
);

export default App;
