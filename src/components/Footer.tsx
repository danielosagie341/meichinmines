import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import partialLogo from '../assets/images/partialLogo.svg';

const Footer: React.FC = () => {
  return (
    <footer id='footer' className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo and Tagline */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center">
                <img src={partialLogo} alt="" />
              </div>
              <span className="text-white text-xl font-bold">MEICHIN MINES</span>
            </div>
            <p className="text-gray-300 text-lg mb-6">
              Harnessing Earth's Potential, Responsibly.
            </p>
            <p className="text-sm text-gray-400">
              © 2025 by Meichin Mines
            </p>
          </div>

          {/* Menu */}
          <div className="lg:col-span-3">
            <h3 className="text-yellow-500 font-semibold text-lg mb-6">Menu</h3>
            <nav className="space-y-4">
              <a href="/home" className="block text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                Home
              </a>
              <a href="/about" className="block text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                About
              </a>
              <a href="/services" className="block text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                Services
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-yellow-500 font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">Phone: +234 9127616959</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">Email: Meichinofficial@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">
                    Address: Directorate of Road Traffic Services, Cadastral Zone, B10 Udysens Crescent, Mabushi, Abuja
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            All rights reserved. Meichin Mines Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;