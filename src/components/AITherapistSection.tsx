import React, { useEffect, useState } from 'react';
import { MessageCircle, Zap, Clock, Shield, CheckCircle, ArrowLeft, RotateCcw, Plus, Send, Camera, Mic } from 'lucide-react';

const AITherapistSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [parallaxOffset, setParallaxOffset] = useState(0);

  const conversation = [
    {
      type: 'ai',
      message: "Hello! I'm here to provide a safe space for you to share your thoughts and feelings. How are you feeling today?",
      time: "2:14 PM"
    },
    {
      type: 'user', 
      message: "I've been feeling overwhelmed with work lately. It's affecting my sleep.",
      time: "2:15 PM"
    },
    {
      type: 'ai',
      message: "I can see how that work pressure is spilling into your rest time. When our minds are racing with deadlines and responsibilities, that peaceful drift into sleep becomes almost impossible. What's been happening at work that's feeling particularly overwhelming right now?",
      time: "2:15 PM"
    },
    {
      type: 'ai',
      message: "And have you noticed any specific patterns with your sleep - like trouble falling asleep, waking up throughout the night, or maybe anxious dreams?",
      time: "2:16 PM"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('ai-therapist');
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
          setParallaxOffset(progress * 50 - 25);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          const startTyping = () => {
            if (currentMessage < conversation.length) {
              const message = conversation[currentMessage].message;
              let currentIndex = 0;
              
              const typeWriter = setInterval(() => {
                if (currentIndex < message.length) {
                  setTypingText(message.slice(0, currentIndex + 1));
                  currentIndex++;
                } else {
                  clearInterval(typeWriter);
                  setTimeout(() => {
                    setCurrentMessage(prev => prev + 1);
                    setTypingText('');
                  }, 1500);
                }
              }, 30);
            }
          };

          setTimeout(startTyping, 500);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('ai-therapist');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [currentMessage]);

  return (
    <section 
      id="ai-therapist" 
      className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - iPhone 16 Interface */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{ transform: `translateY(${parallaxOffset}px) translateX(${isVisible ? 0 : -80}px)` }}
          >
            {/* Simple Phone Outline for App Showcase */}
            <div className="mx-auto w-80 h-[600px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-200 flex items-center justify-center">
              <div className="w-full h-full relative overflow-hidden flex flex-col">
                {/* Chat Header (restored) */}
                <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-4 py-4 flex items-center justify-between shadow-lg">
                  <div className="flex items-center space-x-3">
                    <ArrowLeft className="w-6 h-6 text-white" />
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">AI Therapist</h3>
                        <p className="text-blue-100 text-xs">Online • End-to-end encrypted</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                {/* Chat Messages Area */}
                <div className="flex-1 bg-gradient-to-br from-slate-50 to-blue-50 px-2 py-3 space-y-2 overflow-y-auto transition-all duration-500" style={{ height: 'calc(100% - 80px)' }}>
                  {/* Display completed messages */}
                  {conversation.slice(0, currentMessage).map((msg, i) => (
                    <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeInMessage`} style={{animationDelay: `${i * 0.15}s`}}>
                      {msg.type === 'ai' && (
                        <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1 shadow-lg">
                          <MessageCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <div className={`max-w-xs px-3 py-2 rounded-2xl shadow-lg backdrop-blur-sm text-sm ${
                        msg.type === 'user' 
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md shadow-blue-200' 
                          : 'bg-white/90 text-slate-900 rounded-tl-md border border-white/50 shadow-slate-200'
                      }`}>
                        <p className="leading-relaxed text-xs md:text-sm">{msg.message}</p>
                        <p className={`text-[10px] mt-1 ${msg.type === 'user' ? 'text-blue-100' : 'text-slate-400'}`}>{msg.time}</p>
                      </div>
                      {msg.type === 'user' && (
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center ml-2 flex-shrink-0 mt-1 shadow-lg">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                  ))}
                  {/* Current typing message */}
                  {currentMessage < conversation.length && typingText && (
                    <div className={`flex ${conversation[currentMessage].type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeInMessage`} style={{animationDelay: `${currentMessage * 0.15}s`}}>
                      {conversation[currentMessage].type === 'ai' && (
                        <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1 shadow-lg">
                          <MessageCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <div className={`max-w-xs px-3 py-2 rounded-2xl shadow-lg backdrop-blur-sm text-sm ${
                        conversation[currentMessage].type === 'user' 
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md shadow-blue-200' 
                          : 'bg-white/90 text-slate-900 rounded-tl-md border border-white/50 shadow-slate-200'
                      }`}>
                        <p className="leading-relaxed text-xs md:text-sm">
                          {typingText}
                          <span className="animate-pulse text-blue-500">|</span>
                        </p>
                      </div>
                      {conversation[currentMessage].type === 'user' && (
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center ml-2 flex-shrink-0 mt-1 shadow-lg">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                  )}
                  {/* Typing indicator for AI */}
                  {currentMessage < conversation.length && !typingText && conversation[currentMessage]?.type === 'ai' && (
                    <div className="flex justify-start animate-fadeInMessage" style={{animationDelay: `${currentMessage * 0.15}s`}}>
                      <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1 shadow-lg">
                        <MessageCircle className="w-3 h-3 text-white" />
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl rounded-tl-md px-3 py-2 shadow-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* Enhanced Chat Input */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl p-2 border-t border-white/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center">
                      <Plus className="w-3 h-3 text-slate-600" />
                    </div>
                    <div className="flex-1 bg-slate-100 rounded-full px-3 py-2 flex items-center space-x-2">
                      <p className="text-slate-400 text-xs flex-1">Type your message...</p>
                      <Mic className="w-3 h-3 text-slate-400" />
                    </div>
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Send className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  {/* Home indicator */}
                  <div className="mt-2 flex justify-center">
                    <div className="w-20 h-1 bg-slate-900 rounded-full opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div 
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transform: `translateY(${-parallaxOffset}px) translateX(${isVisible ? 0 : 80}px)` }}
          >
            
            {/* Section Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-4 py-2 border border-indigo-200">
              <Zap className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">AI-Powered Therapy</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Professional Support
                <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Available Instantly</span>
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Our AI therapist combines evidence-based therapeutic techniques with the latest advances in artificial intelligence to provide personalized mental health support.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 150}ms` }}
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInMessage {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeInMessage {
          animation: fadeInMessage 0.6s cubic-bezier(0.4,0.2,0.2,1) both;
        }
      `}</style>
    </section>
  );
};

export default AITherapistSection;