import "./IntroImg.css";

import React from 'react';
import Img from "../Images/I1.png";
import { Link } from "react-router-dom";

const IntroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={Img} alt="intro iamge"/>
        </div>
        <div className="content">
            <p>Hi, I am Durga Pushpa</p>
            <h1>FRONTEND DEVELOPER</h1>
            <div>
                <Link to="/Project" className="btn">Projects</Link>
                <Link to="/Contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default IntroImg;