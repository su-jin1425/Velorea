import "./home.css";
import HEAD from "../img/header.png";
import React from "react";

const Home = () => {
  return <div className="home">
    <div className="logo">Velorea<sup>©</sup></div>
    <div className="credit">
        <a href="https://su-jin1425.github.io/Shoot_The_Breeze/" className="insta">Shoot the Breeze - Studio</a>
    </div>
    <div className="header">
        <div className="title">
            <span className="slant">Eternal</span> elegance <br />
            season by season
        </div>
        <a href="https://su-jin1425.github.io/Shoot_The_Breeze/" className="myButton">Shop now</a>
        <img src={HEAD} alt="" className="head" />
    </div>
  </div>;
};

export default Home;
