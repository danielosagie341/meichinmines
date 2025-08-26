import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.svg';
import partialLogo from '../assets/images/partialLogo.svg';

interface HeaderProps {
  currentPage?: string;
  isHomePage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home', isHomePage = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isHomePage 
      ? (isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent')
      : 'bg-black'
  }`;

  const mobileHeaderClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:hidden ${
  isHomePage 
      ? (isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent')
      : 'bg-black'
  }`;

  return (
    <>
      {/* Desktop Header */}
      <header className={`${headerClasses} hidden lg:block`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/home" className="flex items-center space-x-3">
                <img src={logo} alt="" />
            </a>

            {/* Navigation */}
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className={`relative px-4 py-2 text-white transition-colors duration-300 hover:text-yellow-500 ${
                    currentPage === item.name.toLowerCase()
                      ? 'text-yellow-500'
                      : ''
                  }`}
                >
                  {item.name}
                  {currentPage === item.name.toLowerCase() && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 rounded-full"></div>
                  )}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className={mobileHeaderClasses}>
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/home" className="flex items-center justify-start">
              <div className="flex items-center justify-center">
                <img src={partialLogo} alt="" className='w-16 h-16' />
              </div>
              <span className="text-white text-lg font-bold">MEICHIN MINES</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 transform ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-4 invisible'
          }`}
        >
          <nav className="flex flex-col items-center py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative px-6 py-3 text-black transition-colors duration-300 hover:text-yellow-500 text-lg ${
                  currentPage === item.name.toLowerCase()
                    ? 'text-yellow-500'
                    : ''
                }`}
              >
                {item.name}
                {currentPage === item.name.toLowerCase() && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-yellow-500 rounded-full"></div>
                )}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className={`${isHomePage ? '' : 'h-20 lg:h-24'}`}></div>
    </>
  );
};

export default Header;