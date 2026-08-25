import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const homeDescription =
  'Projet frontend éducatif comparant un profil FODMAP avec un jeu de référence local. Ne fournit pas de conseil médical ni de garantie de tolérance.';

interface RouteMetadata {
  title: string;
  description: string;
}

const routeMetadata: Record<string, RouteMetadata> = {
  '/': {
    title: 'Accueil | MonGuide FODMAP',
    description: homeDescription,
  },
  '/profile': {
    title: 'Profil | MonGuide FODMAP',
    description:
      'Configurez un profil FODMAP binaire à partir de vos réponses de réintroduction. Les choix sont enregistrés localement, sans conseil médical ni garantie de tolérance.',
  },
  '/explorer': {
    title: 'Explorateur | MonGuide FODMAP',
    description:
      'Explorez un jeu local de 104 aliments et comparez leurs étiquettes FODMAP à votre profil enregistré. Les résultats ne garantissent pas une tolérance personnelle.',
  },
  '/methodology': {
    title: 'Méthodologie et limites | MonGuide FODMAP',
    description:
      'Découvrez la comparaison binaire du profil et les limites du jeu local de 104 aliments, sans validation clinique indépendante ni garantie de tolérance.',
  },
  '/legal': {
    title: 'Mentions légales | MonGuide FODMAP',
    description:
      "Consultez les avertissements médicaux, les conditions d'utilisation et les limites de provenance du jeu local de 104 aliments.",
  },
  '/about': {
    title: 'À propos | MonGuide FODMAP',
    description:
      'Découvrez le projet frontend éducatif MonGuide FODMAP, son objectif et ses limites en matière d’information alimentaire.',
  },
};

const notFoundMetadata: RouteMetadata = {
  title: 'Page introuvable | MonGuide FODMAP',
  description: 'La page demandée est introuvable dans MonGuide FODMAP.',
};

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
    const metadata = routeMetadata[pathname] ?? notFoundMetadata;
    document.title = metadata.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = metadata.description;
    }

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
