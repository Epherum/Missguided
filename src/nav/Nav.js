import React from "react";
import { FiSearch } from "react-icons/fi";
import { VscMenu } from "react-icons/vsc";
import { BsHeart, BsBag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import "./nav.scss";
import { Link } from "react-router-dom";

// TODO:
//* change text to links
//* add hover animations
//* change menu icon
//* make responsive

function Nav() {
  return (
    <nav className="container nav">
      <ul className="nav-list">
        <li className="nav-list-logo">
          <Link to="/">MISSGUIDED</Link>
        </li>
        <div className="nav-list-menu-search">
          <li>
            <VscMenu />
          </li>
          <li>
            <FiSearch />
          </li>
        </div>
        <div className="nav-list-profile">
          <li>
            <BsHeart />
          </li>
          <li>
            <BsBag />
          </li>
          <li>
            <IoPersonOutline />
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
