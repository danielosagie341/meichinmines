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
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
      bgColor: 'bg-black'
    },
    {
      id: 'focus',
      title: 'Our Focus',
      subtitle: '',
      content: 'Our strategic focus is driven by our desire to deliver enduring value and certainty for our local and international partners, adding to the true & reliable value chains by offering the professional service in the mining mineral and energy sectors.',
      bgColor: 'bg-black'
    },
    {
      id: 'core-value',
      title: 'Core Value',
      subtitle: '',
      content: 'Integrity, Transparency, learning and Team Work is core to any business. As an organization, we become a steward of the whole industry and we should take that responsibility seriously. As a mining firm, we can be judged by the misdeeds of really bad Mining companies within our region, but at MEICHIN MINES, our goals is to provide values, educate our clients and build long-term business relationships. We are focused on being completely transparent.',
      bgColor: 'bg-black'
    }
  ];

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

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
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div key={section.id} className="relative overflow-hidden">
              {/* Section Header */}
              <div 
                className={`
                  cursor-pointer transition-all duration-500 ease-in-out h-44
                  ${activeSection === section.id 
                    ? `${section.bgColor} text-white` 
                    : 'bg-black text-white hover:bg-gray-900'
                  }
                  p-6 rounded-t-lg shadow-lg
                `}
                onClick={() => handleSectionClick(section.id)}
              >
                <div className="text-center">
                  <div className="w-12 h-1 bg-yellow-600 mx-auto mb-4"></div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {section.title}
                  </h3>
                  {section.subtitle && (
                    <h4 className="text-xl md:text-2xl font-semibold mt-2">
                      {section.subtitle}
                    </h4>
                  )}
                </div>
              </div>

              {/* Expandable Content */}
              <div 
                className={`
                  transition-all duration-500 ease-in-out overflow-hidden
                  ${activeSection === section.id 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                  }
                  ${section.bgColor} text-white rounded-b-lg shadow-lg
                `}
              >
                <div className="p-6">
                  <p className="text-base md:text-lg leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>

              {/* Static bottom section when not active */}
              {activeSection !== section.id && (
                <div className="h-2 bg-gray-200 rounded-b-lg shadow-lg"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Additional spacing at bottom */}
      <div className="pb-16"></div>
    </div>
  );
};

export default About;