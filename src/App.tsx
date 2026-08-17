import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Providers } from './components/Providers';
import { RouteErrorBoundary } from './components/RouteErrorBoundary';
import { ScrollToTop } from './components/ScrollToTop';
import About from './pages/About';
import Explorer from './pages/Explorer';
import Landing from './pages/Landing';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

const App = () => (
  <Providers>
    <BrowserRouter>
      <ScrollToTop />
      <RouteErrorBoundary>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/explorer' element={<Explorer />} />
          <Route path='/legal' element={<Legal />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </RouteErrorBoundary>
    </BrowserRouter>
  </Providers>
);

export default App;
