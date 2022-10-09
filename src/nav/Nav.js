import React from "react";
import { FiSearch } from "react-icons/fi";
import { VscMenu } from "react-icons/vsc";
import { BsHeart, BsBag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import "./nav.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// TODO:
//* change text to links
//* add hover animations
//* change menu icon

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
    },
  },
};

//remove the delay from the first child

function Nav() {
  return (
    <nav className="container">
      <motion.ul
        variants={navAnimate}
        initial="hidden"
        animate="visible"
        className="nav-list"
      >
        <motion.li variants={navAnimate} className="logo">
          <Link to="/">MISSGUIDED</Link>
        </motion.li>

        <motion.div variants={navAnimate} className="menu-search">
          <motion.li variants={navAnimate}>
            <Link to="/">
              <VscMenu />
            </Link>
          </motion.li>
          <motion.li variants={navAnimate}>
            <Link to="/">
              <FiSearch />
            </Link>
          </motion.li>
        </motion.div>
        <motion.div className="profile-mobile-view">
          <motion.li variants={navAnimate}>
            <Link to="/">
              <BsBag />
            </Link>
          </motion.li>
        </motion.div>
        <motion.div variants={navAnimate} className="profile">
          <motion.li variants={navAnimate}>
            <Link to="/">
              <BsHeart />
            </Link>
          </motion.li>
          <motion.li variants={navAnimate}>
            <Link to="/">
              <BsBag />
            </Link>
          </motion.li>
          <motion.li variants={navAnimate}>
            <Link to="/">
              <IoPersonOutline />
            </Link>
          </motion.li>
        </motion.div>
      </motion.ul>
    </nav>
  );
}

export default Nav;
