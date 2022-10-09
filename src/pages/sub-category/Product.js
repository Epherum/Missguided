import React from "react";
import { BsPlus, BsHeart } from "react-icons/bs";
import "./product.scss";
import { Link } from "react-router-dom";
function Product(props) {
  const { title, price } = props;

  return (
    <div className="product">
      <Link to="/categories/:id/:productId">
        <img className="img" src={`../a1.png`} alt="product" />
      </Link>
      <h3 className="name">{title}</h3>
      <div className="flex">
        <p className="price"> {price}</p>
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
