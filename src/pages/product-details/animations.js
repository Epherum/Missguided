const delay = 0;

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

const headlineAnimate = {
  hidden: { y: 250, rotate: 30 },
  visible: {
    y: 0,
    rotate: 0,
    transition: {
      staggerChildren: 0.1,
      delayStaggerChildren: 0.5 + delay,
      duration: 1,
      ease: "easeOut",
      delay: 0.5 + delay,
    },
  },
};

const headlineLettersAnimate = {
  hidden: { y: 250, rotate: 30 },
  visible: {
    y: 0,
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
const priceAnimate = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 1.2 + delay,
    },
  },
};
const sizeAnimate = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 1.3 + delay,
    },
  },
};
const colorAnimate = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 1.4 + delay,
    },
  },
};
const sizeGuideAnimate = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 1.5 + delay,
    },
  },
};
const sizeGuideArrowAnimate = {
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
const deliveryAnimate = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 1.6 + delay,
    },
  },
};
const deliveryArrowAnimate = {
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
const descriptionAnimate = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 1.3 + delay,
    },
  },
};

const cartAnimate = {
  hidden: { y: 200 },
  visible: {
    y: 0,
    transition: {
      delay: 0.7 + delay,
      duration: 0.8,
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
      delayChildren: 1 + delay,
      staggerChildren: 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const cartTextAnimate = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.1 + delay,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const wishlistTextAnimate = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.7 + delay,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageContainerAnimate = {
  hidden: {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  },
  visible: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",

    transition: {
      delay: 1 + delay,
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const imageAnimate = {
  hidden: {
    scale: 1.7,
    rotate: -20,
  },
  visible: {
    rotate: 0,
    scale: 1,
    transition: {
      delay: 1 + delay,
      duration: 1.2,
      ease: "easeOut",
    },
  },
};
const morePicturesAnimate = {
  hidden: { x: 200, opacity: 0, rotate: -10 },
  visible: {
    rotate: 0,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 1.2 + delay,
    },
  },
};

const circleColorAnimate = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 0.8 + delay,
      duration: 1.5,
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
  breadcrumbsAnimate,
  headlineAnimate,
  headlineLettersAnimate,
  priceAnimate,
  sizeAnimate,
  colorAnimate,
  sizeGuideAnimate,
  deliveryAnimate,
  descriptionAnimate,
  sizeGuideArrowAnimate,
  deliveryArrowAnimate,
  imageContainerAnimate,
  imageAnimate,
  cartAnimate,
  morePicturesAnimate,
  cartTextAnimate,
  wishlistTextAnimate,
  circleColorAnimate,
  socialsAnimate,
};
export default animations;
