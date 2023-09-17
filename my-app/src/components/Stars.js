import React, { useState } from 'react'; 

function Stars({ rating, handleRatingChange}) { 
  //state to manage the selected rating
const [selectedRating, setSelectedRating] = useState(rating); 

return (
    <div className='stars'>
    {[1,2,3,4,5].map((star)=> (
    <span
     key={star} className={star <= selectedRating ? 'star-filled' : 'star-empty'}
    onClick={()=> 
    handleRatingChange(star)}
    >
    &#9733;
    </span>

    ))}
    </div>
    ); 
    }

  export default Stars;

  //This component maps through an array of 5 stars and renders them with the apropriate value.Users can click on the star
  // to change their rating, and the handleRatingChange function is called with the selected star's value when a star is 
  //clicked. 


