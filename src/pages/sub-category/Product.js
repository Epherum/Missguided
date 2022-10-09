import React from "react";
import "./product.scss";
import { BsPlus, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
function Product(props) {
  const { title, price } = props;

  return (
    <div className="product">
      <Link to="/categories/:id/:productId">
        <img className="product-img" src={`../a1.png`} alt="product" />
      </Link>
      <h3 className="product-name">{title}</h3>
      <div className="product-flex">
        <p className="product-price"> {price}</p>
        <button className="product-wishlist">
          <BsHeart />
        </button>
        <button className="product-cart">
          <BsPlus />
        </button>
      </div>
    </div>
  );
}

export default Product;
