import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { websiteData } from '../data/websiteData';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const { company, footer } = websiteData;

  // Handle smooth scrolling to sections
  const handleSectionNavigation = (path, section) => {
    if (path === '/' && section) {
      // If we're navigating to a section on the home page
      if (window.location.pathname === '/') {
        // Already on home page, just scroll to section
        scrollToSection(section);
      } else {
        // Navigate to home page first, then scroll
        navigate('/');
        setTimeout(() => scrollToSection(section), 500);
      }
    } else if (section) {
      // Navigate to the page first, then scroll to section
      navigate(path);
      setTimeout(() => scrollToSection(section), 500);
    } else {
      // Regular navigation
      navigate(path);
      setTimeout(() => scrollToTop(), 100);
    }
  };

  const scrollToSection = (sectionId) => {
    // Try multiple ways to find the section
    const selectors = [
      `#${sectionId}`,
      `.${sectionId}`,
      `[data-section="${sectionId}"]`,
      `section[id*="${sectionId}"]`,
      `div[id*="${sectionId}"]`
    ];
    
    let element = null;
    for (const selector of selectors) {
      try {
        element = document.querySelector(selector);
        if (element) break;
      } catch (e) {
        console.warn(`Invalid selector: ${selector}`);
      }
    }
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
      console.log(`Scrolled to section: ${sectionId}`);
    } else {
      // If section not found, scroll to top
      console.log(`Section "${sectionId}" not found, scrolling to top`);
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle external links (WhatsApp, Phone, Email)
  const handleExternalLink = (type, value) => {
    let url = '';
    switch (type) {
      case 'whatsapp':
        url = `https://wa.me/${value.replace(/\D/g, '')}?text=Hi! I'm interested in your premium properties in Delhi NCR.`;
        break;
      case 'phone':
        url = `tel:${value}`;
        break;
      case 'email':
        url = `mailto:${value}?subject=Inquiry about Premium Properties&body=Hi, I'm interested in learning more about your luxury real estate services in Delhi NCR.`;
        break;
      default:
        return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Simulate subscription (in real app, this would call an API)
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const FooterLink = ({ item }) => {
    if (item.section) {
      return (
        <button
          onClick={() => handleSectionNavigation(item.path, item.section)}
          className="text-left text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
        >
          <span>{item.name}</span>
          <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
        </button>
      );
    }
    
    return (
      <Link
        to={item.path}
        onClick={() => {
          // For regular navigation, scroll to top after navigation
          setTimeout(() => scrollToTop(), 100);
        }}
        className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
      >
        <span>{item.name}</span>
        <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
      </Link>
    );
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L0 0h100v100z' fill='%234F46E5' fill-opacity='0.1'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {company.name}
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {footer.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                <span className="mr-3 text-blue-400">📍</span>
                <span>{company.address}</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                <span className="mr-3 text-green-400">📞</span>
                <button
                  onClick={() => handleExternalLink('phone', company.phone)}
                  className="hover:underline text-left transition-colors duration-300"
                >
                  {company.phone}
                </button>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                <span className="mr-3 text-green-500">💬</span>
                <button
                  onClick={() => handleExternalLink('whatsapp', company.whatsapp)}
                  className="hover:underline text-left transition-colors duration-300 flex items-center"
                >
                  <span>{company.whatsapp}</span>
                  <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded-full">WhatsApp</span>
                </button>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                <span className="mr-3 text-yellow-400">✉️</span>
                <button
                  onClick={() => handleExternalLink('email', company.email)}
                  className="hover:underline text-left transition-colors duration-300"
                >
                  {company.email}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <FooterLink item={link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footer.services.map((link, index) => (
                <li key={index}>
                  <FooterLink item={link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Locations</h3>
            <ul className="space-y-3">
              {footer.locations.map((link, index) => (
                <li key={index}>
                  <FooterLink item={link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {footer.resources.map((link, index) => (
                <li key={index}>
                  <FooterLink item={link} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">{footer.newsletter.title}</h3>
              <p className="text-gray-300">
                {footer.newsletter.description}
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                required
              />
              <button 
                type="submit"
                disabled={isSubscribed}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-green-600 disabled:to-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100"
              >
                {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} {company.name}. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm">
                {footer.legal.map((legal, index) => (
                  <Link
                    key={index}
                    to={legal.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {legal.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {footer.socialLinks.map((social, index) => {
                // Define brand-specific hover colors
                const brandColors = {
                  'Facebook': 'hover:text-blue-500 hover:bg-blue-500/10',
                  'Instagram': 'hover:text-pink-500 hover:bg-pink-500/10',
                  'Twitter': 'hover:text-sky-400 hover:bg-sky-400/10',
                  'LinkedIn': 'hover:text-blue-600 hover:bg-blue-600/10',
                  'YouTube': 'hover:text-red-500 hover:bg-red-500/10'
                };
                
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-2 rounded-lg ${brandColors[social.name] || 'hover:text-white hover:bg-gray-700/50'}`}
                    aria-label={social.name}
                    title={social.name}
                  >
                    <div 
                      className="w-6 h-6"
                      dangerouslySetInnerHTML={{ __html: social.icon }}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;