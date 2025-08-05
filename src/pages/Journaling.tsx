import React, { useEffect } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import Footer from '../components/Footer';
import { PenTool, Lightbulb, Heart, TrendingUp } from 'lucide-react';

const Journaling = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Guided Journaling - Express & Heal Through Writing | Tranquil AI";
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Discover the therapeutic power of journaling with guided prompts, gratitude practices, and emotional clarity exercises backed by scientific research.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    } else {
      metaDescription.setAttribute('content', 'Discover the therapeutic power of journaling with guided prompts, gratitude practices, and emotional clarity exercises backed by scientific research.');
    }
  }, []);
  const benefits = [
    {
      icon: <PenTool className="w-8 h-8 text-blue-600" />,
      title: "Guided Prompts",
      description: "Get thoughtful prompts that help you explore your emotions, experiences, and personal growth journey."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-emerald-600" />,
      title: "Emotional Clarity",
      description: "Writing helps process complex emotions and gain insights into your thought patterns and behaviors."
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Gratitude Practice",
      description: "Build a daily gratitude habit that shifts your focus toward positive aspects of life."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      title: "Anxiety Reduction",
      description: "Regular journaling has been proven to reduce anxiety and stress by organizing your thoughts."
    }
  ];

  const journalTypes = [
    {
      title: "Daily Reflection",
      description: "Process your day, emotions, and experiences with guided questions.",
      image: "/journaling-1.png"
    },
    {
      title: "Gratitude Journal",
      description: "Focus on positive moments and develop a grateful mindset.",
      image: "/journaling-2.png"
    },
    {
      title: "Mood Journal",
      description: "Track emotional patterns and identify triggers or positive influences.",
      image: "/journaling-3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-x-hidden">
      <NavigationHeader />
      
      <main className="pt-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                  Express Yourself
                  <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    Through Journaling
                  </span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Discover the therapeutic power of writing. Our guided journaling experience helps you process emotions, practice gratitude, and gain deeper self-awareness.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                  >
                    Start Journaling on iOS
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.trnql.tranquil&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 text-lg font-semibold text-emerald-600 bg-emerald-50 border-2 border-emerald-200 rounded-xl hover:bg-emerald-100 transition-all duration-300 text-center"
                  >
                    Start Journaling on Android
                  </a>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="relative">
                  <img 
                    src="/app2.png" 
                    alt="Tranquil AI journaling interface with guided prompts and mood tracking"
                    className="mx-auto w-full max-w-[360px] h-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journal Types Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Different Ways to Journal
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose from various journaling styles that suit your needs and goals
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {journalTypes.map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-6">
                    <img 
                      src={type.image} 
                      alt={`Tranquil AI ${type.title.toLowerCase()} feature screenshot`}
                      className="mx-auto w-full max-w-[280px] h-auto rounded-xl shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-slate-600">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                The Science Behind Journaling
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Research shows that regular journaling can significantly improve mental health and emotional well-being
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

        {/* Process Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Your Journaling Journey
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A simple, guided process to help you get the most out of your journaling practice
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Choose Your Style
                </h3>
                <p className="text-slate-600">
                  Select from daily reflection, gratitude, or mood journaling based on your current needs.
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Follow Prompts
                </h3>
                <p className="text-slate-600">
                  Use our thoughtfully crafted prompts to guide your writing and help you explore deeper.
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Track Progress
                </h3>
                <p className="text-slate-600">
                  Review your entries over time to see patterns, growth, and positive changes in your mindset.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Backing Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                The Science of Therapeutic Journaling
              </h2>
              <p className="text-xl text-slate-600">
                Research-backed benefits of expressive writing for mental health
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <article>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Why This Matters</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Expressive writing and journaling have been extensively studied for their therapeutic benefits. 
                  Regular journaling helps process traumatic experiences, reduce anxiety, and improve overall 
                  emotional well-being by providing a structured outlet for thoughts and feelings.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  The act of writing forces us to organize our thoughts, creating distance from overwhelming 
                  emotions and helping us gain new perspectives on challenging situations. This process is 
                  particularly effective when combined with guided prompts and gratitude practices.
                </p>
              </article>
              
              <article>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Scientific Evidence</h3>
                <div className="space-y-4">
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                    <p className="text-slate-700 mb-2">
                      <strong>Journal of Anxiety Disorders:</strong> Expressive writing significantly reduces 
                      anxiety symptoms and improves emotional regulation in clinical studies.
                    </p>
                    <a 
                      href="https://www.sciencedirect.com/science/article/abs/pii/S0887618513001394" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 underline text-sm font-medium"
                    >
                      [Research Study]
                    </a>
                  </div>
                  
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                    <p className="text-slate-700 mb-2">
                      <strong>Psychological Science:</strong> Writing about positive experiences and gratitude 
                      enhances well-being and life satisfaction more than neutral writing.
                    </p>
                    <a 
                      href="https://journals.sagepub.com/doi/10.1111/j.1467-9280.2005.01520.x" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 underline text-sm font-medium"
                    >
                      [Gratitude Research]
                    </a>
                  </div>
                  
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                    <p className="text-slate-700 mb-2">
                      <strong>Harvard Health:</strong> Regular journaling can help manage stress, reduce 
                      symptoms of depression, and improve immune function.
                    </p>
                    <a 
                      href="https://www.health.harvard.edu/blog/writing-about-emotions-may-ease-stress-and-trauma-201105112473" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 underline text-sm font-medium"
                    >
                      [Harvard Source]
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-blue-50">
          <div className="container mx-auto max-w-4xl text-center">
            <blockquote className="text-2xl lg:text-3xl font-medium text-slate-900 mb-8">
              "Journaling inside the app helped me express emotions I couldn't before. The prompts guide me to think deeper about my experiences."
            </blockquote>
            <cite className="text-lg text-slate-600">
              — Bhavik S., Delhi
            </cite>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-blue-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Start Your Journaling Practice Today
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join thousands who have discovered the transformative power of guided journaling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-semibold text-emerald-600 bg-white rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl"
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

export default Journaling;