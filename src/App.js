import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import Nav from "./nav/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
