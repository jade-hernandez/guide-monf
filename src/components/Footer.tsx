import { Link } from 'react-router-dom';
import { FileText, Info, Database, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {/* Legal & Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Informations Légales</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/legal" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <FileText className="h-4 w-4" />
                Mentions Légales & Avertissements
              </Link>
              <Link 
                to="/about" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Info className="h-4 w-4" />
                À Propos
              </Link>
            </nav>
          </div>

          {/* Data Sources */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Sources de Données</h3>
            <div className="text-muted-foreground space-y-1">
              <div className="flex items-start gap-2">
                <Database className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Monash University</p>
                  <p className="text-xs">Base de données FODMAP 2024-2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="text-muted-foreground">
              <p className="text-xs mb-2">Projet de portfolio éducatif</p>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                Voir sur GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} MonGuide FODMAP. 
            Application éducative à des fins d'information uniquement.
          </p>
          <p className="mt-1">
            Ne remplace pas les conseils médicaux professionnels.
          </p>
        </div>
      </div>
    </footer>
  );
};
