import { useNavContext } from "../../contexts/NavContext";
import "./dim.scss";
import { useEffect } from "react";
function Dim() {
  const {
    isNavOpen,
    isSearchOpen,
    isCartOpen,
    setIsNavOpen,
    setIsSearchOpen,
    setIsCartOpen,
  } = useNavContext();

  useEffect(() => {
    if (isNavOpen || isSearchOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavOpen, isCartOpen, isSearchOpen]);

  return (
    <div
      className="dim"
      onClick={() => {
        setIsNavOpen(false);
        setIsSearchOpen(false);
        setIsCartOpen(false);
      }}
      style={{
        zIndex: isNavOpen || isSearchOpen || isCartOpen ? "10" : "-1",
        opacity: isNavOpen || isSearchOpen || isCartOpen ? "0.5" : "0",
      }}
    />
  );
}

export default Dim;
