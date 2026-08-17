// @vitest-environment jsdom
import { MemoryRouter } from 'react-router-dom';

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import Methodology from './Methodology';

afterEach(() => {
  cleanup();
});

describe('Methodology page', () => {
  it('separates verified engineering evidence from unverified data-origin claims', () => {
    render(
      <MemoryRouter>
        <Methodology />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Méthodologie et limites' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Preuves d’ingénierie vérifiées' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Origine des données non vérifiée' })).toBeTruthy();
    expect(screen.getByText(/104 enregistrements et 104 identifiants uniques/)).toBeTruthy();
    expect(screen.getByText(/Selon le propriétaire du projet/)).toBeTruthy();
    expect(screen.getByText(/n’ont pas été validées cliniquement/)).toBeTruthy();
  });

  it('documents the binary comparison and non-medical limitations', () => {
    render(
      <MemoryRouter>
        <Methodology />
      </MemoryRouter>
    );

    const categoryList = screen.getByRole('list', {
      name: 'Les six catégories FODMAP du profil',
    });

    expect(categoryList.querySelectorAll('li')).toHaveLength(6);
    expect(screen.getByText(/exactement six réponses binaires/)).toBeTruthy();
    expect(screen.getByText(/portions de référence/)).toBeTruthy();
    expect(screen.getByText(/ne garantit pas/)).toBeTruthy();
  });

  it('labels Monash material as independent further reading', () => {
    render(
      <MemoryRouter>
        <Methodology />
      </MemoryRouter>
    );

    const link = screen.getByRole('link', {
      name: /liste publique d’exemples de Monash University/,
    });

    expect(link.getAttribute('href')).toBe(
      'https://www.monashfodmap.com/about-fodmap-and-ibs/high-and-low-fodmap-foods/'
    );
    expect(screen.getByText(/pas comme preuve de provenance/)).toBeTruthy();
    expect(screen.getByText(/n’est ni affilié, ni approuvé, ni certifié/)).toBeTruthy();
  });
});
