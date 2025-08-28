import React from 'react';
import AboutFounder from '../components/AboutFounder';
import aboutFounderImage from '../assets/images/aboutFounderImage.svg';

const AboutFounderSection: React.FC = () => {
  return (
    <section 
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${aboutFounderImage}')` }}
    >
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content Container */}
      <div className="relative z-10">
        <AboutFounder type="about" />
      </div>
    </section>
  );
};

export default AboutFounderSection;