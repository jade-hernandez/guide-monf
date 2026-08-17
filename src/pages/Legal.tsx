import { Link } from 'react-router-dom';

import { AlertTriangle, ArrowLeft } from 'lucide-react';

import { Footer } from '../components/Footer';
import { content } from '../config/content';
import { emergencyContacts, fullLegalText } from '../config/disclaimers';

export default function Legal() {
  const sections = fullLegalText.split('## ').filter(Boolean);

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      {/* Header */}
      <header className='sticky top-0 z-10 border-b border-border bg-card/80 backdrop-blur-sm'>
        <div className='container mx-auto px-4 py-4'>
          <Link
            to='/'
            className='inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground'
          >
            <ArrowLeft className='h-4 w-4' />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className='container mx-auto max-w-3xl flex-1 px-4 py-8'>
        <div className='space-y-8'>
          {/* Title */}
          <div>
            <h1 className='mb-2 text-3xl font-bold text-foreground md:text-4xl'>
              {content.legal.mainContent.title}
            </h1>
            <p className='text-muted-foreground'>{content.legal.mainContent.lastUpdated}</p>
          </div>

          {/* Emergency Alert */}
          <div className='rounded-lg border border-destructive/20 bg-destructive/10 p-6'>
            <div className='flex items-start gap-3'>
              <AlertTriangle className='mt-1 h-6 w-6 flex-shrink-0 text-destructive' />
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
          </div>

          {/* Legal Sections */}
          <div className='prose prose-sm max-w-none space-y-6'>
            {sections.map((section, index) => {
              const lines = section.trim().split('\n');
              const title = lines[0]?.replace(/^#+\s*/, '');
              const content = lines.slice(1).join('\n').trim();

              return (
                <section key={index} className='rounded-lg border border-border bg-card p-6'>
                  <h2 className='mb-4 text-xl font-semibold text-foreground'>{title}</h2>
                  <div className='whitespace-pre-line leading-relaxed text-muted-foreground'>
                    {content}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Acceptance Notice */}
          <div className='rounded-lg border border-primary/20 bg-primary/5 p-6'>
            <p className='text-sm text-foreground'>{content.legal.acceptanceNotice.content}</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
