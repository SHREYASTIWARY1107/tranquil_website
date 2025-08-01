import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleStartJourney = () => {
    window.location.href = '/comingsoon.html';
  };

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-100/40 to-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-100/40 to-pink-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[60vh] sm:min-h-screen">
          
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Main Headline */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Transform Your
                <br />
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Mental Wellness
                </span>
                <br />
                Journey
              </h1>
              
              <p className="text-base sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-md sm:max-w-2xl">
                Experience personalized AI therapy, intelligent mood tracking, and evidence-based wellness tools designed by mental health professionals.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={handleStartJourney}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Your Journey
              </Button>
          
            </div>
          </div>

          {/* Right Column - App Landing Page Phone Mockup */}
          <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mx-auto w-80 h-[600px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-200 flex items-center justify-center">
              <img 
                src="/dashboard-mockup.png" 
                alt="Dashboard Mockup" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;