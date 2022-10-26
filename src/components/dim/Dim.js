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
    isRecommendationsOpen,
    setIsRecommendationsOpen,
  } = useNavContext();

  useEffect(() => {
    if (isNavOpen || isSearchOpen || isCartOpen || isRecommendationsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavOpen, isCartOpen, isSearchOpen, isRecommendationsOpen]);

  return (
    <div
      className="dim"
      onClick={() => {
        setIsNavOpen(false);
        setIsSearchOpen(false);
        setIsCartOpen(false);
        setIsRecommendationsOpen(false);
      }}
      style={{
        zIndex:
          isNavOpen || isSearchOpen || isCartOpen || isRecommendationsOpen
            ? "10"
            : "-1",
        opacity:
          isNavOpen || isSearchOpen || isCartOpen || isRecommendationsOpen
            ? "0.5"
            : "0",
      }}
    />
  );
}

export default Dim;
