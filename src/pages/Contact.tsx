import React, { useEffect, useState } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import Footer from '../components/Footer';
import { Mail, MapPin, Phone, Users, Shield, Clock, BarChart3, Building2, CheckCircle, Calendar, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    companySize: '',
    message: ''
  });

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `B2B Partnership Inquiry - ${formData.organization}`;
    const emailBody = `Dear Tranquil AI Team,

I am interested in exploring a partnership opportunity for my organization.

Contact Details:
- Name: ${formData.fullName}
- Organization: ${formData.organization}
- Email: ${formData.email}
- Company Size: ${formData.companySize}

Message:
${formData.message}

I would appreciate the opportunity to discuss how Tranquil AI can support our team's mental wellness needs.

Best regards,
${formData.fullName}`;

    // Create mailto link
    const mailtoLink = `mailto:support@tranquilai.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast.success("Opening your email client... Please send the email to complete your inquiry.");
    
    // Reset form
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      companySize: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const b2bBenefits = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Boost Employee Well-being",
      description: "Personalized AI-driven support reduces stress, anxiety, and burnout across your organization"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-600" />,
      title: "Improve Productivity",
      description: "Happier minds perform better; teams show higher engagement and focus with mental wellness support"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Scalable & Secure",
      description: "Enterprise-ready architecture with encrypted data and anonymized analytics for complete privacy"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "Instant Support, 24/7",
      description: "Employees can access AI therapy anytime without stigma or waiting for appointments"
    },
    {
      icon: <Building2 className="w-8 h-8 text-indigo-600" />,
      title: "Customizable Plans",
      description: "Tailored wellness dashboards, therapy access, and engagement analytics designed for HR teams"
    }
  ];

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
      question: "How can Tranquil AI integrate with our HR systems?",
      answer: "Tranquil AI offers API integrations with popular HR platforms and can provide anonymized wellness analytics dashboards. Our team works with your IT department to ensure seamless integration while maintaining data privacy."
    },
    {
      question: "What kind of data privacy measures are in place?",
      answer: "We use enterprise-grade encryption, comply with GDPR and data protection standards, and provide anonymized analytics only. All employee conversations are private and never shared with employers."
    },
    {
      question: "Can Tranquil provide corporate usage analytics?",
      answer: "Yes, we provide anonymized wellness trends, engagement metrics, and general insights to help HR teams understand overall team wellness without compromising individual privacy."
    },
    {
      question: "Is onboarding simple for large teams?",
      answer: "Absolutely! We offer bulk user provisioning, SSO integration, and dedicated onboarding support. Most organizations are fully set up within 1-2 weeks."
    },
    {
      question: "Do you offer discounts for startups or NGOs?",
      answer: "Yes, we have special pricing tiers for startups, NGOs, and educational institutions. Contact our partnerships team to discuss pricing options that fit your organization's needs."
    },
    {
      question: "What support do you provide for HR teams?",
      answer: "We offer dedicated account management, training sessions for HR teams, monthly wellness reports, and 24/7 technical support to ensure successful implementation."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-x-hidden">
      <NavigationHeader />
      
      <main className="pt-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6"
            >
              Let's Build Mentally
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Resilient Workplaces
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Partner with Tranquil AI to bring personalized, AI-powered mental wellness support to your employees. 
              Transform your workplace culture and boost team productivity with our comprehensive wellness platform.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Sales Team
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Partner with Tranquil Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Why Organizations Choose Tranquil AI
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join forward-thinking companies that prioritize employee mental wellness as a strategic advantage
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {b2bBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold text-slate-900">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 text-center leading-relaxed">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-slate-700 font-medium">Backed by Behavioral Science & CBT Principles</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* B2B Lead Capture Form */}
        <section id="partnership-form" className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Talk to Our Corporate Wellness Team
              </h2>
              <p className="text-xl text-slate-600">
                Ready to transform your workplace culture? Let's discuss how Tranquil AI can support your team.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">Partnership Inquiry</CardTitle>
                  <CardDescription className="text-center">
                    Fill out the form below and we'll open your email client with a pre-filled message ready to send
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                          Organization Name *
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="your.email@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="companySize" className="block text-sm font-medium text-slate-700 mb-2">
                          Company Size *
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select company size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-1000">201-1000 employees</option>
                          <option value="1000+">1000+ employees</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your organization's wellness needs and how we can help..."
                      />
                    </div>
                    
                    <div className="text-center">
                      <Button 
                        type="submit" 
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-12 py-4 text-lg"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Open Email Client
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section id="contact-info" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-emerald-50">
          <div className="container mx-auto max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-slate-600">
                Have questions about Tranquil AI? Want to explore partnership opportunities? We'd love to hear from you.
              </p>
            </motion.div>
            
            {/* Contact Information - Landscape Layout */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-slate-800 font-medium mb-1">
                    {info.details}
                  </p>
                  <p className="text-slate-600 text-sm">
                    {info.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl text-white shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">Quick Links</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <a
                  href="/privacy-policy"
                  className="block text-blue-100 hover:text-white transition-colors hover:scale-105 transform duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="/story"
                  className="block text-blue-100 hover:text-white transition-colors hover:scale-105 transform duration-200"
                >
                  Our Story
                </a>
                <a
                  href="/team"
                  className="block text-blue-100 hover:text-white transition-colors hover:scale-105 transform duration-200"
                >
                  Meet the Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600">
                Common questions about Tranquil AI for organizations and HR teams
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <span className="text-left font-semibold text-slate-900">
                    {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
              ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Download CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Start Your Mental Wellness Journey?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Download Tranquil AI today and take the first step toward better mental health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download for iOS
                </motion.a>
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.trnql.tranquil&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-lg font-semibold text-white bg-white/20 border-2 border-white rounded-xl hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download for Android
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;