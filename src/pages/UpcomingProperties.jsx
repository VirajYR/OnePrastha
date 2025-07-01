import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { websiteData } from '../data/websiteData';

const UpcomingProperties = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  
  // Use only the second property from websiteData
  const property = websiteData.properties[1]; // Show only second property

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // OnePrastha color palette text animations
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      
      {/* OnePrastha Header */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-20 pt-32 pb-16 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative"
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 blur-3xl" />
          
          <h1 className="relative text-6xl md:text-8xl font-black mb-6 tracking-wider font-serif">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              ONEPRASTHA
            </span>
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 2 }}
            className="h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 mx-auto max-w-xs mb-6"
          />
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="text-amber-400">Upcoming Luxury</span> in 
            <span className="text-yellow-400"> Sonipat</span> - Coming Soon
          </p>
        </motion.div>
      </motion.div>

      {/* Single Property Video Section */}
      <PropertyVideoSection property={property} />

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-20 py-24 text-center"
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="relative p-12 rounded-3xl backdrop-blur-xl border border-amber-400/20"
            style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1), rgba(217, 119, 6, 0.1))'
            }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                {Array.from({ length: 48 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="border border-amber-400/20"
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                  />
                ))}
              </div>
            </div>
            
            <motion.h2 
              className="relative text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Register Your Interest
            </motion.h2>
            
            <motion.p 
              className="relative text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Be the first to know about launch dates and exclusive pre-booking offers
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => navigate('/contact')}
                className="relative bg-gradient-to-r from-amber-600 to-yellow-600 text-black px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/25"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(245, 158, 11, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="relative z-10">REGISTER INTEREST</span>
              </motion.button>
              
              <motion.button
                onClick={() => navigate('/properties')}
                className="relative border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="relative z-10">VIEW AVAILABLE</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// Single Property Video Section Component
const PropertyVideoSection = ({ property }) => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Advanced cinematic scroll transforms
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1.5]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 0.9, 0.6]);
  const videoRotate = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const textScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center mb-24 overflow-hidden"
    >
      {/* Full Page YouTube Video Background with Advanced Scroll Effects */}
      <motion.div 
        className="fixed inset-0 w-full h-full overflow-hidden z-0"
        style={{
          scale: videoScale,
          opacity: videoOpacity,
          rotateZ: videoRotate
        }}
      >
        <iframe
          ref={videoRef}
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/P2sxSC4j0Xk?autoplay=1&mute=1&loop=1&playlist=P2sxSC4j0Xk&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=1&start=0"
          title="OnePrastha Upcoming Properties - Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            pointerEvents: 'none',
            transform: 'scale(1.1)',
            filter: 'brightness(0.6) contrast(1.1)',
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
        
        {/* Dynamic overlay effects with scroll-based opacity */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"
          style={{ opacity: overlayOpacity }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"
          style={{ opacity: overlayOpacity }}
        />
        
        {/* Animated particles effect */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            backgroundPosition: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
              radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
              radial-gradient(circle at 60% 60%, rgba(255, 255, 255, 0.05) 3px, transparent 3px)
            `,
            backgroundSize: '250px 250px, 350px 350px, 180px 180px'
          }}
        />
        
        {/* Cinematic scan lines effect */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ['0% 100%', '0% 0%'] 
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 98%, rgba(255,255,255,0.1) 100%)',
            backgroundSize: '100% 6px'
          }}
        />
      </motion.div>

      {/* Property Information Overlay with Enhanced Animations */}
      <motion.div 
        style={{ 
          y: textY,
          scale: textScale,
          opacity: textOpacity
        }}
        className="relative z-20 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <span className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
            COMING SOON
          </span>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight font-serif">
            <span className="bg-gradient-to-r from-white via-amber-200 to-yellow-200 bg-clip-text text-transparent">
              {property.title}
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Location */}
          <div className="backdrop-blur-2xl bg-black/40 p-6 rounded-2xl border border-amber-400/30 shadow-2xl">
            <div className="text-amber-400 text-2xl mb-2">📍</div>
            <h3 className="text-lg font-bold mb-2 text-amber-300">LOCATION</h3>
            <p className="text-white">{property.location}</p>
          </div>

          {/* Price */}
          <div className="backdrop-blur-2xl bg-black/40 p-6 rounded-2xl border border-yellow-400/30 shadow-2xl">
            <div className="text-yellow-400 text-2xl mb-2">💰</div>
            <h3 className="text-lg font-bold mb-2 text-yellow-300">INVESTMENT</h3>
            <p className="text-white font-bold text-xl">{property.price}</p>
          </div>

          {/* Area */}
          <div className="backdrop-blur-2xl bg-black/40 p-6 rounded-2xl border border-amber-500/30 shadow-2xl">
            <div className="text-amber-500 text-2xl mb-2">📏</div>
            <h3 className="text-lg font-bold mb-2 text-amber-300">AREA</h3>
            <p className="text-white">{property.area}</p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold mb-4 text-amber-300">LUXURY FEATURES</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {property.features.map((feature, idx) => (
              <motion.span
                key={idx}
                className="bg-black/50 backdrop-blur-sm border border-amber-400/40 text-amber-200 px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                whileHover={{ scale: 1.05, borderColor: 'rgba(245, 158, 11, 0.6)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/25"
            >
              GET EARLY ACCESS
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-block border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-4 rounded-2xl font-bold transition-all duration-300 backdrop-blur-sm"
            >
              SCHEDULE CALL
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default UpcomingProperties;
