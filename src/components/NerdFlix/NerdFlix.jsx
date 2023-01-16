import React, { useState } from "react";

function NerdFlix(data) {
  const [movies, setMovies] = useState([data.movies]);
  console.log(data);
  return (
    <div>
      <h1>{data.movies[0].title}</h1>
    </div>
  );
}

export default NerdFlix;
