import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HomePage from '../components/HomePage';
import homeHero1 from '../assets/images/homeHero1.svg';
import homeHero2 from '../assets/images/homeHero2.svg';
import homeHero3 from '../assets/images/homeHero3.svg';

const HomeSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      backgroundImage: homeHero1,
      title: "WELCOME TO MEICHIN MINES",
      subtitle: "Harnessing Earth's Potential, Responsibly."
    },
    {
      backgroundImage: homeHero2,
      title: "SUSTAINABLE MINING SOLUTIONS",
      subtitle: "Leading Nigeria's mining industry with innovative and eco-friendly practices."
    },
    {
      backgroundImage: homeHero3,
      title: "GLOBAL MINERAL TRADING",
      subtitle: "Connecting Nigerian minerals to international markets with integrity and excellence."
    }
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
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <HomePage
              backgroundImage={slide.backgroundImage}
              title={slide.title}
              subtitle={slide.subtitle}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white group-hover:text-yellow-500" size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white group-hover:text-yellow-500" size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-yellow-500 w-8' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-30 z-30">
        <div 
          className="h-full bg-yellow-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default HomeSection;