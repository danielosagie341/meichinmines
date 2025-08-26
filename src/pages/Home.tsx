import React from 'react';
import HomeSection from '../sections/HomeSection';
import AboutMeichinMinesSection from '../sections/AboutMeichinMinesSection';
import OurServicesSection from '../sections/OurServicesSection';
import AboutFounderSection from '../sections/AboutFounderSection';
import OurLocationSection from '../sections/OurLocationService';

const Home: React.FC = () => {
  return (
    <>
        <HomeSection />
        <AboutMeichinMinesSection />
        <OurServicesSection />
        <AboutFounderSection />
        <OurLocationSection />
    </>
  );
};

export default Home;
