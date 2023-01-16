import React, { useState } from "react";
import Search from "../Search/Search";
import classes from "./NerdFlix.module.css";

function NerdFlix(data) {
  const [movies, setMovies] = useState(data.data.movies);
  const [search, setSearch] = useState("");
  return (
    <div className={classes.nerdflix}>
      <h1>Movies</h1>
      <div>
        <Search search={search} setSearch={setSearch} />
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
                  <img alt="Likes" src="../assets/like_icon.svg" />
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
