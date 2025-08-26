import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AboutFounder from '../components/AboutFounder';
import aboutFounderImage from '../assets/images/aboutFounderImage.svg';

const AboutFounderSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    { type: 'about' as const },
    { type: 'education' as const }
  ];

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
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section 
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${aboutFounderImage}')` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <AboutFounder type={slide.type} />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 w-14 h-14 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white group-hover:text-yellow-500" size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 w-14 h-14 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white group-hover:text-yellow-500" size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-yellow-500 scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentSlide === index && (
              <div className="absolute inset-0 bg-yellow-500 rounded-full animate-ping opacity-75"></div>
            )}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-30 z-30">
        <div 
          className="h-full bg-yellow-500 transition-all duration-700"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Labels */}
      <div className=" absolute top-8 left-2 md:left-1/2 transform md:-translate-x-1/2 z-30">
        <div className="flex space-x-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-yellow-500 text-black'
                  : 'bg-white bg-opacity-20 text-white'
              }`}
            >
              {slide.type === 'about' ? 'About Founder' : 'Education'}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFounderSection;