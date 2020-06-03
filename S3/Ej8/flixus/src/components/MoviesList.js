import React from 'react';
import SearchBar from './SearchBar';
import movies from "../data/movies.json"


function MoviesList(props) {
    console.log("hola//////////////////////",props.movieSearchValue)
    return (
        <div class='container'>
            <div class='row'>
                {movies.map(({ popularity, voteCount, posterPath, id, originalLanguage, originalTitle, title, voteAverage, overview, releaseDate }) => {
                    return <Movie key={id} popularity={popularity} voteCount={voteCount} posterPath={posterPath} originalLanguage={originalLanguage} originalTitle={originalTitle} title={title} voteAverage={voteAverage} overview={overview} releaseDate={releaseDate} />;
                })}
            </div>
        </div>
    )
}


function Movie(props) {
    return (
        <div className="col-md-2 bg-light">
            <img className="img-thumbnail" src={props.posterPath} alt="" />
        </div>
    )
}

export default MoviesList;