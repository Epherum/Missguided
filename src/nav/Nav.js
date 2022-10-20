import { useState, useEffect, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { BsHeart, BsBag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import "./nav.scss";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { db } from "../firebase-config";
import { limit, query, collection, getDocs, where } from "firebase/firestore";
import { NavContext } from "../contexts/NavContext";
// TODO:
//* change menu icon

function Nav() {
  const [categories, setCategories] = useState([]);
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);

  const getCategories = async () => {
    const productsCollectionRef = collection(db, "categories");

    const querySnapshot = await getDocs(productsCollectionRef);
    const products = querySnapshot.docs.map((doc) => doc.data());
    products.reverse();
    setCategories(products);
  };

  useEffect(() => {
    getCategories();
  }, []);

  let delay = 0;
  const location = useLocation();
  if (location.pathname === "/") {
    delay = 3.5;
  } else {
    delay = 0;
  }

  const navAnimate = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
        ease: "easeOut",
        duration: 0.5,
        delay: delay,
      },
    },
  };
  return (
    <nav className="container">
      <motion.ul
        variants={navAnimate}
        initial="hidden"
        animate="visible"
        className="nav-list"
      >
        <motion.li variants={navAnimate} className="logo">
          <Link to={location.pathname === "/" ? "/" : "/home"}>MISSGUIDED</Link>
        </motion.li>

        <motion.li variants={navAnimate} className="menu-search">
          <motion.div
            className="menu"
            onClick={() => setIsNavOpen(!isNavOpen)}
            variants={navAnimate}
          >
            <span className={isNavOpen ? "lineTop spin" : "lineTop "} />
            <span className={isNavOpen ? "lineBottom spin" : "lineBottom"} />
          </motion.div>
          <motion.div variants={navAnimate}>
            <Link className="search" to="/home">
              <FiSearch />
            </Link>
          </motion.div>
        </motion.li>
        <motion.li className="profile-mobile-view">
          <motion.div variants={navAnimate}>
            <Link to="/home">
              <BsBag />
            </Link>
          </motion.div>
        </motion.li>
        <motion.li variants={navAnimate} className="profile">
          <motion.div variants={navAnimate}>
            <Link className="wishlist" to="/home">
              <BsHeart />
            </Link>
          </motion.div>
          <motion.div variants={navAnimate}>
            <Link className="bag" to="/home">
              <BsBag />
            </Link>
          </motion.div>
          <motion.div variants={navAnimate}>
            <Link className="user" to="/home">
              <IoPersonOutline />
            </Link>
          </motion.div>
        </motion.li>
      </motion.ul>
      <div
        className="nav-overlay"
        style={{
          top: isNavOpen ? "0" : "-70%",
        }}
      >
        <div className="content">
          {categories?.map((item, i) => (
            <div className="category" key={i}>
              <motion.h2 variants={navAnimate}>
                <Link
                  to={`/categories/${item.category}`}
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  style={{
                    opacity: isNavOpen ? "1" : "0",
                    transitionDelay: isNavOpen
                      ? `${0.07 * i + 0.5}s, 0s`
                      : "0s,0s",
                    transitionProperty: "opacity, color",
                  }}
                >
                  {item.category}
                </Link>
              </motion.h2>
              <ul>
                {item?.subcategories?.map((sub) => (
                  <li key={sub}>
                    <Link
                      to={`/categories/${sub}`}
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      style={{
                        opacity: isNavOpen ? "1" : "0",
                        transitionDelay: isNavOpen
                          ? `${0.07 * i + 0.5}s, 0s`
                          : "0s,0s",
                        transitionProperty: "opacity, color",
                      }}
                    >
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
