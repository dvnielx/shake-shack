import React from 'react';
import '../styles/Login.css';
import logo from '../assets/shakeShackLogo.png';
// console.log(logo)

const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="title">Welcome to Shake Shack</h1>
                <p className="subtitle">Enter your email and password</p>
                <form action="/" className="form">
                    <label for="user" className="label">Email</label>
                    <input type="user" id="user" placeholder="Your email" className="input input-user" autoComplete='email' />
                    <label for="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />
                    <input type="submit" value="Sign in" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export default Login;