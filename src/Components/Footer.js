import { FaHome, FaLinkedin, FaMailBulk,} from "react-icons/fa";
import "../Components/FooterStyles.css";

import React from"react";

const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                    
                       <FaHome size={20} style={{color:"#fff", 
                       marginRight:"2rem"}} />
                        <div>
                         <p>Sanjay Nagar.</p>
                        <p>Kakinada.</p>
                        </div>

                    </div>


<div className="email">
    <h4>
        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
           pushpa14161416@gmail.com
    </h4>
</div>
</div>
<div className="right">
     <h4>About me</h4>
         <p>I am Durga Pushpa, Pursuing Computer Science and 
          Engineering final year in Rajiv University of Knowledge Technologies.
         </p>
         <div className="social">
          <FaLinkedin
        size={30}
        style={{color:"#fff", marginRight:"2rem"}}
        />

    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;