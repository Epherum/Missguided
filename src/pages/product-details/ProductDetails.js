import { BsHeart, BsBag } from "react-icons/bs";
import { IoIosArrowForward, IoMdPaperPlane } from "react-icons/io";
import { TbHanger } from "react-icons/tb";
import { FaTape } from "react-icons/fa";
import { useParams } from "react-router-dom";

import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import animations from "./animations";
import "./product-details.scss";
import { useState, useEffect, useContext } from "react";
import { db, storage } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { NavContext } from "../../contexts/NavContext";
import Dim from "../../components/dim/Dim";

function ProductDetails() {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);

  const {
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
    wishlistTextAnimate,
    cartTextAnimate,
    circleColorAnimate,
  } = animations;

  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [mainImageNum, setMainImageNum] = useState(0);
  //use params to get the product id from the url
  const { productId } = useParams();

  //get the product from firebase
  const getProduct = async () => {
    const productRef = doc(db, "products", productId);
    const docSnap = await getDoc(productRef);
    if (docSnap.exists()) {
      setProduct(docSnap.data());

      docSnap.data().images.map((image) => {
        const imageRef = ref(storage, `productImages/${image}`);
        getDownloadURL(imageRef).then((url) => {
          setImages((images) => [...images, url]);
        });
      });
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getProduct();
    //cleanup function
    return () => {
      setProduct({});
      setImages([]);
    };
  }, []);

  let splitHeadline = product?.name?.split(" ");
  //format currency
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

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
      {product && (
        <main
          className="container productDetails"
          style={{
            transform: isNavOpen ? "translateY(25rem)" : "translateY(0px)",
          }}
        >
          <Dim />

          <motion.div
            variants={circleColorAnimate}
            initial="hidden"
            animate="visible"
            className="circle"
          />

          <motion.div
            variants={breadcrumbsAnimate}
            initial="hidden"
            animate="visible"
            className="breadcrumbs"
          >
            {"<  "}
            <Link to="/home">Home</Link>
            {"  /  "}
            <Link to="/categories">Categories</Link>
            {"  /  "}
            <Link to={`/categories/${product.category}`}>
              {product?.category}
            </Link>
            {"  /  "}
            <p>{product.name}</p>
          </motion.div>

          <motion.div className="clipPathContainer">
            <motion.h1
              variants={headlineAnimate}
              initial="hidden"
              animate="visible"
              className="headline"
            >
              {splitHeadline?.map((word, index) => {
                return (
                  <motion.div variants={headlineLettersAnimate} key={index}>
                    {word}&nbsp;
                  </motion.div>
                );
              })}
            </motion.h1>
          </motion.div>

          <motion.p
            variants={priceAnimate}
            initial="hidden"
            animate="visible"
            className="price"
          >
            {currencyFormatter.format(product.price)}
          </motion.p>
          <motion.div
            variants={sizeAnimate}
            initial="hidden"
            animate="visible"
            className="size"
          >
            <p className="size-headline">Size</p>
            <div className="size-buttons">
              {["2", "4", "6", "8", "10", "12"].map((size, i) => (
                <React.Fragment key={i}>
                  <input
                    type="radio"
                    name="size"
                    id={`radio${i}`}
                    className="size-button"
                  />
                  <label htmlFor={`radio${i}`}>{size}</label>
                </React.Fragment>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={colorAnimate}
            initial="hidden"
            animate="visible"
            className="color"
          >
            <p className="color-headline">Color</p>
            <div className="color-buttons">
              {["black", "gray", "whitesmoke"].map((color, i) => (
                <React.Fragment key={i}>
                  <input
                    type="radio"
                    name="color"
                    id={`color${i}`}
                    className="size-button"
                  />
                  <label
                    style={{ backgroundColor: color }}
                    htmlFor={`color${i}`}
                  ></label>
                </React.Fragment>
              ))}
            </div>
          </motion.div>
          <Link className="size-guide">
            <motion.p
              variants={sizeGuideAnimate}
              initial="hidden"
              animate="visible"
            >
              <span>
                <FaTape />
              </span>
              &nbsp; Size Guide
            </motion.p>
            <motion.p
              variants={sizeGuideArrowAnimate}
              initial="hidden"
              animate="visible"
            >
              <IoIosArrowForward />
            </motion.p>
          </Link>
          <Link className="delivery-returns">
            <motion.p
              variants={deliveryAnimate}
              initial="hidden"
              animate="visible"
            >
              <span>
                <IoMdPaperPlane />
              </span>
              &nbsp; Delivery &amp; Returns
            </motion.p>
            <motion.p
              variants={deliveryArrowAnimate}
              initial="hidden"
              animate="visible"
            >
              <IoIosArrowForward />
            </motion.p>
          </Link>
          <motion.div
            variants={descriptionAnimate}
            initial="hidden"
            animate="visible"
            className="description"
          >
            <p className="headline">Description</p>
            <p className="text">{product.description}</p>
          </motion.div>
          <motion.div
            variants={imageContainerAnimate}
            initial={"hidden"}
            animate={"visible"}
            className="image"
          >
            <motion.div
              variants={imageAnimate}
              initial={"hidden"}
              animate={"visible"}
              style={{ backgroundImage: `url(${images[mainImageNum]})` }}
            />
          </motion.div>
          <motion.div
            variants={morePicturesAnimate}
            initial="hidden"
            animate="visible"
            className="moreProductPicturesGrid"
          >
            <div className="hanger">
              <TbHanger />{" "}
              <p>
                Shop This <br /> Look
              </p>
            </div>
            {images?.map((image, i) => (
              <img
                onMouseEnter={() => setMainImageNum(i)}
                className="img"
                key={i}
                src={image}
              />
            ))}
          </motion.div>
          <div className="buttons">
            <motion.button className="wishlist">
              <motion.span
                variants={wishlistTextAnimate}
                initial={"hidden"}
                animate={"visible"}
              >
                <BsHeart /> &nbsp;Add to Wishlist
              </motion.span>
            </motion.button>
            <motion.button
              variants={cartAnimate}
              initial={"hidden"}
              animate={"visible"}
              className="add-to-bag"
            >
              <motion.span
                variants={cartTextAnimate}
                initial={"hidden"}
                animate={"visible"}
              >
                <BsBag /> &nbsp;Add to Bag
              </motion.span>
            </motion.button>
          </div>
        </main>
      )}
    </div>
  );
}

export default ProductDetails;
