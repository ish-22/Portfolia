import type { Variants, Transition } from "motion/react";

/* ─── EASING CURVES & SPRINGS ─────────────────────────────────────── */
export const transitions = {
  smooth: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as Transition,
  snappy: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } as Transition,
  springSnappy: { type: "spring", stiffness: 400, damping: 30 } as Transition,
  springGentle: { type: "spring", stiffness: 200, damping: 25 } as Transition,
  springCursor: { type: "spring", stiffness: 500, damping: 40, mass: 0.3 } as Transition,
  slow: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } as Transition
};

/* ─── REUSABLE MOTION VARIANTS ────────────────────────────────────── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: custom
    }
  })
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      delay: custom
    }
  })
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: custom
    }
  })
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: custom
    }
  })
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: custom
    }
  })
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

/* ─── ACCESSIBLE VIEWPORT TRIGGER PRESETS ──────────────────────────── */
export const viewportOnce = {
  once: true,
  amount: 0.15
};

export const viewportCard = {
  once: true,
  amount: 0.2
};
