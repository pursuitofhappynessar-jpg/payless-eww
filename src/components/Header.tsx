import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Vouchers', href: '/#vouchers' },
    { name: 'Reservation', href: '/reservation' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-payless-light-blue sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with enhanced visibility */}
          <Link to="/" className="flex items-center group">
            <div className="p-2">
              <img 
                src="/website-logo.jpeg"
                alt="Payless Travel - Egypt's #1 Discount Card"
                className="h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                style={{ height: '2.8rem', borderRadius: '4px' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.href.startsWith('/#') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === '/' && location.hash === item.href.substring(1)
                      ? 'text-payless-navy'
                      : 'text-gray-700 hover:text-payless-blue'
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-payless-navy'
                      : 'text-gray-700 hover:text-payless-blue'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link
              to="/get-your-card"
              className="bg-gradient-to-r from-payless-blue to-payless-navy text-white px-6 py-2 rounded-lg hover:from-payless-navy hover:to-payless-dark-navy transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-payless-orange/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">
              Get Your Card
              </span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-payless-light-blue">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                item.href.startsWith('/#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-left ${
                      location.pathname === '/' && location.hash === item.href.substring(1)
                        ? 'text-payless-navy bg-payless-light-blue'
                        : 'text-gray-700 hover:text-payless-blue hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-payless-navy bg-payless-light-blue'
                        : 'text-gray-700 hover:text-payless-blue hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link
                to="/get-your-card"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-payless-blue to-payless-navy text-white px-6 py-3 rounded-lg hover:from-payless-navy hover:to-payless-dark-navy transition-all duration-200 font-medium text-center"
              >
                Get Your Card
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;