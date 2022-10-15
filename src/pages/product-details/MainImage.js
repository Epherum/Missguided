import animations from "./animations";
import { motion } from "framer-motion";

function MainImage({ mainImage }) {
  const { imageAnimate } = animations;
  return (
    <motion.div
      variants={imageAnimate}
      initial={"hidden"}
      animate={"visible"}
      style={{ backgroundImage: `url(${mainImage})` }}
    />
  );
}

export default MainImage;
