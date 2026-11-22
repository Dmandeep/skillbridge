import { Variants, Transition } from 'framer-motion';

// High-end Editorial Springs & Easings
export const transitions: Record<string, Transition> = {
  springSnappy: { type: 'spring', stiffness: 450, damping: 28 },
  springGentle: { type: 'spring', stiffness: 260, damping: 20 },
  springBouncy: { type: 'spring', stiffness: 500, damping: 15 },
  editorialSmooth: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  fastReveal: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  wipe: { duration: 0.6, ease: [0.77, 0, 0.175, 1] },
};

// Fade & Slide Variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: transitions.editorialSmooth 
  },
  exit: { 
    opacity: 0, 
    y: -16, 
    transition: { duration: 0.25 } 
  }
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1 }
  }
});

// Masked Text Clip Path Variants
export const textMaskReveal: Variants = {
  hidden: { 
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    y: 40,
    opacity: 0
  },
  visible: { 
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    y: 0,
    opacity: 1,
    transition: transitions.editorialSmooth 
  }
};

// Card Hover Scale
export const brutalCardHover: Variants = {
  rest: { 
    x: 0, 
    y: 0, 
    boxShadow: '4px 4px 0px #191A23' 
  },
  hover: { 
    x: -3, 
    y: -3, 
    boxShadow: '7px 7px 0px #191A23',
    transition: { duration: 0.15 } 
  },
  tap: { 
    x: 2, 
    y: 2, 
    boxShadow: '1px 1px 0px #191A23',
    transition: { duration: 0.08 } 
  }
};
