import { Link } from 'react-router-dom';

import { Github, Linkedin } from 'lucide-react';

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
            <Link to='/methodology' className='text-muted-foreground hover:text-foreground'>
              Méthodologie
            </Link>
            <Link to='/legal' className='text-muted-foreground hover:text-foreground'>
              Mentions légales
            </Link>
            <Link to='/about' className='text-muted-foreground hover:text-foreground'>
              À propos
            </Link>
            <a
              href='https://www.linkedin.com/in/hernandez-jade/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground'
            >
              <Linkedin className='h-4 w-4' aria-hidden='true' />
              LinkedIn
            </a>
            <a
              href='https://github.com/jade-hernandez/guide-monf'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground'
            >
              <Github className='h-4 w-4' aria-hidden='true' />
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
