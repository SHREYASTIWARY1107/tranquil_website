import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavigationHeader from '../components/NavigationHeader';
import Footer from '../components/Footer';
import { Brain, BookOpen, BarChart3, Headphones, Star, Users, Clock, Heart } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Tranquil AI – India's Mental Health App | CBT Therapy, Journaling & Mood Tracker";
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Tranquil AI is a mental wellness companion offering CBT-powered therapy, mood tracking, journaling, and guided sleep — built by graduates committed to mental health accessibility.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
  }, []);

  const features = [
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: "AI Companion",
      description: "CBT-powered daily therapy guidance with empathetic tone. Private, 24/7 chat model.",
      link: "/ai-therapist",
      color: "from-blue-50 to-blue-100"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-emerald-600" />,
      title: "Guided Journaling",
      description: "Gratitude, reflection, prompt journaling. Helps emotional clarity and anxiety reduction.",
      link: "/journaling",
      color: "from-emerald-50 to-emerald-100"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: "Mood Tracker",
      description: "Time-series emotion visualization. Helps detect behavioral patterns.",
      link: "/mood-tracker",
      color: "from-blue-50 to-blue-100"
    },
    {
      icon: <Headphones className="w-12 h-12 text-emerald-600" />,
      title: "Sleep & Audio Therapy",
      description: "Calming music, breathing exercises, meditation audios.",
      link: "/sleep-and-audio",
      color: "from-emerald-50 to-emerald-100"
    }
  ];

  const testimonials = [
    {
      text: "Tranquil feels like a safe space I can turn to every night.",
      author: "Ananya R.",
      location: "Mumbai",
      rating: 5
    },
    {
      text: "Journaling inside the app helped me express emotions I couldn't before.",
      author: "Bhavik S.",
      location: "Delhi",
      rating: 5
    },
    {
      text: "The mood tracker made me realize my stress triggers.",
      author: "Chinmay D.",
      location: "Bangalore",
      rating: 5
    },
    {
      text: "Sleep sounds and breathing sessions are lifesavers.",
      author: "Diya K.",
      location: "Pune",
      rating: 5
    },
    {
      text: "Feels like someone genuinely understands me.",
      author: "Eshan T.",
      location: "Hyderabad",
      rating: 5
    }
  ];

  const stats = [
    {
      number: "1,000+",
      label: "users",
      description: "Trust Tranquil daily"
    },
    {
      number: "12,000+",
      label: "recorded sessions",
      description: "AI conversations completed"
    },
    {
      number: "1,000+",
      label: "journals completed",
      description: "Personal growth documented"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavigationHeader />
      
      <main className="pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                  Your AI Therapy Companion,
                  <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    Built for Daily Mental Wellness
                  </span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  CBT-powered journaling, mood tracking, and self-guided therapy for a calmer, more mindful you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                  >
                    Install for iOS
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.trnql.tranquil&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 text-lg font-semibold text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-xl hover:bg-blue-100 transition-all duration-300 text-center"
                  >
                    Install for Android
                  </a>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="relative">
                  <img 
                    src="/dashboard-mockup.png" 
                    alt="Tranquil AI Dashboard showing main features and user interface"
                    className="mx-auto w-full max-w-[400px] h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Discover Your Path to Mental Wellness
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Explore our comprehensive suite of AI-powered tools designed to support your mental health journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.link}
                  className={`group p-8 rounded-2xl bg-gradient-to-br ${feature.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-center mb-6">
                    {feature.description}
                  </p>
                  <div className="text-center">
                    <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                      Learn More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Launch Banner */}
        <section className="py-16 px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Coming Next Week
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                We're launching an all-new <strong>Premium version</strong> with exclusive audio experiences and advanced personalization tools. Stay tuned.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real experiences from people who trust Tranquil for their mental wellness journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <cite className="text-slate-600 font-medium">
                    — {testimonial.author}, {testimonial.location}
                  </cite>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Trusted By
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join thousands who have made Tranquil part of their daily wellness routine
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-slate-900 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-slate-600">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* B2B Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  For Colleges, Corporates & Institutions
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Tranquil offers institution-ready dashboards, usage analytics, and engagement insights 
                  to help your community prioritize mental wellness. Our platform scales to support 
                  hundreds of users while maintaining complete privacy and individual care.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-slate-700">Anonymous usage analytics and wellness trends</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-slate-700">Custom branding and institution-specific content</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-slate-700">24/7 crisis support integration and referral systems</span>
                  </div>
                </div>
                <p className="text-lg text-slate-600 mb-6">
                  Contact us for demos, pilot programs, or B2B deployment discussions.
                </p>
                <a
                  href="mailto:support@tranquilai.in?subject=B2B Inquiry"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start B2B Discussion
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
                  Trusted by Educational & Corporate Partners
                </h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-sm text-slate-600">Students Supported</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
                    <div className="text-sm text-slate-600">User Satisfaction</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-sm text-slate-600">Support Available</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                    <div className="text-sm text-slate-600">Privacy Protected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-emerald-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Ready to Transform Your Mental Wellness?
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Join thousands of users who have already started their journey toward better mental health with Tranquil AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started on iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.trnql.tranquil&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-semibold text-blue-600 bg-white border-2 border-blue-200 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started on Android
              </a>
            </div>
          </div>
        </section>
      </main>

        <Footer />
    </div>
  );
};

export default Index;