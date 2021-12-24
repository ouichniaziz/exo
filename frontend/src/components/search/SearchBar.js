import React, { useState } from "react";
import "./searchBar.css";

const SearchBar = ({ search }) => {
  const [searchTextByName, setSearchTextByName] = useState("");
  search(searchTextByName);
  return (
    <form className="search__container">
      <input
        type="text"
        placeholder="Search a movie"
        onChange={(event) => {
            setSearchTextByName(event.target.value)
    
        }}
      />
    </form>
  );
};

export default SearchBar;