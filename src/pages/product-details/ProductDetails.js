import { BsHeart, BsBag } from "react-icons/bs";
import "./product-details.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoMdPaperPlane } from "react-icons/io";
import { TbHanger } from "react-icons/tb";
import { BsFillPlayFill } from "react-icons/bs";
import { FaTape } from "react-icons/fa";
import animations from "./animations";
function ProductDetails() {
  const { circleEnterAnimate, circleExitAnimate } = animations;
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
        <motion.div className="circle" />
        <div className="moreProductPicturesGrid">
          <div>
            <BsFillPlayFill />{" "}
          </div>
          <div className="hanger">
            <TbHanger />{" "}
            <p>
              Shop This <br /> Look
            </p>
          </div>
          <img src="../../a1.png" alt="" />
          <img src="../../a1.png" alt="" />
          <img src="../../a1.png" alt="" />
          <img src="../../a1.png" alt="" />
        </div>

        <p className="breadcrumbs">
          {"<  "}Home{"  /  "}Categories{"  /  "}Dresses
        </p>
        <h1 className="headline">Blue Oversized Dip Dye Denim Shirt Dress</h1>
        <p className="price">$36.00</p>
        <div className="size">
          <p className="size-headline">Size</p>
          <div className="size-buttons">
            {["2", "4", "6", "8", "10", "12"].map((size, i) => (
              <>
                <input
                  type="radio"
                  name="size"
                  id={`radio${i}`}
                  key={i}
                  className="size-button"
                />
                <label htmlFor={`radio${i}`}>{size}</label>
              </>
            ))}
          </div>
        </div>
        <div className="color">
          <p className="color-headline">Color</p>
          <div className="color-buttons">
            {["black", "gray", "whitesmoke"].map((color, i) => (
              <>
                <input
                  type="radio"
                  name="color"
                  id={`color${i}`}
                  key={i}
                  className="size-button"
                />
                <label
                  style={{ backgroundColor: color }}
                  htmlFor={`color${i}`}
                ></label>
              </>
            ))}
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
