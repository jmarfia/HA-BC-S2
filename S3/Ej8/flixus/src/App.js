import React, { useState } from "react";
import { Header, MoviesList } from './components'
import './App.css';

function App() {
  const [movieSearch, setMovieSearch] = useState("");
  

  return (
    <div className="App">
      <Header handleMovieSearch={setMovieSearch} movieSearch={movieSearch}/>
      <MoviesList movieSearchValue={movieSearch}/>
    </div>
  );
}

export default App;
