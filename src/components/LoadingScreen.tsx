import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NUM_ELEMENTS = 80;
const STAR = 'star';
const MOON = 'moon';

// Generate evenly spaced grid positions for stars/moons
const gridSize = Math.ceil(Math.sqrt(NUM_ELEMENTS));
const elements = Array.from({ length: NUM_ELEMENTS }).map((_, i) => {
  const row = Math.floor(i / gridSize);
  const col = i % gridSize;
  const x = 5 + (col * (90 / (gridSize - 1))); // 5% to 95%
  const y = 5 + (row * (90 / (gridSize - 1)));
  return {
    id: i,
    x,
    y,
    size: 18 + Math.random() * 14, // 18–32px
    type: Math.random() > 0.18 ? STAR : MOON,
    delay: Math.random() * 0.8,
  };
});

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Only show loader after a short delay (simulate zoom-in)
    const loaderTimer = setTimeout(() => {
      setShowLoader(true);
    }, 1200);

    // Logo fades in after 0.5s and becomes fully visible over 1.5s
    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 1800);

    // Text appears after 2 seconds
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 3200);

    // Progress ring fills over 3 seconds (from 2s to 5s total)
    const progressTimer = setTimeout(() => {
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + (100/60); // 60 frames over 3 seconds
        });
      }, 50);
    }, 3200);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
      clearTimeout(progressTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 flex items-center justify-center relative overflow-hidden">
      {/* Loader Animation (Zoom In) */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Logo Container with Progress Ring */}
            <div className="relative mb-8">
              <div className="relative w-32 h-32">
                {/* Progress Ring */}
                <svg 
                  className="w-full h-full transform -rotate-90" 
                  viewBox="0 0 100 100"
                >
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* Progress circle with new gradient */}
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 42}`}
                    strokeDashoffset={`${2 * Math.PI * 42 * (1 - progress / 100)}`}
                    className="transition-all duration-75 ease-out"
                  />
                  {/* Updated gradient definition */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Tranquil AI Logo */}
                <div
                  className={`absolute inset-2 rounded-full flex items-center justify-center transition-all duration-1500 ease-out ${
                    logoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <img 
                    src="lo.png" 
                    alt="Tranquil AI Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            {/* Company Name */}
            <div className={`transition-all duration-1000 ease-out ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <h1 className="text-white text-2xl font-sans font-normal tracking-wider">
                Tranquil AI
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadingScreen;
