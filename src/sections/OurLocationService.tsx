import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import MapEmbed from '../components/MapEmbed';

const OurLocationSection: React.FC = () => {
  const officeAddress = "Directorate of Road Traffic Services, Cadastral Zone, B10 Udysens Crescent, Mabushi, Abuja";
  const officeLat = 9.078967196719745;
  const officeLng = 7.44781821539683;
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            OUR <span className="text-yellow-500">LOCATION</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Find us at our strategic locations across Nigeria, positioned to serve you better
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Image */}
          <div className="order-2 lg:order-1">
            <MapEmbed lat={officeLat} lng={officeLng} address={officeAddress} height="450px" />
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
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLocationSection;