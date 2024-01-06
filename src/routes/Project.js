import React from 'react';

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import IntroImg2 from '../Components/IntroImg2';
import Work from '../Components/Work';

const Project = () => {
  return (
    <div>
    <Navbar/>
    <IntroImg2  heading="PROJECTS." text="some of my works"/>
    <Work />
    <Footer/>
    </div>
  )
}

export default Project