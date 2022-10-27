import { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import "./menu.scss";
import { useNavContext } from "../../../../contexts/NavContext";
import { db } from "../../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function Menu() {
  const [categories, setCategories] = useState([]);
  const { isNavOpen, setIsNavOpen } = useNavContext();

  const getCategories = async () => {
    const productsCollectionRef = collection(db, "categories");
    const querySnapshot = await getDocs(productsCollectionRef);
    const products = querySnapshot.docs.map((doc) => doc.data());
    products.reverse();
    setCategories(products);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div
      className="menu-overlay"
      style={{
        top: isNavOpen ? "0" : "-80%",
      }}
    >
      <div className="content">
        {categories?.map((item, i) => (
          <div className="category" key={i}>
            <Link
              to={`/categories/${item.category}`}
              onClick={() => setIsNavOpen(!isNavOpen)}
              style={{
                opacity: isNavOpen ? "1" : "0",
                transitionDelay: isNavOpen ? `${0.07 * i + 0.5}s, 0s` : "0s,0s",
                transitionProperty: "opacity, color",
              }}
              className="headline"
            >
              {item.category}
            </Link>
            <ul>
              {item?.subcategories?.map((sub) => (
                <li key={sub}>
                  <Link
                    to={`/categories/${item.category}`}
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    style={{
                      opacity: isNavOpen ? "1" : "0",
                      transitionDelay: isNavOpen
                        ? `${0.07 * i + 0.5}s, 0s`
                        : "0s,0s",
                      transitionProperty: "opacity, color",
                    }}
                  >
                    {sub}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
