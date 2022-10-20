import Product from "./product/Product";
import { BsSliders } from "react-icons/bs";
import { motion } from "framer-motion";
import animations from "./animations";
import { Link } from "react-router-dom";
import "./sub-category.scss";
import React, { useState, useEffect, useContext } from "react";
import { db } from "../../firebase-config";
import {
  limit,
  query,
  collection,
  getDocs,
  where,
  startAfter,
  orderBy,
} from "firebase/firestore";
import { NavContext } from "../../contexts/NavContext";

function SubCategory() {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

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

  const [data, setData] = useState([]);
  const [latestDoc, setLatestDoc] = useState(null);
  const [LoadButtonStyles, setLoadButtonStyles] = useState({});

  //capitalise first letter of string
  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  //get the last word from the url
  const lastWord = window.location.href.split("/").pop();

  //get products where category is equal to the last word in the url

  const getProducts = async () => {
    const productsCollectionRef = collection(db, "products");

    const q = query(
      productsCollectionRef,
      where("category", "==", capitalise(lastWord)),
      orderBy("id"),
      startAfter(latestDoc || 0),
      limit(15)
    );

    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map((doc) => doc.data());
    if (products.length === 0) {
      setLoadButtonStyles({ display: "none" });
      return;
    }

    if (data) {
      setData((prevData) => [...prevData, ...products]);
    } else {
      setData(products);
    }

    setLatestDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
  };

  const handleLoadMore = () => {
    getProducts();
  };

  useEffect(() => {
    //scroll to top
    window.scrollTo(0, 0);
    getProducts();
  }, []);

  return (
    <div className="big-container-subCat">
      <motion.div
        variants={circleEnterAnimate}
        initial="hidden"
        animate="visible"
        className="fullscreen-circle-enter1"
      />

      <motion.div
        variants={circleExitAnimate}
        initial="hidden"
        exit="visible"
        className="fullscreen-circle-exit1"
      />
      <div
        className="dim"
        onClick={() => setIsNavOpen(false)}
        style={{
          zIndex: isNavOpen ? "10" : "-1",
          opacity: isNavOpen ? "0.5" : "0",
        }}
      />
      <div
        className="subCategory"
        style={{
          transform: isNavOpen ? "translateY(25rem)" : "translateY(0px)",
        }}
      >
        <div className="container ">
          <div className="navbarSeperator" />
          <div className="circle-fixed-wrapper">
            <motion.div
              variants={circleColorAnimate}
              initial="hidden"
              animate="visible"
              className="circle"
            />
          </div>
          <motion.div
            variants={breadcrumbsAnimate}
            initial="hidden"
            animate="visible"
            className="breadcrumbs"
          >
            {"<  "}
            <Link to="/home">Home</Link>
            {"  /  "}
            <Link to="/categories">Categories</Link>
            {"  /  "}
            <p>{lastWord}</p>
          </motion.div>
          <div className="flex-1">
            <motion.h1 className="headline">
              <motion.div
                variants={headline1Animate}
                initial={"hidden"}
                animate={"visible"}
              >
                {/* dresses for&nbsp; */}
                {lastWord}&nbsp;
              </motion.div>
              <motion.div
                variants={headline2Animate}
                initial={"hidden"}
                animate={"visible"}
                className="for-babes"
              >
                for babes
              </motion.div>
            </motion.h1>
            <div className="stock">
              {" "}
              <motion.div
                variants={stockShownAnimate}
                initial={"hidden"}
                animate={"visible"}
              >
                1-{data ? data.length : 0}
                <span>&nbsp;</span>
              </motion.div>
              <motion.div
                variants={stockAllAnimate}
                initial={"hidden"}
                animate={"visible"}
              >
                {/* thanks flexbox */}
                of&nbsp;1478
              </motion.div>
            </div>
          </div>
          <div className="flex-2">
            <motion.button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              variants={filtersAnimate}
              initial={"hidden"}
              animate={"visible"}
              className="filters"
            >
              <p className="filters-icon">
                <BsSliders />
              </p>{" "}
              <p className="filters-text">&nbsp; &nbsp; Filters</p>
            </motion.button>
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
          {data?.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              category={item.category}
              title={item?.name}
              image={item?.images[0]}
              price={item?.price}
            />
          ))}
        </motion.div>
        <div className="load-more" style={LoadButtonStyles}>
          <button onClick={handleLoadMore}>Load More</button>
        </div>
        <div
          className="filter-overlay"
          style={isFiltersOpen ? { display: "grid" } : { display: "none" }}
        >
          <div className="content">
            <div className="subcategories">
              <p className="subcategories-headline">Sub Categories</p>
              <div className="subcategories-buttons">
                {[
                  "Party Dresses",
                  "formal Dresses",
                  "Maxi Dresses",
                  "Bodycon Dresses",
                  "Midi Dresses",
                  "Summer Dresses",
                ].map((subcategory, i) => (
                  <div className="subcategory-button" key={i}>
                    <input
                      type="checkbox"
                      name="subcategory"
                      id={`radio${i}`}
                    />
                    <label htmlFor={`radio${i}`}>{subcategory}</label>
                  </div>
                ))}
              </div>{" "}
            </div>
            <div className="color-size">
              <div className="color">
                <h3>Color</h3>
                <div className="color-options">
                  {["black", "gray", "whitesmoke"].map((color, i) => (
                    <React.Fragment key={i}>
                      <input
                        type="checkbox"
                        name="color"
                        id={`color${i}`}
                        className="color-button"
                      />
                      <label
                        style={{ backgroundColor: color }}
                        htmlFor={`color${i}`}
                      ></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="size">
                <p className="size-headline">Size</p>
                <div className="size-buttons">
                  {["Tall", "Petite", "Plus"].map((size, i) => (
                    <React.Fragment key={i}>
                      <input
                        type="checkbox"
                        name="size"
                        id={`radio${i}`}
                        className="size-button"
                      />
                      <label htmlFor={`radio${i}`}>{size}</label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubCategory;
