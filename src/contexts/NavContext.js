import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export function useNavContext() {
  return useContext(NavContext);
}

export function NavProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isRecommendationsOpen, setIsRecommendationsOpen] = useState(false);
  return (
    <NavContext.Provider
      value={{
        isNavOpen,
        setIsNavOpen,
        isSearchOpen,
        setIsSearchOpen,
        isCartOpen,
        setIsCartOpen,
        isRecommendationsOpen,
        setIsRecommendationsOpen,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}
