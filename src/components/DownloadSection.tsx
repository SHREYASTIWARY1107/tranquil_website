import React, { useEffect, useState } from 'react';
import { Smartphone, Star, Download, Shield, Users, Award, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('download');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // App Store Icon Component
  const AppStoreIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );

  // Google Play Icon Component
  const GooglePlayIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
    </svg>
  );

  return (
    <motion.section
      id="download"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden"
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

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Download className="w-4 h-4 mr-2" />
            Available on All Platforms
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Take Your Mental Wellness
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Anywhere You Go
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          More and more people are turning to Tranquil AI for daily mental health support. Start your journey to better wellbeing today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - App Mockups */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="relative flex justify-center">
              
              {/* Main Phone */}
              <div className="mx-auto w-80 h-[600px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-200 flex items-center justify-center">
                <img 
                  src="/dashboard-mockup.png" 
                  alt="Dashboard Mockup" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
            </div>
          </div>

          {/* Right Column - Download Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>

            {/* App Store Rating */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-blue-100 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-1">5.0/5.0</div>
                <div className="text-sm text-slate-600">Rated 5 stars on PlayStore and AppStore</div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              {/* iOS Download */}
              <a 
                href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <AppStoreIcon className="w-6 h-6 text-black" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-gray-300">Download on the</div>
                        <div className="font-semibold">App Store</div>
                      </div>
                    </div>
                    <Download className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              </a>

              {/* Android Download */}
              <a 
                href="https://play.google.com/store/apps/details?id=com.trnql.tranquil&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <GooglePlayIcon className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-green-100">Get it on</div>
                        <div className="font-semibold">Google Play</div>
                      </div>
                    </div>
                    <Download className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              </a>
            </div>

            {/* Security Note */}
            <div className="flex items-center space-x-3 text-sm text-slate-600 mt-6">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Your data is encrypted and secure. We never share personal information.</span>
            </div>

            {/* Privacy Policy Button */}
            <div className="text-center mt-6">
              <a 
                href="/privacy-policy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-6 py-3 text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <Shield className="w-4 h-4" />
                <span>Privacy Policy</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DownloadSection;