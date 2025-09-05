import React, { useState } from 'react';
import minningAndTrading from '../assets/images/minningAndTradingOne.svg';
import ecologicalSafety from '../assets/images/ecologicalSafetyOne.svg';
import logistics from '../assets/images/logisticsOne.svg';
import serviceBackgroundImage from '../assets/images/serviceBackgroundImage.svg';

const Services: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('community');

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const sections = [
    {
      id: 'community',
      title: 'Community',
      content: 'We develop and maintain strong community and stakeholder relationships as part of our social license to operate and according to Nigeria Solid minerals law act.'
    },
    {
      id: 'indigenous-engagement',
      title: 'Indigenous Engagement',
      content: 'We work closely with Indigenous communities and Native Title groups to increase Indigenous engagement and participation in the regions where we operate.'
    },
    {
      id: 'social-investment',
      title: 'Social Investment',
      content: "We're making a positive impact in the local communities where we operate through contributions that generate value for society and demonstrate our corporate social responsibility."
    }
  ];

  const activeContent = sections.find(s => s.id === activeSection);

  const slides = [
    {
      type: 'mining',
      title: 'Mining & Trading',
      image: minningAndTrading,
      content: {
        heading: 'Mining & Trading',
        description: 'Our focus is to provide a superior service of tin, lead, zinc, fluorite, lithium, zircon supply from Nigeria to the world',
        details: 'We produce all our minerals from owned mines and beneficiate the products into concentrates or crushed ores, the lead , zinc and zircon ores, are delivered to our own secured warehouses, where they are crushed according to the customerâ€™s requirements and preparedÂ forÂ delivery.'
      }
    },
    {
      type: 'logistics',
      title: 'Logistics',
      image: logistics,
      content: {
        heading: 'Logistics',
        description: 'From our experience with Nigerian logistics and the challenges it brings, we have become experts in the timely and consistent delivery of the raw materials and concentrates that global green energy and sustainable growth relies on.',
        details: 'We ship our products from our mine sites and warehouses to Nigerian ports and have an exclusive freight forwarder that handles all of our goods and customs formalities at port. We securitize each individual truck that transports all of the goods from our warehouse to the port. Since our conception, we have delivered hundreds of thousands of tons to port safely and securely.'
      }
    },
    {
      type: 'ecological',
      title: 'Ecological Safety',
      image: ecologicalSafety,
      content: {
        heading: 'Environmental Safety & Governance',
        description: 'Integrity is our core value, and we only mine from our fully licensed and conflict free mines via mechanical mining methods. We have a strict safety enforcement policy and the vast majority of our employees are hired from the local communities where our mines are situated.',
        details: 'Our Code of Conduct prohibits child labour, conflict minerals, bribery & corruption, modern slavery, and focuses on how we can protect the environment in our natural resources extraction industry. We adhere to all Nigerian laws in terms of resource extraction and trading and are working closely with the Ministry of Mines & Steel Development to further improve the domestic framework.'
      }
    }
  ];

  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url(${serviceBackgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Our Services</h1>
        </div>

        {/* Services Container */}
        <div className="container mx-auto px-6 space-y-20">
          {slides.map((slide, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="flex items-center min-h-[400px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                  {/* Image */}
                  <div className={`${isEven ? 'order-1' : 'order-2'}`}>
                    <div className="relative">
                      <div className="bg-yellow-500 p-1 rounded-3xl">
                        <div className="bg-black p-1 rounded-2xl">
                          <img 
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-[300px] md:h-[450px] object-cover rounded-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`text-white md:px-20 ${isEven ? 'order-2' : 'order-1'}`}>
                    <h2 className="text-yellow-500 text-2xl md:text-3xl font-bold mb-6">
                      {slide.content.heading}
                    </h2>
                    
                    <div className="space-y-4">
                      <p className="text-base md:text-lg leading-relaxed text-gray-300">
                        {slide.content.description}
                      </p>
                      
                      <p className="text-base md:text-lg leading-relaxed text-gray-400">
                        {slide.content.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Community Engagement Section */}
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
                      cursor-pointer relative z-20 p-6 py-10 transition-colors duration-500 ease-in-out
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
                <p className="text-base md:text-lg lg:text-xl font-bold leading-relaxed text-center text-gray-800 transition-all duration-500 ease-in-out">
                  {activeContent?.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional spacing at bottom */}
      <div className="pb-16"></div>
    </div>
  );
};

export default Services;