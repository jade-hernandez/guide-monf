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
          title: 'Mangez en confiance',
          description:
            'Faites vos courses et préparez vos repas en sachant exactement quels aliments sont compatibles avec vos intolérances.',
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
        "Cette application est fournie à des fins d'information et d'éducation uniquement. Elle ne remplace pas les conseils médicaux professionnels, un diagnostic ou un traitement. Consultez toujours votre médecin ou un diététicien qualifié avant de modifier votre régime alimentaire. Les données sont basées sur les recherches de l'Université Monash 2024-2025.",
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
      error: 'Erreur lors de la sauvegarde du profil',
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
      placeholder: 'Rechercher un aliment... (ex: fraises, pâtes, lait)',
      ariaLabel: 'Rechercher des aliments par nom',
      clearButton: 'Effacer la recherche',
      noResults: 'Aucun aliment trouvé dans notre base actuelle (104 aliments)',
      noResultsHint: "Consultez l'application Monash pour une base de données complète",
      resultsCount: '{{count}} aliment(s) trouvé(s)',
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
      dataSource: 'Source : Université Monash 2024-2025',
      lastUpdated: 'Dernière mise à jour : {{date}}',
      totalFoods: '{{count}} aliments dans la base de données',
    },

    noProfilUser: {
      title: 'Oops !',
      content: "Vous devez remplir votre profil avant d'explorer les aliments.",
      cta: 'Remplir mon profile',
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
    },

    dataSources: {
      title: 'Sources de Données',
      monash: {
        name: 'Monash University',
        description: 'Base de données FODMAP 2024-2025',
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
      lastUpdated: 'Dernière mise à jour : Décembre 2024',
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
      title: 'À Propos de MonGuide FODMAP',
    },
    mission: {
      title: 'Notre Mission',
      content:
        "MonGuide FODMAP est une application éducative conçue pour aider les personnes souffrant du syndrome de l'intestin irritable (SII) à gérer leur alimentation de manière personnalisée. Contrairement aux listes génériques pauvre en FODMAP, cette application filtre les aliments en fonction des intolérances spécifiques de chaque utilisateur, identifiées lors de tests de réintroduction médicaux. Nous espérons améliorer la qualité de vie de nos utilisateurs.",
    },
    why: {
      title: 'Pourquoi ce Projet ?',
      content:
        "Après avoir complété le protocole FODMAP avec un professionnel de santé, j'ai passé des heures à croiser des listes génériques qui ne correspondaient pas à mes intolérances spécifiques. J'ai réalisé qu'il manquait un outil permettant de filtrer les aliments selon son profil personnel. MonGuide FODMAP résout ce problème en offrant une approche véritablement personnalisée.",
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
      'Guide alimentaire FODMAP personnalisé selon vos intolérances. Trouvez facilement quels aliments vous pouvez manger en toute sécurité.',
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
// HELPER FUNCTIONS : NOT USED INSIDE THE APP
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
