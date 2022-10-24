import React from 'react';
import ReviewCard from './ReviewCard';

export default function ProductCard({product, currentUser, reviews, setReviews}) {
    const {name, brand, country, type_of_product, ingredients, what_its_treating, directions, price, image} = product;

    function handleEditReview(editedReview) {
        setReviews((reviews) => reviews.map(review => {
            if (review.id === editedReview.id) {
                return editedReview
            } else {
                return review
            }
        }))
    }

    function handleDeleteReview(id) {
        const updateReviewsArray = product.reviews.filter((review) => review.id !== id)
        setReviews(updateReviewsArray)
    }
    
    return(
        <div>
            <h4>Product Name: {name}</h4>
            <h4>Brand: {brand}</h4>
            <h4>Manufacturing Country: {country}</h4>
            <h4>Product Type: {type_of_product}</h4>
            <h4>Main Ingredients: {ingredients}</h4>
            <h4>Targetting: {what_its_treating}</h4>
            <h4>How To Use: {directions}</h4>
            <h4>Price:{price}</h4>
            <img src={image} alt={name}/>
            {product.reviews.map((review) => {
                return (
                    <ReviewCard key={review.id} review={review} currentUser={currentUser} handleEditReview={handleEditReview} handleDeleteReview={handleDeleteReview}/>
                // <div>
                //      { currentUser&& (currentUser.id === review.user_id) ? <div>
                //     {/* if current user is truthy and conditional, then render buttons */}
                //     {/* if current user is falsy, it will not bother checking ids */}
                //     <button className= "button" onClick={handleEditClick}>Edit</button>
                //     </div> : null }
                //     <h4 contentEditable>Rating: {review.rating}</h4>
                //     <h4 contentEditable>Changes In Your Skin Since Using the Product: {review.changes_in_skin}</h4>
                //     <h4 contentEditable>Amount of Time You Used The Product: {review.duration}</h4>
                //     <h4 contentEditable>Positive About Product: {review.positive}</h4>
                //     <h4 contentEditable>Negative About Product: {review.negative}</h4>
                //     <h4>Would You Repurchase/Have You Repurchased?: {review.repurchase ? "Yes" : "No"}</h4>
                //     <h4>{review.image}</h4>
                // </div>
            )})}
        </div>
    )
}