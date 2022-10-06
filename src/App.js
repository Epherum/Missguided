import React from "react";
import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Nav from "./nav/Nav";
import Categories from "./categories/Categories";
import SubCategory from "./sub-category/SubCategory";
import ProductDetails from "./product-details/ProductDetails";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<SubCategory />} />
        <Route path="/categories/:id/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
