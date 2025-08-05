import React, { useEffect } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import Footer from '../components/Footer';
import { Award, Users, Calendar, Target } from 'lucide-react';

const Story = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Our Story - From Recognition to Mental Health Innovation | Tranquil AI";
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Learn how Tranquil AI grew from a small idea to recognition by ThingQbator and NASSCOM, with a ₹5 lakh grant for mental health innovation.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    } else {
      metaDescription.setAttribute('content', 'Learn how Tranquil AI grew from a small idea to recognition by ThingQbator and NASSCOM, with a ₹5 lakh grant for mental health innovation.');
    }
  }, []);
  const milestones = [
    {
      year: "2024",
      title: "Founded by Recent Graduates",
      description: "Four passionate recent graduates came together with a vision to democratize mental health care through AI technology.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      image: "/achievements/recentgrads.jpeg",
      stats: "4 Co-founders Full-Time"
    },
    {
      year: "2024",
      title: "ThingQbator Recognition & Grant",
      description: "Recognized among India's top student-led startups by ThingQbator, a NASSCOM program powered by Cisco. Awarded a grant of ₹5 lakhs for innovation in mental wellness.",
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      image: "/achievements/thingqbator.png",
      stats: "₹5 Lakh Grant Awarded"
    },
    {
      year: "2024",
      title: "First 1000 Users",
      description: "Reached our first milestone of 1,000 active users who found value in our AI-powered mental wellness platform.",
      icon: <Target className="w-8 h-8 text-emerald-600" />,
      image: "/achievements/first1000.jpeg",
      stats: "1,000+ Happy Users"
    },
    {
      year: "2025",
      title: "Premium Launch Coming Soon",
      description: "Preparing to launch our premium version with exclusive audio experiences and advanced personalization tools.",
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      image: "/achievements/image.png",
      stats: "Next Week"
    }
  ];

  const achievements = [
    {
      number: "1,000+",
      label: "Active Users",
      description: "People trust Tranquil for their daily mental wellness"
    },
    {
      number: "12,000+",
      label: "Therapy Sessions",
      description: "AI-powered conversations that provided support"
    },
    {
      number: "1,000+",
      label: "Journal Entries",
      description: "Personal reflections and growth documented"
    },
    {
      number: "100%",
      label: "Privacy Focused",
      description: "Complete security and confidentiality guaranteed"
    }
  ];

  const values = [
    {
      title: "Accessibility",
      description: "Making mental health support available to everyone, everywhere, at any time.",
      icon: "🌍"
    },
    {
      title: "Privacy First",
      description: "Your mental health journey is deeply personal. We ensure complete privacy and security.",
      icon: "🔒"
    },
    {
      title: "Evidence-Based",
      description: "Our AI is built on proven therapeutic approaches like CBT and mindfulness practices.",
      icon: "🧠"
    },
    {
      title: "Empathy",
      description: "Technology with a human touch - understanding and supporting your emotional needs.",
      icon: "❤️"
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
              Our Journey to
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Transform Mental Health
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Built by a group of recent graduates working full-time on Tranquil AI to make mental wellness accessible and stigma-free. From a small idea to industry recognition, our mission has always been to make mental health support accessible, private, and effective for everyone.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-slate-900 mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-slate-600">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Our Milestones
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Key moments that shaped Tranquil AI's journey toward making mental health support accessible to all
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-emerald-200 rounded-full hidden lg:block"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}>
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} mb-8 lg:mb-0`}>
                      <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center lg:justify-start mb-4">
                          {milestone.icon}
                          <span className="ml-3 text-2xl font-bold text-slate-900">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-slate-600 mb-4">
                          {milestone.description}
                        </p>
                        <div className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                          {milestone.stats}
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full hidden lg:block"></div>
                    
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                      <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg">
                        <img 
                          src={milestone.image} 
                          alt={milestone.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The principles that guide everything we do at Tranquil AI
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Industry Recognition
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Trusted and recognized by leading organizations in the tech and healthcare industry
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  ThingQbator Recognition
                </h3>
                <p className="text-slate-600">
                  Recognized among India's top student-led startups by ThingQbator, a NASSCOM program powered by Cisco.
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  ₹5 Lakh Grant
                </h3>
                <p className="text-slate-600">
                  Awarded a grant of ₹5 lakhs for innovation in mental wellness technology and social impact.
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Full-Time Commitment
                </h3>
                <p className="text-slate-600">
                  Built by recent graduates working full-time with dedication to making mental health support accessible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our Vision for the Future
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We envision a world where mental health support is as accessible as checking the weather. 
              Our goal is to reach millions of people globally, providing them with personalized, 
              private, and effective mental wellness tools powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Join Our Journey - iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.trnql.tranquil&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-semibold text-white bg-white/20 border-2 border-white rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                Join Our Journey - Android
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Story;