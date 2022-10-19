import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import Nav from "./nav/Nav";
import { useState } from "react";

import { NavContext } from "./contexts/NavContext";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Router>
      <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
        <Nav />
        <AnimatedRoutes />
      </NavContext.Provider>
    </Router>
  );
}

export default App;
