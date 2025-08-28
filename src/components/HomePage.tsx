import React from 'react';
import partialLogo from '../assets/images/partialLogo.svg';
import { scrollToElement } from '../utils/scrollToFooter';

interface HomePageProps {
  backgroundImage: string;
  title?: string;
  subtitle?: string;
}

const HomePage: React.FC<HomePageProps> = ({ 
  backgroundImage, 
  title = "WELCOME TO MEICHIN MINES",
  subtitle = "Harnessing Earth's Potential, Responsibly."
}) => {
  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat py-32"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-6 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="lg:w-52 rounded-full flex items-center justify-center">
              <img src={partialLogo} className='w-full h-full' alt="" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-white text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            {subtitle}
          </p>

          {/* Call to Action Button */}
          {/* <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <a
              href="/about"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More About Us
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 ml-0 md:ml-4 mt-4 md:mt-0"
            >
              Get In Touch
            </a>
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        onClick={() => scrollToElement("footer", () => {})}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;