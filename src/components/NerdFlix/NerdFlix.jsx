import React, { useState } from "react";
import Search from "../Search/Search";
import classes from "./NerdFlix.module.css";

function NerdFlix(data) {
  const [movies, setMovies] = useState(data.data.movies);
  const [search, setSearch] = useState("");
  const [likedMovies, setLikedMovies] = useState(false);
  const [order, setOrder] = useState("A-Z");
  const sortingAZ = (title) => {
    if (order === "A-Z") {
      const sorted = [...movies].sort((a, b) =>
        a[title].toLowerCase() > b[title].toLowerCase() ? 1 : -1
      );
      setMovies(sorted);
      setOrder("Z-A");
    }
  };
  const sortingZA = (title) => {
    if (order === "Z-A") {
      const sorted = [...movies].sort((a, b) =>
        a[title].toLowerCase() < b[title].toLowerCase() ? 1 : -1
      );
      setMovies(sorted);
      setOrder("A-Z");
    }
  };

  let likedImage = "../assets/like_icon.svg";
  if (likedMovies === false) {
    likedImage = "../assets/like_icon.svg";
  } else {
    likedImage = "../assets/star_icon.svg";
  }
  const handleLikes = () => {
    setLikedMovies(!likedMovies);
  };

  return (
    <div className={classes.nerdflix}>
      <div className={classes.title}>
        <h1>Movies</h1>
      </div>
      <div className={classes.header}>
        <div>
          <Search search={search} setSearch={setSearch} />
        </div>
        <div className={classes.sort}>
          {" "}
          <p>Sort by</p>
          <button onClick={() => sortingAZ("title")}>Title(A-Z)</button>
          <button onClick={() => sortingZA("title")}>Title(Z_A)</button>
        </div>
      </div>

      <div className={classes.list}>
        {movies
          .filter((movie) => {
            return movie.title.toLowerCase().includes(search.toLowerCase());
          })
          .map((movie) => (
            <div key={movie.title} className={classes.movieWrapper}>
              <div className={classes.imageMovie}>
                <img
                  src={movie.urlPoster}
                  alt={`${movie.title} image`}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "../assets/error_image.png";
                  }}
                />
                <div className={classes.movieHover}>
                  {" "}
                  <button onClick={handleLikes}>
                    <img alt="Likes" src={likedImage} />
                  </button>
                  <h3>{movie.rating}</h3>
                </div>
              </div>
              <h5>{movie.title}</h5>
              <p>{movie.year}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default NerdFlix;
