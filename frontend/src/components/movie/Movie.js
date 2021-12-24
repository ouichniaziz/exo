import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../search/SearchBar";
import Like from "../like/Like";
import "./movie.css";

const Movie = () => {
  const [searchInputByName, setSearchInputByName] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const dataArray = !searchInputByName.length ? movies : searchData;

  // Search Input from SearchBar Component
  const handleSearchByName = (searchInput) => {
    setSearchInputByName(searchInput);
  };

  const handleSearchData = (data) => {
    setSearchData(data);
  };

  // Add class in rating span
  const ratingColor = (rate) => {
    if (rate >= 8) return "green";
    else if (rate >= 6) return "orange";
    else return "red";
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/movies");
        setMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);
  return (
    <>
      <div className="search__container">
        <SearchBar search={handleSearchByName} data={handleSearchData} />
      </div>
      {/* Get 10 elements from the array of movies */}

      {dataArray.map((movie, key) => (
        <div className="movie__container" key={key}>
          <div className="movie__container-image">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </div>

          <div className="movie__container-infos">
            <h1 className="title">{movie.title}</h1>
            <h2 className="infos">Realease Date: {movie.release_date} </h2>
            <h2 className="infos">
              Rating:{" "}
              <span className={`rating ${ratingColor(movie.vote_average)}`}>
                {movie.vote_average}
              </span>{" "}
            </h2>
            <Like movie={movie} />
          </div>
        </div>
      ))}
      {!searchInputByName ? (
        ""
      ) : (
        <div className="infos__search">
          <h3 className="infos__search-text">Click Enter to Search</h3>
        </div>
      )}
    </>
  );
};

export default Movie;
