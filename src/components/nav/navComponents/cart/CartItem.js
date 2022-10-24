import { useCartContext } from "../../../../contexts/CartContext";
import { FaTrash } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./cart.scss";
import { useNavContext } from "../../../../contexts/NavContext";

function CartItem({ item }) {
  const { setIsCartOpen } = useNavContext();

  const { increaseItemQuantity, decreaseItemQuantity, removeFromCart } =
    useCartContext();

  const priceFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(item.price);

  const { id, title, image, quantity, category } = item;
  //make new variable space with dash for name url
  const normalTitle = title;
  const titleDash = title?.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="item">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="details">
        <div className="name-price">
          <Link
            to={"/categories/" + category + "/" + titleDash + "/" + id}
            onClick={() => setIsCartOpen(false)}
          >
            {normalTitle}
          </Link>
          <p>{priceFormat}</p>
        </div>

        <div className="buttons">
          <div className="quantity">
            <button onClick={() => decreaseItemQuantity(id)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => increaseItemQuantity(id)}>+</button>
          </div>
          <div className="save-delete">
            <button className="save">
              <AiFillHeart /> Save
            </button>
            <button className="delete" onClick={() => removeFromCart(id)}>
              <FaTrash /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
