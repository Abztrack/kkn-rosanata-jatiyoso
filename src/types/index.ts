// Re-export all types from data files
export type { Village } from '../data/villages';
export type { Testimonial } from '../data/testimonials';
export type { Achievement } from '../data/achievements';

// Common component props
export interface BaseSectionProps {
  className?: string;
}

export interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isScrolled: boolean;
}

export interface StatsSectionProps {
  isStatsVisible: boolean;
  statsRef: React.RefObject<HTMLElement>;
} 