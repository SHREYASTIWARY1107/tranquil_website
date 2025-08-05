import React, { useEffect } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Privacy Policy - How Tranquil AI Protects Your Data";
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Read Tranquil AI\'s privacy policy to understand how we protect your mental health data with industry-standard security and complete confidentiality.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    } else {
      metaDescription.setAttribute('content', 'Read Tranquil AI\'s privacy policy to understand how we protect your mental health data with industry-standard security and complete confidentiality.');
    }
  }, []);
  const highlights = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Your Data is Secure",
      description: "We use industry-standard encryption to protect all your personal information."
    },
    {
      icon: <Lock className="w-8 h-8 text-emerald-600" />,
      title: "No Data Selling",
      description: "We never sell or rent your personal data to third parties."
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "Transparent Practices",
      description: "Clear information about what data we collect and how we use it."
    },
    {
      icon: <FileText className="w-8 h-8 text-emerald-600" />,
      title: "Your Rights",
      description: "You can access, update, or delete your data at any time."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-x-hidden">
      <NavigationHeader />
      
      <main className="pt-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Privacy
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Your privacy is our priority. Learn how we protect and handle your personal information.
            </p>
            <p className="text-lg text-slate-500">
              Last Updated: 04-02-2025
            </p>
          </div>
        </section>

        {/* Privacy Highlights */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Privacy at a Glance
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Key highlights of how we protect your privacy and handle your data
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Privacy Policy */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Privacy Policy for Tranquil</h2>
                
                <p className="text-slate-600 mb-8">
                  Tranquil is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mindfulness app, Tranquil. By using Tranquil, you agree to the terms outlined in this policy.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Information We Collect</h3>
                <p className="text-slate-600 mb-4">
                  We collect the following types of information to provide and improve our services:
                </p>

                <h4 className="text-lg font-semibold text-slate-900 mb-3">a. Personal Information</h4>
                <ul className="list-disc pl-6 text-slate-600 mb-4">
                  <li>Name, email address, and profile details (if provided during registration)</li>
                  <li>Payment information (if applicable for premium features, processed securely by third-party payment providers)</li>
                </ul>

                <h4 className="text-lg font-semibold text-slate-900 mb-3">b. Health and Well-being Data</h4>
                <ul className="list-disc pl-6 text-slate-600 mb-4">
                  <li>Mood logs, journal entries, and interactions with the AI companion (stored securely and never shared without consent)</li>
                </ul>

                <h4 className="text-lg font-semibold text-slate-900 mb-3">c. Usage Data</h4>
                <ul className="list-disc pl-6 text-slate-600 mb-4">
                  <li>App usage patterns, session duration, and feature engagement</li>
                  <li>Device information (such as model, OS version, and unique device identifiers)</li>
                </ul>

                <h4 className="text-lg font-semibold text-slate-900 mb-3">d. Automatically Collected Data</h4>
                <ul className="list-disc pl-6 text-slate-600 mb-6">
                  <li>Log data (IP address, timestamps, crash reports, and app performance analytics)</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mb-4">2. How We Use Your Information</h3>
                <p className="text-slate-600 mb-4">We use your data to:</p>
                <ul className="list-disc pl-6 text-slate-600 mb-6">
                  <li>Provide personalized AI therapy, journaling, and mindfulness experiences</li>
                  <li>Improve app functionality and user experience</li>
                  <li>Maintain security and prevent fraudulent activities</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mb-4">3. Data Sharing and Third-Party Services</h3>
                <p className="text-slate-600 mb-4">
                  We do not sell or rent your personal data. We may share data with:
                </p>
                <ul className="list-disc pl-6 text-slate-600 mb-6">
                  <li><strong>Service Providers:</strong> Trusted third-party providers for hosting, analytics, and payment processing</li>
                  <li><strong>Legal Authorities:</strong> If required to comply with legal obligations</li>
                  <li><strong>Aggregated Data:</strong> Anonymous data for research and service improvement</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mb-4">4. Data Security</h3>
                <p className="text-slate-600 mb-6">
                  We implement industry-standard security measures to protect your data, including encryption and secure storage. However, no method of transmission over the internet is 100% secure.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mb-4">5. Your Rights and Choices</h3>
                <p className="text-slate-600 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-slate-600 mb-4">
                  <li>Access, update, or delete your personal data</li>
                  <li>Withdraw consent for data processing (which may affect service availability)</li>
                  <li>Request a copy of your stored data</li>
                </ul>
                <p className="text-slate-600 mb-6">
                  To exercise these rights, contact us using the information below.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mb-4">6. Data Retention</h3>
                <p className="text-slate-600 mb-6">
                  We retain your data only for as long as necessary to provide our services and comply with legal requirements.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mb-4">7. Children's Privacy</h3>
                <p className="text-slate-600 mb-6">
                  Tranquil is designed to support users of all ages, including children, with appropriate guidance. We are committed to protecting user privacy and handle all data in compliance with applicable laws. Parents or guardians are encouraged to review and supervise their child's use of the app.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mb-4">8. Changes to This Privacy Policy</h3>
                <p className="text-slate-600 mb-6">
                  We may update this policy from time to time. Changes will be posted in the app and take effect immediately. Your continued use of Tranquil constitutes acceptance of these changes.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mb-4">9. Contact Us</h3>
                <p className="text-slate-600 mb-4">
                  For any privacy-related inquiries, contact us at:
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-lg mb-6">
                  <p className="text-slate-800 font-medium">support@tranquilai.in</p>
                </div>

                <p className="text-slate-600 font-medium">
                  By using Tranquil, you acknowledge that you have read and understood this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Questions About Our Privacy Policy?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              We're here to help. Contact us if you have any questions about how we handle your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
              <a
                href="mailto:support@tranquilai.in"
                className="px-8 py-4 text-lg font-semibold text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-xl hover:bg-blue-100 transition-all duration-300"
              >
                Email Support
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;