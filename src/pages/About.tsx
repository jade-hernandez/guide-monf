import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Code, Database, Shield, Github } from 'lucide-react';
import { Footer } from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl flex-1">
        <div className="space-y-8">
          {/* Title */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              À Propos de MonGuide FODMAP
            </h1>
          </div>

          {/* Mission */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-start gap-3 mb-4">
              <Heart className="h-6 w-6 text-primary flex-shrink-0" />
              <h2 className="text-xl font-semibold text-foreground">Notre Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              MonGuide FODMAP est une application éducative conçue pour aider les personnes souffrant du syndrome de l'intestin irritable (SII) à gérer leur alimentation de manière personnalisée. Contrairement aux listes génériques "pauvre en FODMAP", cette application filtre les aliments en fonction des intolérances spécifiques de chaque utilisateur, identifiées lors de tests de réintroduction médicaux.
            </p>
          </section>

          {/* Why This Project */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Pourquoi ce Projet ?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Après avoir complété le protocole FODMAP avec un professionnel de santé, j'ai passé des heures à croiser des listes génériques qui ne correspondaient pas à mes intolérances spécifiques. J'ai réalisé qu'il manquait un outil permettant de filtrer les aliments selon son profil personnel. MonGuide FODMAP résout ce problème en offrant une approche véritablement personnalisée.
            </p>
          </section>

          {/* Technical Stack */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-start gap-3 mb-4">
              <Code className="h-6 w-6 text-primary flex-shrink-0" />
              <h2 className="text-xl font-semibold text-foreground">Stack Technique</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Frontend</h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>React 18 avec TypeScript</li>
                  <li>Tailwind CSS pour le design system</li>
                  <li>React Router pour la navigation</li>
                  <li>Context API pour la gestion d'état</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Accessibilité</h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Conformité WCAG 2.1 niveau AA</li>
                  <li>Navigation clavier complète</li>
                  <li>Attributs ARIA en français</li>
                  <li>Cibles tactiles de 44px minimum</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Source */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-start gap-3 mb-4">
              <Database className="h-6 w-6 text-primary flex-shrink-0" />
              <h2 className="text-xl font-semibold text-foreground">Source des Données</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Les données alimentaires proviennent de la recherche de l'Université Monash (Australie), référence mondiale pour le régime FODMAP.
            </p>
            <div className="bg-muted/50 rounded p-4 text-sm space-y-1">
              <p><strong>Source :</strong> Monash University FODMAP Database 2024-2025</p>
              <p><strong>Mise à jour :</strong> Décembre 2024</p>
              <p><strong>Base de données :</strong> 110 aliments validés</p>
              <p><strong>Niveau de confiance :</strong> Élevé pour 95%+ des entrées</p>
            </div>
          </section>

          {/* Privacy */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary flex-shrink-0" />
              <h2 className="text-xl font-semibold text-foreground">Confidentialité</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Vos données sont stockées uniquement sur votre appareil via localStorage. Aucune donnée n'est transmise à des serveurs externes ou partagée avec des tiers. Vous gardez le contrôle total de vos informations personnelles.
            </p>
          </section>

          {/* Portfolio Project */}
          <section className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Projet de Portfolio
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              MonGuide FODMAP est un projet de portfolio démontrant des compétences en développement web moderne, accessibilité, et résolution de problèmes concrets. Ce n'est pas un produit médical commercial.
            </p>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <Github className="h-5 w-5" />
              Voir le code source
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
