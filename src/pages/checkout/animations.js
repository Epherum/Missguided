const delay = 0;

const left = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4 + delay,
      ease: "easeOut",
    },
  },
};
const right = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5 + delay,
      ease: "easeOut",
    },
  },
};

const circleColorAnimate = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 0.5 + delay,
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const circleEnterAnimate = {
  hidden: { scale: 2, x: "-50%", y: "50%" },
  visible: {
    scale: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
const circleExitAnimate = {
  hidden: { scale: 0, x: "-50%", y: "50%" },
  visible: {
    scale: 2,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const animations = {
  left,
  right,
  circleEnterAnimate,
  circleExitAnimate,
  circleColorAnimate,
};

export default animations;
