import { Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { Footer } from "@/components/Footer";
import { content } from "@/config/content";

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
              {content.about.mainContent.title}
            </h1>
          </div>

          {/* Mission */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-start gap-3 mb-4">
              <Heart className="h-6 w-6 text-primary flex-shrink-0" />
              <h2 className="text-xl font-semibold text-foreground">
                {content.about.mission.title}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {content.about.mission.content}
            </p>
          </section>

          {/* Why This Project */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {content.about.why.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {content.about.why.content}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
