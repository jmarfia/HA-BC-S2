import React from 'react';

function Rating(){


    return(
        <div>
<span class="star-rating">
  <input type="radio" name="rating" value="2"/><i></i>
  <input type="radio" name="rating" value="4"/><i></i>
  <input type="radio" name="rating" value="6"/><i></i>
  <input type="radio" name="rating" value="8"/><i></i>
  <input type="radio" name="rating" value="10"/><i></i>
</span>
</div>
)
}

export default Rating;