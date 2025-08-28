import React from 'react';
import landscape from '../assets/images/landscape.svg';
import serviceBackgroundImage from '../assets/images/serviceBackgroundImage.svg';


const About: React.FC = () => {
      const slides = [
    {
      type: 'mining',
      title: 'Mining & Trading',
      image: landscape,
      content: {
        heading: '',
        description: 'We are an indigenous Nigerian company registered under the Nigerian law as a mining, mineral processing and export company',
        details: ''
      }
    }
  ];

  return (
      <div 
        className="transition-transform duration-700 ease-in-out relative z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${serviceBackgroundImage})` }}
      >

        <h1 className='text-5xl text-white text-center py-10 font-bold px-5'> ABOUT <span className='text-yellow-500'>MEICHIN MINES</span></h1>

        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 min-h-screen flex items-center">
            <div className="container mx-auto px-6 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Image */}
                <div className="order-2 lg:order-1">
                  <div className="relative">
                    <div className="bg-yellow-500 p-1 my-10 rounded-3xl">
                      <div className="bg-black p-1 rounded-2xl">
                        <img 
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-[400px] object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="order-1 lg:order-2 text-white md:px-32">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    {slide.content.heading}
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg md:text-xl font-bold leading-relaxed text-gray-300">
                      {slide.content.description}
                    </p>
                    
                    <p className="text-base md:text-lg leading-relaxed text-gray-400">
                      {slide.content.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default About;
