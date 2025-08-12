import React, { useEffect, useState } from 'react';
import { Smartphone, Download, Apple, Bot } from 'lucide-react';

const GetTheApp = () => {
  const [deviceType, setDeviceType] = useState<'ios' | 'android' | 'unknown'>('unknown');
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // SEO Meta Tags
    document.title = "Get Tranquil AI App - Download for iOS & Android | Mental Wellness Support";
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Download Tranquil AI for iOS and Android. Get personalized mental wellness support with AI-powered therapy, mood tracking, and meditation features.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    } else {
      metaDescription.setAttribute('content', 'Download Tranquil AI for iOS and Android. Get personalized mental wellness support with AI-powered therapy, mood tracking, and meditation features.');
    }

    // Device detection
    const detectDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      
      // iOS detection
      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        return 'ios';
      }
      
      // Android detection
      if (/android/i.test(userAgent)) {
        return 'android';
      }
      
      return 'unknown';
    };

    const device = detectDevice();
    setDeviceType(device);

    // Auto-redirect after 3 seconds if device is detected
    if (device !== 'unknown') {
      const timer = setTimeout(() => {
        setIsRedirecting(true);
        const redirectUrl = device === 'ios' 
          ? 'https://apps.apple.com/in/app/tranquil-ai/id6738845854'
          : 'https://play.google.com/store/apps/details?id=com.trnql.tranquil&hl=en_IN';
        
        window.location.href = redirectUrl;
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDownload = (platform: 'ios' | 'android') => {
    setIsRedirecting(true);
    const url = platform === 'ios' 
      ? 'https://apps.apple.com/in/app/tranquil-ai/id6738845854'
      : 'https://play.google.com/store/apps/details?id=com.trnql.tranquil&hl=en_IN';
    
    window.open(url, '_blank');
    setIsRedirecting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* App Icon */}
        <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
          <Bot className="w-12 h-12 text-white" />
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
          Get Tranquil AI
        </h1>
        
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          Your personal AI companion for mental wellness. Available now on iOS and Android.
        </p>

        {/* Device Detection Status */}
        {deviceType !== 'unknown' && !isRedirecting && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-blue-800 flex items-center justify-center gap-2">
              <Smartphone className="w-5 h-5" />
              {deviceType === 'ios' ? 'iOS device detected' : 'Android device detected'} - 
              Redirecting to {deviceType === 'ios' ? 'App Store' : 'Google Play'} in 3 seconds...
            </p>
          </div>
        )}

        {/* Redirecting Status */}
        {isRedirecting && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-8">
            <p className="text-emerald-800 flex items-center justify-center gap-2">
              <Download className="w-5 h-5 animate-bounce" />
              Redirecting to app store...
            </p>
          </div>
        )}

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => handleDownload('ios')}
            className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <Apple className="w-6 h-6" />
            <div className="text-left">
              <div className="text-xs text-gray-300">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </button>

          <button
            onClick={() => handleDownload('android')}
            className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.95-3.03.02L12 18.5l-2.02 1.8c-.98.93-2.05.93-3.03-.02L5 18.5l2.02-1.8c.98-.93 2.05-.93 3.03.02L12 18.5l2.02-1.8c.98-.93 2.05-.93 3.03.02L19 18.5l-1.95 1.78zm-5.02-8.77L12 5.8l.03 5.71c-.01 0-.02 0-.03 0s-.02 0-.03 0z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-300">Get it on</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </button>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bot className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">AI Companion</h3>
            <p className="text-sm text-slate-600">24/7 personalized mental health support</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">📝</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Smart Journaling</h3>
            <p className="text-sm text-slate-600">Guided reflection and mood tracking</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🧘</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Meditation</h3>
            <p className="text-sm text-slate-600">Personalized mindfulness and relaxation</p>
          </div>
        </div>

        {/* Back to Website */}
        <div className="pt-8 border-t border-slate-200">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            ← Back to Tranquil AI Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetTheApp;
