import React from "react";
import { FiSearch } from "react-icons/fi";
import "./search.scss";
function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <button>
        <FiSearch />
      </button>
    </div>
  );
}

export default Search;
