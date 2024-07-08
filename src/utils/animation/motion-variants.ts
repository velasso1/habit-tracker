const transition = {
  duration: 2,
  repeatDelay: 2,
  delay: 2,
  repeat: Infinity,
};

export const successSymbolVariant = {
  hidden: {
    opacity: 0,
    strokeDashoffset: "100%",
  },

  visible: {
    opacity: 1,
    strokeDashoffset: "0%",
    transition: { duration: 1.5, delay: 0.2 },
  },
};

export const successSymbolBlock = {
  hidden: {},
  visible: {
    rotate: [0, 15, -15, 0],
    repeat: Infinity,
    transition,
  },
};

export const buttonAnimate = {
  hidden: {},
  visible: {
    scale: [1, 1.05, 1, 1.05, 1],
    transition,
  },
};
