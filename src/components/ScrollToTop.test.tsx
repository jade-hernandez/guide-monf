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
    </main>
  );
}

beforeEach(() => {
  vi.stubGlobal('scrollTo', vi.fn());
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('ScrollToTop route announcements', () => {
  it('updates title, scroll position, and heading focus after route changes', async () => {
    render(
      <MemoryRouter initialEntries={['/profile']}>
        <ScrollToTop />
        <Routes>
          <Route path='/profile' element={<ProfileRoute />} />
          <Route path='/explorer' element={<ExplorerRoute />} />
        </Routes>
      </MemoryRouter>
    );

    const profileHeading = screen.getByRole('heading', { name: 'Profil' });
    await waitFor(() => expect(document.activeElement).toBe(profileHeading));
    expect(document.title).toBe('Profil | MonGuide FODMAP');

    fireEvent.click(screen.getByRole('link', { name: 'Ouvrir l’explorateur' }));

    const explorerHeading = await screen.findByRole('heading', { name: 'Explorateur' });
    await waitFor(() => expect(document.activeElement).toBe(explorerHeading));
    expect(document.title).toBe('Explorateur | MonGuide FODMAP');
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    expect(explorerHeading.tabIndex).toBe(-1);
  });
});
