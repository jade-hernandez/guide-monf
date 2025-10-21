import { Link } from "react-router-dom";
import { FileText, Info, Database, Github, Linkedin } from "lucide-react";
import { content } from "@/config/content";

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6 text-sm justify-around ">
          {/* Legal & Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">
              {content.footer.infoLegal.title}
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/legal"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <FileText className="h-4 w-4" />
                {content.footer.infoLegal.legalLinkText}
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Info className="h-4 w-4" />
                {content.footer.infoLegal.about}
              </Link>
            </nav>
          </div>

          {/* Data Sources */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">
              {content.footer.dataSources.title}
            </h3>
            <div className="text-muted-foreground space-y-1">
              <div className="flex items-start gap-2">
                <Database className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="https://www.monashfodmap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {content.footer.dataSources.monash.name}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">
              {content.footer.contact.title}
            </h3>
            <div className="text-muted-foreground space-y-2">
              <a
                href="https://www.linkedin.com/in/hernandez-jade/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/jade-hernandez/guide-monf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                {content.footer.contact.github}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          <p>{content.footer.bottomBar.copyright} &copy; 2025</p>
          <p className="mt-1">{content.footer.bottomBar.medicalDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
};
