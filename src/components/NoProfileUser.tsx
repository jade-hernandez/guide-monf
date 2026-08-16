import { useNavigate } from 'react-router-dom';

import { Button } from '../components/ui/button';

export function NoProfileUser() {
  const navigate = useNavigate();

  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold text-foreground'>Oops!</h1>
      <p className='mt-2 text-muted-foreground'>
        Vous devez remplir votre profile avant d'explorer les aliments.
      </p>
      <Button variant='destructive' className='mt-4' onClick={() => navigate('/profile')}>
        Remplir mon profile
      </Button>
    </main>
  );
}
