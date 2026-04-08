import React, { useState } from 'react'
import "./Signup.css";

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const validateSignUp = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (password === conPassword && password !== "" && username !== "") {
           const result= uploadUser()
            console.log(result);
        }
        else{
            console.log(false)
        }
    }
    const uploadUser = async () => {
        const data = await fetch("http://localhost:3000/api/create-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        return data;
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="signUpBody">
                <h1 className="signUpTitle">Create Account</h1>

                <div className="formGroup">
                    <label>Username</label>
                    <input type="text" placeholder="Enter username"
                        value={username}
                        onChange={(e) => { setUsername(e.target.value.trim()) }}
                    />
                </div>
                <div className="formGroup">
                    <label>Email</label>
                    <input type="text" placeholder="Enter email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value.trim()) }}
                    />
                </div>

                <div className="formGroup">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value.trim()) }}
                    />
                </div>

                <div className="formGroup">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm password"
                        value={conPassword}
                        onChange={(e) => { setConPassword(e.target.value.trim()) }}
                    />
                </div>


                <button type="submit" className="signUpButton"
                    onClick={validateSignUp}
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}
