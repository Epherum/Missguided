import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { BsHeart, BsBag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import "./nav.scss";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { NavContext } from "../contexts/NavContext";
import Menu from "./components/menu/Menu";
import Search from "./components/search/Search";
function Nav() {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);

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
      <Menu />
      {/* <Search /> */}
    </nav>
  );
}

export default Nav;
