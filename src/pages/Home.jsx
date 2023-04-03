import React from "react";
import '../styles/Home.css';
import logo from '../assets/shakeShackLogo.png';

const Home = () => {
    return (

            <div className="home">
                <h1> Welcome to Shake Shack! </h1>
                <img className="logo" src= {logo } alt="Shake Shack Logo" />
                <button className="start-btn"> Login </button>
            </div>
    );
}

export default Home;