/**
 * Legal disclaimers and notices in French
 * Based on French health app regulations (HAS, RGPD, ANSM)
 */

// ============================================================================
// MEDICAL DISCLAIMERS
// ============================================================================

export const medicalDisclaimer = {
  title: "⚠️ Avertissement Médical",
  
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
  title: "Protection des Données Personnelles",
  
  full: `Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vos données de santé sont protégées par des mesures de sécurité renforcées.

Vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données personnelles. Pour exercer ces droits, vous pouvez supprimer votre profil directement dans l'application.

Les données collectées sont utilisées uniquement pour les fonctionnalités de l'application et sont stockées localement sur votre appareil. Aucune donnée n'est transmise à des serveurs externes ou partagée avec des tiers.`,

  short: `Vos données sont stockées localement sur votre appareil. Aucune donnée n'est transmise à des serveurs externes.`,
};

// ============================================================================
// DIETARY LIMITATIONS
// ============================================================================

export const dietaryDisclaimer = {
  title: "Avertissement Alimentaire",
  
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
  title: "💡 Bon à Savoir",
  
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
  title: "Source des Données",
  
  full: `Les données alimentaires de cette application sont basées sur les recherches de l'Université Monash (Australie), référence mondiale pour le régime FODMAP.

• Source : Monash University FODMAP Database 2024-2025
• Mise à jour : Décembre 2024
• Base de données : 110 aliments validés
• Niveau de confiance : Élevé pour 95%+ des entrées

Les données sont fournies "telles quelles" à des fins éducatives. L'exactitude des informations dépend de la qualité des données source et des variations naturelles dans la composition des aliments.`,

  short: `Basé sur les données de l'Université Monash 2024-2025. 110 aliments validés avec un niveau de confiance élevé.`,
};

// ============================================================================
// LIABILITY LIMITATION
// ============================================================================

export const liabilityLimitation = {
  title: "Limitation de Responsabilité",
  
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
  title: "Propriété Intellectuelle",
  
  content: `Les contenus de cette application (textes, données, interface) sont protégés par les droits d'auteur et les lois sur la propriété intellectuelle.

• Les données FODMAP sont dérivées de sources publiques (Monash University)
• L'interface et le code de l'application sont protégés
• Toute reproduction non autorisée est interdite
• L'utilisation personnelle est autorisée
• L'utilisation commerciale nécessite une autorisation écrite`,
};

// ============================================================================
// MODIFICATION NOTICE
// ============================================================================

export const modificationNotice = {
  title: "Modification des Conditions",
  
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
    placement: "before-cta", // Display before the main CTA button
    dismissible: false,
  },

  profile: {
    title: userQualificationNotice.title,
    content: userQualificationNotice.content,
    placement: "bottom", // Display at bottom of page
    dismissible: false,
  },

  explorer: {
    title: "ℹ️ Informations Importantes",
    content: `Les recommandations sont basées sur votre profil et les données de l'Université Monash 2024-2025. Les tolérances individuelles peuvent varier. En cas de doute, consultez votre diététicien.`,
    placement: "banner", // Dismissible banner at top
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

## ${dataProtectionNotice.title}
${dataProtectionNotice.full}

## ${dietaryDisclaimer.title}
${dietaryDisclaimer.full}

## ${liabilityLimitation.title}
${liabilityLimitation.content}

## ${dataSourceNotice.title}
${dataSourceNotice.full}

## ${intellectualPropertyNotice.title}
${intellectualPropertyNotice.content}

## ${modificationNotice.title}
${modificationNotice.content}

---

**Dernière mise à jour** : Décembre 2024

En utilisant cette application, vous acceptez ces conditions et reconnaissez avoir lu et compris ces avertissements.
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
    description: 'Service d\'Aide Médicale Urgente',
  },
  pompiers: {
    number: '18',
    description: 'Sapeurs-Pompiers',
  },
  urgences: {
    number: '112',
    description: 'Numéro d\'urgence européen',
  },
};
