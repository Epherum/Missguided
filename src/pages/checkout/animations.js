const delay = 0;

const circleColorAnimate = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 1.2 + delay,
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
  circleEnterAnimate,
  circleExitAnimate,
  circleColorAnimate,
};

export default animations;
