// @vitest-environment jsdom
import { type ComponentPropsWithoutRef, type ElementType, forwardRef } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { content } from '../config/content';
import Landing from './Landing';

const { reducedMotionMock } = vi.hoisted(() => ({
  reducedMotionMock: vi.fn<() => boolean>(),
}));

vi.mock('motion/react', async () => {
  const React = await import('react');

  const createMotionComponent = (element: ElementType) =>
    forwardRef<HTMLElement, ComponentPropsWithoutRef<ElementType>>(
      (
        {
          animate: _animate,
          initial: _initial,
          transition: _transition,
          variants: _variants,
          viewport: _viewport,
          whileHover: _whileHover,
          whileInView: _whileInView,
          whileTap: _whileTap,
          ...props
        },
        ref
      ) => React.createElement(element, { ...props, ref })
    );

  return {
    MotionConfig: ({ children }: { children: React.ReactNode }) => children,
    motion: {
      button: createMotionComponent('button'),
      div: createMotionComponent('div'),
      h1: createMotionComponent('h1'),
      h2: createMotionComponent('h2'),
      p: createMotionComponent('p'),
    },
    useReducedMotion: reducedMotionMock,
  };
});

const renderLanding = () =>
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/profile' element={<h1>Profil cible</h1>} />
      </Routes>
    </MemoryRouter>
  );

beforeEach(() => {
  reducedMotionMock.mockReturnValue(false);
  HTMLElement.prototype.scrollIntoView = vi.fn();
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe('Landing workflow', () => {
  it('routes the primary call to action to Profile', () => {
    renderLanding();

    fireEvent.click(screen.getAllByRole('button', { name: content.landing.hero.cta })[0]!);

    expect(screen.getByRole('heading', { name: 'Profil cible' })).toBeTruthy();
  });

  it('uses immediate scrolling when reduced motion is requested', () => {
    reducedMotionMock.mockReturnValue(true);
    renderLanding();

    const destination = document.getElementById('what-are-fodmaps');
    fireEvent.click(screen.getByRole('button', { name: /En savoir plus/ }));

    expect(destination?.scrollIntoView).toHaveBeenCalledWith({ behavior: 'auto' });
  });

  it('uses responsive Explorer preview art direction while preserving the approved fallback asset', () => {
    const { container } = renderLanding();

    const preview = screen.getByAltText(
      'Explorateur MonGuide FODMAP affichant la recherche, les filtres et des cartes aliments'
    );
    const picture = preview.closest('picture');
    const [mobileSource, avifSource, webpSource] = picture?.querySelectorAll('source') ?? [];

    expect(picture).toBeTruthy();
    expect(mobileSource?.getAttribute('media')).toBe('(max-width: 639px)');
    expect(mobileSource?.getAttribute('srcset')).toBe('/assets/explorer-preview-mobile.webp');
    expect(avifSource?.getAttribute('type')).toBe('image/avif');
    expect(avifSource?.getAttribute('srcset')).toContain('explorer-preview.w1440.avif 1440w');
    expect(webpSource?.getAttribute('type')).toBe('image/webp');
    expect(webpSource?.getAttribute('srcset')).toContain('explorer-preview.w1440.webp 1440w');
    expect(webpSource?.getAttribute('sizes')).toContain('(min-width: 1280px) 718px');
    expect(preview.getAttribute('src')).toBe('/assets/explorer-preview.jpg');
    expect(preview.getAttribute('width')).toBe('1440');
    expect(preview.getAttribute('height')).toBe('900');
    expect(preview.getAttribute('loading')).toBe('eager');
    expect(preview.getAttribute('fetchpriority')).toBe('high');
    expect(preview.getAttribute('class')).toContain('h-64');
    expect(preview.getAttribute('class')).toContain('object-bottom');
    expect(preview.getAttribute('class')).toContain('sm:object-top');
    expect(container.querySelector('figcaption')?.textContent).toContain(
      'Une comparaison relative au profil enregistré, jamais une promesse de tolérance.'
    );
  });
});
