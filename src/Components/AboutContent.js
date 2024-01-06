import "./AboutContent.css";

 import React from 'react'
 import {Link} from "react-router-dom";

 import I1 from "../Images/I1.png";
 import  I2 from "../Images/I2.jpg";

 
 const AboutContent = () => {
   return (
     <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>
                I am a Final year Student in Computer Science and Engineering
                Who is very passionate to pursue carrier in web development.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={I1}
                    className="img" alt=""/>
                </div>
                <div className="img-stack top">
                    <img src={I2}
                    className="img" alt=""/>
                </div>
            </div>
        </div>
     </div>
   )
 }
 
 export default AboutContent