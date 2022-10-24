import React from "react";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav>
                <Link to="/">Home </Link>
                <Link to="/skincare-products">Skincare Products </Link>
                <Link to="/create-new-review">Create New Review </Link>
                <Link to="/sign-up">Sign Up</Link>
            </nav>
        </>
    )
}