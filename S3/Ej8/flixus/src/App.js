import React, { useState, useEffect } from "react";
import { Header, MoviesList, Rating } from "./components";
import Search from './components/Search'
import axios from 'axios'

import "./App.css";
import $ from "jquery";
import movies from "./data/movies.json";

// const [movieState, setmovieState] = useState({});
//   axios
//     .get(
//       `https://api.themoviedb.org/3/discover/movie?page=6&api_key=8b2750d5349aee1580596fb781b290bd`
//     )
//     .then((res) => {
//       //let resultMovies = res.data;
//       return setmovieState(res.data);
//       //this.setState({ movies }); clases
//       //return resultMovies;
//     })
//     .catch((err) => console.warn("********************", err));
//   console.log(movieState, "CONSULTA DE AXIOS");

function App() {
  const [movieSearch, setMovieSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [state, setState] = useState({
  s:"", 
  results:[],
  selected:{}
})
  //const urlAPI = "https://api.themoviedb.org/3/discover/movie?page=6&api_key=8b2750d5349aee1580596fb781b290bd";
  const urlAPI = "http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1&apikey=ebba410a";


  const search = (e)=>{
    if(e.key === "Enter"){
      axios(urlAPI + "&s=" + state.s).then((data)=>{
        console.log(data);
      });

    }
  }
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return{ ...prevState, s: s}
    });

    console.log(state.s)
  };

  return (
    <div className="App">
      <Header handleMovieSearch={setMovieSearch} movieSearch={movieSearch} />
      <Rating rating={rating} handleRating={setRating} />
      <Search handleInput={handleInput} search={search}/>
    </div>
  );
}

export default App;
      // {/* <MoviesList
      //   movieSearchValue={movieSearch}
      //   ratingValue={rating}
      //   pelis={movies}
      // /> */}