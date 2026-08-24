// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import App, { RouteLoadingFallback } from './App';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('App routing', () => {
  it('keeps the Suspense fallback visible and announcement-only', () => {
    render(<RouteLoadingFallback />);

    expect(screen.getByRole('status', { name: '' }).textContent).toBe('Chargement de la page...');
    expect(screen.getByRole('main').getAttribute('aria-busy')).toBe('true');
    expect(screen.queryByRole('heading', { level: 1 })).toBeNull();
  });

  it('renders the methodology route through the application router', async () => {
    window.history.pushState({}, '', '/methodology');

    render(<App />);

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: 'Méthodologie et limites',
      })
    ).toBeTruthy();
    expect(document.title).toBe('Méthodologie et limites | MonGuide FODMAP');
  });

  it('renders unknown routes through the lazy not-found route', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    window.history.pushState({}, '', '/route-inconnue');

    render(<App />);

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: '404',
      })
    ).toBeTruthy();
    expect(document.title).toBe('Page introuvable | MonGuide FODMAP');
  });
});
