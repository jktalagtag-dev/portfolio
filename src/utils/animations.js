// Premium ease-out — used across hero reveals.
export const easeOutExpo = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const lineGrow = {
  hidden: {
    height: 0,
  },
  show: {
    height: 320,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const drawLine = {
  hidden: {
    scaleY: 0,
  },
  show: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};