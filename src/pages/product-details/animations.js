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
};
export default animations;
