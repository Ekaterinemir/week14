

import React, { useState } from 'react'; 
import Stars from './Stars';

//ReviewForm function creates a form for users to submit reviews. It defines three pieces of state using the useState hook.
//reviewText, userRating an userName. It defines three functions: 
function ReviewForm({ onReviewSubmit }) { 
const [reviewText, setReviewText] = useState(''); 
const [userRating, setUserRating] = useState(0); 
const [userName, setUserName] = useState('');

// handleRatingFunction is called when the user interacts with the star rating component, and it updates the userRating. 
const handleRatingChange = (newRating) => { 
setUserRating(newRating); 
}; 
//handleNameChange function is called when user enters their name in the input field, and it updates the user name state. 
const handleNameChange=(e) =>{
    setUserName(e.target.value);
}
//handleSubmit function is called when the user submits the form. It constructs a new review object using the values 
//from the state variables: reviewText, userRating and userName and then calls the onReviewSubmit function with the newReview
//as an argument. After submission it clears the input fields. 
const handleSubmit = (e) => { 
e.preventDefault(); 

const newReview = { text: reviewText, Rating:userRating, user: userName,}; 
onReviewSubmit(newReview); 

setReviewText(''); 
setUserRating(0); 
setUserName('');
}; 

return (

    <div className='review-form'>
    <h3>Add a Review</h3>
<input type= 'text'
placeholder='Your Name'
value={userName}
onChange = {handleNameChange}

required
/>
<Stars rating={userRating}
handleRatingChange={handleRatingChange}/>

<form onSubmit={handleSubmit}>
<textarea
rows="4"
cols="50"
aria-placeholder='Write Your Review Here ...'
value ={reviewText}

onChange={(e) =>
setReviewText(e.target.value)}
required

></textarea>

<button type='Submit'>Submit Review</button>
</form>

</div>
);

}

export default ReviewForm;

//THis component is used to create a form for users to submit their reviews. 