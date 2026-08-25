// @vitest-environment jsdom
import { MemoryRouter } from 'react-router-dom';

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import Legal from './Legal';

afterEach(() => {
  cleanup();
});

describe('Legal page', () => {
  it('shows the current review path without unsupported notification or settings promises', () => {
    render(
      <MemoryRouter>
        <Legal />
      </MemoryRouter>
    );

    expect(screen.getByText('Dernière mise à jour : 30 juillet 2026')).toBeTruthy();
    expect(screen.getByText(/date de dernière mise à jour affichée sur cette page/)).toBeTruthy();
    expect(screen.getByText(/texte en vigueur est consultable en revenant sur cette page/)).toBeTruthy();
    expect(screen.queryByText(/informés des changements significatifs via l'application/)).toBeNull();
    expect(screen.queryByText(/accessible dans les paramètres de l'application/)).toBeNull();
  });
});
