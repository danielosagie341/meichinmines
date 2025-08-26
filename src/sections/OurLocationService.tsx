import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import locationImage from '../assets/images/locationImage.svg';

const OurLocationSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            OUR <span className="text-yellow-500">LOCATIONS</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Find us at our strategic locations across Nigeria, positioned to serve you better
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Image */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src={locationImage}
                alt="Our Locations Map"
                className="w-full h-64 md:h-80 lg:h-96 r"
              />
              
              {/* Map overlay with interactive elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Location marker - you can position this based on actual coordinates */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        XICAB LTD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                  Visit Our Office
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Our headquarters is strategically located in the heart of Abuja, 
                  providing easy access for clients and partners.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <MapPin className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Directorate of Road Traffic Services, Cadastral Zone, 
                      B10 Udysens Crescent, Mabushi, Abuja
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <Phone className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                    <a 
                      href="tel:+2349127616959" 
                      className="text-gray-600 hover:text-yellow-500 transition-colors duration-300"
                    >
                      +234 9127616959
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <Mail className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                    <a 
                      href="mailto:Meichinofficial@gmail.com" 
                      className="text-gray-600 hover:text-yellow-500 transition-colors duration-300"
                    >
                      Meichinofficial@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              {/* <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-4">Operating Hours</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div> */}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 hover:border-yellow-500 text-gray-700 hover:text-yellow-500 font-semibold rounded-lg transition-all duration-300"
                >
                  Get Directions
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLocationSection;