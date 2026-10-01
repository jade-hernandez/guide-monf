import { Link } from 'react-router-dom';

import { content } from '../config/content';

export const Footer = () => {
  return (
    <footer className='mt-auto border-t border-border bg-card'>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='flex flex-col justify-between gap-6 md:flex-row md:items-start'>
          <div className='max-w-sm'>
            <p className='font-editorial text-2xl font-semibold text-foreground'>MonGuide FODMAP</p>
            <p className='mt-2 text-sm leading-6 text-muted-foreground'>
              Projet éducatif à des fins d’information uniquement. Ne remplace pas les conseils
              médicaux professionnels.
            </p>
          </div>

          <div className='flex flex-wrap gap-x-6 gap-y-3 text-sm'>
            <Link
              to='/methodology'
              className='rounded text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-8'
            >
              Méthodologie
            </Link>
            <Link
              to='/legal'
              className='rounded text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-8'
            >
              Mentions légales
            </Link>
            <Link
              to='/about'
              className='rounded text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-8'
            >
              À propos
            </Link>
            <a
              href='https://www.linkedin.com/in/hernandez-jade/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-8'
            >
              LinkedIn
            </a>
            <a
              href='https://github.com/jade-hernandez/guide-monf'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-8'
            >
              GitHub
            </a>
          </div>
        </div>

        <div className='mt-8 border-t border-border pt-5 text-xs text-muted-foreground'>
          <p>{content.footer.bottomBar.copyright} &copy; 2026</p>
        </div>
      </div>
    </footer>
  );
};
