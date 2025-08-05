import React from 'react';
import { Heart, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'AI Companion', href: '/ai-therapist' },
    { label: 'Journaling', href: '/journaling' },
    { label: 'Mood Tracker', href: '/mood-tracker' },
    { label: 'Sleep & Audio', href: '/sleep-and-audio' },
  ];

  const companyLinks = [
    { label: 'Our Story', href: '/story' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ];

  return (
    <footer className="bg-slate-900 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img 
                  src="/lo.png" 
                  alt="Tranquil AI Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-xl font-bold">Tranquil AI</h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              Your AI-powered companion for daily mental wellness. CBT-based therapy, journaling, and mood tracking for a calmer, more mindful you.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com/tranquil_labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Tranquil AI Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/tranquil_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-400 transition-colors"
                aria-label="Tranquil AI Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/tranquilai01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="Tranquil AI LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold">Features</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:support@tranquilai.in" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  support@tranquilai.in
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-sm leading-relaxed">
                  B 401 WATERS EDGE, PIMPLE NILAKH<br />
                  VISHALNAGAR, Sangavi<br />
                  Pune City, Pune – 411027<br />
                  Maharashtra, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Download Tranquil AI</h4>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 text-white text-sm font-medium shadow-lg hover:shadow-xl"
              >
                <span>📱 App Store</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.trnql.tranquil&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-slate-700 border border-slate-600 rounded-lg hover:bg-slate-600 transition-all duration-300 text-white text-sm font-medium shadow-lg hover:shadow-xl"
              >
                <span>🤖 Google Play</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center items-center space-x-6">
              <a
                href="https://www.instagram.com/tranquil_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-400 transition-colors transform hover:scale-110"
                aria-label="Tranquil AI Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/tranquilai01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                aria-label="Tranquil AI LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/tranquil_labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                aria-label="Tranquil AI Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-sm">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 text-slate-400">
              <span>© 2025 Tranquil AI. All rights reserved.</span>
              <span className="hidden lg:block">•</span>
              <span>CIN: U86909PN2024PTCXXXXXX</span>
              <span className="hidden lg:block">•</span>
              <span>support@tranquilai.in</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <span>Made in India 🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;