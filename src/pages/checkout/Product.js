import { FaPlus, FaMinus } from "react-icons/fa";
import { useCartContext } from "../../contexts/CartContext";
import { useState } from "react";
function Product({ item }) {
  const { id, title, image, quantity, price, color } = item;
  const [quantity2, setQuantity2] = useState(quantity);
  //format price
  const {
    removeFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    getItemQuantity,
  } = useCartContext();
  let newPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
  //calculate subtotal then format
  let subtotal = price * quantity2;
  let newSubtotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(subtotal);
  return (
    <tr className="checkout-product">
      <td>
        <img src={image} alt="" />
      </td>
      <td>
        <div>
          <p>{title}</p>
          <p>Color: {color}</p>
        </div>
        <button
          onClick={() => {
            removeFromCart(id);
          }}
        >
          Remove
        </button>
      </td>
      <td>
        <select name="size" id="size">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </td>
      <td>
        <button
          onClick={() => {
            setQuantity2((prev) => prev + 1);
          }}
        >
          <FaPlus />
        </button>
        <p>{quantity2}</p>
        <button
          onClick={() => {
            setQuantity2((prev) => prev - 1);
            if (quantity2 === 1) {
              removeFromCart(id);
            }
          }}
        >
          <FaMinus />
        </button>
      </td>
      <td>
        <p>{newPrice}</p>
      </td>
      <td>{newSubtotal}</td>
    </tr>
  );
}

export default Product;
