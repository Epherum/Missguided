import "./search.scss";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { useNavContext } from "../../../../contexts/NavContext";

function Search() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const [products, setProducts] = useState({});

  const { isSearchOpen, setIsSearchOpen } = useNavContext();

  const searchProducts = async () => {
    if (value.length > 0) {
      setResult([]);
      let searchQuery = value.toLowerCase();
      for (const key in products) {
        let fruit = products[key].name.toLowerCase();
        if (fruit.slice(0, searchQuery.length).indexOf(searchQuery) != -1) {
          setResult((prevResult) => {
            return [...prevResult, products[key]];
          });
        }
      }
    } else {
      setResult([]);
    }
  };

  const getProducts = async () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "products/")).then((snapshot) => {
      setProducts(snapshot.val());
    });
  };

  useEffect(() => {
    searchProducts();
  }, [value]);

  useEffect(() => {
    if (!isSearchOpen) {
      setValue("");
      setResult([]);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div
      className="search-overlay"
      style={{
        top: isSearchOpen ? "0" : "-20%",
      }}
    >
      <div className="input">
        <span>
          <FiSearch />
        </span>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          name="search"
          placeholder="ex: white dress"
        />

        <label onClick={() => setValue("")} htmlFor="search">
          {value.length > 0 ? "reset" : "search"}
        </label>
      </div>
      {result.length > 0 && (
        <div className="result">
          {result?.map((item, i) => (
            <Link
              key={i}
              to={`/categories/${item.category}/${item.name}/${item.id}`}
            >
              <h5 onClick={() => setIsSearchOpen(!isSearchOpen)}>
                {item.name}
              </h5>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
