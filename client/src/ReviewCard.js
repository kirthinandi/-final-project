import React, {useState, useEffect} from 'react';

export default function ReviewCard({review, currentUser, handleEditReview, handleDeleteReview}) {

    const {id, rating, changes_in_skin, duration, positive, negative, repurchase, image, user_id} = review
    const [editedRating, setEditedRating] = useState(rating);
    const [editedChangesInSkin, setEditedChangesInSkin] = useState(changes_in_skin);
    const [editedDuration, setEditedDuration] = useState(duration);
    const [editedPositive, setEditedPositive] = useState(positive);
    const [editedNegative, setEditedNegative] = useState(negative);
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
    
    const [user, setUser] = useState({})

    useEffect(()=>{
        fetch('/users/'+user_id).then(r=>r.json()).then(data => setUser(data))
    }, [user_id])

    function handleEditClick() {
        fetch(`/reviews/${review.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                rating: editedRating,
                changes_in_skin: editedChangesInSkin,
                duration: editedDuration,
                positive: editedPositive,
                negative: editedNegative
            }),
        })
        .then((r) => r.json()) 
        .then((editedReview) => handleEditReview(editedReview))
    }

    function handleDeleteClick() {
        fetch(`/reviews/${review.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        )
        handleDeleteReview(id)
    }

    function likeCount() {
        let newCount = like+1
        setLike(newCount)
    }

    function dislikeCount() {
        let newCount = dislike+1
        setDislike(newCount)
    }
   
    return (
          <div className="review-card">
            { currentUser&& (currentUser.id === review.user_id) ? <div>
                    {/* if current user is truthy and conditional, then render buttons */}
                    {/* if current user is falsy, it will not bother checking ids */}
                    <button className="edit-button" onClick={handleEditClick}
                    ><b>EDIT</b></button>
                    <button className="delete-button" onClick={handleDeleteClick}><b>DELETE</b></button>
                </div> : null }
                <h2 className="review-title">Review</h2>
                    <p><b>Rating:</b><span contentEditable={currentUser &&(currentUser.id === review.user_id)} onInput={e => {setEditedRating(e.target.textContent)}}> {rating}</span></p>
                    <p><b>Changes In Your Skin Since Using the Product:</b><span contentEditable={currentUser &&(currentUser.id === review.user_id)} onInput={e => {setEditedChangesInSkin(e.target.textContent)}}> {changes_in_skin}</span></p>
                    <p><b>Amount of Time You Used The Product:</b><span contentEditable={currentUser &&(currentUser.id === review.user_id)} onInput={e => {setEditedDuration(e.target.textContent)}}> {duration}</span></p>
                    <p><b>Positive About Product:</b><span contentEditable={currentUser &&(currentUser.id === review.user_id)} onInput={e => {setEditedPositive(e.target.textContent)}}> {positive}</span></p>
                    <p><b>Negative About Product:</b><span contentEditable={currentUser &&(currentUser.id === review.user_id)} onInput={e => {setEditedNegative(e.target.textContent)}}> {negative}</span></p>
                    <p><b>Would You Repurchase/Have You Repurchased?:</b> {repurchase ? "Yes" : "No"}</p>
                    <img src={image} className="review-image"/>
                    <p><b>Created By:</b> {user.username}</p>
                    <br></br>
                    <button onClick={likeCount} className="like-button"><b>Like:</b> {like}</button>
                    <button onClick={dislikeCount} className="like-button"><b>Dislike:</b> {dislike}</button>
         </div>
    )
}