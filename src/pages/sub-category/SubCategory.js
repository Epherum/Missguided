import Product from "./product/Product";
import { BsSliders } from "react-icons/bs";
import { motion } from "framer-motion";
import animations from "./animations";
import { Link } from "react-router-dom";
import "./sub-category.scss";
import React, { useState, useEffect } from "react";
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
import { useNavContext } from "../../contexts/NavContext";
import Dim from "../../components/dim/Dim";

function SubCategory() {
  const { isNavOpen, isCartOpen } = useNavContext();

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [subcategoriesFilter, setSubcategoriesFilter] = useState([]);
  const [colorsFilter, setColorsFilter] = useState([]);
  const [availableSubcategories, setAvailableSubcategories] = useState([]);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [products, setProducts] = useState([]);
  const [latestDoc, setLatestDoc] = useState(null);
  const [LoadButtonStyles, setLoadButtonStyles] = useState({});

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

  //capitalise first letter of string
  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  //get the last word from the url
  const lastWord = window.location.href.split("/").pop();

  const getAllProducts = async (resetLatestDoc) => {
    const productsCollectionRef = collection(db, "products");

    const request = [
      where("category", "==", capitalise(lastWord)),
      orderBy("id"),
    ];
    if (resetLatestDoc) {
      request.push(startAfter(0));
    } else {
      request.push(startAfter(latestDoc || 0));
    }

    const q = query(productsCollectionRef, ...request, limit(15));

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());

    if (data.length === 0) {
      setLoadButtonStyles({ display: "none" });
      return;
    }

    if (products) {
      setProducts((prevProducts) => [...prevProducts, ...data]);
    } else {
      setProducts(data);
    }

    setLatestDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
  };

  const getFilteredProducts = async (loadMore) => {
    const productsCollectionRef = collection(db, "products");

    const request = [where("category", "==", capitalise(lastWord))];

    if (subcategoriesFilter.length > 0)
      request.push(where("type", "in", subcategoriesFilter));

    if (colorsFilter.length > 0)
      request.push(where("type", "in", colorsFilter));

    const q = query(
      productsCollectionRef,
      ...request,
      orderBy("id"),
      startAfter(latestDoc || 0),
      limit(15)
    );
    console.log(subcategoriesFilter);

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());

    if (data.length === 0) {
      setLoadButtonStyles({ display: "none" });
      return;
    }

    if (loadMore) {
      setProducts((prevProducts) => [...prevProducts, ...data]);
    } else {
      setProducts(data);
    }

    setLatestDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
  };

  const getProducts = async () => {
    if (
      subcategoriesFilter.length === 0 &&
      colorsFilter.length === 0 &&
      isFilterOn === true
    ) {
      setIsFilterOn(false);
      setProducts([]);
      getAllProducts(true);
    } else if (subcategoriesFilter.length === 0 && colorsFilter.length === 0) {
      getAllProducts();
    } else {
      getFilteredProducts();
      setIsFilterOn(true);
    }
  };

  const getSubcategories = async () => {
    const categoriesCollectionRef = collection(db, "categories");
    const q = query(
      categoriesCollectionRef,
      where("category", "==", capitalise(lastWord))
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    setAvailableSubcategories(data[0].subcategories);
  };

  useEffect(() => {
    getProducts();
    setLoadButtonStyles({ display: "flex" });
  }, [subcategoriesFilter]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getSubcategories();
  }, []);

  const handleLoadMore = () => {
    if (isFilterOn) {
      getFilteredProducts(true);
    } else {
      getProducts();
    }
  };

  const handelSubcategoriesFilter = (e) => {
    const value = e.target.value;
    if (subcategoriesFilter.includes(value)) {
      setSubcategoriesFilter((prevSubcategoriesFilter) =>
        prevSubcategoriesFilter.filter((item) => item !== value)
      );
    } else {
      setSubcategoriesFilter((prevSubcategoriesFilter) => [
        ...prevSubcategoriesFilter,
        value,
      ]);
    }
  };

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
      <Dim />
      <div
        className="subCategory"
        style={{
          transform: isNavOpen ? "translateY(25rem)" : "translateY(0px)",
          translate: isCartOpen ? "-28rem 0rem" : "0rem 0rem",
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
                1-{products ? products.length : 0}
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
          {products?.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              category={item.category}
              title={item.name}
              image={item.images[0]}
              price={item.price}
              color={item.color}
            />
          ))}
          <div
            className="filter-overlay"
            style={{
              transform: isFiltersOpen ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <div className="content">
              <div className="subcategories">
                <p className="subcategories-headline">Sub Categories</p>
                <div className="subcategories-buttons">
                  {availableSubcategories?.map((subcategory, i) => (
                    <div className="subcategory-button" key={i}>
                      <input
                        onChange={(e) => handelSubcategoriesFilter(e)}
                        type="checkbox"
                        value={subcategory}
                        id={`radio${i}`}
                      />
                      <label htmlFor={`radio${i}`}>{subcategory}</label>
                    </div>
                  ))}
                </div>{" "}
              </div>
              {/* <div className="color-size">
                <div className="color-headline">
                  <h3>Color</h3>
                  <div className="color-buttons">
                    {[
                      "black",
                      "gray",
                      "blue",
                      "red",
                      "black",
                      "gray",
                      "blue",
                      "red",
                      "black",
                      "gray",
                      "blue",
                      "red",
                    ].map((color, i) => (
                      <div className="color-button" key={i}>
                        <input
                          onChange={(e) => console.log(e.target.value)}
                          type="checkbox"
                          value={color}
                          id={`color${i}`}
                        />
                        <label
                          style={{ backgroundColor: color }}
                          htmlFor={`color${i}`}
                        ></label>
                      </div>
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
              </div> */}
            </div>
          </div>
        </motion.div>
        <div className="load-more" style={LoadButtonStyles}>
          <button onClick={handleLoadMore}>Load More</button>
        </div>
      </div>
    </div>
  );
}

export default SubCategory;
