import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

export default function CreateNewReview({addNewReviewToArray, isLoggedIn}) {

    const [rating, setRating] = useState("")
    const [changesInSkin, setChangesInSkin] = useState("")
    const [duration, setDuration] = useState("")
    const [positive, setPositive] = useState("")
    const [negative, setNegative] = useState("")
    const [repurchase, setRepurchase] = useState(false)
    const [image, setImage] = useState("")
    const [products, setProducts] = useState([])
    const [productId, setProductId] = useState("")
    const history = useHistory()
    const [errors, setErrors] = useState([])
   

    useEffect(() => {
        fetch("/products")
          .then((response) => response.json())
          .then((products) => setProducts(products));
      }, []);
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/reviews", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                accepts: "application/json",
              },
            body: JSON.stringify({
                rating: rating,
                changes_in_skin: changesInSkin,
                duration: duration,
                positive: positive,
                negative: negative,
                repurchase: repurchase, 
                image: image,
                product_id: productId
            }),
        })
            .then((r) => r.json())
            .then((data) => {
             if(data.errors) {
                setErrors(data.errors)
             } else {
              data.changesInSkin = data.changes_in_skin
              delete data.changes_in_skin
              addNewReviewToArray(data)
              history.push("/skincare-products")
             }
            })
          }

  //   useEffect(()=>{
  //     // alert('Please login or sign up before creating a new review')
  //     if (!isLoggedIn) {
  //         history.push("/sign-up")
  //     }
  // }, [isLoggedIn])


    return (
        <div>
            <h1>Create a New Review!</h1>
            <form onSubmit={handleSubmit}>
            <select
                onChange={(e) => setProductId(e.target.value)}
                name="products"
                value={productId}
            >
            <option disabled value="">
            {" "}
            -- select a product --{" "}
          </option>
          {products.map((product) => {
            return (
              <option value={product.id}>
                {product.name} | {product.brand}
              </option>
            );
          })}
          </select>
          <br></br>
                Rate product on a scale of 1-10: 
                <input 
                placeholder='Rating' 
                value={rating} 
                type="text"
                onChange={(e) => setRating(e.target.value)}/>
                <br></br>
                Changes You May Have Noticed Since Using The Product: 
                <input 
                placeholder='Changes In Your Skin Since Using the Product' value={changesInSkin} 
                type="text"
                onChange={(e) => setChangesInSkin(e.target.value)}/>
                <br></br>
                Amount of Time You Used The Product: 
                <input 
                placeholder='Amount of Time You Used The Product' 
                value={duration} 
                type="text"
                onChange={(e) => setDuration(e.target.value)}/>
                <br></br>
                1 Positive About The Product: 
                <input 
                placeholder='Positive About Product' 
                value={positive}
                type="text"
                onChange={(e) => setPositive(e.target.value)}/>
                <br></br>
                1 Negative About The Product: 
                <input 
                placeholder='Negative About Product' 
                value={negative}
                type="text"
                onChange={(e) => setNegative(e.target.value)}/>
                <br></br>
                Would You Repurchase The Product/Have You Repurchased The Product?: 
                <input 
                type="checkbox" 
                checked={repurchase} 
                onChange={(e) => setRepurchase(e.target.checked)}/>
                <br></br>
                Add An Image: 
                <input 
                placeholder='Enter image URL' 
                image="image"
                value={image}
                type="text"
                onChange={(e) => setImage(e.target.value)}/>
                <br></br>
                <button type="submit">Create Review</button>
            </form>
            {errors.map((error) => {
                return <p>{error}</p> 
            })}
        </div>
    )
}