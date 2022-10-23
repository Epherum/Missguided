import "./cart.scss";
import { FaTrash } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";

import { AiFillHeart } from "react-icons/ai";
import { NavContext } from "../../../../contexts/NavContext";

function Cart() {
  const { isCartOpen } = useContext(NavContext);

  const fakeData = [
    {
      id: 1,
      name: "Relaxed Fit T-shirt",
      price: "$12.99",
      quantity: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/wassim-missguided.appspot.com/o/productImages%2Ffemale-black-petite-roll-up-disco-denim-shorts2.jpg?alt=media&token=a572f1b8-b68a-4b80-8d43-da31acfa8531",
    },
    {
      id: 2,
      name: "Polka Dot Square Neck Shift Dress",
      price: "$30.00",
      quantity: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/wassim-missguided.appspot.com/o/productImages%2Ffemale-stone-tall-zebra-plisse-sleeveless-midi-dress-3.jpg?alt=media&token=94e25580-8ee5-4b26-946a-9dafa6a0570a",
    },
    {
      id: 3,
      name: "Cuffed Oversized Denim Jacket",
      price: "$25.20",
      quantity: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/wassim-missguided.appspot.com/o/productImages%2Ffemale-black-2-pack-oversized-linen-look-beach-shirts3.jpg?alt=media&token=0c9d05cd-b3c8-447e-9260-264890fd53ef",
    },
  ];
  return (
    <div
      className="cart-overlay"
      style={{
        right: isCartOpen ? "0" : "-35%",
      }}
    >
      <div className="header">
        <h2>Cart</h2>
      </div>
      <div className="items">
        {fakeData.map((item) => {
          return (
            <div className="item">
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <div className="details">
                <div className="name-price">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>

                <div className="buttons">
                  <div className="quantity">
                    <button>-</button>
                    <p>{item.quantity}</p>
                    <button>+</button>
                  </div>
                  <div className="save-delete">
                    <button className="save">
                      <AiFillHeart /> Save
                    </button>
                    <button className="delete">
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
