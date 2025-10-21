import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";
import { medicalDisclaimer } from "@/config/disclaimers";
import { Check, AlertTriangle } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {content.landing.hero.title}
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
              {content.landing.hero.subtitle}
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/profile")}
              className="shadow-lg hover:shadow-xl"
            >
              {content.landing.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* What are FODMAPs */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            {content.landing.whatAreFodmaps.title}
          </h2>
          <div className="space-y-6">
            {content.landing.whatAreFodmaps.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-lg leading-relaxed text-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              {content.landing.howItWorks.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {content.landing.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {content.landing.howItWorks.steps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl bg-card p-6 shadow-sm border border-border"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            {content.landing.whoIsThisFor.title}
          </h2>
          <div className="space-y-4">
            {content.landing.whoIsThisFor.criteria.map((criterion, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-success" />
                </div>
                <p className="text-lg text-foreground">{criterion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="bg-caution/5 border-t border-caution/20 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 ">
              <AlertTriangle className="h-6 w-6 text-caution " />
            </div>
            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                {content.landing.disclaimer.title}
              </h2>
              <p className="text-foreground leading-relaxed">
                {content.landing.disclaimer.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            {content.landing.ctaFooter.title}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            {content.landing.ctaFooter.subtitle}
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/profile")}
            className="shadow-lg hover:shadow-xl"
          >
            {content.landing.ctaFooter.cta}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
