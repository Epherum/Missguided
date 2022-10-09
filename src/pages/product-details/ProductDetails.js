import { BsHeart, BsBag } from "react-icons/bs";
import "./product-details.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoMdPaperPlane } from "react-icons/io";
import { FaTape } from "react-icons/fa";
function ProductDetails() {
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
  return (
    <div className="big-container">
      <motion.div
        variants={circleEnterAnimate}
        initial="hidden"
        animate="visible"
        className="fullscreen-circle-enter"
      />

      <motion.div
        variants={circleExitAnimate}
        initial="hidden"
        exit="visible"
        className="fullscreen-circle-exit"
      />
      <div className="container productDetails">
        <motion.div className="circle"></motion.div>
        <p className="breadcrumbs">
          {"<  "}Home{"  /  "}Categories{"  /  "}Dresses
        </p>
        <h1 className="headline">Blue Oversized Dip Dye Denim Shirt Dress</h1>
        <p className="price">$36.00</p>
        <div className="size">
          <p className="size-headline">Size</p>
          <div className="size-buttons">
            <input
              type="radio"
              id="radio0"
              name="size"
              className="size-button"
            />
            <label for="radio0">0</label>
            <input
              type="radio"
              id="radio2"
              name="size"
              className="size-button"
            />
            <label for="radio2">2</label>
            <input
              type="radio"
              id="radio4"
              name="size"
              className="size-button"
            />
            <label for="radio4">4</label>
            <input
              type="radio"
              id="radio6"
              name="size"
              className="size-button"
            />
            <label for="radio6">6</label>
            <input
              type="radio"
              id="radio8"
              name="size"
              className="size-button"
            />
            <label for="radio8">8</label>
            <input
              type="radio"
              id="radio10"
              name="size"
              className="size-button"
            />
            <label for="radio10">10</label>
            <input
              type="radio"
              id="radio12"
              name="size"
              className="size-button"
            />
            <label for="radio12">12</label>
          </div>
        </div>
        <div className="color">
          <p className="color-headline">Color</p>
          <div className="color-buttons">
            <input
              type="radio"
              id="color1"
              name="color"
              className="color-button"
            />
            <label for="color1"></label>
            <input
              type="radio"
              id="color2"
              name="color"
              className="color-button"
            />
            <label for="color2"></label>
          </div>
        </div>
        <Link className="size-guide">
          <p>
            <span>
              <FaTape />
            </span>
            &nbsp; Size Guide
          </p>
          <p>
            <IoIosArrowForward />
          </p>
        </Link>
        <Link className="delivery-returns">
          <p>
            <span>
              <IoMdPaperPlane />
            </span>
            &nbsp; Delivery &amp; Returns
          </p>
          <p>
            <IoIosArrowForward />
          </p>
        </Link>
        <div className="description">
          <p className="headline">Description</p>
          <p className="text">
            This denim shirt dress is a must have this season. Featuring a
            oversized fit, dip dye design and button down front. Style with
            trainers and a denim jacket for a casual look. This denim shirt
            dress
            <br /> <br /> is a must have this season. Featuring a oversized fit,
            dip dye design and button down front. Style with trainers and a
            denim jacket for a casual look.
          </p>
        </div>
        <div className="image"></div>
        <div className="buttons">
          <button className="wishlist">
            <BsHeart /> &nbsp;Add to Wishlist
          </button>
          <button className="add-to-bag">
            <BsBag /> &nbsp;Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
