import React, { useEffect } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import Footer from '../components/Footer';
import { Brain, Shield, Clock, Heart } from 'lucide-react';

const AITherapist = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "AI Companion - CBT-Powered Mental Health Support | Tranquil AI";
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Experience 24/7 AI-powered therapy based on Cognitive Behavioral Therapy principles. Private, empathetic mental health support whenever you need it.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    } else {
      metaDescription.setAttribute('content', 'Experience 24/7 AI-powered therapy based on Cognitive Behavioral Therapy principles. Private, empathetic mental health support whenever you need it.');
    }
  }, []);
  const benefits = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "CBT-Based Therapy",
      description: "Our AI uses Cognitive Behavioral Therapy principles to guide you through evidence-based therapeutic conversations."
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: "Complete Privacy",
      description: "Your conversations are completely private and secure. We never share your personal therapy sessions with anyone."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "24/7 Availability",
      description: "Get support whenever you need it. Our AI companion is available round the clock for your mental wellness needs."
    },
    {
      icon: <Heart className="w-8 h-8 text-emerald-600" />,
      title: "Empathetic Responses",
      description: "Experience compassionate, understanding responses that help you process emotions and develop coping strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-x-hidden">
      <NavigationHeader />
      
      <main className="pt-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Your Personal
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                AI Companion
              </span>
            </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Experience the power of AI-driven therapy sessions built on Cognitive Behavioral Therapy (CBT) principles. Get personalized, empathetic support whenever you need it.
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
                    src="/app1.png" 
                    alt="Tranquil AI companion interface showing CBT-based conversation"
                    className="mx-auto w-full max-w-[360px] h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Why Choose Our AI Companion?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Experience therapy that combines the latest in AI technology with proven psychological principles
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Simple steps to start your journey toward better mental wellness
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Download & Setup
                </h3>
                <p className="text-slate-600">
                  Install Tranquil AI and complete a brief assessment to personalize your therapy experience.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Start Conversations
                </h3>
                <p className="text-slate-600">
                  Begin chatting with your AI companion about your thoughts, feelings, and challenges.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Receive Guidance
                </h3>
                <p className="text-slate-600">
                  Get personalized CBT-based guidance, coping strategies, and emotional support.
                </p>
              </div>
            </div>
          </div>
        </section>

                {/* Scientific Backing Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Why AI Therapy Matters
              </h2>
              <p className="text-xl text-slate-600">
                Science-backed approaches to mental health support
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <article>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">How It Helps</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  AI-powered therapy provides immediate, accessible mental health support using evidence-based 
                  Cognitive Behavioral Therapy (CBT) techniques. It offers a judgment-free environment where 
                  users can explore their thoughts and emotions at their own pace.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Research shows that digital CBT interventions can be as effective as traditional therapy 
                  for treating anxiety, depression, and stress-related disorders. The key advantage is 
                  accessibility – getting help when and where you need it most.
                </p>
              </article>
              
              <article>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Scientific Backing</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-slate-700 mb-2">
                      <strong>WHO Mental Health Report:</strong> Digital interventions can significantly reduce 
                      treatment gaps in mental healthcare globally.
                    </p>
                    <a 
                      href="https://www.who.int/publications/i/item/9789240036703" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline text-sm font-medium"
                    >
                      [WHO Source]
                    </a>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-slate-700 mb-2">
                      <strong>APA Research on CBT:</strong> Cognitive Behavioral Therapy is one of the most 
                      effective treatments for anxiety and depression disorders.
                    </p>
                    <a 
                      href="https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline text-sm font-medium"
                    >
                      [APA Source]
                    </a>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-slate-700 mb-2">
                      <strong>Digital Health Studies:</strong> AI-powered mental health tools show comparable 
                      efficacy to traditional therapy in clinical trials.
                    </p>
                    <a 
                      href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6007928/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline text-sm font-medium"
                    >
                      [NCBI Research]
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
            <div className="container mx-auto max-w-4xl text-center">
              <blockquote className="text-2xl lg:text-3xl font-medium text-slate-900 mb-8">
                "The AI companion feels incredibly understanding and never judges. It's like having a supportive friend who's always there when I need to talk through my problems."
              </blockquote>
              <cite className="text-lg text-slate-600">
                — Priya M., Bangalore
              </cite>
            </div>
          </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of users who have found support and guidance through our AI companion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Install for iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.trnql.tranquil&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-semibold text-white bg-white/20 border-2 border-white rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                Install for Android
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AITherapist;