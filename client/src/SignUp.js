import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function SignUp({onLogin}) {
    
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [passwordConfirmation, setPasswordConfirmation] = useState("")
const history = useHistory()

function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username, 
            password,
            password_confirmation: passwordConfirmation,
        }),
    })
        .then((r) => r.json())
        .then(onLogin);
        history.push("/")
}

    return(
        <div>
            <h1 className="signup-title">SIGN UP</h1>
            <p className="signup-desc"><b>Creating an account will give you the ability to create your own reviews for your favorite products!</b></p>
            <div className="signup-card">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username" className="signup-label">Username: </label>
                    <input 
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        className="signup-input"
                    />
                    <br></br>
                    <label htmlFor="password" className="signup-label">Password: </label>
                    <input 
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="signup-input"
                    />
                    <br></br>
                    <label htmlFor="password_confirmaton" className="signup-label">Confirm Password: </label>
                    <input 
                        type="password"
                        id="password_confirmaton"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        placeholder="Confirm your password"
                        className="signup-input"
                    />
                    <br></br>
                    <button type="submit" className="signup-button"><b>SIGN UP</b></button>
                </form>
            </div>
        </div>
    )
}