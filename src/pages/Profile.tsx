import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ArrowLeft, Check, X } from 'lucide-react';

import { Footer } from '../components/Footer';
import { SiteHeader } from '../components/SiteHeader';
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
      <SiteHeader>
        <Link
          to='/'
          className='inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
          aria-label='Retour à l’accueil'
        >
          <ArrowLeft className='h-4 w-4' aria-hidden='true' />
          <span className='sr-only sm:not-sr-only'>Accueil</span>
        </Link>
      </SiteHeader>

      <main className='mx-auto grid w-full max-w-7xl flex-1 gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:px-8 lg:py-12'>
        <aside className='lg:sticky lg:top-28 lg:self-start'>
          <p className='mb-3 text-sm font-semibold uppercase text-primary'>Votre profil</p>
          <h1 className='font-editorial text-4xl font-semibold leading-tight text-foreground sm:text-5xl'>
            {content.profile.header.title}
          </h1>
          <p className='mt-5 max-w-xl text-lg leading-8 text-muted-foreground'>
            {content.profile.header.subtitle}
          </p>

          <div className='mt-8 max-w-xl'>
            <div className='mb-2 flex items-center justify-between'>
              <span className='text-sm font-medium text-foreground'>
                {content.profile.progress.label}
              </span>
              <span className='text-sm font-semibold text-primary'>{configuredCount}/6</span>
            </div>
            <div
              className='h-2 overflow-hidden rounded-full bg-muted'
              role='progressbar'
              aria-label={content.profile.progress.label}
              aria-valuemin={0}
              aria-valuemax={6}
              aria-valuenow={configuredCount}
            >
              <div
                className='h-full bg-primary transition-[width] duration-300'
                style={{ width: `${(configuredCount / 6) * 100}%` }}
              />
            </div>
          </div>

          <div className='mt-8 max-w-xl border-l-2 border-primary/30 pl-5'>
            <p className='text-sm leading-6 text-muted-foreground'>
              {content.profile.disclaimer.content}
            </p>
          </div>
        </aside>

        <section aria-label='Choix FODMAP'>
          <div className='space-y-3'>
            {fodmapTypes.map(({ type, info }) => (
              <article
                key={type}
                className='grid gap-5 rounded-lg border border-border bg-card p-5 sm:grid-cols-[minmax(0,1fr)_minmax(17rem,0.8fr)] sm:items-center'
              >
                <div>
                  <h2 className='text-lg font-semibold text-foreground'>{info.name}</h2>
                  <p className='mt-1 text-sm leading-6 text-muted-foreground'>{info.description}</p>
                  <p className='mt-2 text-xs leading-5 text-muted-foreground'>
                    <span className='font-semibold text-foreground'>Exemples :</span>{' '}
                    {info.examples}
                  </p>
                </div>

                <div
                  role='group'
                  aria-label={`Configuration pour ${info.name}`}
                  className='grid grid-cols-2 gap-2'
                >
                  <button
                    onClick={() => handleToggle(type, true)}
                    className={cn(
                      'flex min-h-[44px] items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                      selections[type] === true
                        ? 'border-success bg-success text-success-foreground'
                        : 'border-border bg-background text-foreground hover:border-success/50 hover:bg-success/5'
                    )}
                    aria-pressed={selections[type] === true}
                  >
                    <Check className='h-4 w-4' aria-hidden='true' />
                    <span>{content.profile.toggleButtons.tolerate}</span>
                  </button>

                  <button
                    onClick={() => handleToggle(type, false)}
                    className={cn(
                      'flex min-h-[44px] items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                      selections[type] === false
                        ? 'border-destructive bg-destructive text-destructive-foreground'
                        : 'border-border bg-background text-foreground hover:border-destructive/50 hover:bg-destructive/5'
                    )}
                    aria-pressed={selections[type] === false}
                  >
                    <X className='h-4 w-4' aria-hidden='true' />
                    <span>{content.profile.toggleButtons.avoid}</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className='mt-5 border-t border-border bg-background/95 py-4 backdrop-blur-sm sm:sticky sm:bottom-0'>
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
        </section>
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
