import React, { useState } from "react";
import classes from "./NerdFlix.module.css";

function NerdFlix(data) {
  const [movies, setMovies] = useState(data.data.movies);
  const [search, setSearch] = useState("");
  return (
    <div className={classes.nerdflix}>
      <h1>{movies[0].title}</h1>
    </div>
  );
}

export default NerdFlix;
