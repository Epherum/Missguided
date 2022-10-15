import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./app.scss";

import Home from "./pages/home/Home";
import HomeFirstVisit from "./pages/homeFirstVisit/Home";
import Categories from "./pages/categories/Categories";
import SubCategory from "./pages/sub-category/SubCategory";
import ProductDetails from "./pages/product-details/ProductDetails";
import Test from "./pages/Test";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeFirstVisit />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<Test />} />

        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:subCategory" element={<SubCategory />} />
        <Route
          path="/categories/:subCategory/:productName/:productId"
          element={<ProductDetails />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
