import React from "react";
import { BsPlus, BsHeart } from "react-icons/bs";
import "./product.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { storage } from "../../../firebase-config";

import { ref, getDownloadURL } from "firebase/storage";

function Product(props) {
  const { id, category, title, price, images } = props;

  function useFirestoreImageUrl(imagePath) {
    const [url, setUrl] = useState("");
    useEffect(() => {
      getDownloadURL(ref(storage, `productImages/${imagePath}`)).then((url) =>
        setUrl(url)
      );
    }, [imagePath]);
    return url;
  }

  function FirestoreImage({ imagePath }) {
    const url = useFirestoreImageUrl(imagePath);
    return <img className="img" key={imagePath} src={url} />;
  }

  //format number to currency
  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  //replace space with dash
  const titleDash = title.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="product">
      <Link to={"/categories/" + category + "/" + titleDash + "/" + id}>
        <FirestoreImage imagePath={images[0]} />
      </Link>
      <h3 className="name">{title}</h3>
      <div className="flex">
        <p className="price"> {numberFormatter.format(price)}</p>
        <button className="wishlist">
          <BsHeart />
        </button>
        <button className="cart">
          <BsPlus />
        </button>
      </div>
    </div>
  );
}

export default Product;
