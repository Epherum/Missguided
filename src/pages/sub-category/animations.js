const delay = 0.1;

const breadcrumbsAnimate = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 2.5 + delay,
    },
  },
};

const headline1Animate = {
  hidden: { y: 250, rotate: 30 },
  visible: {
    y: 0,
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.5 + delay,
    },
  },
};

const headline2Animate = {
  hidden: { x: 100, y: -200, rotate: 30 },
  visible: {
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.5 + delay,
    },
  },
};

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
      delay: 0.4 + delay,
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
      delay: 0.9 + delay,
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
      delay: 0.5 + delay,
      ease: "easeOut",
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
      delay: 2 + delay,
    },
  },
};

const circleColorAnimate = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.8 + delay,
    },
  },
};

const circleEnterAnimate = {
  hidden: { scale: 2, x: "-50%", y: "-50%" },
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
