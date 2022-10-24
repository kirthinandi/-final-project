import React, {useState} from 'react';

export default function SignUp({onLogin}) {
    
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [passwordConfirmation, setPasswordConfirmation] = useState("")

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
}

    return(
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password_confirmaton">Confirm Password:</label>
                <input 
                    type="password"
                    id="password_confirmaton"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <button type="submit">Sign Up</button>

            </form>
        </div>
    )
}