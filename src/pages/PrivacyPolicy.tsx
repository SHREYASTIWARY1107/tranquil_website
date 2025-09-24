import React, { useEffect } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Privacy Policy & Terms - Tranquil AI";
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', "Read Tranquil AI's privacy policy and terms & conditions to understand how we protect your data, handle your rights, and outline your responsibilities.");
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
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
              Privacy &
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Terms
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Learn how we protect and handle your data, and the terms that govern your use of Tranquil AI.
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
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Privacy at a Glance</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Key highlights of how we protect your privacy and handle your data
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{highlight.title}</h3>
                  <p className="text-slate-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Policy */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Privacy Policy for Tranquil</h2>
                <p className="text-slate-600 mb-8">
                  Tranquil is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mindfulness app. By using Tranquil, you agree to the terms outlined in this policy.
                </p>

                {/* Existing Privacy Policy Content */}
                {/* ... truncated for brevity ... */}

                <h3 className="text-xl font-semibold text-slate-900 mb-4">User Deletion Feature</h3>
                <p className="text-slate-600 mb-6">
                  You have full control over your data. Within the Tranquil AI app, you will find an in-app option to delete your account. When this feature is used, it calls a secure API that permanently deletes your user profile and all related data across all database tables. This process ensures that none of your personal, health, or usage data remains in our system after deletion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 lg:p-12 shadow-md">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Tranquil AI – Terms & Conditions</h2>

              <p className="text-slate-600 mb-6">Effective Date: 04-02-2025</p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h3>
              <p className="text-slate-600 mb-6">
                By downloading, installing, registering for, or using Tranquil AI, you confirm that you have read, understood, and agreed to these Terms. If you are under 18, parental or guardian consent may be required in your jurisdiction.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Nature of Services</h3>
              <p className="text-slate-600 mb-4">Tranquil AI provides wellness support through journaling, guided exercises, and AI-powered interactions. It is intended only as a self-help and wellness aid, not a substitute for professional medical or psychological care.</p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">3. User Responsibilities</h3>
              <ul className="list-disc pl-6 text-slate-600 mb-6">
                <li>Provide accurate information during registration and usage</li>
                <li>Use the App only for lawful and appropriate purposes</li>
                <li>Refrain from misuse, harassment, or attempts to disrupt services</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">4. Disclaimers & Limitation of Liability</h3>
              <p className="text-slate-600 mb-4">The App is provided "as is" without guarantees. It cannot replace licensed professional care. In emergencies, users must seek immediate help from emergency services or professionals.</p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">5. Privacy & Data Handling</h3>
              <p className="text-slate-600 mb-6">We process your data securely to provide personalized experiences. For full details, see our Privacy Policy. By using the App, you consent to these practices.</p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">6. Subscriptions, Payments & Cancellations</h3>
              <p className="text-slate-600 mb-6">Certain features are subscription-based, subject to app store billing terms. Refunds and renewals follow app store policies.</p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">7. Third-Party Services</h3>
              <p className="text-slate-600 mb-6">We may rely on third-party providers (hosting, payments, analytics). We are not liable for interruptions caused by them.</p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">8. Intellectual Property</h3>
              <p className="text-slate-600 mb-6">All content, design, and technology are owned/licensed by Tranquil AI. Unauthorized reproduction or modification is prohibited.</p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">9. Modification of Terms</h3>
              <p className="text-slate-600 mb-6">We may update Terms periodically. Continued use after updates implies acceptance.</p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">10. Governing Law</h3>
              <p className="text-slate-600 mb-6">These Terms are governed under Indian law, with jurisdiction in Faridabad, Haryana.</p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">11. Contact Us</h3>
              <div className="bg-white border border-blue-200 p-4 rounded-lg">
                <p className="text-slate-800 font-medium">📧 support@tranquilai.in</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-emerald-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Questions About Privacy or Terms?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              We're here to help. Contact us if you have any concerns about your data or our policies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us
              </a>
              <a href="mailto:support@tranquilai.in" className="px-8 py-4 text-lg font-semibold text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-xl hover:bg-blue-100 transition-all duration-300">
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
