/**
 * Design System Configuration
 * Centralized design tokens for consistent styling across the app
 */

// ============================================================================
// COLOR PALETTE
// ============================================================================

export const colors = {
  // Primary brand color
  primary: {
    DEFAULT: "#10B981", // Soft teal (Emerald-500)
    light: "#34D399", // Emerald-400
    dark: "#059669", // Emerald-600
    hover: "#047857", // Emerald-700
  },

  // Background colors
  background: {
    cream: "#FFFBF5", // Warm cream for main background
    white: "#FFFFFF", // Pure white for cards
    gray: "#F9FAFB", // Gray-50 for alternate backgrounds
  },

  // Status colors
  status: {
    safe: "#22C55E", // Soft green (Green-500)
    safeLight: "#86EFAC", // Green-300
    safeDark: "#16A34A", // Green-600
    avoid: "#EF4444", // Soft coral (Red-500)
    avoidLight: "#FCA5A5", // Red-300
    avoidDark: "#DC2626", // Red-600
    caution: "#F59E0B", // Warm amber (Amber-500)
    cautionLight: "#FCD34D", // Amber-300
    cautionDark: "#D97706", // Amber-600
  },

  // Text colors
  text: {
    primary: "#1F2937", // Gray-800 - Main text
    secondary: "#6B7280", // Gray-500 - Secondary text
    tertiary: "#9CA3AF", // Gray-400 - Disabled/placeholder
    inverse: "#FFFFFF", // White text on dark backgrounds
  },

  // Border colors
  border: {
    DEFAULT: "#E5E7EB", // Gray-200
    light: "#F3F4F6", // Gray-100
    dark: "#D1D5DB", // Gray-300
    focus: "#10B981", // Primary color for focus states
  },

  // Badge colors
  badge: {
    fodmap: {
      bg: "#DBEAFE", // Blue-100
      text: "#1E40AF", // Blue-800
    },
    category: {
      bg: "#F3F4F6", // Gray-100
      text: "#374151", // Gray-700
    },
    confidence: {
      elevee: {
        bg: "#D1FAE5", // Green-100
        text: "#065F46", // Green-800
      },
      moyenne: {
        bg: "#FEF3C7", // Amber-100
        text: "#92400E", // Amber-800
      },
      faible: {
        bg: "#FEE2E2", // Red-100
        text: "#991B1B", // Red-800
      },
    },
  },
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const typography = {
  // Font families
  fontFamily: {
    base: "system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    mono: "'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace",
  },

  // Font sizes
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
  },

  // Font weights
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line heights
  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
    loose: "2",
  },

  // Letter spacing
  letterSpacing: {
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
  },
} as const;

// ============================================================================
// SPACING
// ============================================================================

export const spacing = {
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  7: "1.75rem", // 28px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const borderRadius = {
  none: "0",
  sm: "0.375rem", // 6px
  DEFAULT: "0.5rem", // 8px
  md: "0.5rem", // 8px
  lg: "0.75rem", // 12px
  xl: "1rem", // 16px
  "2xl": "1.5rem", // 24px
  full: "9999px", // Fully rounded
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

export const shadows = {
  none: "none",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
} as const;

// ============================================================================
// TRANSITIONS
// ============================================================================

export const transitions = {
  duration: {
    fast: "150ms",
    DEFAULT: "200ms",
    slow: "300ms",
  },
  timing: {
    DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

// ============================================================================
// Z-INDEX
// ============================================================================

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const breakpoints = {
  xs: "320px", // Mobile small
  sm: "640px", // Mobile
  md: "768px", // Tablet
  lg: "1024px", // Desktop
  xl: "1280px", // Desktop large
  "2xl": "1536px", // Desktop extra large
} as const;

// ============================================================================
// COMPONENT-SPECIFIC STYLES
// ============================================================================

export const components = {
  button: {
    sizes: {
      sm: {
        padding: "0.5rem 1rem", // 8px 16px
        fontSize: typography.fontSize.sm,
        height: "2rem", // 32px
      },
      md: {
        padding: "0.75rem 1.5rem", // 12px 24px
        fontSize: typography.fontSize.base,
        height: "2.75rem", // 44px (minimum touch target)
      },
      lg: {
        padding: "1rem 2rem", // 16px 32px
        fontSize: typography.fontSize.lg,
        height: "3.5rem", // 56px
      },
    },
    variants: {
      primary: {
        bg: colors.primary.DEFAULT,
        color: colors.text.inverse,
        hover: colors.primary.hover,
        focus: colors.primary.dark,
      },
      secondary: {
        bg: colors.background.gray,
        color: colors.text.primary,
        hover: colors.border.dark,
        focus: colors.border.dark,
      },
      outline: {
        bg: "transparent",
        color: colors.primary.DEFAULT,
        border: colors.primary.DEFAULT,
        hover: colors.primary.light,
        focus: colors.primary.dark,
      },
    },
  },

  badge: {
    sizes: {
      sm: {
        padding: "0.125rem 0.5rem", // 2px 8px
        fontSize: typography.fontSize.xs,
      },
      md: {
        padding: "0.25rem 0.75rem", // 4px 12px
        fontSize: typography.fontSize.sm,
      },
      lg: {
        padding: "0.375rem 1rem", // 6px 16px
        fontSize: typography.fontSize.base,
      },
    },
  },

  card: {
    padding: {
      sm: spacing[4], // 16px
      md: spacing[6], // 24px
      lg: spacing[8], // 32px
    },
    variants: {
      default: {
        bg: colors.background.white,
        border: colors.border.DEFAULT,
        shadow: shadows.sm,
      },
      elevated: {
        bg: colors.background.white,
        border: "none",
        shadow: shadows.md,
      },
      outline: {
        bg: colors.background.white,
        border: colors.border.dark,
        shadow: shadows.none,
      },
    },
  },

  input: {
    height: "2.75rem", // 44px (minimum touch target)
    padding: "0.75rem 1rem", // 12px 16px
    fontSize: typography.fontSize.base,
    border: colors.border.DEFAULT,
    borderRadius: borderRadius.md,
    focus: {
      border: colors.border.focus,
      ring: "0 0 0 3px rgba(16, 185, 129, 0.1)",
    },
  },
} as const;

// ============================================================================
// ACCESSIBILITY
// ============================================================================

export const accessibility = {
  // Minimum touch target size (WCAG 2.1 AA)
  minTouchTarget: "44px",

  // Focus ring for keyboard navigation
  focusRing: {
    width: "2px",
    offset: "2px",
    color: colors.border.focus,
    style: "solid",
  },

  // Color contrast ratios (WCAG 2.1 AA)
  contrastRatios: {
    normalText: 4.5, // 4.5:1 for normal text
    largeText: 3, // 3:1 for large text (18pt+ or 14pt+ bold)
    uiComponents: 3, // 3:1 for UI components and graphics
  },
} as const;

// ============================================================================
// ANIMATION PRESETS
// ============================================================================

export const animations = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: transitions.duration.DEFAULT,
    timing: transitions.timing.easeOut,
  },

  slideUp: {
    from: { transform: "translateY(1rem)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    duration: transitions.duration.slow,
    timing: transitions.timing.easeOut,
  },

  slideDown: {
    from: { transform: "translateY(-1rem)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    duration: transitions.duration.slow,
    timing: transitions.timing.easeOut,
  },

  scaleIn: {
    from: { transform: "scale(0.95)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
    duration: transitions.duration.DEFAULT,
    timing: transitions.timing.easeOut,
  },
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get responsive spacing value
 */
export const getSpacing = (
  mobile: keyof typeof spacing,
  desktop?: keyof typeof spacing
): string => {
  if (!desktop) return spacing[mobile];
  return `${spacing[mobile]} md:${spacing[desktop]}`;
};

/**
 * Get color with opacity
 */
export const withOpacity = (color: string, opacity: number): string => {
  // Assumes color is a hex value
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/**
 * Get focus ring classes for Tailwind
 */
export const getFocusClasses = (): string => {
  return "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2";
};

/**
 * Get transition classes for Tailwind
 */
export const getTransitionClasses = (
  properties: string[] = ["all"]
): string => {
  const props = properties.join("-");
  return `transition-${props} duration-200 ease-in-out`;
};
