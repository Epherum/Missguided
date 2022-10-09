import React from "react";
import "./product-details.scss";
import { BsHeart, BsBag } from "react-icons/bs";

function ProductDetails() {
  return (
    <div className="container productDetails">
      <p className="breadcrumbs">
        {"<  "}Home{"  /  "}Categories{"  /  "}Dresses
      </p>
      <h1 className="headline">Black Basic Satin Bralette </h1>
      <p className="price">$49.99</p>
      <div className="size">
        <p className="size-headline">Size</p>
        <div className="size-buttons">
          <button className="size-button">0</button>
          <button className="size-button">2</button>
          <button className="size-button">4</button>
          <button className="size-button">6</button>
          <button className="size-button">8</button>
          <button className="size-button">10</button>
          <button className="size-button">12</button>
        </div>
      </div>
      <div className="size-guide">
        <p>Size Guide</p>
        <i>I</i>
      </div>
      <div className="delivery-returns">
        <p>Delivery &amp; Returns</p>
        <i>I</i>
      </div>
      <div className="description">
        <p className="headline">Description</p>
        <p className="text">
          This denim shirt dress is a must have this season. Featuring a
          oversized fit, dip dye design and button down front. Style with
          trainers and a denim jacket for a casual look. This denim shirt dress
          <br /> <br /> is a must have this season. Featuring a oversized fit,
          dip dye design and button down front. Style with trainers and a denim
          jacket for a casual look.
        </p>
      </div>
      <div className="image"></div>

      <div className="buttons">
        <button className="wishlist">
          <BsHeart /> &nbsp;Add to Wishlist
        </button>
        <button className="add-to-bag">
          <BsBag /> &nbsp; Add to Bag
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
