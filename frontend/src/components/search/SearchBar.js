import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./searchBar.css";

const SearchBar = ({ search, data }) => {
  const [searchTextByName, setSearchTextByName] = useState("");
  const [searchData, setSearchData] = useState([]);

  // Child to parent 
  search(searchTextByName);
  data(searchData);

// Listen for text input if is empty
  useEffect(() => {
    if (!searchTextByName.length) {
      setSearchData([])
    }
  }, [searchTextByName])

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("http://localhost:3001/search", {params: {
        search: searchTextByName
      }})
      setSearchData(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="search__container" onSubmit={(e) => handleSearch(e)}>
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