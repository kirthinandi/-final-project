import React from "react";
import {Link} from "react-router-dom";

export default function NavBar({isLoggedIn}) {
    return (
        <>
            <nav className="Navbar">
                <Link to="/" className="link">Home </Link>
                <Link to="/skincare-routine" className="link">Skincare Routine</Link>
                <Link to="/skincare-products" className="link">Skincare Products </Link>
                {isLoggedIn ? <Link to="/create-new-review" className="link">Create New Review </Link> : ""}
                {isLoggedIn ? "" : <Link to="/sign-up" className="link">Sign Up</Link> }
            </nav>
        </>
    )
}