import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import propertiesData from '../data/json/properties.json';

gsap.registerPlugin(ScrollTrigger);

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    visitDate: ''
  });

  // Get property by ID
  const property = propertiesData.find(p => p.id === parseInt(id));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    // Scroll to top when component loads
    window.scrollTo(0, 0);

    // GSAP animations
    gsap.fromTo('.hero-image', 
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
    );

    // Parallax effect for property images
    gsap.utils.toArray('.parallax-element').forEach((element) => {
      gsap.to(element, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // If property not found, redirect to properties page
    if (!property) {
      navigate('/properties');
      return null;
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [property, id, navigate]);

  // If property not found, redirect to properties page
  if (!property) {
    navigate('/properties');
    return null;
  }

  // Use property data directly from JSON without hardcoded enhancements
  const enhancedProperty = {
    ...property,
    // Fallback values only if not provided in JSON
    status: property.status || property.age || "Ready to Move",
    furnished: property.furnished || (property.type === "villa" ? "Semi-Furnished" : "Unfurnished"),
    plotArea: property.plotArea || (property.type === "villa" ? "250 sq yards" : "N/A"),
    possession: property.possession || "Immediate",
    rera: property.rera || `RERA${property.id}23456789`,
    originalPrice: property.originalPrice || null,
    floorPlan: property.floorPlan || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&crop=center",
    virtualTour: property.virtualTour || "https://www.youtube.com/embed/sM427iZRWGE",
    highlights: property.highlights || [
      `Prime location in ${property.location}`,
      "Vastu compliant design",
      "Premium fittings and fixtures",
      "24/7 power backup and security",
      "Excellent connectivity"
    ],
    nearbyPlaces: property.nearbyPlaces || [
      { name: "Metro Station", distance: "1.5 km", type: "Transport" },
      { name: "Shopping Mall", distance: "2.0 km", type: "Shopping" },
      { name: "Hospital", distance: "1.8 km", type: "Healthcare" },
      { name: "School", distance: "1.2 km", type: "Education" },
      { name: "Business District", distance: "3.5 km", type: "Business" }
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === enhancedProperty.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? enhancedProperty.images.length - 1 : prev - 1
    );
  };

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Contact form submitted:', contactForm);
    alert('Thank you for your inquiry! We will contact you soon.');
    setContactForm({ name: '', email: '', phone: '', message: '', visitDate: '' });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: enhancedProperty.title,
        text: `Check out this amazing property: ${enhancedProperty.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Property link copied to clipboard!');
    }
  };

  const pricePerSqFt = Math.round(
    (parseFloat(enhancedProperty.price.replace('₹', '').replace(' Crores', '')) * 10000000) / 
    parseInt(enhancedProperty.area.replace(' sq ft', '').replace(',', ''))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/properties" className="hover:text-blue-600 transition-colors">Properties</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{enhancedProperty.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Images */}
      <section className="relative">
        <div className="grid md:grid-cols-4 md:grid-rows-2 gap-2 h-96 md:h-[70vh] overflow-hidden">
          {/* Main Image */}
          <div 
            className="md:col-span-2 md:row-span-2 relative cursor-pointer group"
            onClick={openImageModal}
          >
            <img
              src={enhancedProperty.images[currentImageIndex]}
              alt={enhancedProperty.title}
              className="hero-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            <button className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-lg hover:bg-opacity-100 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </button>
          </div>

          {/* Thumbnail Images */}
          {enhancedProperty.images.slice(1, 5).map((image, index) => (
            <div 
              key={index}
              className="relative cursor-pointer group overflow-hidden"
              onClick={() => setCurrentImageIndex(index + 1)}
            >
              <img
                src={image}
                alt={`${enhancedProperty.title} ${index + 2}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              {index === 3 && enhancedProperty.images.length > 5 && (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">+{enhancedProperty.images.length - 4} more</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Property Status Badge */}
        <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg z-10">
          {enhancedProperty.status}
        </div>

        {/* Bookmark Button */}
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
        >
          <svg
            className={`w-6 h-6 ${isBookmarked ? 'text-red-500 fill-current' : 'text-gray-600'}`}
            fill={isBookmarked ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {enhancedProperty.title}
                  </h1>
                  <p className="text-gray-600 text-lg flex items-center mb-4">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {enhancedProperty.location}
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {enhancedProperty.type}
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      RERA: {enhancedProperty.rera}
                    </span>
                  </div>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    {enhancedProperty.price}
                  </div>
                  {enhancedProperty.originalPrice && (
                    <div className="text-lg text-gray-500 line-through mb-2">
                      {enhancedProperty.originalPrice}
                    </div>
                  )}
                  <div className="text-sm text-gray-600">
                    ₹{pricePerSqFt.toLocaleString()}/sq ft
                  </div>
                  <div className="mt-3 flex space-x-2">
                    <button 
                      onClick={handleShare}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      Share
                    </button>
                    <Link
                      to="/contact"
                      className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-2">🛏️</div>
                  <div className="font-bold text-lg">{enhancedProperty.bedrooms}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-2">🚿</div>
                  <div className="font-bold text-lg">{enhancedProperty.bathrooms}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-2">📐</div>
                  <div className="font-bold text-lg">{enhancedProperty.area}</div>
                  <div className="text-sm text-gray-600">Area</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-2">🚗</div>
                  <div className="font-bold text-lg">{enhancedProperty.parking}</div>
                  <div className="text-sm text-gray-600">Parking</div>
                </div>
              </div>
            </motion.div>

            {/* Tabs Navigation */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex border-b">
                {[
                  { id: 'overview', label: 'Overview', icon: '📋' },
                  { id: 'amenities', label: 'Amenities', icon: '🏢' },
                  { id: 'location', label: 'Location', icon: '📍' },
                  { id: 'floorplan', label: 'Floor Plan', icon: '📐' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-4 px-6 text-center font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {activeTab === 'overview' && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl font-bold mb-4">Property Description</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {enhancedProperty.description}
                        </p>
                        
                        <h4 className="text-lg font-semibold mb-3">Key Highlights</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {enhancedProperty.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center text-gray-700">
                              <span className="text-green-500 mr-3">✓</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Property Details</h4>
                          <div className="space-y-3">
                            {[
                              { label: 'Furnished Status', value: enhancedProperty.furnished },
                              { label: 'Facing', value: enhancedProperty.facing },
                              { label: 'Floor', value: enhancedProperty.floor },
                              { label: 'Age', value: enhancedProperty.age },
                              { label: 'Possession', value: enhancedProperty.possession }
                            ].map((detail, index) => (
                              <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                                <span className="font-medium text-gray-600">{detail.label}:</span>
                                <span className="text-gray-900">{detail.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3">Features</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {(enhancedProperty.features || []).slice(0, 6).map((feature, index) => (
                              <div key={index} className="flex items-center text-gray-700">
                                <span className="text-blue-500 mr-3">●</span>
                                {feature}
                              </div>
                            ))}
                            {(enhancedProperty.features || []).length > 6 && (
                              <button className="text-blue-600 text-sm font-medium mt-2 text-left">
                                View all {enhancedProperty.features.length} features
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'amenities' && (
                    <motion.div
                      key="amenities"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold mb-6">Property Amenities</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {(enhancedProperty.amenities || []).map((amenity, index) => (
                          <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-blue-500 mr-3">🏢</span>
                            <span className="text-gray-800">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'location' && (
                    <motion.div
                      key="location"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold mb-6">Location & Nearby Places</h3>
                      
                      {/* Map Placeholder */}
                      <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
                        <div className="text-center">
                          <div className="text-4xl mb-2">🗺️</div>
                          <p className="text-gray-600">Interactive Map</p>
                          <p className="text-sm text-gray-500">{enhancedProperty.location}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4">Nearby Places</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {enhancedProperty.nearbyPlaces.map((place, index) => (
                            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                              <div>
                                <div className="font-medium text-gray-900">{place.name}</div>
                                <div className="text-sm text-gray-500">{place.type}</div>
                              </div>
                              <div className="text-blue-600 font-medium">{place.distance}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'floorplan' && (
                    <motion.div
                      key="floorplan"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold mb-6">Floor Plan</h3>
                      <div className="text-center">
                        <img
                          src={enhancedProperty.floorPlan}
                          alt="Floor Plan"
                          className="max-w-full h-auto rounded-lg shadow-lg"
                        />
                        <p className="text-gray-600 mt-4">
                          Detailed floor plan showing room layouts and dimensions
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Virtual Tour */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4">Virtual Tour</h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src={enhancedProperty.virtualTour}
                  title="Virtual Tour"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Agent Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-4"
            >
              <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
              
              <div className="flex items-center mb-6">
                <img
                  src={enhancedProperty.agent?.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"}
                  alt={enhancedProperty.agent?.name || "Property Agent"}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{enhancedProperty.agent?.name || "Property Advisor"}</h4>
                  <p className="text-gray-600 text-sm">{enhancedProperty.agent?.role || "Property Advisor"}</p>
                  <div className="flex items-center text-sm text-yellow-500 mt-1">
                    <span className="mr-1">⭐</span>
                    <span>4.9/5</span>
                    <span className="text-gray-500 ml-2">(150+ Sold)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <a
                  href={`tel:${enhancedProperty.agent?.phone || "+91 98765 43210"}`}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <span className="mr-2">📞</span>
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${(enhancedProperty.agent?.phone || "+91 98765 43210").replace(/\D/g, '')}?text=Hi! I'm interested in ${enhancedProperty.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <span className="mr-2">💬</span>
                  WhatsApp
                </a>
                <a
                  href={`mailto:${enhancedProperty.agent?.email || "info@luxeestate.com"}?subject=Inquiry about ${enhancedProperty.title}&body=Hi, I'm interested in this property: ${enhancedProperty.title}`}
                  className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center"
                >
                  <span className="mr-2">✉️</span>
                  Email
                </a>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-3">Send a Message</h4>
                
                <input
                  type="text"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                
                <input
                  type="email"
                  placeholder="Email Address"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                
                <input
                  type="date"
                  placeholder="Preferred Visit Date"
                  value={contactForm.visitDate}
                  onChange={(e) => setContactForm({...contactForm, visitDate: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <textarea
                  rows={3}
                  placeholder="Your Message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={enhancedProperty.images[currentImageIndex]}
                alt={enhancedProperty.title}
                className="max-w-full max-h-full object-contain"
              />
              
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {enhancedProperty.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PropertyDetails;
