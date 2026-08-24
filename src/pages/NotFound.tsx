import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ArrowLeft } from 'lucide-react';

import { Footer } from '../components/Footer';
import { SiteHeader } from '../components/SiteHeader';
import { Button } from '../components/ui/button';
import { content } from '../config/content';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      'Erreur 404 : L’utilisateur a tenté d’accéder à une route inexistante:',
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <SiteHeader />
      <main className='mx-auto flex w-full max-w-3xl flex-1 flex-col items-start justify-center px-4 py-16 sm:px-6'>
        <p className='text-sm font-semibold uppercase text-primary'>Page introuvable</p>
        <h1 className='font-editorial mt-2 text-7xl font-semibold text-foreground sm:text-8xl'>
          {content.notFound.title}
        </h1>
        <p className='mt-4 text-xl leading-8 text-muted-foreground'>{content.notFound.subtitle}</p>
        <Button asChild={true} className='mt-8 gap-2'>
          <Link to='/'>
            <ArrowLeft className='h-4 w-4' aria-hidden='true' />
            {content.notFound.cta}
          </Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
