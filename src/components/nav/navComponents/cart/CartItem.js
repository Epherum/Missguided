import { useCartContext } from "../../../../contexts/CartContext";
import { Link } from "react-router-dom";
import "./cart.scss";
import { useNavContext } from "../../../../contexts/NavContext";
import { GrClose } from "react-icons/gr";

function CartItem({ item }) {
  const { setIsCartOpen } = useNavContext();

  const { removeFromCart } = useCartContext();

  const priceFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(item.price);

  const { id, title, image, quantity, category, color } = item;
  //make new variable space with dash for name url
  const normalTitle = title;
  const titleDash = title?.replace(/\s+/g, "-").toLowerCase();

  //function that returns a random number between 6 and 12
  //to fake size
  const randomNum = () => {
    return Math.floor(Math.random() * 6) + 6;
  };

  return (
    <div className="item">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="details">
        <div className="name-remove">
          <div className="name">
            <Link
              to={"/categories/" + category + "/" + titleDash + "/" + id}
              onClick={() => setIsCartOpen(false)}
            >
              {normalTitle}
            </Link>
          </div>
          <button className="remove" onClick={() => removeFromCart(id)}>
            <GrClose />
          </button>
        </div>
        <p className="price">{priceFormat}</p>
        <p className="size">Size: {randomNum()}</p>
        <p className="color">Color: {color}</p>
        <p className="quantity">Quantity: {quantity}</p>
      </div>
    </div>
  );
}

export default CartItem;
