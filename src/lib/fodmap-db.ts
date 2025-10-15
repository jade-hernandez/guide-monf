/**
 * Base de données FODMAP - Guide Personnel FODMAP
 * Version: 1.0.0
 * Dernière mise à jour: Octobre 2025
 * Source: Université Monash 2024-2025
 */

import type { Food, FoodDatabase, FODMAPType } from "@/types";

// ============================================================================
// BASE DE DONNÉES COMPLÈTE (110 aliments)
// ============================================================================

export const baseDonneesFodmap: FoodDatabase = {
  version: "1.0.0",
  lastUpdated: "2025-10-10",
  totalFoods: 110, // Todo: Should we use a function to dynamically count this? Is it maintainable to calculate it manually? What are the costs of having JS calculate it at runtime?
  validationStatus: "Données Monash University 2024-2025",
  foods: [
    // ========================================================================
    // CÉRÉALES (25 aliments)
    // ========================================================================
    {
      id: "pates_cuites",
      name: "Pâtes (cuites)",
      category: "cereales",
      limitGrams: 74,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "pain_ble_blanc",
      name: "Pain de blé blanc",
      category: "cereales",
      limitGrams: 24,
      fodmaps: [
        { type: "fructanes", isPrimary: true },
        { type: "galactanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "pain_levain_ble",
      name: "Pain au levain (blé)",
      category: "cereales",
      limitGrams: 109,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "avoine",
      name: "Avoine",
      category: "cereales",
      limitGrams: 60,
      fodmaps: [
        { type: "fructanes", isPrimary: true },
        { type: "galactanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "flocons_avoine",
      name: "Flocons d'avoine",
      category: "cereales",
      limitGrams: 50,
      fodmaps: [
        { type: "fructanes", isPrimary: true },
        { type: "galactanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "pain_mais",
      name: "Pain de maïs",
      category: "cereales",
      limitGrams: 70,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "pain_seigle",
      name: "Pain de seigle",
      category: "cereales",
      limitGrams: 43,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "crackers_riz",
      name: "Crackers de riz",
      category: "cereales",
      limitGrams: 34,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "flocons_mais",
      name: "Flocons de maïs",
      category: "cereales",
      limitGrams: 15,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "cookies_pepites_chocolat",
      name: "Biscuits aux pépites de chocolat",
      category: "cereales",
      limitGrams: 12,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "bretzel",
      name: "Collations bretzel",
      category: "cereales",
      limitGrams: 21,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "galettes_riz_souffle",
      name: "Galettes de riz soufflé",
      category: "cereales",
      limitGrams: 28,
      fodmaps: [
        { type: "fructanes", isPrimary: true },
        { type: "fructose", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "pates_oeufs",
      name: "Pâtes aux œufs",
      category: "cereales",
      limitGrams: 40,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "amarante_soufflee",
      name: "Amarante (soufflée)",
      category: "cereales",
      limitGrams: 10,
      fodmaps: [
        { type: "fructanes", isPrimary: true },
        { type: "galactanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "biscuits_avoine",
      name: "Biscuits d'avoine",
      category: "cereales",
      limitGrams: 36,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "chataignes_cuites",
      name: "Châtaignes (cuites à l'eau)",
      category: "cereales",
      limitGrams: 168,
      fodmaps: [
        { type: "fructanes", isPrimary: true },
        { type: "galactanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "chataignes_grillees",
      name: "Châtaignes (grillées)",
      category: "cereales",
      limitGrams: 84,
      fodmaps: [
        { type: "fructanes", isPrimary: true },
        { type: "galactanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "flocons_quinoa",
      name: "Flocons de quinoa",
      category: "cereales",
      limitGrams: 50,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "galettes_mais_souffle",
      name: "Galettes de maïs soufflé",
      category: "cereales",
      limitGrams: 12,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "pain_ble_complet",
      name: "Pain de blé complet",
      category: "cereales",
      limitGrams: 24,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "pain_levain_epeautre",
      name: "Pain au levain (100% épeautre)",
      category: "cereales",
      limitGrams: 82,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "pain_levain_ble_complet",
      name: "Pain au levain de blé complet",
      category: "cereales",
      limitGrams: 97,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "pain_sans_gluten_cereales",
      name: "Pain aux céréales sans gluten",
      category: "cereales",
      limitGrams: 40,
      fodmaps: [
        { type: "fructanes", isPrimary: true },
        { type: "fructose", isPrimary: false },
      ],
      confidence: "moyenne",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "biscuits_fourres_chocolat",
      name: "Biscuits fourrés à la crème (enrobés de chocolat)",
      category: "cereales",
      limitGrams: 17,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "crackers_sales",
      name: "Crackers salés",
      category: "cereales",
      limitGrams: 14,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },

    // ========================================================================
    // LÉGUMES (20 aliments)
    // ========================================================================
    {
      id: "oignon",
      name: "Oignon",
      category: "legumes",
      limitGrams: 12,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "chou_fleur",
      name: "Chou-fleur",
      category: "legumes",
      limitGrams: 75,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
      notes:
        "Classification mise à jour : précédemment listé sous mannitol, maintenant confirmé comme fructanes",
    },
    {
      id: "champignons_paris",
      name: "Champignons de Paris",
      category: "legumes",
      limitGrams: 75,
      fodmaps: [
        { type: "mannitol", isPrimary: true },
        { type: "fructanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
      notes: "Contient à la fois du mannitol ET des fructanes",
    },
    {
      id: "asperges",
      name: "Asperges",
      category: "legumes",
      limitGrams: 12,
      fodmaps: [
        { type: "fructanes", isPrimary: true },
        { type: "fructose", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "tomates_cerises",
      name: "Tomates cerises",
      category: "legumes",
      limitGrams: 45,
      fodmaps: [{ type: "fructose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "brocoli_entier",
      name: "Brocoli (entier)",
      category: "legumes",
      limitGrams: 75,
      fodmaps: [{ type: "fructose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "betterave_conserve",
      name: "Betterave (en conserve)",
      category: "legumes",
      limitGrams: 60,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "betterave_fraiche",
      name: "Betterave (fraîche)",
      category: "legumes",
      limitGrams: 20,
      fodmaps: [
        { type: "fructanes", isPrimary: true },
        { type: "galactanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "choux_bruxelles",
      name: "Choux de Bruxelles",
      category: "legumes",
      limitGrams: 38,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "artichaut_entier",
      name: "Artichaut (entier)",
      category: "legumes",
      limitGrams: 15,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "artichaut_marine",
      name: "Artichaut (mariné dans l'huile)",
      category: "legumes",
      limitGrams: 10,
      fodmaps: [
        { type: "fructanes", isPrimary: true },
        { type: "fructose", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "fenouil_bulbe",
      name: "Bulbe de fenouil",
      category: "legumes",
      limitGrams: 48,
      fodmaps: [
        { type: "fructanes", isPrimary: true },
        { type: "mannitol", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "epi_mais",
      name: "Épi de maïs",
      category: "legumes",
      limitGrams: 43,
      fodmaps: [
        { type: "fructanes", isPrimary: true },
        { type: "sorbitol", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "topinambour",
      name: "Topinambour",
      category: "legumes",
      limitGrams: 75,
      fodmaps: [
        { type: "fructanes", isPrimary: true },
        { type: "fructose", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "courge_butternut",
      name: "Courge butternut",
      category: "legumes",
      limitGrams: 45,
      fodmaps: [
        { type: "mannitol", isPrimary: true },
        { type: "galactanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "haricots_verts_plats",
      name: "Haricots verts plats (frais)",
      category: "legumes",
      limitGrams: 17,
      fodmaps: [
        { type: "mannitol", isPrimary: true },
        { type: "fructanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "pois_mange_tout",
      name: "Pois mange-tout",
      category: "legumes",
      limitGrams: 16,
      fodmaps: [
        { type: "mannitol", isPrimary: true },
        { type: "fructanes", isPrimary: false },
        { type: "galactanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "brocoli_fleurettes",
      name: "Brocoli (fleurettes seulement)",
      category: "legumes",
      limitGrams: 75,
      fodmaps: [{ type: "fructose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "pasteque",
      name: "Pastèque",
      category: "fruits",
      limitGrams: 15,
      fodmaps: [
        { type: "fructose", isPrimary: true },
        { type: "fructanes", isPrimary: false },
        { type: "mannitol", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },

    // ========================================================================
    // LÉGUMINEUSES (10 aliments)
    // ========================================================================
    {
      id: "pois_chiches_conserve",
      name: "Pois chiches (en conserve)",
      category: "legumineuses",
      limitGrams: 42,
      fodmaps: [{ type: "galactanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "lentilles_vertes_bouillies",
      name: "Lentilles vertes (bouillies)",
      category: "legumineuses",
      limitGrams: 23,
      fodmaps: [
        { type: "galactanes", isPrimary: true },
        { type: "fructanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "lentilles_rouges",
      name: "Lentilles rouges",
      category: "legumineuses",
      limitGrams: 23,
      fodmaps: [{ type: "galactanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "haricots_rouges_bouillis",
      name: "Haricots rouges (bouillis)",
      category: "legumineuses",
      limitGrams: 40,
      fodmaps: [
        { type: "galactanes", isPrimary: true },
        { type: "fructanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "haricots_rouges_conserve",
      name: "Haricots rouges (en conserve)",
      category: "legumineuses",
      limitGrams: 40,
      fodmaps: [{ type: "galactanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "haricots_lima",
      name: "Haricots de Lima",
      category: "legumineuses",
      limitGrams: 39,
      fodmaps: [
        { type: "galactanes", isPrimary: true },
        { type: "fructanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "haricots_blancs_conserve",
      name: "Haricots blancs (en conserve)",
      category: "legumineuses",
      limitGrams: 35,
      fodmaps: [{ type: "galactanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "petits_pois_decongeles",
      name: "Petits pois (décongelés)",
      category: "legumineuses",
      limitGrams: 15,
      fodmaps: [{ type: "galactanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "petits_pois_conserve",
      name: "Petits pois (en conserve)",
      category: "legumineuses",
      limitGrams: 45,
      fodmaps: [{ type: "galactanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "tempeh_nature",
      name: "Tempeh (nature)",
      category: "alternatives-vegetales",
      limitGrams: 100,
      fodmaps: [
        { type: "galactanes", isPrimary: true },
        { type: "fructanes", isPrimary: false },
      ],
      confidence: "moyenne",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },

    // ========================================================================
    // FRUITS (20 aliments)
    // ========================================================================
    {
      id: "fraises",
      name: "Fraises",
      category: "fruits",
      limitGrams: 65,
      fodmaps: [{ type: "fructose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "raisins",
      name: "Raisins",
      category: "fruits",
      limitGrams: 6,
      fodmaps: [{ type: "fructose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
      notes: "Limite considérablement réduite - seulement 2 raisins (6g) sûrs",
    },
    {
      id: "cerises",
      name: "Cerises",
      category: "fruits",
      limitGrams: 20,
      fodmaps: [
        { type: "fructose", isPrimary: true },
        { type: "sorbitol", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "mangue",
      name: "Mangue",
      category: "fruits",
      limitGrams: 40,
      fodmaps: [{ type: "fructose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "banane",
      name: "Banane",
      category: "fruits",
      limitGrams: 56,
      fodmaps: [{ type: "fructose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "pomme_granny_smith",
      name: "Pomme Granny Smith",
      category: "fruits",
      limitGrams: 30,
      fodmaps: [
        { type: "fructose", isPrimary: true },
        { type: "sorbitol", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "pomme_pink_lady",
      name: "Pomme Pink Lady",
      category: "fruits",
      limitGrams: 28,
      fodmaps: [
        { type: "fructose", isPrimary: true },
        { type: "sorbitol", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "mures",
      name: "Mûres",
      category: "fruits",
      limitGrams: 4,
      fodmaps: [{ type: "fructose", isPrimary: true }],
      confidence: "moyenne",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "figues_fraiches",
      name: "Figues fraîches",
      category: "fruits",
      limitGrams: 5,
      fodmaps: [{ type: "fructose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "figues_mures",
      name: "Figues mûres",
      category: "fruits",
      limitGrams: 56,
      fodmaps: [{ type: "fructose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "framboises",
      name: "Framboises",
      category: "fruits",
      limitGrams: 60,
      fodmaps: [{ type: "fructose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "litchi_cru",
      name: "Litchi (cru)",
      category: "fruits",
      limitGrams: 96,
      fodmaps: [{ type: "fructose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "abricots_conserve",
      name: "Abricots (en conserve, sans jus)",
      category: "fruits",
      limitGrams: 20,
      fodmaps: [
        { type: "fructose", isPrimary: true },
        { type: "sorbitol", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "poire_nashi",
      name: "Poire nashi",
      category: "fruits",
      limitGrams: 10,
      fodmaps: [
        { type: "fructose", isPrimary: true },
        { type: "sorbitol", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "feijoa",
      name: "Feijoa",
      category: "fruits",
      limitGrams: 50,
      fodmaps: [{ type: "fructose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },

    // ========================================================================
    // PRODUITS LAITIERS (16 aliments)
    // ========================================================================
    {
      id: "lait_vache_entier",
      name: "Lait de vache (entier)",
      category: "produits-laitiers",
      limitGrams: 20,
      fodmaps: [{ type: "lactose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "yaourt_nature_vache",
      name: "Yaourt nature (vache)",
      category: "produits-laitiers",
      limitGrams: 20,
      fodmaps: [{ type: "lactose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "fromage_creme",
      name: "Fromage à la crème",
      category: "produits-laitiers",
      limitGrams: 40,
      fodmaps: [{ type: "lactose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "cheddar",
      name: "Cheddar",
      category: "produits-laitiers",
      limitGrams: 100,
      fodmaps: [{ type: "lactose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "parmesan",
      name: "Parmesan",
      category: "produits-laitiers",
      limitGrams: 32,
      fodmaps: [{ type: "lactose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "beurre",
      name: "Beurre",
      category: "produits-laitiers",
      limitGrams: 170,
      fodmaps: [{ type: "lactose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "lait_vache_ecreme",
      name: "Lait de vache (écrémé)",
      category: "produits-laitiers",
      limitGrams: 20,
      fodmaps: [{ type: "lactose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "lait_vache_demi_ecreme",
      name: "Lait de vache (demi-écrémé)",
      category: "produits-laitiers",
      limitGrams: 15,
      fodmaps: [{ type: "lactose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "yaourt_aromatise",
      name: "Yaourt aromatisé",
      category: "produits-laitiers",
      limitGrams: 25,
      fodmaps: [{ type: "lactose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "yaourt_chevre",
      name: "Yaourt de chèvre",
      category: "produits-laitiers",
      limitGrams: 33,
      fodmaps: [{ type: "lactose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "yaourt_brebis",
      name: "Yaourt de brebis",
      category: "produits-laitiers",
      limitGrams: 45,
      fodmaps: [{ type: "lactose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "fromage_blanc",
      name: "Fromage blanc",
      category: "produits-laitiers",
      limitGrams: 40,
      fodmaps: [{ type: "lactose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "mozzarella",
      name: "Mozzarella",
      category: "produits-laitiers",
      limitGrams: 40,
      fodmaps: [{ type: "lactose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "ricotta",
      name: "Ricotta",
      category: "produits-laitiers",
      limitGrams: 40,
      fodmaps: [{ type: "lactose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "gouda",
      name: "Gouda",
      category: "produits-laitiers",
      limitGrams: 100,
      fodmaps: [{ type: "lactose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "glace_vanille",
      name: "Glace à la vanille",
      category: "produits-laitiers",
      limitGrams: 30,
      fodmaps: [{ type: "lactose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },

    // ========================================================================
    // NOIX ET GRAINES (10 aliments)
    // ========================================================================
    {
      id: "amandes",
      name: "Amandes",
      category: "noix-graines",
      limitGrams: 12,
      fodmaps: [{ type: "galactanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "noix",
      name: "Noix",
      category: "noix-graines",
      limitGrams: 30,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "noisettes",
      name: "Noisettes",
      category: "noix-graines",
      limitGrams: 15,
      fodmaps: [
        { type: "galactanes", isPrimary: true },
        { type: "fructanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "graines_chia",
      name: "Graines de chia",
      category: "noix-graines",
      limitGrams: 24,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "graines_courge",
      name: "Graines de courge",
      category: "noix-graines",
      limitGrams: 23,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "graines_lin",
      name: "Graines de lin",
      category: "noix-graines",
      limitGrams: 15,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "graines_sesame",
      name: "Graines de sésame",
      category: "noix-graines",
      limitGrams: 11,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "beurre_amande",
      name: "Beurre d'amande",
      category: "noix-graines",
      limitGrams: 20,
      fodmaps: [{ type: "galactanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "noix_bresil",
      name: "Noix du Brésil",
      category: "noix-graines",
      limitGrams: 40,
      fodmaps: [{ type: "galactanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "pignons_pin",
      name: "Pignons de pin",
      category: "noix-graines",
      limitGrams: 14,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },

    // ========================================================================
    // ÉDULCORANTS (3 aliments)
    // ========================================================================
    {
      id: "miel",
      name: "Miel",
      category: "edulcorants",
      limitGrams: 7,
      fodmaps: [{ type: "fructose", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "sirop_agave",
      name: "Sirop d'agave",
      category: "edulcorants",
      limitGrams: 5,
      fodmaps: [
        { type: "fructose", isPrimary: true },
        { type: "fructanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "sucre_coco",
      name: "Sucre de coco",
      category: "edulcorants",
      limitGrams: 4,
      fodmaps: [
        { type: "fructose", isPrimary: true },
        { type: "fructanes", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },

    // ========================================================================
    // ALTERNATIVES VÉGÉTALES (6 aliments)
    // ========================================================================
    {
      id: "lait_soja_entier",
      name: "Lait de soja (soja entier)",
      category: "alternatives-vegetales",
      limitGrams: 40,
      fodmaps: [{ type: "galactanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "lait_avoine",
      name: "Lait d'avoine",
      category: "alternatives-vegetales",
      limitGrams: 30,
      fodmaps: [{ type: "galactanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "lait_coco_uht",
      name: "Lait de coco (carton UHT)",
      category: "alternatives-vegetales",
      limitGrams: 120,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "lait_riz",
      name: "Lait de riz",
      category: "alternatives-vegetales",
      limitGrams: 200,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "lait_quinoa",
      name: "Lait de quinoa (nature)",
      category: "alternatives-vegetales",
      limitGrams: 250,
      fodmaps: [{ type: "fructanes", isPrimary: true }],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
    {
      id: "eau_coco_bouteille",
      name: "Eau de coco (en bouteille)",
      category: "alternatives-vegetales",
      limitGrams: 100,
      fodmaps: [
        { type: "fructanes", isPrimary: true },
        { type: "sorbitol", isPrimary: false },
      ],
      confidence: "elevee",
      lastUpdated: "2024-12-01",
      source: "Monash University 2024",
    },
  ],
};

// Todo:
// Shouldn't these helpers be in a separate file?
// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get all foods from a specific category
 */
export function getFoodsByCategory(category: string): Food[] {
  return baseDonneesFodmap.foods.filter((food) => food.category === category);
}

/**
 * Get all foods containing a specific FODMAP type
 */
export function getFoodsByFodmap(fodmapType: FODMAPType): Food[] {
  return baseDonneesFodmap.foods.filter((food) =>
    food.fodmaps.some((fodmap) => fodmap.type === fodmapType)
  );
}

/**
 * Get compatible foods based on user intolerances
 * A food is INCOMPATIBLE if it contains ANY FODMAP the user is intolerant to
 */
export function getCompatibleFoods(intolerances: FODMAPType[]): Food[] {
  return baseDonneesFodmap.foods.filter(
    (food) => !food.fodmaps.some((fodmap) => intolerances.includes(fodmap.type))
  );
}

/**
 * Search foods by name, category, or FODMAP type
 */
export function searchFoods(query: string): Food[] {
  const normalized = query.toLowerCase().trim();

  if (!normalized) {
    return baseDonneesFodmap.foods;
  }

  return baseDonneesFodmap.foods.filter(
    (food) =>
      food.name.toLowerCase().includes(normalized) ||
      food.category.toLowerCase().includes(normalized) ||
      food.fodmaps.some((fodmap) =>
        fodmap.type.toLowerCase().includes(normalized)
      )
  );
}

/**
 * Check if a food is compatible with user's profile
 */
export function isFoodCompatible(
  food: Food,
  intolerances: FODMAPType[]
): boolean {
  return !food.fodmaps.some((fodmap) => intolerances.includes(fodmap.type));
}

/**
 * Get database statistics
 */
export function getDatabaseStats() {
  const stats = {
    total: baseDonneesFodmap.totalFoods,
    byCategory: {} as Record<string, number>,
    byFodmap: {} as Record<string, number>,
    byConfidence: {
      elevee: 0,
      moyenne: 0,
      faible: 0,
    },
  };

  baseDonneesFodmap.foods.forEach((food) => {
    // Count by category
    stats.byCategory[food.category] =
      (stats.byCategory[food.category] || 0) + 1;

    // Count by confidence
    stats.byConfidence[food.confidence]++;

    // Count by FODMAP type
    food.fodmaps.forEach((fodmap) => {
      stats.byFodmap[fodmap.type] = (stats.byFodmap[fodmap.type] || 0) + 1;
    });
  });

  return stats;
}
