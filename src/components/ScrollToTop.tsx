import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles: Record<string, string> = {
  '/': 'Accueil | MonGuide FODMAP',
  '/profile': 'Profil | MonGuide FODMAP',
  '/explorer': 'Explorateur | MonGuide FODMAP',
  '/legal': 'Mentions légales | MonGuide FODMAP',
  '/about': 'À propos | MonGuide FODMAP',
  '/methodology': 'Méthodologie et limites | MonGuide FODMAP',
};

const notFoundTitle = 'Page introuvable | MonGuide FODMAP';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    document.title = routeTitles[pathname] ?? notFoundTitle;
    window.scrollTo(0, 0);

    const focusRouteHeading = () => {
      const heading = document.querySelector<HTMLHeadingElement>('main h1');
      if (!heading) return false;

      heading.tabIndex = -1;
      heading.classList.add('route-heading');
      heading.focus({ preventScroll: true });
      window.scrollTo(0, 0);
      return true;
    };

    if (focusRouteHeading()) return;

    const observer = new MutationObserver(() => {
      if (focusRouteHeading()) observer.disconnect();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
