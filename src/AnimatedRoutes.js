import React from "react";
import "./app.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import SubCategory from "./pages/sub-category/SubCategory";
import ProductDetails from "./pages/product-details/ProductDetails";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<SubCategory />} />
        <Route path="/categories/:id/:productId" element={<ProductDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
