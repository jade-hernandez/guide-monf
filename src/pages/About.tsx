import { Link } from 'react-router-dom';

import { ArrowLeft, Heart } from 'lucide-react';

import { Footer } from '../components/Footer';
import { content } from '../config/content';

export default function About() {
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
      <main className='container mx-auto max-w-4xl flex-1 px-4 py-8'>
        <div className='space-y-8'>
          {/* Title */}
          <div>
            <h1 className='mb-4 text-3xl font-bold text-foreground md:text-4xl'>
              {content.about.mainContent.title}
            </h1>
          </div>

          {/* Mission */}
          <section className='rounded-lg border border-border bg-card p-6'>
            <div className='mb-4 flex items-start gap-3'>
              <Heart className='h-6 w-6 flex-shrink-0 text-primary' />
              <h2 className='text-xl font-semibold text-foreground'>
                {content.about.mission.title}
              </h2>
            </div>
            <p className='leading-relaxed text-muted-foreground'>{content.about.mission.content}</p>
          </section>

          {/* Why This Project */}
          <section className='rounded-lg border border-border bg-card p-6'>
            <h2 className='mb-4 text-xl font-semibold text-foreground'>
              {content.about.why.title}
            </h2>
            <p className='leading-relaxed text-muted-foreground'>{content.about.why.content}</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
