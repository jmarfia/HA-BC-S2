import React from 'react';
import SearchBar from './SearchBar';



function MoviesList(props) {

    // useEffect(() => {
    //     axios
    //       .get(
    //         https://api.themoviedb.org/3/discover/movie?page=4&api_key=8b2750d5349aee1580596fb781b290bd
    //       )
    //       .then((res) => {
    //         setmovieState(res.data.results);
    //       });
    //   }, []);
    //console.log("hola//////////////////////",props.movieSearchValue)
    console.log(props.ratingValue, "en movieslist")
    console.log(props.movieSearchValue, "el otro de movies list")
    console.log(props.pelis, "el otro de pelis")

    return (
        <div class='container'>
            <div class='row'>
                {props.pelis.map(({ popularity, voteCount, posterPath, id, originalLanguage, originalTitle, title, voteAverage, overview, releaseDate }) => {
                    if(title.toLowerCase().includes(props.movieSearchValue.toLowerCase()) && voteAverage > props.ratingValue){
                    return <Movie key={id} popularity={popularity} voteCount={voteCount} posterPath={posterPath} originalLanguage={originalLanguage} originalTitle={originalTitle} title={title} voteAverage={voteAverage} overview={overview} releaseDate={releaseDate} />;
                }
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