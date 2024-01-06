import React from 'react';

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import IntroImg2 from '../Components/IntroImg2';
import Form from "../Components/Form"

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <IntroImg2 heading="CONTACT" text="Contact me here"/>
      <Form />
      <Footer/>
      </div>
  )
}

export default Contact