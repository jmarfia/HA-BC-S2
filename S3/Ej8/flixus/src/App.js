import React, { useState } from "react";
import { Header, MoviesList, Rating } from './components'
import './App.css';

function App() {
  const [movieSearch, setMovieSearch] = useState("");
  

  return (
    <div className="App">
      <Header handleMovieSearch={setMovieSearch} movieSearch={movieSearch}/>
      <Rating />
      <MoviesList movieSearchValue={movieSearch}/>
    </div>
  );
}

export default App;
