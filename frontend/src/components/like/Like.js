import React, { useState, useEffect } from "react";
import axios from "axios";
import "./like.css";

const Like = ({ movie }) => {
  const [likes, setLikes] = useState([]);
  const getMovieId = async () => {
    await axios.put("http://localhost:3001/user/like", {
      username: "User",
      id: movie.id,
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/infos", {
        params: {
          username: "User",
        },
      })
      .then((res) => {
        setLikes(res.data.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [likes]);

  // Toogle Like button color
  const toogleColor = () => {
    if (likes.includes(movie.id)) {
      return "like__container-btn liked";
    } else {
      return "like__container-btn";
    }
  };
  return (
    <div className="like__container">
      <button className={toogleColor()} onClick={getMovieId}>
        Like
      </button>
    </div>
  );
};

export default Like;
