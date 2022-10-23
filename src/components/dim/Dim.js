import React from "react";
import { NavContext } from "../../contexts/NavContext";
import { useContext } from "react";
import "./dim.scss";

function Dim() {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);
  const { isSearchOpen, setIsSearchOpen } = useContext(NavContext);
  return (
    <div
      className="dim"
      onClick={() => {
        setIsNavOpen(false);
        setIsSearchOpen(false);
      }}
      style={{
        zIndex: isNavOpen || isSearchOpen ? "10" : "-1",
        opacity: isNavOpen || isSearchOpen ? "0.5" : "0",
      }}
    />
  );
}

export default Dim;
