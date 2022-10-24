import "./cart.scss";
import { useNavContext } from "../../../../contexts/NavContext";
import { useCartContext } from "../../../../contexts/CartContext";
import CartItem from "./CartItem";
function Cart() {
  const { isCartOpen } = useNavContext();

  const { cartItems } = useCartContext();

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
        {cartItems?.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Cart;
