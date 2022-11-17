import "./checkout.scss";
import Product from "./Product";
import { useCartContext } from "../../contexts/CartContext";

function Checkout() {
  const { cartItems } = useCartContext();

  return (
    <div className="container checkout">
      <table>
        <tr>
          <th>product</th>
          <th>quantity</th>
          <th>subtotal</th>
        </tr>
        <tr>
          <td>product name</td>
          <td>
            <input type="number" value="1" />
          </td>
          <td>$50.00</td>
        </tr>
      </table>
    </div>
  );
}

export default Checkout;

// <div className="checkout">
//   <div className="products">
//     <h1 className="header">
//       My Bag <hr />
//     </h1>
//     <div className="table">
//       <h4 className="empty">&nbsp;</h4>
//       <h4 className="pd">Product Details</h4>
//       <h4 className="s">Size</h4>
//       <h4 className="q">Quantity</h4>
//       <h4 className="p">Price</h4>
//       <h4 className="t">Total</h4>
//       {cartItems?.map((item) => {
//         return (
//           <Product
//             title={item.title}
//             image={item.image}
//             price={item.price}
//             quantity={item.quantity}
//             size={item.size}
//           />
//         );
//       })}
//     </div>
//   </div>
//   <div className="summary">
//     <h1 className="header">
//       Order Summary <hr />
//     </h1>
//     <h4 className="total-of-products">6 Items</h4>
//     <div className="total">
//       <h4>Total</h4>
//       <h4>$49.00</h4>
//     </div>
//     <button className="Proceed">Proceed to Checkout</button>
//   </div>
// </div>
