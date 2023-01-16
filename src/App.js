import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import NerdFlix from "./components/NerdFlix/NerdFlix";
import { Routes, Route } from "react-router-dom";
import json from "./imdb-top-50.json";
import { useState } from "react";

function App() {
  const data = json.data;
  const [movies, setMovies] = useState([data.movies]);
  console.log(data);
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<NerdFlix data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
