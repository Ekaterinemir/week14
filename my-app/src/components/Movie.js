
import React, { useState } from 'react';
 import Stars from './Stars'; 
 import ReviewList from './ReviewList'; 
 import ReviewForm from './ReviewForm';
 
 //Movie function receives a movie object as a prop,  which contains information about a specific movie. Inside the component
 //it initializes two pieces of state reviews and rating. 
 function Movie({ movie}) { 
  const [reviews, setReviews] = useState(movie.reviews); 
  const [rating, setRating] = useState(movie.rating); 


 //handleReviewSubmit function is called when a user submits a review. It adds the new review to the array of reviews.   
const handleReviewSubmit = (newReview) => { 
const updatedReviews = [...reviews, newReview]; 
setReviews(updatedReviews); 
}; 
// handleRatingChange is called when a user interacts with the star raiting component. It updates the rating. 
const handleRatingChange = (newRating) => { 
  setRating(newRating);
}; 

return (
  <div className='movie'>
      <img src={movie.image} alt ={movie.title} 
      className={movie.className}/>
      <h2>{movie.title}</h2>
      <p>{movie.synopsis}</p>
      <Stars rating ={rating}
      handleRatingChange ={handleRatingChange}/>

      <ReviewList reviews={reviews} />
      <ReviewForm 
      onReviewSubmit={handleReviewSubmit} />
  
      </div>
); 
}
 export default Movie;

 //This component displays details of a movie, including image, title, synopsis, star rating , a list of reviews, and a form 
 //to submit new review. 