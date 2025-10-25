import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          200: 'hsl(var(--primary-200))',
          300: 'hsl(var(--primary-300))',
          400: 'hsl(var(--primary-400))',
          500: 'hsl(var(--primary-500))',
          600: 'hsl(var(--primary-600))',
          700: 'hsl(var(--primary-700))',
          800: 'hsl(var(--primary-800))',
          900: 'hsl(var(--primary-900))',
          light: 'hsl(var(--primary-light))',
          dark: 'hsl(var(--primary-dark))',
          hover: 'hsl(var(--primary-hover))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          purple: '#A855F7',
          purpleLight: '#D8B4FE',
          pink: '#EC4899',
          pinkLight: '#F9A8D4',
          orange: '#F97316',
          orangeLight: '#FDBA74',
          cyan: '#06B6D4',
          cyanLight: '#67E8F9',
          indigo: '#6366F1',
          indigoLight: '#A5B4FC',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Status colors
        success: {
          DEFAULT: 'hsl(var(--success))',
          light: 'hsl(var(--success-light))',
          dark: 'hsl(var(--success-dark))',
          foreground: 'hsl(var(--success-foreground))',
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          light: 'hsl(var(--error-light))',
          dark: 'hsl(var(--error-dark))',
          foreground: 'hsl(var(--error-foreground))',
        },
        caution: {
          DEFAULT: 'hsl(var(--caution))',
          light: 'hsl(var(--caution-light))',
          dark: 'hsl(var(--caution-dark))',
          foreground: 'hsl(var(--caution-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          light: 'hsl(var(--warning-light))',
          dark: 'hsl(var(--warning-dark))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          light: 'hsl(var(--info-light))',
          dark: 'hsl(var(--info-dark))',
          foreground: 'hsl(var(--info-foreground))',
        },
        // Text colors
        text: {
          primary: 'hsl(var(--text-primary))',
          secondary: 'hsl(var(--text-secondary))',
          tertiary: 'hsl(var(--text-tertiary))',
          disabled: 'hsl(var(--text-disabled))',
          inverse: 'hsl(var(--text-inverse))',
          link: 'hsl(var(--text-link))',
          linkHover: 'hsl(var(--text-link-hover))',
        },
        // Border colors
        'border-light': 'hsl(var(--border-light))',
        'border-dark': 'hsl(var(--border-dark))',
        'border-focus': 'hsl(var(--border-focus))',
        'border-hover': 'hsl(var(--border-hover))',
        'border-active': 'hsl(var(--border-active))',
        'border-disabled': 'hsl(var(--border-disabled))',
        'border-error': 'hsl(var(--border-error))',
        'border-success': 'hsl(var(--border-success))',
        // Background variations
        'background-white': 'hsl(var(--background-white))',
        'background-gray': 'hsl(var(--background-gray))',
        'background-muted': 'hsl(var(--background-muted))',
        'background-surface': 'hsl(var(--background-surface))',
        'background-hover': 'hsl(var(--background-hover))',
        'background-cream': 'hsl(var(--background))', // Maps to main background
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        // Hero background blob animation - with rotation
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1) rotate(0deg)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1) rotate(120deg)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9) rotate(240deg)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1) rotate(360deg)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // Blob animation with 5 second duration and smooth easing
        blob: 'blob 5s ease-in-out infinite',
      },
      // Animation delay utilities
      animationDelay: {
        '2000': '2s',
        '4000': '4s',
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    // Plugin to add animation-delay utilities
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'animation-delay': (value: string) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('animationDelay'),
        }
      );
    },
  ],
} satisfies Config;
