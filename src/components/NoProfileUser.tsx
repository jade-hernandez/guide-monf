import { useNavigate } from 'react-router-dom';

import { ArrowRight, SearchX } from 'lucide-react';

import { Footer } from '../components/Footer';
import { SiteHeader } from '../components/SiteHeader';
import { Button } from '../components/ui/button';

export function NoProfileUser() {
  const navigate = useNavigate();

  return (
    <div className='flex min-h-screen flex-col bg-background'>
      <SiteHeader />
      <main className='mx-auto flex w-full max-w-3xl flex-1 flex-col items-start justify-center px-4 py-16 sm:px-6'>
        <SearchX className='h-9 w-9 text-primary' aria-hidden='true' />
        <p className='mt-6 text-sm font-semibold uppercase text-primary'>Profil requis</p>
        <h1 className='font-editorial mt-2 text-5xl font-semibold leading-tight text-foreground sm:text-6xl'>
          Commencez par vos six réponses.
        </h1>
        <p className='mt-5 max-w-xl text-lg leading-8 text-muted-foreground'>
          L’Explorateur a besoin d’un profil enregistré pour comparer les aliments aux familles
          FODMAP que vous avez marquées comme étant à éviter.
        </p>
        <Button className='mt-8 gap-2' size='lg' onClick={() => navigate('/profile')}>
          Remplir mon profile
          <ArrowRight className='h-5 w-5' aria-hidden='true' />
        </Button>
      </main>
      <Footer />
    </div>
  );
}
