import React from 'react';
import SearchBar from './SearchBar';

function Header(props) {
    return (
        <div id="headBG">
            <div id="headerText">
                <h4>Your favourites movies. Explained</h4>
                <h5>Figured out what happend. Then find out why.</h5>
                <SearchBar handleMovieSearch={props.handleMovieSearch} movieSearch={props.movieSearch}/>
            </div>

        </div>
    )
}

export default Header;