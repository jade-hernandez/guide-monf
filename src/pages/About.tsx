import { Link } from 'react-router-dom';

import { ArrowLeft, Heart } from 'lucide-react';

import { Footer } from '../components/Footer';
import { SiteHeader } from '../components/SiteHeader';
import { content } from '../config/content';

export default function About() {
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
            <p className='mb-3 text-sm font-semibold uppercase text-primary'>Le projet</p>
            <h1 className='font-editorial text-5xl font-semibold leading-tight text-foreground sm:text-6xl'>
              {content.about.mainContent.title}
            </h1>
          </div>
        </section>

        <div className='mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16'>
          <section className='grid gap-5 border-b border-border pb-10 sm:grid-cols-[3rem_1fr]'>
            <div className='mb-4 flex items-start gap-3'>
              <Heart className='h-7 w-7 flex-shrink-0 text-primary' aria-hidden='true' />
            </div>
            <div>
              <h2 className='font-editorial text-3xl font-semibold text-foreground'>
                {content.about.mission.title}
              </h2>
              <p className='mt-4 leading-7 text-muted-foreground'>
                {content.about.mission.content}
              </p>
            </div>
          </section>

          <section className='pt-10'>
            <h2 className='font-editorial text-3xl font-semibold text-foreground'>
              {content.about.why.title}
            </h2>
            <p className='mt-4 max-w-3xl leading-7 text-muted-foreground'>
              {content.about.why.content}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
