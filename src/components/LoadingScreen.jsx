import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => onLoadingComplete(), 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #F5F4F0 0%, #D6C2A6 50%, #B89F76 100%)',
          }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{ backgroundColor: '#B89F76' }}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0.3,
                }}
                animate={{
                  y: [null, -100],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <img
                src="https://oneprastha.com/wp-content/uploads/2025/05/one_prastha_logo.png"
                alt="OnePrastha Logo"
                className="w-24 h-24 mx-auto mb-6 drop-shadow-2xl"
              />
              
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ 
                  color: '#2E2C2A',
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                OnePrastha
              </motion.h1>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl font-medium"
                style={{ color: '#6F6D68' }}
              >
                Premium Real Estate Experience
              </motion.p>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 300, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative mx-auto mb-6"
              style={{ height: '4px' }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: 'rgba(46, 44, 42, 0.2)' }}
              />
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{ 
                  backgroundColor: '#B89F76',
                  background: 'linear-gradient(90deg, #B89F76, #D6C2A6, #B89F76)',
                  backgroundSize: '200% 100%',
                }}
                initial={{ width: 0 }}
                animate={{ 
                  width: `${loadingProgress}%`,
                  backgroundPosition: ['0% 50%', '200% 50%']
                }}
                transition={{ 
                  width: { duration: 0.3 },
                  backgroundPosition: { duration: 2, repeat: Infinity }
                }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-sm font-medium"
              style={{ color: '#6F6D68' }}
            >
              Loading your luxury experience... {Math.round(loadingProgress)}%
            </motion.div>

            {/* Luxury Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20"
              style={{ backgroundColor: '#B89F76' }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="absolute -bottom-20 -left-20 w-32 h-32 rounded-full opacity-15"
              style={{ backgroundColor: '#D6C2A6' }}
            />
          </div>

          {/* Completion Animation */}
          {loadingProgress >= 100 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-transparent rounded-full"
                style={{ 
                  borderTopColor: '#B89F76',
                  borderRightColor: '#D6C2A6'
                }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
