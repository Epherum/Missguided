import { FiSearch } from "react-icons/fi";
import { BsHeart, BsBag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import "./nav.scss";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { useNavContext } from "../../contexts/NavContext";
import Menu from "./navComponents/menu/Menu";
import Search from "./navComponents/search/Search";
import Cart from "./navComponents/cart/Cart";
import { useCartContext } from "../../contexts/CartContext";
function Nav() {
  const {
    isNavOpen,
    isSearchOpen,
    isCartOpen,
    setIsNavOpen,
    setIsSearchOpen,
    setIsCartOpen,
  } = useNavContext();

  const { cartItems } = useCartContext();

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
          <Link
            onClick={() => {
              setIsNavOpen(false);
              setIsSearchOpen(false);
              setIsCartOpen(false);
            }}
            to={location.pathname === "/" ? "/" : "/home"}
          >
            MISSGUIDED
          </Link>
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
          <motion.div
            className="search"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            variants={navAnimate}
          >
            <FiSearch />
          </motion.div>
        </motion.li>
        <motion.li variants={navAnimate} className="profile-mobile-view">
          <Link to={"/checkout"}>
            <BsBag />
            {cartItems?.length > 0 && (
              <span className="badge">
                <p className="count">{cartItems.length}</p>
              </span>
            )}
          </Link>
        </motion.li>
        <motion.li variants={navAnimate} className="profile">
          <motion.div className="wishlist" variants={navAnimate}>
            <BsHeart />
          </motion.div>
          <motion.div
            className="bag"
            variants={navAnimate}
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <BsBag />
            {cartItems?.length > 0 && (
              <span className="badge">
                <p className="count">{cartItems.length}</p>
              </span>
            )}
          </motion.div>
          <motion.div className="user" variants={navAnimate}>
            <IoPersonOutline />
          </motion.div>
        </motion.li>
      </motion.ul>
      <Menu />
      <Search />
      <Cart />
    </nav>
  );
}

export default Nav;
