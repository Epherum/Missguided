import Product from "./product/Product";
import { BsSliders } from "react-icons/bs";
import { motion } from "framer-motion";
import animations from "./animations";
import { Link } from "react-router-dom";
import "./sub-category.scss";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { limit, query, collection, getDocs, where } from "firebase/firestore";

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

  const [data, setData] = useState([]);
  const [stockShown, setStockShown] = useState(0);

  //capitalise first letter of string
  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  //get the last word from the url
  const lastWord = window.location.href.split("/").pop();

  const get40Products = async () => {
    const productsCollectionRef = collection(db, "products");
    const q = query(
      productsCollectionRef,
      where("category", "==", capitalise(lastWord)),
      limit(5)
    );
    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map((doc) => doc.data());
    setData(products);
  };
  //function to set the stock shown
  const setStock = () => {
    let stock = 0;
    data?.forEach(() => {
      stock += 1;
    });
    setStockShown(stock);
  };

  useEffect(() => {
    get40Products();
    setStock();
  }, []);

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
          <p>Dresses</p>
        </motion.div>
        <div className="flex-1">
          <motion.h1 className="headline">
            <motion.div
              variants={headline1Animate}
              initial={"hidden"}
              animate={"visible"}
            >
              dresses for&nbsp;
            </motion.div>
            <motion.div
              variants={headline2Animate}
              initial={"hidden"}
              animate={"visible"}
            >
              babes
            </motion.div>
          </motion.h1>
          <p className="stock">
            {" "}
            <motion.div
              variants={stockShownAnimate}
              initial={"hidden"}
              animate={"visible"}
            >
              1-{stockShown}
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
        {data?.map((item) => (
          <Product
            key={item.id}
            title={item?.name}
            images={item?.images}
            price={item?.price}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default SubCategory;
