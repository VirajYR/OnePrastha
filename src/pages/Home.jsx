import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { websiteData } from '../data/websiteData';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  // Enhanced scroll-based animations with better performance
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring animations with optimized settings
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 40,
    restDelta: 0.001
  });

  // Cinematic parallax transforms with enhanced animations
  const videoScale = useTransform(smoothProgress, [0, 1], [1, 2.2]);
  const videoOpacity = useTransform(smoothProgress, [0, 0.3, 1], [1, 0.9, 0.1]);
  const heroContentY = useTransform(smoothProgress, [0, 1], [0, -500]);
  const heroContentOpacity = useTransform(smoothProgress, [0, 0.2, 1], [1, 0.9, 0]);
  const overlayOpacity = useTransform(smoothProgress, [0, 0.4, 1], [0.1, 0.4, 0.9]);

  const { hero, properties, stats } = websiteData;

  // Enhanced property images for carousel
  const enhancedProperties = properties.map(property => ({
    ...property,
    images: [
      property.image,
      `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center`,
      `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=center`,
      `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center`,
      `https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop&crop=center`,
      `https://images.unsplash.com/photo-1600047509807-ba8f99d2cdda?w=800&h=600&fit=crop&crop=center`,
      `https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop&crop=center`,
      `https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop&crop=center`
    ]
  }));

  // Text sequences for the cinematic reveal
  const heroTexts = [
    "OnePrastha",
    "Luxury Redefined", 
    "Experience unparalleled elegance in Delhi NCR's most prestigious properties"
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % enhancedProperties.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [enhancedProperties.length]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 8);
    }, 3000);
    return () => clearInterval(imageInterval);
  }, []);

  // Text cycling effect - each text shows for 4 seconds, then cycles
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(textInterval);
  }, [heroTexts.length]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #1a1517, #2d2420)',
          minHeight: '100vh'
        }}
      >
        {/* YouTube Video Background */}
        <motion.div
          style={{ 
            scale: videoScale,
            opacity: videoOpacity 
          }}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/P2sxSC4j0Xk?autoplay=1&mute=1&loop=1&playlist=P2sxSC4j0Xk&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=1&start=0"
            title="OnePrastha Luxury Properties - Hero Video"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsVideoLoaded(true)}
            style={{
              pointerEvents: 'none',
              transform: 'scale(1.1)',
              filter: 'brightness(0.5) contrast(1.3) saturate(1.2)',
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          />
          {/* Backup gradient for loading */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-yellow-800/30 to-amber-700/40" />
          )}
        </motion.div>

        {/* Enhanced Cinematic Overlays */}
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 via-transparent to-yellow-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        
        {/* Additional cinematic vignette */}
        <div className="absolute inset-0" 
             style={{
               background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%)'
             }} />
        
        {/* Golden hour effect */}
        <motion.div 
          className="absolute inset-0 mix-blend-overlay"
          style={{
            background: 'linear-gradient(45deg, rgba(255,215,0,0.1), transparent, rgba(184,159,118,0.15))',
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.1, 0])
          }}
        />

        {/* Hero Content - Single Centered Text Animation */}
        <motion.div 
          style={{ 
            y: heroContentY,
            opacity: heroContentOpacity 
          }}
          className="relative z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen py-20"
        >
          {/* Single Text Display with Cinematic Transitions */}
          <motion.div className="text-center relative w-full flex items-center justify-center mb-16" style={{ minHeight: '500px' }}>
            {/* Text 1: OnePrastha */}
            <motion.div
              key={`text-0-${currentTextIndex}`}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ 
                opacity: currentTextIndex === 0 ? 1 : 0,
                y: currentTextIndex === 0 ? 0 : -100,
                scale: currentTextIndex === 0 ? 1 : 0.8
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={`absolute inset-0 flex items-center justify-center ${currentTextIndex === 0 ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="inline-block p-12 rounded-3xl backdrop-blur-3xl border-3 border-amber-400/40 shadow-2xl relative"
                   style={{ 
                     backgroundColor: 'rgba(184, 159, 118, 0.3)',
                     boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.9), 0 0 100px rgba(184, 159, 118, 0.4), inset 0 0 50px rgba(255, 255, 255, 0.05)'
                   }}>
                {/* Animated glow effect behind logo */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(45deg, rgba(184, 159, 118, 0.3), rgba(255, 215, 0, 0.2), rgba(184, 159, 118, 0.3))',
                    backgroundSize: '200% 200%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                
                <span className="relative text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-wide"
                      style={{ 
                        textShadow: '0 15px 40px rgba(0,0,0,0.9), 0 0 80px rgba(184, 159, 118, 0.5), 0 0 40px rgba(255, 255, 255, 0.2)',
                        fontFamily: 'serif',
                        background: 'linear-gradient(135deg, #ffffff, #f5f5f5, #e5e5e5)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                  OnePrastha
                </span>
              </div>
            </motion.div>

            {/* Text 2: Luxury Redefined */}
            <motion.div
              key={`text-1-${currentTextIndex}`}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ 
                opacity: currentTextIndex === 1 ? 1 : 0,
                y: currentTextIndex === 1 ? 0 : 100,
                scale: currentTextIndex === 1 ? 1 : 0.8
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={`absolute inset-0 flex items-center justify-center ${currentTextIndex === 1 ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="text-center max-w-4xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent"
                        style={{ 
                          textShadow: '0 8px 25px rgba(255, 191, 0, 0.6)',
                          backgroundSize: '300% 300%'
                        }}>
                    <motion.span
                      animate={{ 
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{ 
                        duration: 10, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    >
                      Luxury
                    </motion.span>
                  </span>
                  <span className="block text-white mt-6"
                        style={{ 
                          textShadow: '0 10px 40px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.15)' 
                        }}>
                    Redefined
                  </span>
                </h1>
              </div>
            </motion.div>

            {/* Text 3: Experience unparalleled elegance */}
            <motion.div
              key={`text-2-${currentTextIndex}`}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ 
                opacity: currentTextIndex === 2 ? 1 : 0,
                y: currentTextIndex === 2 ? 0 : 100,
                scale: currentTextIndex === 2 ? 1 : 0.8
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={`absolute inset-0 flex items-center justify-center px-4 ${currentTextIndex === 2 ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="text-center max-w-7xl">
                <p className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-relaxed font-light"
                   style={{
                     textShadow: '0 6px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255,255,255,0.15)',
                     letterSpacing: '0.03em'
                   }}>
                  Experience unparalleled elegance in Delhi NCR's most prestigious properties
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Action Buttons - Below the text */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ 
              opacity: currentTextIndex === 2 ? 1 : 0,
              y: currentTextIndex === 2 ? 0 : 60
            }}
            transition={{ duration: 1, delay: currentTextIndex === 2 ? 1 : 0 }}
            className="flex flex-col sm:flex-row gap-8 justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/properties" 
                className="inline-flex items-center bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-14 py-6 rounded-2xl text-xl font-bold transition-all duration-500 shadow-2xl hover:shadow-amber-500/25"
                style={{
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(245, 158, 11, 0.3)'
                }}
              >
                <span className="mr-4 text-2xl">🏛️</span>
                Explore Properties
                <span className="ml-4 text-xl">→</span>
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-transparent border-3 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-14 py-6 rounded-2xl text-xl font-bold transition-all duration-500 shadow-2xl backdrop-blur-xl"
                style={{
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(245, 158, 11, 0.2)'
                }}
              >
                <span className="mr-4 text-2xl">💬</span>
                Contact Us
                <span className="ml-4 text-xl">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 8.5, duration: 1.5, ease: "easeOut" }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white text-center z-20"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="mb-4"
          >
            <div className="w-12 h-12 mx-auto rounded-full border-2 border-amber-400/60 flex items-center justify-center backdrop-blur-md"
                 style={{ backgroundColor: 'rgba(184, 159, 118, 0.2)' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
          <p className="text-sm font-light tracking-wider uppercase">Scroll to explore</p>
        </motion.div>
      </section>

      {/* Featured Properties Section with Advanced Carousels */}
      <motion.section 
        className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        style={{
          background: useTransform(scrollYProgress, 
            [0.3, 0.5, 0.7], 
            ['linear-gradient(to bottom, #f9fafb, #ffffff)', 
             'linear-gradient(to bottom, #1f2937, #111827)', 
             'linear-gradient(to bottom, #000000, #1f2937)']
          )
        }}
      >
        <motion.div 
          className="max-w-7xl mx-auto"
          style={{
            scale: useTransform(scrollYProgress, [0.3, 0.6], [1, 1.05])
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-serif font-bold mb-6"
              style={{
                color: useTransform(scrollYProgress, [0.4, 0.6], ['#1f2937', '#ffffff'])
              }}
            >
              Featured Properties
            </motion.h2>
            <motion.p 
              className="text-xl max-w-2xl mx-auto"
              style={{
                color: useTransform(scrollYProgress, [0.4, 0.6], ['#6b7280', '#d1d5db'])
              }}
            >
              Discover our handpicked selection of premium properties
            </motion.p>
          </motion.div>

          {/* Property Carousels */}
          <div className="space-y-16">
            {enhancedProperties.slice(0, 3).map((property, propertyIndex) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: propertyIndex * 0.3 }}
                className="relative"
              >
                {/* Property Container with Scroll Effects */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl bg-black"
                  style={{
                    height: useTransform(scrollYProgress, [0.2, 0.4, 0.6], ['500px', '600px', '100vh']),
                    scale: useTransform(scrollYProgress, [0.3, 0.7], [1, 1.1])
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Carousel */}
                  <div className="relative w-full h-full">
                    {property.images.map((image, imageIndex) => (
                      <motion.div
                        key={imageIndex}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{
                          opacity: imageIndex === (currentImageIndex % property.images.length) ? 1 : 0,
                          scale: imageIndex === (currentImageIndex % property.images.length) ? 1 : 1.1
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      >
                        <img
                          src={image}
                          alt={`${property.title} - Image ${imageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                    
                    {/* Gradient Overlays for Text Visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
                  </div>

                  {/* Property Information Overlay */}
                  <motion.div 
                    className="absolute inset-0 flex items-end p-8 md:p-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + propertyIndex * 0.2 }}
                  >
                    <div className="w-full">
                      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        {/* Left Content */}
                        <div className="flex-1">
                          <motion.span 
                            className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                          >
                            FEATURED PROPERTY #{propertyIndex + 1}
                          </motion.span>
                          
                          <motion.h3 
                            className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + propertyIndex * 0.2 }}
                          >
                            {property.title}
                          </motion.h3>
                          
                          <motion.div
                            className="flex flex-col md:flex-row md:items-center gap-4 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + propertyIndex * 0.2 }}
                          >
                            <p className="text-lg text-gray-300 flex items-center">
                              <span className="mr-2 text-xl">📍</span>
                              {property.location}
                            </p>
                            <p className="text-lg text-gray-300 flex items-center">
                              <span className="mr-2 text-xl">📏</span>
                              {property.area}
                            </p>
                          </motion.div>
                          
                          <motion.p 
                            className="text-2xl md:text-3xl font-bold text-amber-400 mb-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.1 + propertyIndex * 0.2 }}
                          >
                            {property.price}
                          </motion.p>

                          {/* Features */}
                          <motion.div 
                            className="flex flex-wrap gap-2 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3 + propertyIndex * 0.2 }}
                          >
                            {property.features.slice(0, 4).map((feature, index) => (
                              <span 
                                key={index}
                                className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/30"
                              >
                                {feature}
                              </span>
                            ))}
                          </motion.div>
                        </div>

                        {/* Right Actions */}
                        <motion.div 
                          className="flex flex-col gap-4"
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.5 + propertyIndex * 0.2 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Link
                              to={`/property/${property.id}`}
                              className="inline-flex items-center bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl"
                            >
                              <span className="mr-3">🏛️</span>
                              View Details
                              <span className="ml-3">→</span>
                            </Link>
                          </motion.div>
                          
                          <motion.div
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Link
                              to="/contact"
                              className="inline-flex items-center bg-transparent border-2 border-white/60 text-white hover:bg-white/10 px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 backdrop-blur-sm"
                            >
                              <span className="mr-3">📞</span>
                              Enquire Now
                              <span className="ml-3">→</span>
                            </Link>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Image Navigation Dots */}
                  <motion.div 
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7 + propertyIndex * 0.2 }}
                  >
                    {property.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === (currentImageIndex % property.images.length) 
                            ? 'bg-amber-500 w-6' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </motion.div>

                  {/* Scroll Progress Indicator */}
                  <motion.div
                    className="absolute top-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600"
                    style={{
                      width: useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%'])
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/properties"
                className="inline-flex items-center bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-12 py-6 rounded-3xl text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                <span className="mr-4 text-2xl">�</span>
                Explore All Properties
                <span className="ml-4 text-2xl">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Excellence in Numbers
            </h2>
            <p className="text-xl text-amber-100 font-light">
              Our track record speaks for itself
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 font-serif">
                  {stat.number}
                </div>
                <div className="text-amber-100 font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
