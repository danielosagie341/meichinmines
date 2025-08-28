import React from 'react';
import minningAndTrading from '../assets/images/minningAndTradingOne.svg';
import ecologicalSafety from '../assets/images/ecologicalSafetyOne.svg';
import logistics from '../assets/images/logisticsOne.svg';
import serviceBackgroundImage from '../assets/images/serviceBackgroundImage.svg';

const Services: React.FC = () => {
  const slides = [
    {
      type: 'mining',
      title: 'Mining & Trading',
      image: minningAndTrading,
      content: {
        heading: 'Mining & Trading',
        description: 'Our focus is to provide a superior service of tin, lead, zinc, fluorite, lithium, zircon supply from Nigeria to the world',
        details: 'We produce all our minerals from owned mines and beneficiate the products into concentrates or crushed ores, the lead , zinc and zircon ores, are delivered to our own secured warehouses, where they are crushed according to the customer’s requirements and prepared for delivery.'
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
        heading: 'Ecological Safety',
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
      </div>
    </div>
  );
};

export default Services;