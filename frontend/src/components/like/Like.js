import React from "react";
import "./like.css";

const Like = ({ movie }) => {
  const getMovieId = () => {
    console.log("here", movie);
  };
  return (
    <div className="like__container">
      <button className="like__container-btn liked" onClick={getMovieId}>
        Like
      </button>
    </div>
  );
};

export default Like;
