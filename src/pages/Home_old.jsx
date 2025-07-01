import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { websiteData } from '../data/websiteData';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8]);

  // Extract data from websiteData
  const { hero, properties, features, stats } = websiteData;

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic',
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % properties.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [properties.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length);
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#F5F4F0' }}>
      {/* Futuristic Hero Section with Video Background */}
      <section 
        id="hero" 
        ref={heroRef} 
        className="hero-section relative h-screen flex flex-col justify-center items-center px-4 overflow-hidden"
      >
        {/* Video Background with Loading State */}
        <div className="absolute inset-0 w-full h-full">
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center z-10">
              <div className="text-white text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
                <p className="text-lg">Loading Luxury Experience...</p>
              </div>
            </div>
          )}
          
          <motion.video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              scale: videoScale,
              opacity: videoOpacity,
              filter: 'brightness(0.7) contrast(1.1)',
            }}
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-house-with-swimming-pool-39703-large.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-luxury-house-in-the-mountains-39686-large.mp4" type="video/mp4" />
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139" type="video/mp4" />
          </motion.video>
        </div>

        {/* Dynamic Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/70"
          style={{ opacity: overlayOpacity }}
        />
        
        {/* Animated Luxury Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B89F76' fill-opacity='0.2'%3E%3Cpolygon points='50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}
          />
        </div>
        
        {/* Floating Luxury Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 backdrop-blur-md rounded-3xl flex items-center justify-center text-3xl shadow-2xl border-2"
          style={{ 
            backgroundColor: 'rgba(184, 159, 118, 0.2)',
            borderColor: 'rgba(214, 194, 166, 0.5)',
            color: '#B89F76'
          }}
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🏰
        </motion.div>
        
        <motion.div 
          className="absolute top-40 right-20 w-16 h-16 backdrop-blur-md rounded-full flex items-center justify-center text-2xl shadow-2xl border-2"
          style={{ 
            backgroundColor: 'rgba(184, 159, 118, 0.2)',
            borderColor: 'rgba(214, 194, 166, 0.5)',
            color: '#B89F76'
          }}
          animate={{ 
            y: [10, -10, 10],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          💎
        </motion.div>
        
        <motion.div 
          className="absolute bottom-40 left-20 w-18 h-18 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl shadow-2xl border-2"
          style={{ 
            backgroundColor: 'rgba(184, 159, 118, 0.2)',
            borderColor: 'rgba(214, 194, 166, 0.5)',
            color: '#B89F76'
          }}
          animate={{ 
            x: [-5, 5, -5],
            y: [-5, 5, -5]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          🏛️
        </motion.div>
        
        {/* Main Hero Content */}
        <motion.div 
          className="text-center max-w-6xl z-10 relative"
          style={{ y: textY }}
        >
          {/* OnePrastha Logo Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <motion.img
                src="https://oneprastha.com/wp-content/uploads/2025/05/one_prastha_logo.png"
                alt="OnePrastha Logo"
                className="w-20 h-20 drop-shadow-2xl"
                animate={{ 
                  rotate: [0, 3, -3, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.span 
                className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl"
                style={{ fontFamily: 'Playfair Display, serif' }}
                animate={{ 
                  textShadow: [
                    '3px 3px 6px rgba(0,0,0,0.8)',
                    '5px 5px 15px rgba(184, 159, 118, 0.5)',
                    '3px 3px 6px rgba(0,0,0,0.8)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                OnePrastha
              </motion.span>
            </div>
            <motion.span 
              className="inline-block backdrop-blur-lg text-white px-8 py-3 rounded-full text-lg font-semibold shadow-2xl border-2"
              style={{ 
                backgroundColor: 'rgba(184, 159, 118, 0.4)',
                borderColor: 'rgba(214, 194, 166, 0.6)'
              }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(184, 159, 118, 0.6)' }}
            >
              🏢 Premium Real Estate Excellence
            </motion.span>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-white leading-tight"
            style={{
              textShadow: '4px 4px 8px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)',
              fontFamily: 'Playfair Display, serif'
            }}
          >
            <motion.span
              animate={{ 
                background: [
                  "linear-gradient(45deg, #ffffff, #D6C2A6)",
                  "linear-gradient(45deg, #D6C2A6, #B89F76)",
                  "linear-gradient(45deg, #B89F76, #ffffff)"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ 
                background: "linear-gradient(45deg, #ffffff, #D6C2A6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Luxury Redefined
            </motion.span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="text-2xl md:text-4xl text-white mb-12 leading-relaxed font-light max-w-5xl mx-auto"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
            }}
          >
            Experience unparalleled elegance in Delhi NCR's most prestigious properties
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/properties" 
                className="group backdrop-blur-lg text-white px-12 py-6 rounded-2xl text-xl font-semibold transition-all duration-500 shadow-2xl flex items-center justify-center border-2 hover:shadow-3xl"
                style={{ 
                  backgroundColor: 'rgba(184, 159, 118, 0.9)',
                  borderColor: 'rgba(214, 194, 166, 0.8)'
                }}
              >
                <span className="mr-3 text-2xl">🏛️</span>
                Explore Properties
                <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/upcoming-properties" 
                className="group backdrop-blur-lg text-white px-12 py-6 rounded-2xl text-xl font-semibold transition-all duration-500 shadow-2xl flex items-center justify-center border-2 hover:shadow-3xl"
                style={{ 
                  backgroundColor: 'rgba(214, 194, 166, 0.4)',
                  borderColor: 'rgba(184, 159, 118, 0.8)'
                }}
              >
                <span className="mr-3 text-2xl">🌟</span>
                Upcoming Launches
                <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap justify-center items-center gap-8 text-white"
          >
            {hero.trustIndicators.map((indicator, index) => (
              <motion.div 
                key={index}
                className="flex items-center bg-white/20 backdrop-blur-md px-6 py-4 rounded-full border border-white/30 shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.25)' }}
              >
                <span className="text-green-400 mr-3 text-lg font-bold">{indicator.icon}</span>
                <span className="text-sm font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                  {indicator.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 font-light">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Property Slideshow Section */}
      <section id="properties" className="slideshow-section relative py-24 px-4 bg-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              Premium Properties in Delhi NCR
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Discover our exclusive collection of luxury properties across Delhi, Gurgaon, Noida, and Faridabad
            </p>
          </div>

          <div className="relative" data-aos="zoom-in" data-aos-delay="300">
            {/* Main Slideshow */}
            <div className="relative h-96 md:h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl">
              {properties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentSlide ? 1 : 0,
                    scale: index === currentSlide ? 1 : 1.05
                  }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
                  style={{
                    backgroundImage: `url(${property.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex items-end">
                    <div className="p-8 md:p-16 text-white max-w-3xl">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ 
                          opacity: index === currentSlide ? 1 : 0, 
                          y: index === currentSlide ? 0 : 50 
                        }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mb-4"
                      >
                        <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
                          FEATURED PROPERTY
                        </span>
                      </motion.div>
                      
                      <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ 
                          opacity: index === currentSlide ? 1 : 0, 
                          y: index === currentSlide ? 0 : 50 
                        }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-4xl md:text-5xl font-serif font-bold mb-4"
                      >
                        {property.title}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ 
                          opacity: index === currentSlide ? 1 : 0, 
                          y: index === currentSlide ? 0 : 50 
                        }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl mb-3 flex items-center font-light"
                      >
                        <span className="mr-3 text-2xl">📍</span>
                        {property.location}
                      </motion.p>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ 
                          opacity: index === currentSlide ? 1 : 0, 
                          y: index === currentSlide ? 0 : 50 
                        }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400"
                      >
                        {property.price}
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ 
                          opacity: index === currentSlide ? 1 : 0, 
                          y: index === currentSlide ? 0 : 50 
                        }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="flex flex-wrap gap-3 mb-8"
                      >
                        {property.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-white bg-opacity-20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white border-opacity-30"
                          >
                            {feature}
                          </span>
                        ))}
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ 
                          opacity: index === currentSlide ? 1 : 0, 
                          y: index === currentSlide ? 0 : 50 
                        }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      >
                        <Link
                          to={`/property/${property.id}`}
                          className="group inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 shadow-xl"
                        >
                          <span className="mr-3">View Details</span>
                          <motion.span
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          >
                            →
                          </motion.span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {properties.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Property Thumbnails */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setCurrentSlide(index)}
                className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                  index === currentSlide ? 'ring-4 ring-blue-500' : ''
                }`}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-20 md:h-24 object-cover"
                />
                <div className="p-2 bg-white">
                  <h4 className="text-sm font-semibold truncate">{property.title}</h4>
                  <p className="text-xs text-gray-600 truncate">{property.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L0 0h100v100z' fill='%234F46E5' fill-opacity='0.1'/%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gray-800">
              Why Choose OnePrastha?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Experience excellence in every aspect of your real estate journey with our premium services and unmatched expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group text-center p-10 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white text-4xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white opacity-10 animate-pulse-slow"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Excellence in Numbers
            </h2>
            <p className="text-xl text-blue-100 font-light">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
                className="group p-8 rounded-3xl bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 transform hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-3 font-serif">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
