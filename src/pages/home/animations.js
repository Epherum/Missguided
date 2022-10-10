const delay = 0.5;

const circleTextInsideAnimate = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1 + delay,
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
      delay: 0.5 + delay,
      duration: 1,
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
      delay: 0 + delay,

      duration: 1,
      ease: "easeOut",
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
      delay: 0 + delay,
      duration: 1,
      ease: "easeOut",
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
      delay: 0 + delay,

      duration: 1,
      ease: "easeOut",
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
      delay: 0 + delay,

      duration: 1,
      ease: "easeOut",
    },
  },
};

const whoBrunchAnimate = {
  hidden: { x: -10, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delayChildren: 1.5 + delay,

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
      delayChildren: 0.2 + delay,
      staggerChildren: 0.1,
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
      delayChildren: 0.2 + delay,
      staggerChildren: 0.1,
      staggerDirection: -1,
      duration: 1.5,
      ease: "easeOut",
      delay: 0.1 + delay,
    },
  },
};

const headlineLettersAnimate = {
  hidden: { rotateY: 550 },
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
      delayChildren: 0.5 + delay,
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
      delay: 0.3 + delay,
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
      delay: 0.3 + delay,
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
      delay: 1 + delay,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const Deals_deal2headline1Animate = {
  hidden: { y: 100, rotate: 40 },
  visible: {
    rotate: 0,

    y: 0,
    transition: {
      delay: 0.5 + delay,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
const Deals_deal2headline2Animate = {
  hidden: { y: 100, rotate: 40 },
  visible: {
    rotate: 0,
    y: 0,
    transition: {
      delay: 0.5 + delay,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
const Deals_deal2paragraphAnimate = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2 + delay,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const Deals_deal3headline1Animate = {
  hidden: { y: 100, rotate: 40 },
  visible: {
    rotate: 0,
    y: 0,
    transition: {
      delay: 0.7 + delay,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Deals_deal3paragraphAnimate = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.4 + delay,
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
      delay: 0 + delay,
      duration: 1,
      ease: "easeOut",
    },
  },
};
const buttonTextAnimate = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5 + delay,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const socialsAnimate = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.1 + delay,
      staggerChildren: 0.2,
      staggerDirection: -1,
      duration: 1,
      ease: "easeOut",
    },
  },
};
const circleColorAnimate = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 0.2 + delay,
      duration: 1,
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
  Deals_deal2headline1Animate,
  Deals_deal2headline2Animate,
  Deals_deal2paragraphAnimate,
  Deals_deal3headline1Animate,
  Deals_deal3paragraphAnimate,
  buttonAnimate,
  buttonTextAnimate,
  socialsAnimate,
  circleTextAnimate,
  circleEnterAnimate,
  circleExitAnimate,
  circleColorAnimate,
};

export default animations;
