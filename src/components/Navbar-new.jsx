import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Properties for Sale', path: '/properties' },
    { name: 'Upcoming Properties', path: '/upcoming-properties' },
    { name: 'Testimonials', path: '/testimonials' }
  ];

  const isActivePath = (path) => location.pathname === path;

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#B89F76' }}
            >
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span 
              className="text-2xl font-bold"
              style={{ color: '#B89F76' }}
            >
              LuxeEstate
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className="relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{ 
                  color: isActivePath(item.path) ? '#B89F76' : '#2E2C2A',
                  fontWeight: isActivePath(item.path) ? 'bold' : 'normal'
                }}
                onMouseEnter={(e) => e.target.style.color = '#B89F76'}
                onMouseLeave={(e) => e.target.style.color = isActivePath(item.path) ? '#B89F76' : '#2E2C2A'}
              >
                {item.name}
                {isActivePath(item.path) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: '#B89F76' }}
                    layoutId="activeTab"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <button
              className="px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: '#B89F76',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#D6C2A6'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#B89F76'}
            >
              Contact Us
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              style={{ color: '#2E2C2A' }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t"
          style={{ borderColor: '#D6C2A6' }}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  handleNavClick();
                  setIsMenuOpen(false);
                }}
                className="block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300"
                style={{ 
                  color: isActivePath(item.path) ? '#B89F76' : '#2E2C2A',
                  backgroundColor: isActivePath(item.path) ? '#D6C2A6' : 'transparent',
                  fontWeight: isActivePath(item.path) ? 'bold' : 'normal'
                }}
              >
                {item.name}
              </Link>
            ))}
            <button
              className="w-full mt-4 py-2 px-4 rounded-lg font-medium transition-all duration-300"
              style={{ 
                backgroundColor: '#B89F76',
                color: '#FFFFFF'
              }}
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
