import React from "react";
import { BsPlus, BsHeart } from "react-icons/bs";
import "./product.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { storage } from "../../../firebase-config";

import { ref, getDownloadURL } from "firebase/storage";
import { useCartContext } from "../../../contexts/CartContext";

function Product(props) {
  const { id, category, title, price, image } = props;
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
      <Link to={"/categories/" + category + "/" + titleDash + "/" + id}>
        {productImage ? (
          <img className="img" src={productImage} alt={title} />
        ) : (
          <div className="img-loader" />
        )}
      </Link>
      <h3 className="name">{title}</h3>
      <div className="flex">
        <p className="price"> {numberFormatter.format(price)}</p>
        <button className="wishlist">
          <BsHeart />
        </button>
        <button
          className="cart"
          onClick={() =>
            increaseItemQuantity(id, title, price, productImage, category)
          }
        >
          <BsPlus />
        </button>
      </div>
    </div>
  );
}

export default Product;
