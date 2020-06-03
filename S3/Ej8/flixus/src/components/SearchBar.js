import React, { useState } from "react";

function SearchBar(props) {
  
  return (
    <form class="form-inline d-flex justify-content-center md-form form-sm active-pink active-pink-2 mt-2">
      <i class="fas fa-search" aria-hidden="true" />
      <input
        id="movieSearch"
        name="movieSearch"
        className="form-control form-control-sm ml-3 w-25"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(event)=> props.handleMovieSearch(event.target.value)}
        value={props.movieSearch}
      />
    </form>
  );
}

export default SearchBar;
