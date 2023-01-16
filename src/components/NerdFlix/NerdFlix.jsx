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
            <div key={movie.title} className={classes.movie}>
              <img src={movie.urlPoster} alt={`${movie.title} image`} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default NerdFlix;
