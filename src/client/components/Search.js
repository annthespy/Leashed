import React from "react";
import axios from "axios";
import Dogs from "./Dogs.js";
import SearchBar from "./SearchBar.js";

const Search = ({ dogs, handleSearch }) => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <SearchBar dogs={dogs} handleSearch={handleSearch} />
      </div>
      <div className="dogs">
        <Dogs dogs={dogs} />
      </div>
    </div>
  );
};

export default Search;
