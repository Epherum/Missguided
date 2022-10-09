const circleTextInsideAnimate = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.07,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const circleTextAnimate = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

const image1Animate = {
  hidden: {
    rotate: -20,
    scale: 1.7,
  },
  visible: {
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: "easeInOut",
    },
  },
};
const image1ContainerAnimate = {
  hidden: {
    clipPath: "polygon(0 0%, 100% 0, 100% 0, 0 0)",
  },
  visible: {
    clipPath: "polygon(0 0%, 100% 0, 100% 100%, 0% 100%)",

    transition: {
      duration: 1.4,
      ease: "easeInOut",
    },
  },
};

const image2Animate = {
  hidden: {
    scale: 1.7,
    rotate: -20,
  },
  visible: {
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: "easeInOut",
    },
  },
};
const image2ContainerAnimate = {
  hidden: {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  },
  visible: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",

    transition: {
      duration: 1.4,
      ease: "easeInOut",
    },
  },
};
const whoBrunchAnimate = {
  hidden: { x: -10, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.07,
      duration: 0.8,
      ease: "easeOut",
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
const linksAnimate = {
  hidden: { y: 5, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.04,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Deals_deal1headline1Animate = {
  hidden: { y: 100, rotate: 40 },
  visible: {
    rotate: 0,

    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
const Deals_deal1headline2Animate = {
  hidden: { y: 100, rotate: 40 },
  visible: {
    rotate: 0,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
const Deals_deal1paragraphAnimate = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,

      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const buttonAnimate = {
  hidden: { y: 200 },
  visible: {
    y: 0,
    transition: {
      delay: 0,
      duration: 1.5,
      ease: "easeOut",
    },
  },
};
const buttonTextAnimate = {
  hidden: { y: 5, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const socialsAnimate = {
  hidden: { y: 5, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
      duration: 1,
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

//thank god for github copilot
const animations = {
  circleTextInsideAnimate,
  image1Animate,
  image1ContainerAnimate,
  image2Animate,
  image2ContainerAnimate,
  whoBrunchAnimate,
  headline1Animate,
  headline2Animate,
  headlineLettersAnimate,
  linksAnimate,
  Deals_deal1headline1Animate,
  Deals_deal1headline2Animate,
  Deals_deal1paragraphAnimate,
  buttonAnimate,
  buttonTextAnimate,
  socialsAnimate,
  circleTextAnimate,
  circleEnterAnimate,
  circleExitAnimate,
};

export default animations;
