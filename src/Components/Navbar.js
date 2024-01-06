import React,{useState} from "react";
import NavbarStyles from "./NavbarStyles.css"
import {Link} from "react-router-dom";

import {FaBars, FaTimes} from "react-icons/fa";


const Navbar=()=>{


    const[click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
   

    const[color,setColor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    }

    window.addEventListener("scroll",changeColor);
    return(
        <div className={color ? "header header-bg":"header"}>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click?"nav-menu active":"nav-menu"}>
                {/* nav-menu.active ani isthe list la vasthaadhi
                so nav-menu actvie ante nav-menu ki active ki madhya 
                space vundaali */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Project">Project</Link></li> 
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/About">About</Link></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ?(
                <FaTimes size={20} color="white"/>
                ):(<FaBars size={20} color="white"/>)}
               
                
            </div>
        </div>
    )
}

export default Navbar;