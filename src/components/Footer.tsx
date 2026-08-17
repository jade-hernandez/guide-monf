import { Link } from 'react-router-dom';

import { BookOpen, Database, FileText, Github, Info, Linkedin } from 'lucide-react';

import { content } from '../config/content';

export const Footer = () => {
  return (
    <footer className='mt-auto border-t border-border bg-card/50 backdrop-blur-sm'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col justify-around gap-6 text-sm md:flex-row'>
          {/* Legal & Info */}
          <div className='space-y-3'>
            <h3 className='font-semibold text-foreground'>{content.footer.infoLegal.title}</h3>
            <nav className='flex flex-col space-y-2'>
              <Link
                to='/legal'
                className='flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground'
              >
                <FileText className='h-4 w-4' />
                {content.footer.infoLegal.legalLinkText}
              </Link>
              <Link
                to='/about'
                className='flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground'
              >
                <Info className='h-4 w-4' />
                {content.footer.infoLegal.about}
              </Link>
              <Link
                to='/methodology'
                className='flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground'
              >
                <BookOpen className='h-4 w-4' />
                {content.footer.infoLegal.methodology}
              </Link>
            </nav>
          </div>

          {/* Educational resource */}
          <div className='space-y-3'>
            <h3 className='font-semibold text-foreground'>{content.footer.dataSources.title}</h3>
            <div className='space-y-1 text-muted-foreground'>
              <div className='flex items-start gap-2'>
                <Database className='mt-0.5 h-4 w-4 flex-shrink-0' />
                <div>
                  <a
                    href='https://www.monashfodmap.com/about-fodmap-and-ibs/high-and-low-fodmap-foods/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground'
                  >
                    {content.footer.dataSources.monash.name}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className='space-y-3'>
            <h3 className='font-semibold text-foreground'>{content.footer.contact.title}</h3>
            <div className='space-y-2 text-muted-foreground'>
              <a
                href='https://www.linkedin.com/in/hernandez-jade/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground'
              >
                <Linkedin className='h-4 w-4' />
                LinkedIn
              </a>
              <a
                href='https://github.com/jade-hernandez/guide-monf'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground'
              >
                <Github className='h-4 w-4' />
                {content.footer.contact.github}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground'>
          <p>{content.footer.bottomBar.copyright} &copy; 2026</p>
          <p className='mt-1'>{content.footer.bottomBar.medicalDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
};
