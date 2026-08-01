import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ArrowLeft, Check, X } from 'lucide-react';

import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { content } from '../config/content';
import type { UserProfile } from '../context/UserContext';
import { useUser } from '../hooks/use-user';
import { cn } from '../lib/utils';
import type { FODMAPType } from '../types';

const fodmapTypes = content.profile.fodmaps.map(
  (fodmap: { type: string; name: string; description: string; examples: string }) => ({
    type: fodmap.type as FODMAPType,
    info: fodmap,
  })
);

function ProfileEditor({ initialProfile }: { initialProfile: UserProfile | null }) {
  const navigate = useNavigate();
  const { updateProfile } = useUser();
  const [saveError, setSaveError] = useState(false);

  const [selections, setSelections] = useState<Record<FODMAPType, boolean | null>>(() =>
    initialProfile
      ? { ...initialProfile.fodmapIntolerances }
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
    setSaveError(false);
    setSelections((prev) => ({ ...prev, [type]: tolerates }));
  };

  const configuredCount = Object.values(selections).filter((v) => v !== null).length;
  const allConfigured = configuredCount === 6;

  const handleContinue = () => {
    if (!allConfigured) return;

    const newProfile = {
      fodmapIntolerances: selections as Record<FODMAPType, boolean>,
      createdAt: initialProfile?.createdAt || new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
    };

    const saved = updateProfile(newProfile);
    if (!saved) {
      setSaveError(true);
      return;
    }

    setSaveError(false);
    navigate('/explorer');
  };

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      {/* Header */}
      <header className='sticky top-0 z-10 border-b border-border bg-card/80 backdrop-blur-sm'>
        <div className='container mx-auto flex items-center px-4 py-4'>
          <Button
            asChild={true}
            className='inline-flex items-center gap-2 border border-border bg-transparent text-muted-foreground transition-colors hover:text-foreground'
          >
            <Link to='/'>
              <ArrowLeft className='h-4 w-4' />
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </header>

      <main className='mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mx-auto flex flex-col justify-center p-6 sm:px-6 lg:px-8'>
          <h1 className='py-4 text-center text-3xl font-bold text-foreground'>
            {content.profile.header.title}
          </h1>
          <p className='text-center text-lg text-muted-foreground'>
            {content.profile.header.subtitle}
          </p>
        </div>

        {/* Progress */}
        <div className='mb-8'>
          <div className='mb-2 flex items-center justify-between'>
            <span className='text-sm font-medium text-foreground'>
              {content.profile.progress.label}
            </span>
            <span className='text-sm font-semibold text-primary'>{configuredCount}/6</span>
          </div>
          <div className='h-2 overflow-hidden rounded-full bg-muted'>
            <div
              className='h-full bg-primary transition-all duration-300'
              style={{ width: `${(configuredCount / 6) * 100}%` }}
            />
          </div>
        </div>

        {/* Instructions */}
        <div className='mb-8 rounded-xl border border-border bg-card p-6'>
          <p className='leading-relaxed text-foreground'>{content.profile.disclaimer.content}</p>
        </div>

        {/* FODMAP Cards */}
        <div className='mb-8 space-y-4'>
          {fodmapTypes.map(({ type, info }) => (
            <div
              key={type}
              className='rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md'
            >
              <h3 className='mb-2 text-xl font-bold text-foreground'>{info.name}</h3>
              <p className='mb-4 text-muted-foreground'>{info.description}</p>
              <p className='mb-4 text-sm text-muted-foreground'>
                <span className='font-semibold'>Exemples:</span> {info.examples}
              </p>

              {/* Toggle Buttons */}
              <div
                role='group'
                aria-label={`Configuration pour ${info.name}`}
                className='grid grid-cols-2 gap-3'
              >
                <button
                  onClick={() => handleToggle(type, true)}
                  className={cn(
                    'flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-4 py-3 font-semibold transition-all',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                    selections[type] === true
                      ? 'scale-105 bg-success text-success-foreground shadow-md'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  )}
                  aria-pressed={selections[type] === true}
                >
                  <Check className='h-5 w-5' />
                  <span>{content.profile.toggleButtons.tolerate}</span>
                </button>

                <button
                  onClick={() => handleToggle(type, false)}
                  className={cn(
                    'flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-4 py-3 font-semibold transition-all',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                    selections[type] === false
                      ? 'scale-105 bg-destructive text-destructive-foreground shadow-md'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  )}
                  aria-pressed={selections[type] === false}
                >
                  <X className='h-5 w-5' />
                  <span>{content.profile.toggleButtons.avoid}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className='sticky bottom-0 border-t border-border bg-background/95 py-6 backdrop-blur-sm'>
          {saveError && (
            <p
              className='mb-3 rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive'
              role='alert'
            >
              {content.profile.validation.saveFailed}
            </p>
          )}
          <Button
            onClick={handleContinue}
            disabled={!allConfigured}
            size='lg'
            className='w-full'
            aria-label={content.profile.continueButton.label}
          >
            {content.profile.continueButton.label}
          </Button>
          {!allConfigured && (
            <p className='mt-3 text-center text-sm text-muted-foreground'>
              {content.profile.validation.incomplete}
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function Profile() {
  const { profile, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-background px-4'>
        <p className='text-center text-muted-foreground' role='status'>
          {content.common.loading.profile}
        </p>
      </div>
    );
  }

  return <ProfileEditor initialProfile={profile} />;
}
