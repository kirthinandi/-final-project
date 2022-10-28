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
            <div className="product-card">
                <h3 className="product-name">{name}</h3>
                <p><b>Brand:</b> {brand}</p>
                <p><b>Manufacturing Country:</b> {country}</p>
                <p><b>Product Type:</b> {type_of_product}</p>
                <p><b>Main Ingredients:</b> {ingredients}</p>
                <p><b>Targetting:</b> {what_its_treating}</p>
                <p><b>How To Use:</b> {directions}</p>
                <p><b>Price:</b>{price}</p>
                <img src={image} alt={name} className="product-image"/>
            </div>
            {product.reviews.map((review) => {
                return (
                    <ReviewCard key={review.id} review={review} currentUser={currentUser} handleEditReview={handleEditReview} handleDeleteReview={handleDeleteReview}/>
            )})}
        </div>
    )
}