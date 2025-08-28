import React from 'react';
import aboutMeichinMines from '../assets/images/aboutMeichinMines.svg';

const AboutMeichinMinesSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={aboutMeichinMines}
                alt="About Meichin Mines"
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-500 rounded-full opacity-30"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="lg:max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                About <span className="text-yellow-500">Meichin Mines</span>
              </h2>
              
              <p className="text-lg md:text-xl font-bold text-gray-700 leading-relaxed mb-8">
                We are an indigenous Nigerian Company registered under the Nigerian law as a 
                mining, mineral processing and export company
              </p>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Meichin Mines Ltd stands at the forefront of Nigeria's mining industry, 
                  committed to responsible extraction and sustainable development. Our operations 
                  span across various mineral resources, contributing significantly to the 
                  nation's economic growth.
                </p>
                
                <p>
                  With state-of-the-art technology and adherence to international standards, 
                  we ensure that our mining practices not only meet global requirements but 
                  also protect the environment and benefit local communities.
                </p>
              </div>

              {/* <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 hover:border-yellow-500 text-gray-700 hover:text-yellow-500 font-semibold rounded-lg transition-all duration-300"
                >
                  Our Services
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeichinMinesSection;