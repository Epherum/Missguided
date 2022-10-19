const delay = 0.1;

const breadcrumbsAnimate = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 2 + delay,
    },
  },
};

const headline1Animate = {
  hidden: { y: 250, rotate: 40 },
  visible: {
    y: 0,
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.1 + delay,
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
      duration: 1.2,
      ease: "easeOut",
      delay: 0.1 + delay,
    },
  },
};

//delay is in the component
const slidesAnimate = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

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

const animations = {
  circleEnterAnimate,
  circleExitAnimate,
  headline1Animate,
  headline2Animate,
  slidesAnimate,
  breadcrumbsAnimate,
  circleColorAnimate,
};

export default animations;
