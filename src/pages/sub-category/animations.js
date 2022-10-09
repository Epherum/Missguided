const productArrayAnimate = {
  hidden: {
    y: 1000,
    skewY: -10,
  },
  visible: {
    y: 0,
    skewY: 0,
    transition: {
      duration: 2,
      delay: 0.5,
    },
  },
};
const breadcrumbsAnimate = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.5,
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
const stockShownAnimate = {
  hidden: { x: 100, y: -300, rotate: 150 },
  visible: {
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const stockAllAnimate = {
  hidden: { x: 100, y: -300, rotate: 150 },
  visible: {
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
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
const filtersAnimate = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};
const circleColorAnimate = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};
const animations = {
  productArrayAnimate,
  breadcrumbsAnimate,
  headline1Animate,
  headline2Animate,
  circleEnterAnimate,
  circleExitAnimate,
  filtersAnimate,
  stockShownAnimate,
  stockAllAnimate,
  circleColorAnimate,
};

export default animations;
