import "./Recomendations.scss";
import { BsPlus, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { storage } from "../../../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";
import { useCartContext } from "../../../contexts/CartContext";

//this is the same component as the one in src\pages\sub-category\product\Product.js
//but with different css

function Recomendation(props) {
  const { id, category, title, price, image, initScroll } = props;
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
    <div className="recommendation">
      <Link to={"/categories/" + category + "/" + titleDash + "/" + id}>
        {productImage ? (
          <img
            className="img"
            src={productImage}
            alt={title}
            onLoad={() => {
              initScroll();
            }}
          />
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

export default Recomendation;
