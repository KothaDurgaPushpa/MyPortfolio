import React from 'react';

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import IntroImg2 from '../Components/IntroImg2';
import AboutContent from '../Components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <IntroImg2  heading="ABOUT." text="I'm a Front-End Developer" />
      <AboutContent />
      <Footer/>
      </div>
  )
}

export default About