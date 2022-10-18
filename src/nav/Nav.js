import React from "react";
import { FiSearch } from "react-icons/fi";
import { VscMenu } from "react-icons/vsc";
import { BsHeart, BsBag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import "./nav.scss";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
// TODO:
//* change menu icon

function Nav() {
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
          <Link to="/home">MISSGUIDED</Link>
        </motion.li>

        <motion.div variants={navAnimate} className="menu-search">
          <motion.li variants={navAnimate}>
            <Link className="menu" to="/home">
              <VscMenu />
            </Link>
          </motion.li>
          <motion.li variants={navAnimate}>
            <Link className="search" to="/home">
              <FiSearch />
            </Link>
          </motion.li>
        </motion.div>
        <motion.div className="profile-mobile-view">
          <motion.li variants={navAnimate}>
            <Link to="/home">
              <BsBag />
            </Link>
          </motion.li>
        </motion.div>
        <motion.div variants={navAnimate} className="profile">
          <motion.li variants={navAnimate}>
            <Link className="wishlist" to="/home">
              <BsHeart />
            </Link>
          </motion.li>
          <motion.li variants={navAnimate}>
            <Link className="bag" to="/home">
              <BsBag />
            </Link>
          </motion.li>
          <motion.li variants={navAnimate}>
            <Link className="user" to="/home">
              <IoPersonOutline />
            </Link>
          </motion.li>
        </motion.div>
      </motion.ul>
    </nav>
  );
}

export default Nav;
