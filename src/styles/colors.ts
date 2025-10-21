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
