import "./cart.scss";
import { useNavContext } from "../../../../contexts/NavContext";
import { useCartContext } from "../../../../contexts/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
function Cart() {
  const { isCartOpen, setIsCartOpen } = useNavContext();

  const { cartItems } = useCartContext();

  const totalPrice = cartItems.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);
  const priceFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice);

  //get total price and format it

  return (
    <div
      className="cart-overlay"
      style={{
        right: isCartOpen ? "0" : "-35%",
      }}
    >
      <h2 className="header">Your Bag</h2>
      <div className="items">
        {cartItems?.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className="total-checkout">
        <div className="total">
          <h3>Total ({cartItems?.length})</h3>
          <h3>{priceFormat}</h3>
        </div>
        <Link
          to={"#"}
          onClick={() => {
            setIsCartOpen(false);
          }}
          className="checkout"
        >
          Check out
        </Link>
      </div>
    </div>
  );
}

export default Cart;
