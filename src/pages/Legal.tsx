import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { fullLegalText, emergencyContacts } from '@/config/disclaimers';
import { Footer } from '@/components/Footer';

export default function Legal() {
  // Split the markdown text into sections
  const sections = fullLegalText.split('## ').filter(Boolean);

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
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Mentions Légales & Avertissements
            </h1>
            <p className="text-muted-foreground">
              Dernière mise à jour : Décembre 2024
            </p>
          </div>

          {/* Emergency Alert */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-semibold text-foreground mb-2">
                  En cas d'urgence médicale
                </h2>
                <div className="space-y-1 text-sm">
                  <p><strong>SAMU :</strong> {emergencyContacts.samu.number} - {emergencyContacts.samu.description}</p>
                  <p><strong>Pompiers :</strong> {emergencyContacts.pompiers.number} - {emergencyContacts.pompiers.description}</p>
                  <p><strong>Urgences :</strong> {emergencyContacts.urgences.number} - {emergencyContacts.urgences.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Sections */}
          <div className="prose prose-sm max-w-none space-y-6">
            {sections.map((section, index) => {
              const lines = section.trim().split('\n');
              const title = lines[0].replace(/^#+\s*/, '');
              const content = lines.slice(1).join('\n').trim();

              return (
                <section key={index} className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    {title}
                  </h2>
                  <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {content}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Acceptance Notice */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <p className="text-sm text-foreground">
              En utilisant cette application, vous acceptez ces conditions et reconnaissez avoir lu et compris ces avertissements.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
