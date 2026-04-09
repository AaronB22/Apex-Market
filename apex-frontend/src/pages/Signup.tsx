import React, { useState } from 'react'
import "./Signup.css";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const { user, setUser } = useAuth();

    //error states
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const validateSignUp = async(e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (validateForm()) {
            const result = await uploadUser();
    
            console.log(result)
            setUser(result)
            navigate('/')

        }
        else {
            console.log(false)
        }
    }
    const uploadUser = async () => {
        const result = await fetch("http://localhost:3000/api/create-user", {
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
        const data= await result.json()
        return data;
    }

    const validateForm = () => {
        let isValid=true;
        if (username === "") {
            setUsernameError("Username cannot be empty");
            isValid=false;
        }
        if(password == ""){
            setPasswordError("password must not be empty")
        }
        if (password !== conPassword) {
            setConfirmPasswordError("Passwords do not match")
           isValid=false;
        }
        if (email === "") {
            setEmailError("Email must not be empty")
             isValid=false;
        }
        if(!email.includes("@")){
            setEmailError("Email must be valid")
             isValid=false;
        }
        else {
            return isValid
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="signUpBody">
                <h1 className="signUpTitle">Create Account</h1>

                <div className="formGroup">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value.trim())}
                    />
                    <div className="inputError">
                        {usernameError}
                    </div>
                </div>

                <div className="formGroup">
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value.trim())}
                    />
                    <div className="inputError">
                        {emailError}
                    </div>
                </div>

                <div className="formGroup">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value.trim())}
                    />
                    <div className="inputError">
                        {passwordError}
                    </div>
                </div>

                <div className="formGroup">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        value={conPassword}
                        onChange={(e) => setConPassword(e.target.value.trim())}
                    />
                    <div className="inputError">
                        {confirmPasswordError}
                    </div>
                </div>

                <button
                    type="submit"
                    className="signUpButton"
                    onClick={validateSignUp}
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}
