import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import SkincareProducts from "./SkincareProducts";
import SignUp from "./SignUp";
import CreateNewReview from "./CreateNewReview";

function App() {

  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/products")
    .then(response => response.json())
    .then((products) => {
      if(!products.error){
      setProducts(products)
      }
    })
  }, [])

  useEffect(() => {
    fetch('/me')
    .then(r=>r.json()
    .then(data => {
      if (r.ok){
      setUser(data);
      }
    }))
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    .then((r)=> {
        setIsLoading(false)
        if (r.ok) {
            r.json().then((user)=> setUser(user))
        } else {
            r.json().then((err)=> setErrors(err.errors))
        }
    })
}

function handleLogoutClick() {
  fetch("/logout", { method: "DELETE" }).then((r) => {
    if (r.ok) {
      setUser(null);
    }

  })
}

useEffect(() => {
  fetch("/reviews")
  .then(response => response.json())
  .then((reviews) => {
    reviews.forEach(r => {
      r.changesInSkin = r.changes_in_skin
      delete r.changes_in_skin
    })
      setReviews(reviews)
  })
}, [])

function addNewReviewToArray(newReview) {
  setReviews([...reviews, newReview])
}

  return (
    <BrowserRouter>
      <div className="App">
      <form onSubmit={handleSubmit}>
        <input  
          type="text"
          placeholder="Username"
          onChange = {(e) => setUsername(e.target.value)} 
          value={username} 
        />
        <input 
          type="password"
          placeholder="Password"
          onChange = {(e) => setPassword(e.target.value)} 
          value={password} />
        <button type="submit">Login</button>
        {!!user ? <button onClick={handleLogoutClick}>Logout</button> : ""} 
      </form>
      <NavBar />
        <Switch>
          {/* <Route path="/testing">
            <h1>Test Route</h1>
          </Route> */}
          <Route path="/skincare-products"> 
            <SkincareProducts products={products} currentUser={user} reviews={reviews} setReviews={setReviews}/>
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/create-new-review">
            <CreateNewReview addNewReviewToArray={addNewReviewToArray} isLoggedIn={!!user}/>
          </Route>
          <Route path="/"> 
            <Home /> 
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;