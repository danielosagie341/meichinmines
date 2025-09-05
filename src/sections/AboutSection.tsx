import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import minningAndTrading from '../assets/images/minningAndTradingOne.svg';
import logistics from '../assets/images/logisticsOne.svg';
import ecologicalSafety from '../assets/images/ecologicalSafetyOne.svg';

interface AboutSectionProps {
  defaultServiceId?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ defaultServiceId }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      type: 'mining',
      title: 'Mining & Trading',
      image: minningAndTrading,
      content: {
        heading: 'Mining & Trading',
        description: 'Our focus is to provide a superior service of tin, lead, zinc, fluorite, lithium, zircon supply from Nigeria to the world.',
        details: 'We produce all our minerals from owned mines and beneficiate the products into concentrates or crushed ores, the lead , zinc and zircon ores, are delivered to our own secured warehouses, where they are crushed according to the customer\'s requirements and prepared for delivery.'
      }
    },
    {
      type: 'logistics',
      title: 'Logistics',
      image: logistics,
      content: {
        heading: 'Logistics',
        description: 'From our experience with Nigerian logistics and the challenges it brings, we have become experts in the timely and consistent delivery of the raw materials and concentrates that global green energy and sustainable growth relies on. We ship our products from our mine sites and warehouses to Nigerian ports and have an exclusive freight forwarder that handles all of our goods and customs formalities at port. We securitize each individual truck that transports all of the goods from our warehouse to the port. Since our conception, we have delivered hundreds of thousands of tons to port safely and securely.',
        details: ''
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

  useEffect(() => {
    if (defaultServiceId) {
      const initialSlideIndex = slides.findIndex(s => s.type === defaultServiceId);
      if (initialSlideIndex !== -1) {
        setCurrentSlide(initialSlideIndex);
      }
    }
  }, [defaultServiceId]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // 10 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section 
      className="relative py-20 w-full min-h-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      

      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out relative z-10"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
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
                <div className="order-1 lg:order-2 text-white">
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl leading-relaxed text-white">
                      {slide.content.description}
                    </p>
                    
                    <p className="text-xl md:text-2xl leading-relaxed text-white">
                      {slide.content.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className='absolute top-8 flex left-[45%] w-full'>
        <button
          onClick={prevSlide}
          className=" transform -translate-y-1/2 z-30 w-14 mr-5 h-14 bg-white hover:bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-black group-hover:text-yellow-500" size={28} />
        </button>

        <button
          onClick={nextSlide}
          className="transform -translate-y-1/2 z-30 w-14 h-14 bg-white hover:bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="text-black group-hover:text-yellow-500" size={28} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-yellow-500 scale-125' 
                : 'bg-gray-500 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Title Overlay */}
      <div className="absolute lg:top-32 top-24 left-8 z-30">
        <h3 className="text-4xl font-bold text-white">
          {slides[currentSlide].content.heading}
        </h3>
      </div>
    </section>
  );
};

export default AboutSection;