import React from "react";
import "./app.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./home/Home";
import Categories from "./categories/Categories";
import SubCategory from "./sub-category/SubCategory";
import ProductDetails from "./product-details/ProductDetails";
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
