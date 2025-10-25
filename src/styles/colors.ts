// ============================================================================
// COLOR PALETTE - MonGuide FODMAP
// ============================================================================
//
// This file defines the complete color system for the application.
// All existing color names are preserved for backward compatibility.
// New colors have been added to provide more flexibility and better UX.
//
// ============================================================================

export const colors = {
  // ==========================================================================
  // PRIMARY BRAND COLORS
  // ==========================================================================
  // Soft teal/emerald - main brand identity

  primary: {
    // ✅ EXISTING - Keep for backward compatibility
    DEFAULT: '#10B981', // Emerald-500 - Main brand color
    light: '#34D399', // Emerald-400 - Lighter variant
    dark: '#059669', // Emerald-600 - Darker variant
    hover: '#047857', // Emerald-700 - Hover state

    // ➕ NEW - Full color scale for more flexibility
    50: '#ECFDF5', // Very light teal
    100: '#D1FAE5', // Light teal
    200: '#A7F3D0', // Lighter teal
    300: '#6EE7B7', // Light-medium teal
    400: '#34D399', // Medium teal (same as light)
    500: '#10B981', // Base teal (same as DEFAULT)
    600: '#059669', // Medium-dark teal (same as dark)
    700: '#047857', // Dark teal (same as hover)
    800: '#065F46', // Very dark teal
    900: '#064E3B', // Deepest teal
  },

  // ==========================================================================
  // BACKGROUND COLORS
  // ==========================================================================
  // Warm, welcoming backgrounds for health/wellness aesthetic

  background: {
    // ✅ EXISTING - Keep for backward compatibility
    cream: '#FFFBF5', // Warm cream - main background
    white: '#FFFFFF', // Pure white - cards and elevated surfaces
    gray: '#F9FAFB', // Light gray - alternate sections

    // ➕ NEW - Additional surface variations
    surface: '#FAFAFA', // Neutral surface color
    elevated: '#FFFFFF', // Elevated cards (same as white for now)
    overlay: 'rgba(0, 0, 0, 0.5)', // Modal/drawer overlays (50% black)
    muted: '#F5F5F5', // Muted background for disabled states
    hover: '#F3F4F6', // Subtle hover background
  },

  // ==========================================================================
  // STATUS COLORS
  // ==========================================================================
  // FODMAP-specific and general status indicators

  status: {
    // ✅ EXISTING - Safe (Green) - FODMAP safe foods
    safe: '#22C55E', // Green-500
    safeLight: '#86EFAC', // Green-300
    safeDark: '#16A34A', // Green-600

    // ✅ EXISTING - Avoid (Red) - FODMAP foods to avoid
    avoid: '#EF4444', // Red-500
    avoidLight: '#FCA5A5', // Red-300
    avoidDark: '#DC2626', // Red-600

    // ✅ EXISTING - Caution (Amber) - Moderate FODMAP foods
    caution: '#F59E0B', // Amber-500
    cautionLight: '#FCD34D', // Amber-300
    cautionDark: '#D97706', // Amber-600

    // ➕ NEW - Info (Blue) - Informational messages
    info: '#3B82F6', // Blue-500
    infoLight: '#93C5FD', // Blue-300
    infoDark: '#2563EB', // Blue-600

    // ➕ NEW - Warning (Orange) - Distinct from caution
    warning: '#F97316', // Orange-500
    warningLight: '#FDBA74', // Orange-300
    warningDark: '#EA580C', // Orange-600

    // ➕ NEW - Success (semantic alias for "safe")
    success: '#22C55E', // Same as safe
    successLight: '#86EFAC', // Same as safeLight
    successDark: '#16A34A', // Same as safeDark

    // ➕ NEW - Error (semantic alias for "avoid")
    error: '#EF4444', // Same as avoid
    errorLight: '#FCA5A5', // Same as avoidLight
    errorDark: '#DC2626', // Same as avoidDark
  },

  // ==========================================================================
  // TEXT COLORS
  // ==========================================================================
  // Hierarchical text colors for readability

  text: {
    // ✅ EXISTING - Keep for backward compatibility
    primary: '#1F2937', // Gray-800 - Main body text
    secondary: '#6B7280', // Gray-500 - Secondary/supporting text
    tertiary: '#9CA3AF', // Gray-400 - Disabled/placeholder text
    inverse: '#FFFFFF', // White - Text on dark backgrounds

    // ➕ NEW - Additional text variants
    disabled: '#D1D5DB', // Gray-300 - Disabled state
    placeholder: '#9CA3AF', // Gray-400 - Placeholder text (same as tertiary)
    link: '#10B981', // Primary color - Link text
    linkHover: '#047857', // Primary hover - Link hover state
    muted: '#6B7280', // Gray-500 - Muted text (same as secondary)
    onPrimary: '#FFFFFF', // White text on primary background
    onDark: '#FFFFFF', // White text on dark backgrounds
  },

  // ==========================================================================
  // BORDER COLORS
  // ==========================================================================
  // Border colors for inputs, cards, and dividers

  border: {
    // ✅ EXISTING - Keep for backward compatibility
    DEFAULT: '#E5E7EB', // Gray-200 - Default borders
    light: '#F3F4F6', // Gray-100 - Subtle borders
    dark: '#D1D5DB', // Gray-300 - Prominent borders
    focus: '#10B981', // Primary - Focus state borders

    // ➕ NEW - Interactive border states
    hover: '#D1D5DB', // Gray-300 - Border on hover
    active: '#10B981', // Primary - Active/selected border
    disabled: '#F3F4F6', // Gray-100 - Disabled state border
    error: '#EF4444', // Red-500 - Error state border
    success: '#22C55E', // Green-500 - Success state border
    warning: '#F97316', // Orange-500 - Warning state border
  },

  // ==========================================================================
  // BADGE COLORS
  // ==========================================================================
  // Color combinations for badges and tags

  badge: {
    // ✅ EXISTING - FODMAP-specific badges
    fodmap: {
      bg: '#DBEAFE', // Blue-100
      text: '#1E40AF', // Blue-800
    },

    // ✅ EXISTING - Category badges
    category: {
      bg: '#F3F4F6', // Gray-100
      text: '#374151', // Gray-700
    },

    // ✅ EXISTING - Confidence level badges
    confidence: {
      elevee: {
        bg: '#D1FAE5', // Green-100
        text: '#065F46', // Green-800
      },
      moyenne: {
        bg: '#FEF3C7', // Amber-100
        text: '#92400E', // Amber-800
      },
      faible: {
        bg: '#FEE2E2', // Red-100
        text: '#991B1B', // Red-800
      },
    },

    // ➕ NEW - Generic badge system for reusability
    neutral: {
      bg: '#F3F4F6', // Gray-100
      text: '#374151', // Gray-700
    },
    primary: {
      bg: '#D1FAE5', // Green-100
      text: '#065F46', // Green-800
    },
    info: {
      bg: '#DBEAFE', // Blue-100
      text: '#1E3A8A', // Blue-900
    },
    success: {
      bg: '#D1FAE5', // Green-100
      text: '#065F46', // Green-800
    },
    warning: {
      bg: '#FEF3C7', // Amber-100
      text: '#92400E', // Amber-800
    },
    danger: {
      bg: '#FEE2E2', // Red-100
      text: '#991B1B', // Red-800
    },
  },

  // ==========================================================================
  // INTERACTIVE STATES
  // ==========================================================================
  // ➕ NEW - Comprehensive interactive state colors for buttons and inputs

  interactive: {
    // Primary button states
    primary: {
      bg: '#10B981', // Default background
      bgHover: '#047857', // Hover background
      bgActive: '#065F46', // Active/pressed background
      bgDisabled: '#D1FAE5', // Disabled background
      text: '#FFFFFF', // Text color
      textDisabled: '#9CA3AF', // Disabled text color
    },

    // Secondary button states
    secondary: {
      bg: '#F9FAFB', // Default background
      bgHover: '#F3F4F6', // Hover background
      bgActive: '#E5E7EB', // Active/pressed background
      bgDisabled: '#F9FAFB', // Disabled background
      text: '#1F2937', // Text color
      textDisabled: '#9CA3AF', // Disabled text color
    },

    // Outline button states
    outline: {
      bg: 'transparent', // Default background
      bgHover: '#F0FDF4', // Hover background (very light green)
      bgActive: '#DCFCE7', // Active/pressed background
      border: '#10B981', // Border color
      borderHover: '#047857', // Border hover
      text: '#10B981', // Text color
      textHover: '#047857', // Text hover
    },

    // Ghost/text button states
    ghost: {
      bg: 'transparent', // Default background
      bgHover: '#F0FDF4', // Hover background
      bgActive: '#DCFCE7', // Active/pressed background
      text: '#10B981', // Text color
      textHover: '#047857', // Text hover
    },
  },

  // ==========================================================================
  // ACCENT COLORS
  // ==========================================================================
  // ➕ NEW - Additional accent colors for variety and visual interest

  accent: {
    purple: '#A855F7', // Purple-500
    purpleLight: '#D8B4FE', // Purple-300
    purpleDark: '#7C3AED', // Purple-600

    pink: '#EC4899', // Pink-500
    pinkLight: '#F9A8D4', // Pink-300
    pinkDark: '#DB2777', // Pink-600

    orange: '#F97316', // Orange-500
    orangeLight: '#FDBA74', // Orange-300
    orangeDark: '#EA580C', // Orange-600

    cyan: '#06B6D4', // Cyan-500
    cyanLight: '#67E8F9', // Cyan-300
    cyanDark: '#0891B2', // Cyan-600

    indigo: '#6366F1', // Indigo-500
    indigoLight: '#A5B4FC', // Indigo-300
    indigoDark: '#4F46E5', // Indigo-600
  },
} as const;

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ColorPalette = typeof colors;
export type PrimaryColors = typeof colors.primary;
export type StatusColors = typeof colors.status;
export type TextColors = typeof colors.text;
export type BorderColors = typeof colors.border;
export type BadgeColors = typeof colors.badge;
export type InteractiveColors = typeof colors.interactive;
export type AccentColors = typeof colors.accent;
