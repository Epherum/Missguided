import "./search.scss";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  //get data back from the database
  const getSearchResults = async () => {
    const productsCollectionRef = collection(db, "products");
    const q = query(productsCollectionRef, where("name", "in", [searchInput]));
    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map((doc) => doc.data());
    setSearchResults(products);
  };

  useEffect(() => {
    getSearchResults();
    console.log(searchResults);
  }, [searchInput]);

  return (
    <div className="search-overlay">
      <div className="inputs">
        <input
          onChange={(e) => handleSearch(e)}
          type="text"
          placeholder="Search"
        />
        <button>clear</button>
      </div>
      <div className="result">
        {searchResults?.map((item, i) => (
          <Link to={`/categories/${item.category}/${item.name}/${item.id}`}>
            <div className="info">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Search;
