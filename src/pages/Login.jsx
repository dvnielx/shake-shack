import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import '../styles/Login.css';
import logo from '../assets/shakeShackLogo.png';

const Login = () => {
  const navigate = useNavigate();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const wrongCredentialsHandler = () => {
    setWrongCredentials(true);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setWrongCredentials(false);

    const userData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    try {
      const response = await axios.post('https://app.swaggerhub.com/apis/ssinuco/BurgerQueenAPI/2.0.0/auth', userData);
      localStorage.setItem('token', response.data.token);
      const decodedToken = jwt_decode(response.data.token);
      const role = decodedToken.role;
      localStorage.setItem('role', role);

      if (role === 'mesera') {
        navigate('/mesera');
      } else if (role === 'admin') {
        navigate('/admin');
      } else if (role === 'jefe_cocina') {
        navigate('/jefecocina');
      }
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 401) {
        wrongCredentialsHandler();
      }
    }
  };

  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Welcome to Shake Shack</h1>
        <p className="subtitle">Enter your email and password</p>
        <form onSubmit={submitHandler} className="form">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="input input-email"
            autoComplete="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
          {wrongCredentials && <p className="error">Incorrect email or password</p>}
          <button type="submit" className="primary-button login-button">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
