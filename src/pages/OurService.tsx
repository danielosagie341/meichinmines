import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AboutSection from '../sections/AboutSection';
import serviceBackgroundImage from '../assets/images/serviceBackgroundImage.svg';

const OurService: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  return (
    <div 
        className="pt-20 bg-black bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${serviceBackgroundImage})` }}
    >
      <button
        onClick={() => navigate(-1)}
        className="mb-4 ml-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
      >
        &larr; Back to Services
      </button>
      <AboutSection defaultServiceId={serviceId} />
    </div>
  );
};

export default OurService;
