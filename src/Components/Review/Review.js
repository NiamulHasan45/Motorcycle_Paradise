import React from 'react';
import './Review.css'

const Review = (props) => {
   const {name, comment, rating} = props.oneReview;
    return (
        <div className='m-5 review-container'>
            <h6>Name: {name}</h6>
            <p><small>Comment: {comment}</small></p>
            <h4 className='customer-review text-warning'> <small>Rating: {rating}</small></h4>
        </div>
    );
};

export default Review;