import React, { useEffect } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import Footer from '../components/Footer';
import { Linkedin, ExternalLink } from 'lucide-react';

const Team = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Meet Our Team - Founders Building Mental Health Solutions | Tranquil AI";
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Meet the team of recent graduates working full-time to make mental wellness accessible and stigma-free through Tranquil AI.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    } else {
      metaDescription.setAttribute('content', 'Meet the team of recent graduates working full-time to make mental wellness accessible and stigma-free through Tranquil AI.');
    }
  }, []);
  const founders = [
    {
      name: "Shreyas Tiwary",
      role: "Co-founder & CFO",
      image: "/Pandit.jpg",
      linkedin: "https://www.linkedin.com/in/shreyastiwary/",
      bio: "Passionate about making mental health accessible through technology. Handles financial strategy and business operations.",
      expertise: ["Financial Strategy", "Business Operations", "Market Analysis"],
      education: "Recent Graduate"
    },
    {
      name: "Arihant Bharadwaj",
      role: "Co-founder & CEO",
      image: "/ari.png", // You can replace with actual image later
      linkedin: "https://www.linkedin.com/in/arihant-bharadwaj/",
      bio: "Visionary leader focused on scaling mental health solutions. Drives product vision and company strategy.",
      expertise: ["Product Strategy", "Leadership", "Mental Health Advocacy"],
      education: "Recent Graduate"
    },
    {
      name: "Ritwik Tripathi",
      role: "Co-founder & CTO",
      image: "/Ritwik.jpg",
      linkedin: "https://www.linkedin.com/in/ritwik-tripathi-740246225/",
      bio: "Technical architect behind Tranquil's AI systems. Ensures our technology remains cutting-edge and user-friendly.",
      expertise: ["AI Development", "System Architecture", "Machine Learning"],
      education: "Recent Graduate"
    },
    {
      name: "Ashutosh Kala",
      role: "Co-founder & COO",
      image: "/Kala.jpg",
      linkedin: "https://www.linkedin.com/in/kalaashutosh/",
      bio: "Operations expert ensuring smooth user experience and platform reliability. Focuses on growth and user satisfaction.",
      expertise: ["Operations Management", "User Experience", "Growth Strategy"],
      education: "Recent Graduate"
    }
  ];

  const teamValues = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in mental health technology."
    },
    {
      title: "Empathy",
      description: "Understanding and addressing the real needs of people struggling with mental health."
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we build and deliver."
    },
    {
      title: "Privacy",
      description: "Protecting user privacy and data is at the core of everything we do."
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
              Meet the Team Behind
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Tranquil AI
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Built by a group of recent graduates working full-time on Tranquil AI to make mental wellness accessible and stigma-free. We combine technical expertise with deep empathy to create solutions that truly make a difference.
            </p>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Our Founding Team
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Get to know the people working tirelessly to transform mental health care
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {founders.map((founder, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-200 to-emerald-200 shadow-lg">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2">
                      {founder.role}
                    </p>
                    <span className="text-sm text-slate-500 bg-white px-3 py-1 rounded-full">
                      {founder.education}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 mb-6 text-center">
                    {founder.bio}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3 text-center">Expertise</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {founder.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs bg-white text-slate-600 px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>Connect on LinkedIn</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Values Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                What Drives Us
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our shared values that shape how we work and what we build
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamValues.map((value, index) => (
                <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                    {value.title[0]}
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

        {/* Our Story Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  How We Started
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  As recent graduates, we witnessed firsthand the mental health challenges faced by young people in 
                  high-pressure environments. Traditional therapy was often inaccessible due to cost, 
                  stigma, or availability constraints.
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  We realized that AI could bridge this gap by providing immediate, private, and personalized 
                  mental health support. What started as a passion project has now grown into a platform 
                  trusted by thousands of users across India.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Our diverse backgrounds in technology, finance, and operations allow us to build not just a 
                  great product, but a sustainable business that can scale globally while maintaining our 
                  core values of privacy and empathy.
                </p>
                <a
                  href="/story"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  <span>Read Our Full Story</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <div className="relative flex justify-center">
                <div className="relative">
                  <img 
                    src="/T.png" 
                    alt="Tranquil AI team working together on mental wellness innovation"
                    className="mx-auto w-full max-w-[400px] h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We're always looking for passionate individuals who share our vision of making mental health 
              support accessible to everyone. Whether you're a developer, designer, or mental health 
              professional, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </a>
              <a
                href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-semibold text-white bg-white/20 border-2 border-white rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                Try Our App
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;