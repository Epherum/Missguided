import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./menu.scss";
import { useNavContext } from "../../../../contexts/NavContext";
import { db } from "../../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

// Define the slide transition duration (in seconds) - make sure it matches SCSS
const SLIDE_DURATION = 0.5; // Example: 0.5s

function Menu() {
  const [categories, setCategories] = useState([]);
  const { isNavOpen, setIsNavOpen } = useNavContext();

  const getCategories = async () => {
    try {
      const productsCollectionRef = collection(db, "categories");
      const querySnapshot = await getDocs(productsCollectionRef);
      const products = querySnapshot.docs.map((doc) => doc.data());
      products.reverse(); // Keep if needed
      setCategories(products);
    } catch (error) {
      console.error("Error fetching categories:", error);
      // Handle error appropriately
    }
  };

  useEffect(() => {
    getCategories();
    // No need to check screen size here for positioning anymore
  }, []);

  // Function to close the menu, used by links
  const closeMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <div
      className={`menu-overlay ${isNavOpen ? "is-open" : ""}`}
      // No inline style needed for positioning anymore
      // Add aria-hidden for accessibility
      aria-hidden={!isNavOpen}
    >
      <div className="content">
        {categories?.map((item, i) => (
          <div className="category" key={i}>
            <Link
              to={`/categories/${item.category}`}
              onClick={closeMenu} // Close menu on click
              style={{
                // Apply opacity transition only when opening
                opacity: isNavOpen ? 1 : 0,
                transitionDelay: isNavOpen
                  ? `${0.07 * i + SLIDE_DURATION}s` // Start fade-in after slide completes
                  : "0s", // No delay when hiding immediately
                transitionProperty: "opacity, color",
                // Ensure links are not focusable when menu is closed
                tabIndex: isNavOpen ? 0 : -1,
              }}
              className="headline"
            >
              {item.category}
            </Link>
            <ul>
              {item?.subcategories?.map(
                (
                  sub,
                  subIndex // Added subIndex for potential key uniqueness if needed
                ) => (
                  <li key={`${item.category}-${sub}`}>
                    {" "}
                    {/* More robust key */}
                    <Link
                      to={`/categories/${item.category}`} // Maybe link to subcategory later? `/categories/${item.category}/${sub}`
                      onClick={closeMenu} // Close menu on click
                      style={{
                        // Apply opacity transition only when opening
                        opacity: isNavOpen ? 1 : 0,
                        transitionDelay: isNavOpen
                          ? `${0.07 * i + SLIDE_DURATION + 0.1}s` // Slightly later delay for subcategories
                          : "0s", // No delay when hiding immediately
                        transitionProperty: "opacity, color",
                        // Ensure links are not focusable when menu is closed
                        tabIndex: isNavOpen ? 0 : -1,
                      }}
                    >
                      {sub}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
