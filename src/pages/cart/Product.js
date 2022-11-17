import React from "react";
function Product({ image, title, price, quantity, size }) {
  console.log(image, title, price, quantity, size);
  return (
    <div className="checkout-product">
      <img className="image" src={image} alt="" />
      <h4 className="title">{title}</h4>
      <h4 className="p">{price}</h4>
      <h4 className="q">{quantity}</h4>
      <h4 className="s">{size}</h4>
      <h4 className="pp">{price}</h4>
    </div>
  );
}

export default Product;
