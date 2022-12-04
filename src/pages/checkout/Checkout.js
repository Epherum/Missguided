import "./checkout.scss";
import Product from "./Product";
import { useCartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import Dim from "../../components/dim/Dim";
import { useNavContext } from "../../contexts/NavContext";
import { motion } from "framer-motion";
import animations from "./animations";
import useLocoScroll from "../../hooks/useLocoScroll";
import React, { useState, useEffect } from "react";

function Checkout() {
  const [loco, setLoco] = useState(false);

  const { cartItems } = useCartContext();
  const { isNavOpen, isCartOpen } = useNavContext();
  const {
    left,
    right,
    circleExitAnimate,
    circleEnterAnimate,
    circleColorAnimate,
  } = animations;
  useEffect(() => {
    setLoco(true);
  }, []);
  const scroll = useLocoScroll(loco);
  //get total price and format it
  const totalPrice = cartItems.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);
  const priceFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice);

  return (
    <div className="big-container" data-scroll-container>
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
      <Dim />

      <div
        className="container checkout"
        style={{
          transform: isNavOpen ? "translateY(28rem)" : "translateY(0px)",
          translate: isCartOpen ? "-28rem 0rem" : "0rem 0rem",
        }}
      >
        <motion.div
          variants={circleColorAnimate}
          initial={"hidden"}
          animate={"visible"}
          className="circle"
        />
        {cartItems.length === 0 ? (
          <div className="empty">
            <h2>Your bag is empty</h2>
            <Link to={"/categories"}>Continue Shopping</Link>
          </div>
        ) : (
          <div className="checkout-container">
            <motion.div
              variants={left}
              initial={"hidden"}
              animate={"visible"}
              className="checkout-left"
            >
              <h1>My Bag</h1>
              <hr />

              <table>
                <tr className="header2">
                  <th></th>
                  <th>Product Details</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                </tr>

                {cartItems.map((item, index) => (
                  <Product key={item.id} item={item} index={index} />
                ))}
              </table>
            </motion.div>
            <motion.div
              variants={right}
              initial={"hidden"}
              animate={"visible"}
              className="checkout-right"
            >
              <h1>Order Summary</h1>
              <hr />
              <div className="order-summary">
                <div className="order-summary-item1">
                  <p>{cartItems.length} items </p>
                  <p>{priceFormat}</p>
                </div>
                <div className="order-summary-item2">
                  <p>total </p>
                  <p>{priceFormat}</p>
                </div>
                <button>Checkout</button>
                <Link to={"/categories"}>Continue Shopping</Link>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
