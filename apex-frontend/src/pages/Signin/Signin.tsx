import { useState } from 'react'
import "./Signin.css";
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError] = useState('');
    const [passwordError] = useState('');

    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const handleSignIn = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const result = await fetch("http://localhost:3000/api/user/sign-in-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const data = await result.json()
        setUser(data);
        navigate('/')

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="signInBody">
                <h1 className="signInTitle">Welcome Back</h1>

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

                <button
                    type="submit"
                    className="signInButton"
                    onClick={handleSignIn}
                >
                    Sign In
                </button>

                <p className="signInFooter">
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
            </form>
        </div>
    )
}

export default Signin;
