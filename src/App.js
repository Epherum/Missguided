import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import Nav from "./components/nav/Nav";

import { NavProvider } from "./contexts/NavContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <NavProvider>
          <Nav />
          <AnimatedRoutes />
        </NavProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
