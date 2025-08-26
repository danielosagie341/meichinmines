import React from 'react';

interface AboutProps {
  type: 'mining' | 'logistics' | 'ecological';
}

const About: React.FC<AboutProps> = ({ type }) => {
  const contentMap = {
    mining: {
      title: "Mining & Trading",
      image: "/images/minningAndTrading.svg",
      description: "Our focus is to provide a superior service of tin, lead, zinc, fluorite, lithium, zircon supply from Nigeria to the world",
      details: "We produce all our minerals from owned mines and beneficiate the products into concentrates or crushed ores, the lead, zinc and zircon ores, are delivered to our own secured warehouses, where they are crushed according to the customer's requirements and prepared for delivery."
    },
    logistics: {
      title: "Logistics",
      image: "/images/logistics.svg",
      description: "From our experience with Nigerian logistics and the challenges it brings, we have become experts in the timely and consistent delivery of raw materials and concentrates that global green energy and sustainable growth relies on.",
      details: "We ship our products from our mine sites and warehouses to Nigerian ports and have an exclusive freight forwarder that handles all of our goods and customs formalities at port. We securitize each individual truck that transports all of the goods from our warehouse to the port. Since our conception, we have delivered hundreds of thousands of tons to port safely and securely."
    },
    ecological: {
      title: "Ecological Safety",
      image: "/images/ecologicalSafety.svg",
      description: "Integrity is our core value, and we only mine from our fully licensed and conflict free mines via mechanical mining methods.",
      details: `We have a strict safety enforcement policy and the vast majority of our employees are hired from the local communities where our mines are situated.

Our Code of Conduct prohibits child labour, conflict minerals, bribery & corruption, modern slavery, and focuses on how we can protect the environment in our natural resources extraction industry. We adhere to all Nigerian laws in terms of resource extraction and trading and are working closely with the Ministry of Mines & Steel Development to further improve the domestic framework.`
    }
  };

  const content = contentMap[type];

  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%), url('/images/aboutMeichinMines.svg')` 
      }}
    >
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            {/* Navigation Arrows */}
            <div className="lg:col-span-1 flex lg:flex-col justify-center space-x-4 lg:space-x-0 lg:space-y-4 order-3 lg:order-1">
              <button className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 text-white order-2 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">
                {content.title}
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
                  {content.description}
                </p>
                
                <div className="space-y-4">
                  {content.details.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 order-1 lg:order-3">
              <div className="relative">
                <div className="w-full max-w-md mx-auto lg:max-w-full overflow-hidden rounded-2xl border-4 border-yellow-500 shadow-2xl">
                  <img 
                    src={content.image}
                    alt={content.title}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-500 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topographic pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );
};

export default About;