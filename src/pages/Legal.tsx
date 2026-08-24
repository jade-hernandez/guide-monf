import { Link } from 'react-router-dom';

import { AlertTriangle, ArrowLeft } from 'lucide-react';

import { Footer } from '../components/Footer';
import { SiteHeader } from '../components/SiteHeader';
import { content } from '../config/content';
import { emergencyContacts, fullLegalText } from '../config/disclaimers';

export default function Legal() {
  const sections = fullLegalText.split('## ').filter(Boolean);

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

      <main className='flex-1'>
        <section className='border-b border-border bg-card'>
          <div className='mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16'>
            <p className='mb-3 text-sm font-semibold uppercase text-primary'>Cadre d’utilisation</p>
            <h1 className='font-editorial text-5xl font-semibold leading-tight text-foreground sm:text-6xl'>
              {content.legal.mainContent.title}
            </h1>
            <p className='mt-4 text-muted-foreground'>{content.legal.mainContent.lastUpdated}</p>
          </div>
        </section>

        <div className='mx-auto max-w-4xl space-y-10 px-4 py-12 sm:px-6 sm:py-16'>
          <section className='border-l-2 border-destructive bg-destructive/10 p-6'>
            <div className='flex items-start gap-3'>
              <AlertTriangle
                className='mt-1 h-6 w-6 flex-shrink-0 text-destructive'
                aria-hidden='true'
              />
              <div>
                <h2 className='mb-2 font-semibold text-foreground'>
                  {content.legal.emergencyContacts.title}
                </h2>
                <div className='space-y-1 text-sm'>
                  <p>
                    <strong>SAMU :</strong> {emergencyContacts.samu.number} -{' '}
                    {emergencyContacts.samu.description}
                  </p>
                  <p>
                    <strong>Pompiers :</strong> {emergencyContacts.pompiers.number} -{' '}
                    {emergencyContacts.pompiers.description}
                  </p>
                  <p>
                    <strong>Urgences :</strong> {emergencyContacts.urgences.number} -{' '}
                    {emergencyContacts.urgences.description}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className='prose prose-sm max-w-none'>
            {sections.map((section, index) => {
              const lines = section.trim().split('\n');
              const title = lines[0]?.replace(/^#+\s*/, '');
              const content = lines.slice(1).join('\n').trim();

              return (
                <section key={index} className='border-t border-border py-7'>
                  <h2 className='font-editorial mb-4 text-2xl font-semibold text-foreground'>
                    {title}
                  </h2>
                  <div className='whitespace-pre-line leading-relaxed text-muted-foreground'>
                    {content}
                  </div>
                </section>
              );
            })}
          </div>

          <div className='border-l-2 border-primary bg-primary/5 p-6'>
            <p className='text-sm text-foreground'>{content.legal.acceptanceNotice.content}</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
