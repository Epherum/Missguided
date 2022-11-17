import React from "react";
import { BsPlus, BsHeart } from "react-icons/bs";
import "./product.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { storage } from "../../../firebase-config";

import { ref, getDownloadURL } from "firebase/storage";
import { useCartContext } from "../../../contexts/CartContext";
import { motion } from "framer-motion";

function Product(props) {
  const { id, category, title, price, image, color } = props;
  const [productImage, setProductImage] = useState("");
  const { increaseItemQuantity } = useCartContext();

  (function getFirestoreImageUrl(imagePath) {
    getDownloadURL(ref(storage, `productImages/${imagePath}`)).then((url) => {
      setProductImage(url);
    });
  })(image);

  //format number to currency
  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  //replace space with dash for name url
  const titleDash = title.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="product">
      {productImage ? (
        <Link to={"/categories/" + category + "/" + titleDash + "/" + id}>
          <img className="img" src={productImage} alt={title} />
        </Link>
      ) : (
        <div className="img-loader" />
      )}
      <h3 className="name">{title}</h3>
      <div className="flex">
        <p className="price"> {numberFormatter.format(price)}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="wishlist"
        >
          <BsHeart />
        </motion.button>
        <motion.button
          className="cart"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            increaseItemQuantity(
              id,
              title,
              price,
              productImage,
              category,
              color
            )
          }
        >
          <BsPlus />
        </motion.button>
      </div>
    </div>
  );
}

export default Product;
