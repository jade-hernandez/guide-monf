import { Link, useNavigate } from 'react-router-dom';

import { ArrowRight, Check, Info, ShieldCheck } from 'lucide-react';
import { useReducedMotion } from 'motion/react';

import { Footer } from '../components/Footer';
import { SiteHeader } from '../components/SiteHeader';
import { Button } from '../components/ui/button';
import { content } from '../config/content';

export default function Landing() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className='landing-page flex min-h-screen flex-col bg-background'>
      <SiteHeader>
        <nav className='flex items-center gap-2 sm:gap-5' aria-label='Navigation principale'>
          <Link
            to='/methodology'
            className='hidden min-h-[44px] items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:inline-flex'
          >
            Méthodologie
          </Link>
          <Button size='sm' onClick={() => navigate('/profile')}>
            Commencer
          </Button>
        </nav>
      </SiteHeader>

      <main className='flex-1'>
        <section className='border-b border-border'>
          <div className='mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:gap-10 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center lg:px-8 lg:py-14'>
            <div className='max-w-xl'>
              <p className='mb-4 text-sm font-semibold uppercase text-primary'>
                Projet frontend éducatif
              </p>
              <h1 className='font-editorial text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl'>
                {content.landing.hero.title}
              </h1>
              <p className='mt-6 text-xl leading-8 text-foreground'>
                <span className='sm:hidden'>Comparez votre profil à 104 aliments.</span>
                <span className='hidden sm:inline'>
                  Comparez un profil FODMAP personnel à un jeu local de 104 aliments.
                </span>
              </p>
              <p className='mt-3 max-w-lg leading-7 text-muted-foreground'>
                <span className='sm:hidden'>
                  Un repère après réintroduction, sans diagnostic ni garantie de tolérance.
                </span>
                <span className='hidden sm:inline'>
                  Un outil de lecture conçu pour les personnes qui connaissent déjà leurs résultats
                  de réintroduction. Il ne formule aucun diagnostic et ne garantit aucune tolérance.
                </span>
              </p>

              <div className='mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:items-center sm:gap-3'>
                <Button size='lg' onClick={() => navigate('/profile')} className='gap-2'>
                  {content.landing.hero.cta}
                  <ArrowRight className='h-5 w-5' aria-hidden='true' />
                </Button>
                <button
                  type='button'
                  onClick={() => {
                    document.getElementById('what-are-fodmaps')?.scrollIntoView({
                      behavior: shouldReduceMotion ? 'auto' : 'smooth',
                    });
                  }}
                  className='min-h-[44px] px-3 text-left text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                >
                  En savoir plus
                </button>
              </div>

              <ul className='mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground sm:mt-8'>
                {['Sans compte', '104 aliments', 'Profil enregistré localement'].map((item) => (
                  <li
                    key={item}
                    className={
                      item === 'Profil enregistré localement'
                        ? 'hidden items-center gap-2 sm:flex'
                        : 'flex items-center gap-2'
                    }
                  >
                    <Check className='h-4 w-4 text-primary' aria-hidden='true' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <figure className='overflow-hidden rounded-lg border border-border bg-card shadow-lg'>
              <img
                src='/assets/explorer-preview.jpg'
                alt='Explorateur MonGuide FODMAP affichant la recherche, les filtres et des cartes aliments'
                className='h-28 w-full object-cover object-top sm:h-80 lg:h-[31rem]'
                width='1440'
                height='900'
              />
              <figcaption className='hidden border-t border-border px-4 py-3 text-xs leading-5 text-muted-foreground sm:block'>
                Une comparaison relative au profil enregistré, jamais une promesse de tolérance.
              </figcaption>
            </figure>
          </div>
        </section>

        <section id='what-are-fodmaps' className='bg-primary-900 text-white'>
          <div className='mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8'>
            <div>
              <p className='mb-3 text-sm font-semibold uppercase text-primary-200'>Le contexte</p>
              <h2 className='font-editorial text-4xl font-semibold leading-tight sm:text-5xl'>
                {content.landing.whatAreFodmaps.title}
              </h2>
            </div>
            <div className='max-w-3xl'>
              <p className='text-lg leading-8 text-primary-50'>
                {content.landing.whatAreFodmaps.paragraphs[0]}
              </p>
              <p className='mt-5 leading-7 text-primary-100'>
                Ce guide intervient après une réintroduction encadrée : il compare les six réponses
                de votre profil aux familles enregistrées pour chaque aliment.
              </p>
              <ul
                className='mt-7 flex flex-wrap gap-2'
                aria-label='Les six catégories FODMAP du profil'
              >
                {['Fructanes', 'Galactanes', 'Lactose', 'Fructose', 'Mannitol', 'Sorbitol'].map(
                  (type) => (
                    <li
                      key={type}
                      className='rounded-md border border-primary-700 bg-primary-800 px-3 py-1.5 text-sm text-primary-50'
                    >
                      {type}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>

        <section className='border-b border-border bg-card'>
          <div className='mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8'>
            <div className='max-w-2xl'>
              <p className='mb-3 text-sm font-semibold uppercase text-primary'>Le parcours</p>
              <h2 className='font-editorial text-4xl font-semibold text-foreground sm:text-5xl'>
                {content.landing.howItWorks.title}
              </h2>
            </div>
            <ol className='mt-10 grid gap-8 md:grid-cols-3'>
              {content.landing.howItWorks.steps.map((step) => (
                <li key={step.number} className='border-t-2 border-primary pt-5'>
                  <span className='text-sm font-semibold text-primary'>0{step.number}</span>
                  <h3 className='mt-4 text-xl font-semibold text-foreground'>{step.title}</h3>
                  <p className='mt-3 leading-7 text-muted-foreground'>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className='mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8'>
          <div>
            <p className='mb-3 text-sm font-semibold uppercase text-primary'>
              À qui s’adresse-t-il ?
            </p>
            <h2 className='font-editorial text-4xl font-semibold leading-tight text-foreground'>
              Un repère après la réintroduction
            </h2>
            <ul className='mt-7 space-y-4'>
              {content.landing.whoIsThisFor.criteria.map((criterion) => (
                <li key={criterion} className='flex items-start gap-3 text-muted-foreground'>
                  <Check className='mt-1 h-5 w-5 shrink-0 text-primary' aria-hidden='true' />
                  <span className='leading-7'>{criterion}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='border-l-2 border-caution bg-caution/5 px-6 py-7 sm:px-8'>
            <ShieldCheck className='h-7 w-7 text-caution-dark' aria-hidden='true' />
            <h2 className='mt-5 text-2xl font-semibold text-foreground'>
              {content.landing.disclaimer.title}
            </h2>
            <p className='mt-4 leading-7 text-muted-foreground'>
              {content.landing.disclaimer.content}
            </p>
            <Link
              to='/methodology'
              className='mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4'
            >
              <Info className='h-4 w-4' aria-hidden='true' />
              Lire la méthodologie et les limites
            </Link>
          </div>
        </section>

        <section className='border-t border-border bg-primary-50'>
          <div className='mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center lg:px-8'>
            <div>
              <p className='text-sm font-semibold uppercase text-primary'>Prêt à explorer ?</p>
              <h2 className='font-editorial mt-2 text-3xl font-semibold text-foreground sm:text-4xl'>
                Commencez par vos six réponses.
              </h2>
            </div>
            <Button size='lg' onClick={() => navigate('/profile')} className='gap-2'>
              Configurer mon profil
              <ArrowRight className='h-5 w-5' aria-hidden='true' />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
