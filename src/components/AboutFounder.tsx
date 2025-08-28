import React from 'react';
import educationIcon from '../assets/images/educationIcon.svg';
import founderImage from '../assets/images/founderImage.svg';

interface AboutFounderProps {
  type: 'about' | 'education';
}

const AboutFounder: React.FC<AboutFounderProps> = ({ type }) => {
  const aboutContent = {
    title: "All Overview",
    content: `Edeh Johnson Chinedu, founder and chairman of Meichin Mines Ltd, is a Nigerian miner, entrepreneur, and businessman with a strong passion for the solid minerals industry.

Johnson's journey into mining began after returning from China, where he developed a deep interest in natural resources and trade. Upon his return, he pursued this passion by learning the craft of mining, starting with small-scale trading and exports to partners across Nigeria and abroad.

Born in Onitsha and originally from Enugu State, Johnson holds a degree in Engineering from the Enugu State University of Science and Technology (ESUT). During his NYSC service in Nasarawa, he built close relationships with miners, which further shaped his expertise and inspired him to establish his own mining venture.

In 2019, he laid the foundation for what would later become Meichin Mines Ltd, officially incorporated in 2024. Today, the company is committed to the exploration, mining, and export of solid minerals and minor metals, contributing to Nigeria's growing presence in the global mining sector.

Johnson's story is one of resilience, vision, and determination; transforming challenges into opportunities. Under his leadership, Meichin Mines Ltd stands for quality, sustainability, and innovation in the mining industry.`
  };

  const educationContent = {
    title: "Education",
    content: `Edeh Johnson Chinedu, Meichin mines Ltd and President since 2020, has spent much of his life devoted to encouraging successful businesses.

Edeh Johnson Chinedu attended Enugu state university of science and technology and received degrees in Engineering. Mr Edeh has held many executive and technical positions in other companies as well in Meichin mines Ltd and Meichin Group of Companies Ltd`
  };

  const content = type === 'about' ? aboutContent : educationContent;
  const isEducation = type === 'education';

  return (
    <div 
      className="relative h-full flex justify-center items-center"
    >
      
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-16 lg:px-24 xl:px-32 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[600px]">
            {/* Content Side */}
            <div className="text-white pr-8 lg:pr-16">
              <h2 className="text-yellow-500 text-4xl lg:text-5xl font-bold mb-8">
                {content.title}
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed">
                {content.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-200">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* White Vertical Divider */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-[500px] rounded-[50px] bg-white "></div>

            {/* Image Side */}
            <div className="flex justify-center lg:justify-center lg:pl-16 mt-12 lg:mt-0">
              {isEducation ? (
                <div className="flex flex-col items-center space-y-8">
                  {/* Education Icon */}
                  <div className="w-48 h-48 md:w-64 md:h-64">
                    <img src={educationIcon} alt="" className="w-full h-full" />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-400 text-sm">cit.education</span>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  {/* Founder Image */}
                  <div className=" rounded-3xl">
                    <img 
                      src={founderImage} 
                      alt="Edeh Johnson Chinedu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-500 rounded-full opacity-30"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;