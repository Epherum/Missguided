import React from "react";
import productArray from "./items";
import Product from "./Product";
import { BsSliders } from "react-icons/bs";
import { motion } from "framer-motion";
import animations from "./animations";
import "./sub-category.scss";

function SubCategory() {
  const {
    productArrayAnimate,
    breadcrumbsAnimate,
    headline1Animate,
    headline2Animate,
    circleEnterAnimate,
    circleExitAnimate,
    filtersAnimate,
    stockShownAnimate,
    stockAllAnimate,
    circleColorAnimate,
  } = animations;

  return (
    <div className="big-container subCategory ">
      <motion.div
        variants={circleEnterAnimate}
        initial="hidden"
        animate="visible"
        className="fullscreen-circle-enter"
      />

      <motion.div
        variants={circleExitAnimate}
        initial="hidden"
        exit="visible"
        className="fullscreen-circle-exit"
      />
      <div className="container ">
        <div className="navbarSeperator" />
        <motion.div
          variants={circleColorAnimate}
          initial="hidden"
          animate="visible"
          className="circle"
        />
        <motion.div
          variants={breadcrumbsAnimate}
          initial="hidden"
          animate="visible"
          className="breadcrumbs"
        >
          {"<  "}Home{"  /  "}Categories{"  /  "}Dresses
        </motion.div>
        <div className="flex-1">
          <motion.h1 className="headline">
            <motion.div
              variants={headline1Animate}
              initial={"hidden"}
              animate={"visible"}
            >
              to
            </motion.div>
            <motion.div
              variants={headline2Animate}
              initial={"hidden"}
              animate={"visible"}
            >
              ps
            </motion.div>
          </motion.h1>
          <p className="stock">
            {" "}
            <motion.div
              variants={stockShownAnimate}
              initial={"hidden"}
              animate={"visible"}
            >
              1-20 <span>&nbsp;</span>
            </motion.div>
            <motion.div
              variants={stockAllAnimate}
              initial={"hidden"}
              animate={"visible"}
            >
              of 1478
            </motion.div>
          </p>
        </div>
        <div className="flex-2">
          <motion.h3
            variants={filtersAnimate}
            initial={"hidden"}
            animate={"visible"}
            className="filters"
          >
            <p className="filters-icon">
              <BsSliders />
            </p>{" "}
            <p className="filters-text"></p>
            &nbsp; &nbsp; Filters
          </motion.h3>
          <motion.p
            variants={filtersAnimate}
            initial={"hidden"}
            animate={"visible"}
            className="sort"
          >
            Sort by: <span> &nbsp; Popularity &nbsp; &nbsp;</span>
          </motion.p>
        </div>
      </div>
      <motion.div
        variants={productArrayAnimate}
        initial="hidden"
        animate="visible"
        className="products"
      >
        {productArray.map((item) => (
          <Product image={item.image} title={item.title} price={item.price} />
        ))}
      </motion.div>
    </div>
  );
}

export default SubCategory;
