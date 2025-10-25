import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';
import { AlertTriangle, Check, Heart, Search, Sparkles } from 'lucide-react';

import { content } from '@/config/content';

import { Button } from '@/components/ui/button';

import { Footer } from '@/components/Footer';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const, // Custom easing for smooth effect
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section - Enhanced with animations */}
      <section className='from-primary-100 via-background-cream to-primary-50 relative overflow-hidden bg-gradient-to-br'>
        {/* Decorative background elements - Animated blobs */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='animate-blob absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emerald-300 opacity-40 mix-blend-multiply blur-3xl'></div>
          <div className='animate-blob animation-delay-2000 absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-emerald-400 opacity-40 mix-blend-multiply blur-3xl'></div>
          <div className='animate-blob animation-delay-4000 bg-primary-500 absolute left-[calc(50%-12rem)] top-[calc(50%-12rem)] h-96 w-96 rounded-full opacity-30 mix-blend-multiply blur-3xl'></div>
        </div>

        <div className='relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32'>
          <motion.div
            className='text-center'
            initial='hidden'
            animate='visible'
            variants={staggerContainer}
          >
            {/* Badge/Label - Animated */}
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className='bg-primary-100 text-primary-900 border-primary-300 mb-6 inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-semibold shadow-sm'
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className='text-primary-700 h-4 w-4' />
              </motion.div>
              Votre guide alimentaire personnalisé
            </motion.div>

            {/* Main Headline - Animated */}
            <motion.h1
              variants={fadeInUp}
              className='mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl'
            >
              {content.landing.hero.title}
            </motion.h1>

            {/* Subtitle - Animated */}
            <motion.p
              variants={fadeInUp}
              className='mx-auto mb-10 max-w-2xl text-xl font-medium leading-relaxed text-gray-700'
            >
              {content.landing.hero.subtitle}
            </motion.p>

            {/* CTA Buttons - Animated */}
            <motion.div
              variants={fadeInUp}
              className='flex flex-col items-center justify-center gap-4 sm:flex-row'
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button
                  size='lg'
                  onClick={() => navigate('/profile')}
                  className='bg-primary-600 hover:bg-primary-700 h-auto px-8 py-6 text-lg font-semibold text-white shadow-xl transition-all duration-200'
                >
                  {content.landing.hero.cta}
                </Button>
              </motion.div>

              <motion.button
                onClick={() => {
                  document.getElementById('what-are-fodmaps')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className='text-primary-800 hover:text-primary-900 text-lg font-semibold underline underline-offset-4 transition-all'
              >
                En savoir plus →
              </motion.button>
            </motion.div>

            {/* Trust Indicators - Staggered animation */}
            <motion.div
              variants={staggerContainer}
              className='mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600'
            >
              {['Basé sur la recherche Monash', '100% gratuit', 'Aucune publicité'].map(
                (text, idx) => (
                  <motion.div
                    key={idx}
                    variants={staggerItem}
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className='border-border-light flex items-center gap-2 rounded-full border bg-white/60 px-4 py-2 backdrop-blur-sm'
                  >
                    <div className='h-2 w-2 animate-pulse rounded-full bg-success'></div>
                    <span>{text}</span>
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What are FODMAPs - Scroll-triggered animations */}
      <section id='what-are-fodmaps' className='bg-white py-20 sm:py-28'>
        <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
          {/* Section header */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className='mb-12 text-center'
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='bg-primary-100 text-primary-700 border-primary-200 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border-2'
            >
              <Search className='h-8 w-8' />
            </motion.div>
            <h2 className='mb-4 text-3xl font-bold text-foreground sm:text-4xl'>
              {content.landing.whatAreFodmaps.title}
            </h2>
          </motion.div>

          {/* Content cards - Staggered */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className='space-y-6'
          >
            {content.landing.whatAreFodmaps.paragraphs.map((paragraph, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                whileHover={{ x: 4, boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className='hover:border-primary-300 border-border-light rounded-2xl border bg-gray-50 p-6 transition-all sm:p-8'
              >
                <p className='text-lg leading-relaxed text-gray-800'>{paragraph}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* FODMAP boxes - Grid animation */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className='mt-12 grid grid-cols-2 gap-4 md:grid-cols-3'
          >
            {[
              {
                name: 'Fructanes',
                bg: 'bg-emerald-100',
                text: 'text-emerald-900',
                border: 'border-emerald-300',
              },
              {
                name: 'Galactanes',
                bg: 'bg-purple-100',
                text: 'text-purple-900',
                border: 'border-purple-300',
              },
              {
                name: 'Lactose',
                bg: 'bg-cyan-100',
                text: 'text-cyan-900',
                border: 'border-cyan-300',
              },
              {
                name: 'Fructose',
                bg: 'bg-orange-100',
                text: 'text-orange-900',
                border: 'border-orange-300',
              },
              {
                name: 'Mannitol',
                bg: 'bg-pink-100',
                text: 'text-pink-900',
                border: 'border-pink-300',
              },
              {
                name: 'Sorbitol',
                bg: 'bg-indigo-100',
                text: 'text-indigo-900',
                border: 'border-indigo-300',
              },
            ].map((fodmap) => (
              <motion.div
                key={fodmap.name}
                variants={staggerItem}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.2)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className={`${fodmap.bg} ${fodmap.text} ${fodmap.border} cursor-pointer rounded-xl border-2 px-4 py-3 text-center text-sm font-bold shadow-sm`}
              >
                {fodmap.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works - Card animations */}
      <section className='from-primary-50 bg-gradient-to-br via-emerald-50 to-background py-20 sm:py-28'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          {/* Section header */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className='mb-16 text-center'
          >
            <h2 className='mb-4 text-3xl font-bold text-foreground sm:text-4xl'>
              {content.landing.howItWorks.title}
            </h2>
            <p className='mx-auto max-w-2xl text-xl font-medium text-gray-700'>
              {content.landing.howItWorks.subtitle}
            </p>
          </motion.div>

          {/* Steps - Staggered cards */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className='grid gap-8 md:grid-cols-3'
          >
            {content.landing.howItWorks.steps.map((step, idx) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className='group relative'
              >
                {/* Connector line */}
                {idx < 2 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + idx * 0.2 }}
                    className='from-primary-300 to-primary-200 absolute left-full top-7 -mr-8 hidden h-1 w-8 origin-left bg-gradient-to-r md:block'
                  />
                )}

                {/* Card */}
                <motion.div
                  className='hover:border-primary-300 relative h-full rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-md transition-all duration-200'
                  whileHover={{ boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.15)' }}
                >
                  {/* Number badge */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='from-primary-600 to-primary-700 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl font-bold text-white shadow-lg'
                  >
                    {step.number}
                  </motion.div>

                  {/* Content */}
                  <h3 className='mb-4 text-xl font-bold text-foreground'>{step.title}</h3>
                  <p className='leading-relaxed text-gray-700'>{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA after steps */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='mt-12 text-center'
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                size='lg'
                onClick={() => navigate('/profile')}
                variant='outline'
                className='border-primary-600 text-primary-700 hover:bg-primary-600 border-2 font-semibold shadow-md transition-all hover:text-white'
              >
                Commencer maintenant
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who is this for - List animations */}
      <section className='bg-white py-20 sm:py-28'>
        <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
          {/* Section header */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className='mb-12 text-center'
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className='text-success-dark mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-success/30 bg-success/20'
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <Heart className='h-8 w-8' />
              </motion.div>
            </motion.div>
            <h2 className='text-3xl font-bold text-foreground sm:text-4xl'>
              {content.landing.whoIsThisFor.title}
            </h2>
          </motion.div>

          {/* Criteria list - Staggered */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className='space-y-4'
          >
            {content.landing.whoIsThisFor.criteria.map((criterion, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                whileHover={{ x: 8, boxShadow: '0 10px 40px -10px rgba(34, 197, 94, 0.3)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className='group flex items-start gap-4 rounded-xl border-2 border-success/30 bg-success/10 p-5 transition-all'
              >
                <motion.div
                  className='mt-1 flex-shrink-0'
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className='flex h-8 w-8 items-center justify-center rounded-full bg-success text-white shadow-md'>
                    <Check className='h-5 w-5 stroke-[3]' />
                  </div>
                </motion.div>
                <p className='pt-0.5 text-lg font-medium leading-relaxed text-gray-800'>
                  {criterion}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Medical Disclaimer - Attention-grabbing animation */}
      <section className='border-t-2 border-caution/40 bg-gradient-to-br from-amber-50 via-orange-50 to-background py-16'>
        <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className='rounded-2xl border-2 border-caution/40 bg-white p-8 shadow-xl'
          >
            <div className='flex items-start gap-5'>
              <motion.div
                className='flex-shrink-0'
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              >
                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-caution text-white shadow-lg'>
                  <AlertTriangle className='h-7 w-7' />
                </div>
              </motion.div>
              <div className='flex-1'>
                <h2 className='mb-4 text-2xl font-bold text-foreground'>
                  {content.landing.disclaimer.title}
                </h2>
                <p className='text-lg leading-relaxed text-gray-800'>
                  {content.landing.disclaimer.content}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer - Final animated push */}
      <section className='from-primary-100 to-primary-50 bg-gradient-to-br via-emerald-100 py-20 text-center sm:py-28'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={staggerContainer}
          className='mx-auto max-w-2xl px-4 sm:px-6 lg:px-8'
        >
          <motion.h2
            variants={fadeInUp}
            className='mb-6 text-3xl font-bold text-foreground sm:text-4xl'
          >
            {content.landing.ctaFooter.title}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className='mb-10 text-xl font-medium leading-relaxed text-gray-700'
          >
            {content.landing.ctaFooter.subtitle}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Button
              size='lg'
              onClick={() => navigate('/profile')}
              className='hover:shadow-3xl bg-primary-600 hover:bg-primary-700 h-auto px-10 py-7 text-lg font-bold text-white shadow-2xl transition-all'
            >
              {content.landing.ctaFooter.cta}
            </Button>
          </motion.div>

          <motion.p variants={fadeInUp} className='mt-8 text-sm font-medium text-gray-600'>
            Créez votre profil en moins de 2 minutes • Aucune inscription requise
          </motion.p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
