// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

import { spacing } from "./design-system";

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
