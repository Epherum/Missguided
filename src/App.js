import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import Nav from "./components/nav/Nav";
import { useState } from "react";

import { NavContext } from "./contexts/NavContext";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Router>
      <NavContext.Provider
        value={{ isNavOpen, setIsNavOpen, isSearchOpen, setIsSearchOpen }}
      >
        <Nav />
        <AnimatedRoutes />
      </NavContext.Provider>
    </Router>
  );
}

export default App;
