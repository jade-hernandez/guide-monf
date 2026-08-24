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
});
