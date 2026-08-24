/**
 * All French content for the FODMAP Personal Guide App
 * Centralized content management for easy updates
 */

export const content = {
  // ============================================================================
  // LANDING PAGE
  // ============================================================================
  landing: {
    hero: {
      title: 'MonGuide FODMAP',
      subtitle: 'Votre guide alimentaire personnalisé selon vos intolérances',
      cta: 'Créer mon profil',
    },

    ctaFooter: {
      title: 'Prêt à commencer ?',
      subtitle: 'Créez votre profil personnalisé en quelques minutes',
      cta: 'Créer mon profil',
    },

    whatAreFodmaps: {
      title: "Qu'est-ce que les FODMAPs ?",
      paragraphs: [
        "Les FODMAPs sont des glucides à chaîne courte présents naturellement dans de nombreux aliments. Pour certaines personnes souffrant du syndrome de l'intestin irritable (SII), ces glucides peuvent être difficiles à digérer et provoquer des symptômes inconfortables.",
        "FODMAP signifie : Fermentescibles, Oligosaccharides, Disaccharides, Monosaccharides And Polyols (et Polyols). Il existe 6 types principaux de FODMAPs, et chaque personne peut réagir différemment à chacun d'eux.",
        "Le régime FODMAP consiste à identifier VOS intolérances spécifiques grâce à un processus de réintroduction supervisé par un professionnel de santé. Une fois vos intolérances identifiées, vous pouvez personnaliser votre alimentation tout en maintenant une grande variété d'aliments.",
      ],
    },

    howItWorks: {
      title: 'Comment ça marche',
      subtitle: 'Trois étapes simples pour personnaliser votre alimentation',
      steps: [
        {
          number: 1,
          title: 'Configurez votre profil',
          description:
            'Indiquez les FODMAPs que vous tolérez et ceux que vous devez éviter, selon vos résultats de réintroduction.',
        },
        {
          number: 2,
          title: 'Recherchez et explorez',
          description:
            "Parcourez une base de données d'aliments filtrée selon VOTRE profil personnel. Recherchez rapidement n'importe quel aliment.",
        },
        {
          number: 3,
          title: 'Interprétez le résultat',
          description:
            'Utilisez la comparaison comme un repère lié à votre profil, sans la confondre avec une garantie de tolérance personnelle.',
        },
      ],
    },

    whoIsThisFor: {
      title: 'Cette application est pour vous si...',
      criteria: [
        "Vous avez été diagnostiqué(e) avec le syndrome de l'intestin irritable (SII)",
        'Vous avez terminé la phase de réintroduction FODMAP avec un professionnel de santé',
        'Vous connaissez vos intolérances spécifiques (quels FODMAPs éviter)',
        'Vous cherchez un outil pratique pour gérer votre alimentation au quotidien',
      ],
    },

    disclaimer: {
      title: 'Avertissement Important',
      content:
        "MonGuide FODMAP est un projet portfolio éducatif, pas un produit clinique. Il ne remplace pas les conseils médicaux professionnels, un diagnostic ou un traitement et ne garantit aucune tolérance. Le jeu local de 104 aliments n'a pas fait l'objet d'une validation clinique indépendante pour ce projet.",
    },
  },

  // ============================================================================
  // PROFILE SETUP PAGE
  // ============================================================================
  profile: {
    header: {
      back: 'Retour',
      title: 'Configurez Votre Profil FODMAP',
      subtitle: 'Sélectionnez les FODMAPs que vous tolérez et ceux que vous devez éviter',
    },

    fodmaps: [
      {
        type: 'fructanes',
        name: 'Fructanes',
        description: "Présents dans le blé, l'oignon, l'ail",
        examples: 'Pain, pâtes, oignons, ail, asperges',
      },
      {
        type: 'galactanes',
        name: 'Galactanes',
        description: 'Présents dans les légumineuses, haricots',
        examples: 'Pois chiches, lentilles, haricots rouges',
      },
      {
        type: 'lactose',
        name: 'Lactose',
        description: 'Présent dans les produits laitiers',
        examples: 'Lait, yaourt, fromage frais, crème',
      },
      {
        type: 'fructose',
        name: 'Fructose',
        description: 'Présent dans les fruits, le miel',
        examples: 'Pommes, poires, mangues, miel, jus de fruits',
      },
      {
        type: 'mannitol',
        name: 'Mannitol',
        description: 'Présent dans les champignons, le chou-fleur',
        examples: 'Champignons, chou-fleur, patates douces',
      },
      {
        type: 'sorbitol',
        name: 'Sorbitol',
        description: 'Présent dans les fruits à noyau',
        examples: 'Prunes, pêches, abricots, cerises',
      },
    ],

    toggleButtons: {
      tolerate: 'Je tolère',
      avoid: "J'évite",
    },

    progress: {
      label: 'Progression',
      completed: '{{current}} sur {{total}} FODMAPs configurés',
    },

    continueButton: {
      label: 'Continuer',
      disabled: 'Veuillez sélectionner une option pour chaque FODMAP',
    },

    disclaimer: {
      title: '💡 Bon à savoir',
      content:
        "Cette application fonctionne uniquement pour les personnes qui ont déjà effectué des tests de réintroduction FODMAP avec un professionnel de santé et connaissent leurs intolérances spécifiques. Si vous n'avez pas encore identifié vos intolérances, veuillez consulter un diététicien spécialisé avant d'utiliser cet outil.",
    },

    validation: {
      incomplete: 'Veuillez configurer tous les FODMAPs avant de continuer',
      saved: 'Profil sauvegardé avec succès',
      saveFailed:
        'Impossible d’enregistrer votre profil dans ce navigateur. Vos choix restent affichés ; vous pouvez réessayer.',
    },
  },

  // ============================================================================
  // FOOD EXPLORER PAGE
  // ============================================================================
  explorer: {
    header: {
      title: 'Guide FODMAP',
      editProfile: 'Modifier le profil',
    },

    search: {
      placeholder: 'Rechercher un aliment…',
      ariaLabel: 'Rechercher des aliments par nom',
      clearButton: 'Effacer la recherche',
      noResults: 'Aucun aliment trouvé dans notre base actuelle (104 aliments)',
      noResultsHint: 'Modifiez votre recherche ou vos filtres pour afficher d’autres résultats',
      resultsCount: '{{count}} aliment(s) trouvé(s)',
      visibleCount: '{{visible}} affiché(s)',
      loadMore: 'Afficher plus',
    },

    filters: {
      title: 'Filtres',
      safeForMe: {
        label: 'Sans FODMAP évité détecté',
        ariaLabel:
          'Afficher uniquement les aliments sans FODMAP marqué comme étant à éviter dans mon profil enregistré',
      },
      categories: {
        all: 'Toutes catégories',
        cereales: 'Céréales',
        legumes: 'Légumes',
        legumineuses: 'Légumineuses',
        fruits: 'Fruits',
        'produits-laitiers': 'Produits laitiers',
        edulcorants: 'Édulcorants',
        'alternatives-vegetales': 'Alternatives végétales',
        'noix-graines': 'Noix et graines',
      },
    },

    foodCard: {
      compatible: 'Aucun FODMAP évité détecté',
      compatibleAria:
        "D'après votre profil enregistré, aucun FODMAP marqué comme étant à éviter n'est détecté dans cet aliment",
      avoid: 'FODMAP évité détecté',
      avoidAria:
        "D'après votre profil enregistré, cet aliment contient au moins un FODMAP marqué comme étant à éviter",
      limit: '{{grams}}g',
      contains: 'Contient',
      referencePortion: 'Portion de référence',
      confidence: {
        elevee: 'Confiance élevée',
        moyenne: 'Confiance moyenne',
        faible: 'Confiance faible',
      },
      fodmapTypes: {
        fructanes: 'Fructanes',
        galactanes: 'Galactanes',
        lactose: 'Lactose',
        fructose: 'Fructose',
        mannitol: 'Mannitol',
        sorbitol: 'Sorbitol',
      },
    },

    emptyStates: {
      noFoods: 'Aucun aliment disponible',
      noResults: 'Aucun aliment ne correspond à votre recherche',
      searchContext: 'Recherche active :',
      filterContext: 'Filtres actifs :',
      resetFilters: 'Réinitialiser les filtres',
      noCompatibleFoods:
        'Aucun aliment sans FODMAP évité détecté. Essayez de modifier vos filtres.',
      configureProfile:
        "Veuillez d'abord configurer votre profil pour voir des recommandations personnalisées.",
    },

    banner: {
      info: 'Les résultats indiquent si les FODMAPs enregistrés pour chaque aliment correspondent à ceux marqués « à éviter » dans votre profil sauvegardé. Les grammes affichés sont une portion de référence du jeu de données actuel, pas une garantie de tolérance. Les réactions individuelles peuvent varier.',
      dismiss: 'Fermer',
    },

    footer: {
      dataSource: 'Jeu de référence local : provenance détaillée non conservée',
      lastUpdated: 'Dernière mise à jour : {{date}}',
      totalFoods: '{{count}} aliments dans la base de données',
    },

    noProfilUser: {
      title: 'Oops !',
      content: "Vous devez remplir votre profil avant d'explorer les aliments.",
      cta: 'Remplir mon profil',
    },
  },

  // ============================================================================
  // NOT FOUND PAGE
  // ============================================================================

  notFound: {
    title: '404',
    subtitle: "Désolé, la page que vous recherchez n'existe pas.",
    cta: "Retour à l'accueil",
  },

  // ============================================================================
  // FOOTER
  // ============================================================================

  footer: {
    infoLegal: {
      title: 'Informations Légales',
      legalLinkText: 'Mentions Légales & Avertissements',
      about: 'À Propos',
      methodology: 'Méthodologie & Limites',
    },

    dataSources: {
      title: 'Pour Aller Plus Loin',
      monash: {
        name: 'Informations FODMAP générales (Monash)',
        description: 'Lecture complémentaire indépendante du jeu local',
      },
    },

    contact: {
      title: 'Contact',
      github: 'Voir sur GitHub',
    },

    bottomBar: {
      copyright: "MonGuide FODMAP. Application éducative à des fins d'information uniquement.",
      medicalDisclaimer: 'Ne remplace pas les conseils médicaux professionnels.',
    },
  },

  // ============================================================================
  // LEGAL PAGE
  // ============================================================================

  legal: {
    mainContent: {
      title: 'Mentions Légales & Avertissements',
      lastUpdated: 'Dernière mise à jour : Juillet 2026',
    },
    emergencyContacts: {
      title: "En cas d'urgence médicale",
    },
    acceptanceNotice: {
      content:
        'En utilisant cette application, vous acceptez ces conditions et reconnaissez avoir lu et compris ces avertissements.',
    },
  },

  // ============================================================================
  // ABOUT PAGE
  // ============================================================================
  about: {
    mainContent: {
      title: 'À propos de MonGuide FODMAP',
    },
    mission: {
      title: 'Mon intention',
      content:
        "MonGuide FODMAP est un projet frontend éducatif qui compare six réponses déclarées à un jeu local de 104 aliments. Il s'adresse aux personnes qui connaissent déjà leurs résultats de réintroduction et rend cette comparaison plus facile à consulter, sans mesurer ni garantir une tolérance individuelle.",
    },
    why: {
      title: 'Pourquoi ce projet ?',
      content:
        "Après avoir complété le protocole FODMAP avec un professionnel de santé, j'ai passé des heures à croiser des listes génériques avec mes résultats de réintroduction. MonGuide FODMAP explore une façon plus lisible d'effectuer cette comparaison tout en gardant visibles les portions de référence, les limites du jeu de données et l'absence de garantie individuelle.",
    },
  },

  // ============================================================================
  // COMMON ELEMENTS
  // ============================================================================
  common: {
    buttons: {
      back: 'Retour',
      continue: 'Continuer',
      save: 'Enregistrer',
      cancel: 'Annuler',
      close: 'Fermer',
      edit: 'Modifier',
      delete: 'Supprimer',
      confirm: 'Confirmer',
    },

    loading: {
      default: 'Chargement...',
      foods: 'Chargement des aliments...',
      profile: 'Chargement du profil...',
    },

    errors: {
      generic: "Une erreur s'est produite",
      networkError: 'Erreur de connexion',
      storageError: 'Impossible de sauvegarder les données (navigation privée ?)',
      invalidData: 'Données invalides',
      notFound: 'Non trouvé',
      route: {
        title: "La page n'a pas pu s'afficher",
        message:
          "Une erreur inattendue est survenue. Vous pouvez recharger la page ou revenir à l'accueil.",
        reload: 'Recharger la page',
        home: "Retour à l'accueil",
      },
    },

    confirmation: {
      deleteProfile:
        'Êtes-vous sûr de vouloir supprimer votre profil ? Cette action est irréversible.',
      clearSearch: 'Effacer la recherche ?',
    },

    accessibility: {
      skipToContent: 'Aller au contenu principal',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
    },
  },

  // ============================================================================
  // METADATA (for SEO)
  // ============================================================================
  metadata: {
    defaultTitle: 'MonGuide FODMAP',
    titleTemplate: '%s | MonGuide FODMAP',
    description:
      'Projet éducatif FODMAP : comparez un profil enregistré avec les étiquettes d’un jeu de référence local, sans garantie de tolérance.',
    keywords: [
      'FODMAP',
      'SII',
      'syndrome intestin irritable',
      'régime FODMAP',
      'intolérances alimentaires',
      'guide alimentaire',
      'France',
    ],
    author: 'MonGuide FODMAP',
    language: 'fr',
  },
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Replace placeholders in strings with values
 * Example: replacePlaceholders("{{count}} items", { count: 5 }) => "5 items"
 */
export const replacePlaceholders = (
  text: string,
  values: Record<string, string | number>
): string => {
  let result = text;
  Object.entries(values).forEach(([key, value]) => {
    result = result.replace(new RegExp(`{{${key}}}`, 'g'), String(value));
  });
  return result;
};

/**
 * Get FODMAP name in French
 */
export const getFodmapName = (type: string): string => {
  const fodmap = content.profile.fodmaps.find((f) => f.type === type);
  return fodmap?.name || type;
};

/**
 * Get category name in French
 */
export const getCategoryName = (category: string): string => {
  return (
    content.explorer.filters.categories[
      category as keyof typeof content.explorer.filters.categories
    ] || category
  );
};

/**
 * Format date in French
 */
export const formatDateFr = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Get confidence level label in French
 */
export const getConfidenceLabel = (confidence: 'elevee' | 'moyenne' | 'faible'): string => {
  return content.explorer.foodCard.confidence[confidence];
};
