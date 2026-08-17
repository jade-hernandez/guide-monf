/**
 * Legal disclaimers and notices in French
 * Educational-project disclaimers and notices.
 */

// ============================================================================
// MEDICAL DISCLAIMERS
// ============================================================================

export const medicalDisclaimer = {
  title: 'Avertissement Médical',

  full: `Cette application est fournie à des fins d'information et d'éducation uniquement. Les informations contenues dans cette application ne constituent pas des conseils médicaux professionnels, un diagnostic ou un traitement médical.

Les contenus de cette application ne remplacent en aucun cas l'avis, le diagnostic ou le traitement d'un professionnel de santé qualifié. Consultez toujours votre médecin ou un diététicien qualifié avant de modifier votre régime alimentaire ou si vous avez des questions concernant votre santé digestive.

L'éditeur de cette application décline toute responsabilité pour les dommages directs ou indirects résultant de l'utilisation de cette application ou des informations qu'elle contient.

En cas d'urgence médicale, contactez immédiatement les services d'urgence.`,

  short: `Cette application ne remplace pas les conseils médicaux professionnels. Consultez toujours un professionnel de santé qualifié avant de modifier votre régime alimentaire.`,
};

// ============================================================================
// DATA PROTECTION (RGPD)
// ============================================================================

export const dataProtectionNotice = {
  title: 'Stockage du Profil',

  full: `Le profil contient les six réponses binaires FODMAP ainsi que ses dates de création et de mise à jour. Il est enregistré dans le stockage local du navigateur, sans création de compte.

Le code de persistance du profil ne l'envoie pas à un serveur applicatif. Il vérifie la forme des données avant de les restaurer. Le profil peut être modifié dans le formulaire ou supprimé en effaçant les données de ce site dans le navigateur.

Ce stockage dépend du navigateur : le profil peut être indisponible en navigation privée, si le stockage est bloqué ou après l'effacement des données du site.`,

  short: `Votre profil est stocké localement dans ce navigateur, sans compte. Il peut disparaître si les données du site sont effacées ou si le stockage est indisponible.`,
};

// ============================================================================
// DIETARY LIMITATIONS
// ============================================================================

export const dietaryDisclaimer = {
  title: 'Avertissement Alimentaire',

  full: `Le régime pauvre en FODMAP doit être suivi sous supervision médicale appropriée. Cette application fournit des informations générales qui peuvent ne pas convenir à votre situation personnelle.

• Consultez un diététicien avant de commencer un régime d'élimination
• Les informations nutritionnelles sont fournies à titre indicatif uniquement
• Les réactions alimentaires varient selon les individus
• Cette application ne remplace pas un suivi médical personnalisé

Les utilisateurs assument la responsabilité de leurs choix alimentaires basés sur les informations de cette application.`,

  short: `Les informations sont fournies à titre indicatif. Les tolérances individuelles peuvent varier. Consultez un professionnel de santé pour un suivi personnalisé.`,
};

// ============================================================================
// USER QUALIFICATION
// ============================================================================

export const userQualificationNotice = {
  title: '💡 Bon à Savoir',

  content: `Cette application fonctionne uniquement pour les personnes qui ont déjà effectué des tests de réintroduction FODMAP avec un professionnel de santé et connaissent leurs intolérances spécifiques.

Si vous n'avez pas encore identifié vos intolérances :
• Consultez votre médecin généraliste
• Demandez une référence vers un diététicien spécialisé en troubles digestifs
• Suivez le protocole FODMAP complet (élimination puis réintroduction)
• N'utilisez pas cette application pour l'auto-diagnostic`,
};

// ============================================================================
// DATA SOURCE ATTRIBUTION
// ============================================================================

export const dataSourceNotice = {
  title: 'Jeu de Données et Provenance',

  full: `Le jeu de référence local contient 104 aliments. Selon le propriétaire du projet, il a été assemblé à partir d'informations FODMAP accessibles publiquement en ligne.

• Le relevé source par source de l'acquisition et des transformations n'a pas été conservé
• Les entrées n'ont pas été validées cliniquement de façon indépendante pour ce projet
• Les portions affichées sont des références du jeu local, pas des seuils de tolérance personnels
• Les mentions de source présentes dans les enregistrements ne constituent pas une preuve de provenance, d'exactitude ou de droit de réutilisation

Ce jeu ne doit pas être présenté comme un jeu de données officiel de Monash University. Le projet n'est ni affilié, ni approuvé, ni certifié par Monash University et ne revendique aucune autorisation de réutilisation de sa part.`,

  short: `Jeu éducatif local de 104 aliments. La provenance source par source n'a pas été conservée et les entrées n'ont pas été validées cliniquement de façon indépendante pour ce projet.`,
};

// ============================================================================
// LIABILITY LIMITATION
// ============================================================================

export const liabilityLimitation = {
  title: 'Limitation de Responsabilité',

  content: `L'éditeur de cette application ne peut être tenu responsable de tout dommage direct, indirect, accessoire ou consécutif résultant de :

• L'utilisation ou l'impossibilité d'utiliser cette application
• Les décisions alimentaires prises sur la base des informations fournies
• Les erreurs ou omissions dans le contenu
• Les problèmes techniques ou la perte de données
• Les réactions allergiques ou intolérances alimentaires

L'utilisation de cette application se fait à vos propres risques. Consultez toujours un professionnel de santé qualifié pour des conseils médicaux personnalisés.`,
};

// ============================================================================
// INTELLECTUAL PROPERTY
// ============================================================================

export const intellectualPropertyNotice = {
  title: 'Propriété Intellectuelle',

  content: `Le dépôt ne contient pas de preuve établissant les droits de réutilisation du jeu de données ni de licence générale pour le code.

La présence d'informations accessibles publiquement ou d'une attribution ne signifie pas qu'elles sont libres de réutilisation. Toute publication ou réutilisation doit faire l'objet d'une vérification distincte des droits applicables.`,
};

// ============================================================================
// MODIFICATION NOTICE
// ============================================================================

export const modificationNotice = {
  title: 'Modification des Conditions',

  content: `Ces conditions et disclaimers peuvent être modifiés à tout moment pour refléter :

• Les changements dans la réglementation
• Les mises à jour des données FODMAP
• Les améliorations de l'application
• Les nouvelles fonctionnalités

Les utilisateurs seront informés des changements significatifs via l'application. La version en vigueur est toujours accessible dans les paramètres de l'application.`,
};

// ============================================================================
// PAGE-SPECIFIC DISCLAIMERS
// ============================================================================

export const pageDisclaimers = {
  landing: {
    title: medicalDisclaimer.title,
    content: medicalDisclaimer.full,
    placement: 'before-cta',
    dismissible: false,
  },

  profile: {
    title: userQualificationNotice.title,
    content: userQualificationNotice.content,
    placement: 'bottom',
    dismissible: false,
  },

  explorer: {
    title: 'ℹ️ Informations Importantes',
    content: `Les résultats comparent les étiquettes FODMAP du jeu local avec votre profil enregistré. Ils ne constituent pas une recommandation médicale ni une garantie de tolérance. En cas de doute, consultez un professionnel de santé qualifié.`,
    placement: 'banner',
    dismissible: true,
  },
};

// ============================================================================
// COMBINED DISCLAIMERS (for legal page)
// ============================================================================

export const fullLegalText = `
# CONDITIONS D'UTILISATION ET AVERTISSEMENTS

## ${medicalDisclaimer.title}
${medicalDisclaimer.full}


## ${dietaryDisclaimer.title}
${dietaryDisclaimer.full}

## ${dataSourceNotice.title}
${dataSourceNotice.full}

## ${liabilityLimitation.title}
${liabilityLimitation.content}


## ${dataProtectionNotice.title}
${dataProtectionNotice.full}

## ${intellectualPropertyNotice.title}
${intellectualPropertyNotice.content}

## ${modificationNotice.title}
${modificationNotice.content}

`;

// ============================================================================
// CONSENT TEXT
// ============================================================================

export const consentText = {
  checkbox: `J'ai lu et je comprends les avertissements ci-dessus. J'accepte d'utiliser cette application à des fins éducatives uniquement et de consulter un professionnel de santé pour des conseils médicaux personnalisés.`,

  button: `J'ai compris et j'accepte`,

  decline: `Je refuse`,
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get disclaimer for specific page
 */
export function getPageDisclaimer(page: 'landing' | 'profile' | 'explorer') {
  return pageDisclaimers[page];
}

/**
 * Check if user needs to see disclaimer (first visit)
 */
export function shouldShowDisclaimer(): boolean {
  try {
    const seen = localStorage.getItem('disclaimer_accepted');
    return !seen;
  } catch {
    return true; // Show by default if localStorage unavailable
  }
}

/**
 * Mark disclaimer as accepted
 */
export function acceptDisclaimer(): boolean {
  try {
    localStorage.setItem('disclaimer_accepted', new Date().toISOString());
    return true;
  } catch {
    return false;
  }
}

/**
 * Get formatted date for legal text
 */
export function getLastUpdateDate(): string {
  return new Date('2024-12-01').toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Emergency contact information (France)
 */
export const emergencyContacts = {
  samu: {
    number: '15',
    description: "Service d'Aide Médicale Urgente",
  },
  pompiers: {
    number: '18',
    description: 'Sapeurs-Pompiers',
  },
  urgences: {
    number: '112',
    description: "Numéro d'urgence européen",
  },
};
