const circleEnterAnimate = {
  hidden: { scale: 2, x: "-50%", y: "50%" },
  visible: {
    scale: 0,
    transition: {
      duration: 1,
    },
  },
};
const circleExitAnimate = {
  hidden: { scale: 0, x: "-50%", y: "50%" },
  visible: {
    scale: 2,
    transition: {
      duration: 1,
    },
  },
};

const headline1Animate = {
  hidden: { y: 250, rotate: 40 },
  visible: {
    y: 0,
    rotate: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
      duration: 1.5,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};
const headline2Animate = {
  hidden: { x: 100, y: -300, rotate: 40 },
  visible: {
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
      duration: 1.5,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const headlineLettersAnimate = {
  hidden: { rotateY: 620 },
  visible: {
    rotateY: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const slidesAnimate = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const animations = {
  circleEnterAnimate,
  circleExitAnimate,
  headline1Animate,
  headline2Animate,
  headlineLettersAnimate,
  slidesAnimate,
};

export default animations;
