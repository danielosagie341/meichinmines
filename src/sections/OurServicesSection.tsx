import React from 'react';
import { useNavigate } from 'react-router-dom';
import serviceBackgroundImage from '../assets/images/serviceBackgroundImage.svg';
import minningAndTrading from '../assets/images/minningAndTrading.svg';
import logistics from '../assets/images/logistics.svg';
import ecologicalSafety from '../assets/images/ecologicalSafety.svg';

const OurServicesSection: React.FC = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 'mining',
      title: 'Mining & Trading',
      image: minningAndTrading,
      description: 'Comprehensive mining operations and global mineral trading services',
    },
    {
      id: 'logistics',
      title: 'Logistics',
      image: logistics,
      description: 'Expert logistics solutions for mineral transportation and export',
    },
    {
      id: 'ecological',
      title: 'Environmental Safety & Governance',
      image: ecologicalSafety,
      description: 'Environmental protection and sustainable mining practices',
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    navigate(`/our-service/${serviceId}`);
  };

  return (
    <section 
      className="py-16 lg:py-24 relative overflow-hidden relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${serviceBackgroundImage})` }}
    >
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive mining solutions with a commitment to excellence, sustainability, and innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className="shadow-2xl group relative rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer"
            >
              {/* Service Image */}
              <div className="relative w-full flex justify-center rounded-2xl">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-[80%] h-[80%] border-4 border-transparent group-hover:border-yellow-500 transition-all duration-300 object-cover transition-transform duration-300 group-hover:scale-[110%] rounded-3xl"
                />
                
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col items-center">
                <h3 className="text-2xl text-center font-bold text-white mb-4 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Yellow underline that appears on hover */}
                <div className=" h-1 bg-yellow-500 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 w-[60%]"></div>
                
                {/* <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p> */}
              </div>

              {/* Service Number */}
              {/* <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-500 bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-yellow-500 font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;