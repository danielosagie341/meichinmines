import React, { useState } from 'react';
import landscape from '../assets/images/landscape.svg';
import serviceBackgroundImage from '../assets/images/serviceBackgroundImage.svg';

interface Section {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  bgColor: string;
}

const About: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>('vision-mission');

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

  const sections: Section[] = [
    {
      id: 'vision-mission',
      title: 'Our Vision & Mission',
      subtitle: '',
      content: 'To become the leading mining and metal company in Africa providing top notch product and services to the world and engage in transparent and inclusive mining operations geared towards shared prosperity by building a well structured mining ecosystem that attracts direct foreign investment to the mining sector.',
      bgColor: 'bg-yellow-500'
    },
    {
      id: 'focus',
      title: 'Our Focus',
      subtitle: '',
      content: 'Our strategic focus is driven by our desire to deliver enduring value and certainty for our local and international partners, adding to the true & reliable value chains by offering the professional service in the mining mineral and energy sectors.',
      bgColor: 'bg-yellow-500'
    },
    {
      id: 'core-value',
      title: 'Core Value',
      subtitle: '',
      content: 'Integrity, Transparency, learning and Team Work is core to any business. As an organization, we become a steward of the whole industry and we should take that responsibility seriously. As a mining firm, we can be judged by the misdeeds of really bad Mining companies within our region, but at MEICHIN MINES, our goals is to provide values, educate our clients and build long-term business relationships. We are focused on being completely transparent.',
      bgColor: 'bg-yellow-500'
    }
  ];

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const activeContent = sections.find(s => s.id === activeSection);

  return (
    <div 
      className="transition-transform duration-700 ease-in-out relative z-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${serviceBackgroundImage})` }}
    >
      <h1 className='text-5xl text-white text-center py-10 font-bold px-5'> 
        ABOUT <span className='text-yellow-500'>MEICHIN MINES</span>
      </h1>

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

      {/* Interactive Sections */}
      <div className="container mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden lg:p-20">
          {/* Section Headers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {sections.map((section, index) => (
              <div key={section.id} className="relative">
                {/* Yellow bar that expands on active */}
                <div 
                  className={`
                    absolute top-0 left-0 right-0 bg-yellow-500 mx-5 lg:mx-10
                    transition-all duration-500 ease-in-out z-10
                    ${activeSection === section.id ? 'h-full' : 'h-1'}
                  `}
                ></div>
                
                {/* Header */}
                <div 
                  className={`
                    cursor-pointer relative z-20 p-6  py-10 transition-colors duration-500 ease-in-out
                    ${activeSection === section.id 
                      ? 'text-white' 
                      : 'text-black '
                    }
                  `}
                  onClick={() => handleSectionClick(section.id)}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-center">
                    {section.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* Content Area - Fixed Height */}
          <div className="bg-white p-8 md:p-12 min-h-[300px] md:min-h-[400px] flex items-center justify-center">
            <div className="max-w-4xl mx-auto">
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-center text-gray-800 transition-all duration-500 ease-in-out">
                {activeContent?.content}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional spacing at bottom */}
      <div className="pb-16"></div>
    </div>
  );
};

export default About;