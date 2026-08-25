// @vitest-environment jsdom
import { Link, MemoryRouter, Route, Routes } from 'react-router-dom';

import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ScrollToTop } from './ScrollToTop';

function ProfileRoute() {
  return (
    <main>
      <h1>Profil</h1>
      <Link to='/explorer'>Ouvrir l’explorateur</Link>
    </main>
  );
}

function ExplorerRoute() {
  return (
    <main>
      <h1>Explorateur</h1>
      <Link to='/route-inconnue'>Ouvrir une route inconnue</Link>
    </main>
  );
}

const routeMetadata = [
  [
    '/',
    'Accueil | MonGuide FODMAP',
    'Projet frontend éducatif comparant un profil FODMAP avec un jeu de référence local. Ne fournit pas de conseil médical ni de garantie de tolérance.',
  ],
  [
    '/profile',
    'Profil | MonGuide FODMAP',
    'Configurez un profil FODMAP binaire à partir de vos réponses de réintroduction. Les choix sont enregistrés localement, sans conseil médical ni garantie de tolérance.',
  ],
  [
    '/explorer',
    'Explorateur | MonGuide FODMAP',
    'Explorez un jeu local de 104 aliments et comparez leurs étiquettes FODMAP à votre profil enregistré. Les résultats ne garantissent pas une tolérance personnelle.',
  ],
  [
    '/methodology',
    'Méthodologie et limites | MonGuide FODMAP',
    'Découvrez la comparaison binaire du profil et les limites du jeu local de 104 aliments, sans validation clinique indépendante ni garantie de tolérance.',
  ],
  [
    '/legal',
    'Mentions légales | MonGuide FODMAP',
    "Consultez les avertissements médicaux, les conditions d'utilisation et les limites de provenance du jeu local de 104 aliments.",
  ],
  [
    '/about',
    'À propos | MonGuide FODMAP',
    'Découvrez le projet frontend éducatif MonGuide FODMAP, son objectif et ses limites en matière d’information alimentaire.',
  ],
  [
    '/route-inconnue',
    'Page introuvable | MonGuide FODMAP',
    'La page demandée est introuvable dans MonGuide FODMAP.',
  ],
] as const;

beforeEach(() => {
  vi.stubGlobal('scrollTo', vi.fn());
  document.head.querySelector('meta[name="description"]')?.remove();
  const description = document.createElement('meta');
  description.name = 'description';
  document.head.appendChild(description);
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('ScrollToTop route announcements', () => {
  it.each(routeMetadata)(
    'updates title and description for %s',
    async (pathname, title, description) => {
      render(
        <MemoryRouter initialEntries={[pathname]}>
          <ScrollToTop />
          <Routes>
            <Route
              path='*'
              element={
                <main>
                  <h1>Page</h1>
                </main>
              }
            />
          </Routes>
        </MemoryRouter>
      );

      await waitFor(() => expect(document.title).toBe(title));
      expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(
        description
      );
    }
  );

  it('updates title, scroll position, and heading focus after route changes', async () => {
    render(
      <MemoryRouter initialEntries={['/profile']}>
        <ScrollToTop />
        <Routes>
          <Route path='/profile' element={<ProfileRoute />} />
          <Route path='/explorer' element={<ExplorerRoute />} />
          <Route
            path='*'
            element={
              <main>
                <h1>404</h1>
              </main>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    const profileHeading = screen.getByRole('heading', { name: 'Profil' });
    await waitFor(() => expect(document.activeElement).toBe(profileHeading));
    expect(document.title).toBe('Profil | MonGuide FODMAP');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toContain(
      'Configurez un profil FODMAP binaire'
    );

    fireEvent.click(screen.getByRole('link', { name: 'Ouvrir l’explorateur' }));

    const explorerHeading = await screen.findByRole('heading', { name: 'Explorateur' });
    await waitFor(() => expect(document.activeElement).toBe(explorerHeading));
    expect(document.title).toBe('Explorateur | MonGuide FODMAP');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toContain(
      'Explorez un jeu local de 104 aliments'
    );
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    expect(explorerHeading.tabIndex).toBe(-1);

    fireEvent.click(screen.getByRole('link', { name: 'Ouvrir une route inconnue' }));

    const notFoundHeading = await screen.findByRole('heading', { name: '404' });
    await waitFor(() => expect(document.activeElement).toBe(notFoundHeading));
    expect(document.title).toBe('Page introuvable | MonGuide FODMAP');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(
      'La page demandée est introuvable dans MonGuide FODMAP.'
    );
  });

  it('keeps title updates working when the description element is absent', async () => {
    document.head.querySelector('meta[name="description"]')?.remove();

    render(
      <MemoryRouter initialEntries={['/about']}>
        <ScrollToTop />
        <Routes>
          <Route
            path='/about'
            element={
              <main>
                <h1>À propos</h1>
              </main>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => expect(document.title).toBe('À propos | MonGuide FODMAP'));
    expect(document.querySelector('meta[name="description"]')).toBeNull();
  });
});
