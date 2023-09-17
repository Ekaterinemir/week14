import React from 'react'; 

function Review({ review }) {
    
    return (
        <div className='review'>
        <p>{review.text}</p>
        <p>By: {review.user}</p>
        </div>
    
    ); 
   } 
export default Review;

//This component is used to display review's text and who wrote it. It takes a review object as a prop and and renders the 
//text and user information.