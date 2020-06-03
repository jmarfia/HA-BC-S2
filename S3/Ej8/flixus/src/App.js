import React, { useState } from "react";
import { Header, MoviesList, Rating } from './components'
import './App.css';

function App() {
  const [movieSearch, setMovieSearch] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <div className="App">
      <Header handleMovieSearch={setMovieSearch} movieSearch={movieSearch}/>
      <Rating rating={rating} handleRating={setRating}/>
      <MoviesList movieSearchValue={movieSearch} ratingValue={rating}/>
    </div>
  );
}

export default App;
