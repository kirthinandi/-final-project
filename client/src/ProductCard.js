import React from 'react';
import ReviewCard from './ReviewCard';

export default function ProductCard({product, currentUser, reviews, setReviews}) {
    const {name, brand, country, type_of_product, ingredients, what_its_treating, directions, price, image} = product;

    function handleEditReview(editedReview) {
        const updatedReviews = product.reviews.map(review => {
            if (review.id === editedReview.id) {
                return editedReview
            } else {
                return review
            }
        })
        setReviews(updatedReviews)
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
            )})}
        </div>
    )
}