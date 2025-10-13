import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { content } from "@/config/content";
import { useUser } from "@/context/UserContext";
import type { FODMAPType } from "@/types";
import { Check, X } from "lucide-react";
import { Footer } from "@/components/Footer";

const fodmapTypes = content.profile.fodmaps.map((fodmap: any) => ({
  type: fodmap.type as FODMAPType,
  info: fodmap,
}));

export default function Profile() {
  const navigate = useNavigate();
  const { profile, updateProfile } = useUser();
  
  const [selections, setSelections] = useState<Record<FODMAPType, boolean | null>>(
    profile
      ? profile.fodmapIntolerances
      : {
          fructanes: null,
          galactanes: null,
          lactose: null,
          fructose: null,
          mannitol: null,
          sorbitol: null,
        }
  );

  const handleToggle = (type: FODMAPType, tolerates: boolean) => {
    setSelections(prev => ({ ...prev, [type]: tolerates }));
  };

  const configuredCount = Object.values(selections).filter(v => v !== null).length;
  const allConfigured = configuredCount === 6;

  const handleContinue = () => {
    if (!allConfigured) return;

    const newProfile = {
      fodmapIntolerances: selections as Record<FODMAPType, boolean>,
      createdAt: profile?.createdAt || new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
    };

    updateProfile(newProfile);
    navigate("/explorer");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            {content.profile.header.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {content.profile.header.subtitle}
          </p>
        </header>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">
              {content.profile.progress.label}
            </span>
            <span className="text-sm font-semibold text-primary">
              {configuredCount}/6
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(configuredCount / 6) * 100}%` }}
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-8 rounded-xl bg-card p-6 border border-border">
          <p className="text-foreground leading-relaxed">
            {content.profile.disclaimer.content}
          </p>
        </div>

        {/* FODMAP Cards */}
        <div className="space-y-4 mb-8">
          {fodmapTypes.map(({ type, info }) => (
            <div
              key={type}
              className="rounded-xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">
                {info.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {info.description}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <span className="font-semibold">Exemples:</span>{" "}
                {info.examples}
              </p>

              {/* Toggle Buttons */}
              <div
                role="group"
                aria-label={`Configuration pour ${info.name}`}
                className="grid grid-cols-2 gap-3"
              >
                <button
                  onClick={() => handleToggle(type, true)}
                  className={cn(
                    "flex items-center justify-center gap-2 rounded-lg px-4 py-3 font-semibold transition-all min-h-[44px]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    selections[type] === true
                      ? "bg-success text-success-foreground shadow-md scale-105"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  )}
                  aria-pressed={selections[type] === true}
                >
                  <Check className="h-5 w-5" />
                  <span>{content.profile.toggleButtons.tolerate}</span>
                </button>

                <button
                  onClick={() => handleToggle(type, false)}
                  className={cn(
                    "flex items-center justify-center gap-2 rounded-lg px-4 py-3 font-semibold transition-all min-h-[44px]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    selections[type] === false
                      ? "bg-destructive text-destructive-foreground shadow-md scale-105"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  )}
                  aria-pressed={selections[type] === false}
                >
                  <X className="h-5 w-5" />
                  <span>{content.profile.toggleButtons.avoid}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm py-6 border-t border-border">
          <EnhancedButton
            onClick={handleContinue}
            disabled={!allConfigured}
            size="lg"
            className="w-full"
            aria-label={content.profile.continueButton.label}
          >
            {content.profile.continueButton.label}
          </EnhancedButton>
          {!allConfigured && (
            <p className="mt-3 text-center text-sm text-muted-foreground">
              {content.profile.validation.incomplete}
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
