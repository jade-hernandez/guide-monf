// @vitest-environment jsdom
import { type ReactNode } from 'react';

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { RouteErrorBoundary } from './RouteErrorBoundary';

const error = new Error('Storage token leaked from ThrowingRoute');

function ThrowingRoute(): ReactNode {
  throw error;
}

beforeEach(() => {
  vi.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('RouteErrorBoundary', () => {
  it('renders healthy route children unchanged', () => {
    render(
      <RouteErrorBoundary>
        <main>
          <h1>Route normale</h1>
        </main>
      </RouteErrorBoundary>
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Route normale' })).toBeTruthy();
    expect(screen.queryByText("La page n'a pas pu s'afficher")).toBeNull();
  });

  it('shows one semantic recovery view with reload and home controls', () => {
    render(
      <RouteErrorBoundary>
        <ThrowingRoute />
      </RouteErrorBoundary>
    );

    expect(screen.getAllByRole('main')).toHaveLength(1);
    expect(
      screen.getByRole('heading', { level: 1, name: "La page n'a pas pu s'afficher" })
    ).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Recharger la page' })).toBeTruthy();
    expect(screen.getByRole('link', { name: "Retour à l'accueil" }).getAttribute('href')).toBe('/');
  });

  it('does not expose technical error details in the fallback', () => {
    render(
      <RouteErrorBoundary>
        <ThrowingRoute />
      </RouteErrorBoundary>
    );

    expect(document.body.textContent).not.toContain(error.message);
    expect(document.body.textContent).not.toContain('ThrowingRoute');
    expect(document.body.textContent).not.toContain('Storage token');
    if (error.stack) expect(document.body.textContent).not.toContain(error.stack);
  });

  it('logs the caught error and React component stack for diagnostics', () => {
    const errorSpy = vi.spyOn(console, 'error');

    render(
      <RouteErrorBoundary>
        <ThrowingRoute />
      </RouteErrorBoundary>
    );

    expect(errorSpy).toHaveBeenCalledWith(
      'RouteErrorBoundary caught a route render error',
      error,
      expect.objectContaining({
        componentStack: expect.stringContaining('ThrowingRoute'),
      })
    );
  });
});
