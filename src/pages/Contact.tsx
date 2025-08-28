import React from 'react';
import OurLocationSection from '../sections/OurLocationService';
import HomePage from '../components/HomePage';
import contactBackgroundImage from '../assets/images/landscape.svg';
import GetInTouchSection from '../sections/GetInTouchSection';

const Contact: React.FC = () => {
  return (
    <>
      <HomePage 
        title='Contact Us'
        subtitle='Have questions, feedback, or need assistance? Our team is here to help.'
        backgroundImage={contactBackgroundImage}
      />
      <GetInTouchSection />
      <OurLocationSection />
    </>
  );
};

export default Contact;
