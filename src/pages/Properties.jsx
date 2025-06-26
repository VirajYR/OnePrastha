import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { websiteData } from '../data/websiteData';

const Properties = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  // Use properties from websiteData
  const properties = websiteData.properties;

  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(property => property.type === filter);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Delhi NCR Properties
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive collection of premium properties across Delhi, Gurgaon, Noida, and Faridabad with exceptional features and prime locations.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['all', 'villa', 'apartment', 'house'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === type
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Properties Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              layout
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                  {property.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{property.title}</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <span className="mr-2">📍</span>
                  {property.location}
                </p>
                
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <span className="mr-1">🛏️</span>
                    {property.bedrooms} beds
                  </span>
                  <span className="flex items-center">
                    <span className="mr-1">🚿</span>
                    {property.bathrooms} baths
                  </span>
                  <span className="flex items-center">
                    <span className="mr-1">📐</span>
                    {property.area}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {property.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {property.features.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                        +{property.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <Link 
                  to={`/property/${property.id}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 block text-center"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-6">Our expert team can help you find the perfect property that matches your specific needs.</p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Contact Our Experts
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Properties;