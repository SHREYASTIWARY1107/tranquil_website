import React, { useEffect } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import Footer from '../components/Footer';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Contact Us - Get in Touch with Tranquil AI Support Team";
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Contact Tranquil AI for support, B2B partnerships, or questions about our mental health platform. Email us at support@tranquilai.in.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    } else {
      metaDescription.setAttribute('content', 'Contact Tranquil AI for support, B2B partnerships, or questions about our mental health platform. Email us at support@tranquilai.in.');
    }
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email Us",
      details: "support@tranquilai.in",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-600" />,
      title: "Visit Us",
      details: "B 401 WATERS EDGE, PIMPLE NILAKH",
      description: "VISHALNAGAR, Sangavi, Pune City, Pune – 411027, Maharashtra"
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Business Hours",
      details: "Mon - Fri: 9AM - 6PM IST",
      description: "We're here to help during business hours"
    }
  ];

  const faqs = [
    {
      question: "How does Tranquil AI protect my privacy?",
      answer: "Your conversations and data are completely private and encrypted. We never share your personal information with third parties."
    },
    {
      question: "Is Tranquil AI a replacement for professional therapy?",
      answer: "Tranquil AI is designed to complement professional mental health care, not replace it. For serious mental health issues, we always recommend consulting with a licensed professional."
    },
    {
      question: "How does the AI therapist work?",
      answer: "Our AI is built on proven Cognitive Behavioral Therapy (CBT) principles and uses natural language processing to provide empathetic, helpful responses to your concerns."
    },
    {
      question: "Can I use Tranquil AI offline?",
      answer: "Some features like journaling work offline, but the AI therapist requires an internet connection to provide real-time responses."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-x-hidden">
      <NavigationHeader />
      
      <main className="pt-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Get in
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Touch with Us
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Have questions about Tranquil AI? Want to share feedback or explore partnership opportunities? 
              We'd love to hear from you. Our team is here to help and support your mental wellness journey.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Section */}
              <div className="text-center py-10 space-y-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Want to connect with the team?</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Email us at{' '}
                  <a 
                    href="mailto:support@tranquilai.in" 
                    className="text-blue-600 underline hover:text-blue-800 font-medium transition-colors"
                  >
                    support@tranquilai.in
                  </a>{' '}
                  and we'll get back to you within 24–48 hours.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <a 
                    href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 font-medium"
                  >
                    Install for iOS
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.trnql.tranquil&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-700 transition-all duration-300 font-medium"
                  >
                    Install for Android
                  </a>
                </div>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          {info.title}
                        </h3>
                        <p className="text-slate-800 font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-slate-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Quick Links */}
                <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl text-white">
                  <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <a
                      href="/privacy-policy"
                      className="block text-blue-100 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="/story"
                      className="block text-blue-100 hover:text-white transition-colors"
                    >
                      Our Story
                    </a>
                    <a
                      href="/team"
                      className="block text-blue-100 hover:text-white transition-colors"
                    >
                      Meet the Team
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600">
                Common questions about Tranquil AI and our services
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Mental Wellness Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Download Tranquil AI today and take the first step toward better mental health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Download for iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.trnql.tranquil&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-semibold text-white bg-white/20 border-2 border-white rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                Download for Android
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;