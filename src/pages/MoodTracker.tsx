import React, { useEffect } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import Footer from '../components/Footer';
import { BarChart3, Calendar, Lightbulb, TrendingUp } from 'lucide-react';

const MoodTracker = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Mood Tracker - Understand Your Emotional Patterns | Tranquil AI";
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Track your emotions with visual analytics. Identify triggers, patterns, and trends to improve your mental wellness with scientific backing.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    } else {
      metaDescription.setAttribute('content', 'Track your emotions with visual analytics. Identify triggers, patterns, and trends to improve your mental wellness with scientific backing.');
    }
  }, []);
  const benefits = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Visual Analytics",
      description: "See your emotional patterns with beautiful charts and graphs that make trends easy to understand."
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-600" />,
      title: "Daily Tracking",
      description: "Quick daily check-ins help you stay connected with your emotions and build self-awareness."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Pattern Recognition",
      description: "Identify triggers, positive influences, and behavioral patterns that affect your mood."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      title: "Progress Tracking",
      description: "Monitor your emotional well-being over time and celebrate improvements in your mental health journey."
    }
  ];

  const moodFeatures = [
    {
      title: "Quick Check-ins",
      description: "Log your mood in seconds with intuitive emoji-based tracking.",
      icon: "😊"
    },
    {
      title: "Detailed Insights",
      description: "Add notes about what influenced your mood for deeper analysis.",
      icon: "📝"
    },
    {
      title: "Trend Analysis",
      description: "View weekly and monthly trends to understand your emotional patterns.",
      icon: "📊"
    },
    {
      title: "Trigger Identification",
      description: "Discover what situations or activities impact your mood most.",
      icon: "🎯"
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
                  Track Your
                  <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    Emotional Journey
                  </span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Understand your emotional patterns with our intelligent mood tracking system. Visualize your feelings over time and discover what influences your well-being.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                  >
                    Start Tracking on iOS
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.trnql.tranquil&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 text-lg font-semibold text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-xl hover:bg-blue-100 transition-all duration-300 text-center"
                  >
                    Start Tracking on Android
                  </a>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="relative">
                  <img 
                    src="/app3.png" 
                    alt="Tranquil AI mood tracker interface with emotional pattern visualization"
                    className="mx-auto w-full max-w-[360px] h-auto rounded-2xl shadow-2xl"
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
                Powerful Mood Tracking Features
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Everything you need to understand and improve your emotional well-being
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {moodFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Why Track Your Mood?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Discover the benefits of consistent mood tracking for your mental health journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-white hover:shadow-lg transition-shadow">
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

        {/* Sample Charts Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Visualize Your Progress
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                See your emotional patterns with intuitive charts and analytics
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/mood-happy.png" 
                    alt="Tranquil AI weekly mood chart showing positive trend"
                    className="mx-auto w-full max-w-[200px] h-auto rounded-xl shadow-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Weekly Overview</h3>
                <p className="text-slate-600 text-sm">Track your mood trends throughout the week</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/mood-neutral.png" 
                    alt="Tranquil AI monthly mood analysis dashboard"
                    className="mx-auto w-full max-w-[200px] h-auto rounded-xl shadow-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Monthly Analysis</h3>
                <p className="text-slate-600 text-sm">Identify long-term emotional patterns</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/mood-sad.png" 
                    alt="Tranquil AI trigger analysis showing mood patterns"
                    className="mx-auto w-full max-w-[200px] h-auto rounded-xl shadow-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Trigger Insights</h3>
                <p className="text-slate-600 text-sm">Understand what affects your mood</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Simple. Effective. Insightful.
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Start tracking your mood in just a few simple steps
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Daily Check-in
                </h3>
                <p className="text-slate-600">
                  Take 30 seconds to log how you're feeling using our simple emoji system.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Add Context
                </h3>
                <p className="text-slate-600">
                  Optionally add notes about events, activities, or thoughts that influenced your mood.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Discover Patterns
                </h3>
                <p className="text-slate-600">
                  Review your analytics to understand what makes you happier and healthier.
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
                The Psychology of Mood Tracking
              </h2>
              <p className="text-xl text-slate-600">
                Evidence-based benefits of emotional awareness and pattern recognition
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <article>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">How It Helps</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Mood tracking increases emotional awareness and helps identify patterns between thoughts, 
                  behaviors, and feelings. This self-monitoring approach is a core component of many therapeutic 
                  interventions and has been shown to improve emotional regulation and mental health outcomes.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  By consistently tracking mood patterns, individuals can identify triggers, recognize early 
                  warning signs of mental health episodes, and develop more effective coping strategies. This 
                  data-driven approach to emotional wellness empowers users to take control of their mental health.
                </p>
              </article>
              
              <article>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Research Evidence</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-slate-700 mb-2">
                      <strong>Clinical Psychology Review:</strong> Self-monitoring of mood and emotions 
                      significantly improves treatment outcomes in depression and anxiety disorders.
                    </p>
                    <a 
                      href="https://www.sciencedirect.com/science/article/abs/pii/S0272735806000134" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline text-sm font-medium"
                    >
                      [Clinical Research]
                    </a>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-slate-700 mb-2">
                      <strong>Journal of Medical Internet Research:</strong> Digital mood tracking apps 
                      improve emotional self-awareness and facilitate better therapeutic conversations.
                    </p>
                    <a 
                      href="https://www.jmir.org/2017/10/e336/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline text-sm font-medium"
                    >
                      [Digital Health Study]
                    </a>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-slate-700 mb-2">
                      <strong>Emotion Regulation Research:</strong> Regular mood monitoring enhances emotional 
                      intelligence and reduces the intensity of negative emotional episodes.
                    </p>
                    <a 
                      href="https://psycnet.apa.org/record/2016-58924-001" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline text-sm font-medium"
                    >
                      [APA Psychology]
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
                "The mood tracker made me realize my stress triggers and helped me understand when I'm happiest. It's like having a personal emotional GPS."
              </blockquote>
              <cite className="text-lg text-slate-600">
                — Chinmay D., Bangalore
              </cite>
            </div>
          </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Start Understanding Your Emotions
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands who have gained valuable insights into their emotional patterns.
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

export default MoodTracker;