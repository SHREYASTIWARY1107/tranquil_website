import React, { useEffect, useState } from 'react';
import { MessageCircle, Zap, Clock, Shield, CheckCircle } from 'lucide-react';

const AITherapistSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('ai-therapist');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="ai-therapist" 
      className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-indigo-50 w-full relative overflow-hidden"
    >
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Simplified Phone Interface */}
            <div 
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              {/* Simple Phone Mockup */}
              <div className="mx-auto w-80 h-[600px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-200 flex items-center justify-center">
                <div className="w-full h-full relative overflow-hidden flex flex-col">
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between shadow-lg">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm sm:text-base">AI Companion</h3>
                        <p className="text-blue-100 text-xs">Online • End-to-end encrypted</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Messages Area */}
                  <div className="flex-1 bg-gradient-to-br from-slate-50 to-blue-50 px-2 py-3 space-y-2 overflow-y-auto">
                    {/* Sample Messages */}
                    <div className="flex justify-start">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1 shadow-lg">
                        <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                      </div>
                      <div className="max-w-[200px] sm:max-w-xs px-2 sm:px-3 py-2 rounded-2xl shadow-lg backdrop-blur-sm text-xs sm:text-sm bg-white/90 text-slate-900 rounded-tl-md border border-white/50 shadow-slate-200">
                        <p className="leading-relaxed text-xs sm:text-sm">Hello! I'm here to provide a safe space for you to share your thoughts and feelings. How are you feeling today?</p>
                        <p className="text-[8px] sm:text-[10px] mt-1 text-slate-400">2:14 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="max-w-[200px] sm:max-w-xs px-2 sm:px-3 py-2 rounded-2xl shadow-lg backdrop-blur-sm text-xs sm:text-sm bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md shadow-blue-200">
                        <p className="leading-relaxed text-xs sm:text-sm">I've been feeling overwhelmed with work lately. It's affecting my sleep.</p>
                        <p className="text-[8px] sm:text-[10px] mt-1 text-blue-100">2:15 PM</p>
                      </div>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center ml-2 flex-shrink-0 mt-1 shadow-lg">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-start">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1 shadow-lg">
                        <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                      </div>
                      <div className="max-w-[200px] sm:max-w-xs px-2 sm:px-3 py-2 rounded-2xl shadow-lg backdrop-blur-sm text-xs sm:text-sm bg-white/90 text-slate-900 rounded-tl-md border border-white/50 shadow-slate-200">
                        <p className="leading-relaxed text-xs sm:text-sm">I can see how that work pressure is spilling into your rest time. What's been happening at work that's feeling particularly overwhelming?</p>
                        <p className="text-[8px] sm:text-[10px] mt-1 text-slate-400">2:15 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Input */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl p-2 border-t border-white/20">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-slate-100 rounded-full px-2 sm:px-3 py-2 flex items-center space-x-2">
                        <p className="text-slate-400 text-xs flex-1">Type your message...</p>
                      </div>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                    </div>
                    {/* Home indicator */}
                    <div className="mt-2 flex justify-center">
                      <div className="w-16 sm:w-20 h-1 bg-slate-900 rounded-full opacity-60"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div 
              className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              
              {/* Section Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-3 sm:px-4 py-2 border border-indigo-200">
                <Zap className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-700">AI-Powered Therapy</span>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Professional Support
                  <br />
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Available Instantly</span>
                </h2>
                
                <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
                  Our AI companion combines evidence-based therapeutic techniques with the latest advances in artificial intelligence to provide personalized mental health support.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: Clock,
                    title: "24/7 Availability",
                    description: "Get support whenever you need it, day or night",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: Shield,
                    title: "Private & Secure",
                    description: "End-to-end encryption ensures your conversations stay confidential",
                    gradient: "from-green-500 to-emerald-500"
                  },
                  {
                    icon: CheckCircle,
                    title: "Evidence-Based",
                    description: "Techniques rooted in CBT, DBT, and mindfulness therapy",
                    gradient: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: MessageCircle,
                    title: "Personalized",
                    description: "Adapts to your unique needs and communication style",
                    gradient: "from-orange-500 to-red-500"
                  }
                ].map((feature, i) => (
                  <div 
                    key={i}
                    className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${(i + 1) * 150}ms` }}
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}>
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITherapistSection;