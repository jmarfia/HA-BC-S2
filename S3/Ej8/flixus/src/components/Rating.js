import React from "react";

function Rating(props) {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <h5>Filter By Rating</h5>
      </div>
      <span className="star-rating">
        <input
          type="radio"
          name="rating"
          value="2"
          onChange={(event) => props.handleRating(event.target.value)}
        />
        <i></i>
        <input
          type="radio"
          name="rating"
          value="4"
          onChange={(event) => props.handleRating(event.target.value)}
        />
        <i></i>
        <input
          type="radio"
          name="rating"
          value="6"
          onChange={(event) => props.handleRating(event.target.value)}
        />
        <i></i>
        <input
          type="radio"
          name="rating"
          value="8"
          onChange={(event) => props.handleRating(event.target.value)}
        />
        <i></i>
        <input
          type="radio"
          name="rating"
          value="10"
          onChange={(event) => props.handleRating(event.target.value)}
        />
        <i></i>
      </span>
    </div>
  );
}

export default Rating;
