import NavBar from "./components/NavBar/NavBar";
import NerdFlix from "./components/NerdFlix/NerdFlix";
import { Routes, Route } from "react-router-dom";
import json from "./imdb-top-50.json";
import { useState } from "react";

function App() {
  const data = json.data;
  const [likedMovies, setLikedMovies] = useState(false);

  //console.log("test", data);
  return (
    <div className="App">
      <NavBar likedMovies={likedMovies} setLikedMovies={setLikedMovies} />
      <Routes>
        <Route
          path="/"
          element={
            <NerdFlix
              data={data}
              likedMovies={likedMovies}
              setLikedMovies={setLikedMovies}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
