import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import Nav from "./components/nav/Nav";

import { NavProvider } from "./contexts/NavContext";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <Router>
      <CartProvider>
        <NavProvider>
          <AuthProvider>
            <Nav />
            <AnimatedRoutes />
          </AuthProvider>
        </NavProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
