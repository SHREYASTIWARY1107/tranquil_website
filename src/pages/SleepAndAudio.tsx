import React, { useEffect } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import Footer from '../components/Footer';
import { Moon, Music, Waves, Wind } from 'lucide-react';

const SleepAndAudio = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Sleep & Audio Therapy - Calming Sounds & Meditation | Tranquil AI";
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Improve your sleep with guided audio therapy, nature sounds, meditation, and breathing exercises backed by sleep research.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    } else {
      metaDescription.setAttribute('content', 'Improve your sleep with guided audio therapy, nature sounds, meditation, and breathing exercises backed by sleep research.');
    }
  }, []);
  const benefits = [
    {
      icon: <Moon className="w-8 h-8 text-blue-600" />,
      title: "Better Sleep Quality",
      description: "Calming sounds and guided meditations help you fall asleep faster and enjoy deeper rest."
    },
    {
      icon: <Music className="w-8 h-8 text-emerald-600" />,
      title: "Curated Audio Library",
      description: "Access to professionally crafted sleep stories, nature sounds, and meditation tracks."
    },
    {
      icon: <Waves className="w-8 h-8 text-blue-600" />,
      title: "Stress Reduction",
      description: "Guided breathing exercises and relaxation techniques to reduce daily stress and anxiety."
    },
    {
      icon: <Wind className="w-8 h-8 text-emerald-600" />,
      title: "Breathing Exercises",
      description: "Learn proven breathing techniques that calm your nervous system and promote relaxation."
    }
  ];

  const audioTypes = [
    {
      title: "Sleep Stories",
      description: "Carefully crafted narratives designed to guide you into peaceful sleep.",
      image: "/sleep-music-mockup.png",
      features: ["Soothing voices", "Relaxing narratives", "Various lengths"]
    },
    {
      title: "Nature Sounds",
      description: "High-quality recordings of natural environments for deep relaxation.",
      image: "/meditation-mockup.png",
      features: ["Rain & thunderstorms", "Ocean waves", "Forest sounds"]
    },
    {
      title: "Guided Meditations",
      description: "Expert-led meditation sessions for better sleep and stress relief.",
      image: "/meditation-mockup.png",
      features: ["Body scan meditations", "Breathing exercises", "Mindfulness practices"]
    }
  ];

  const breathingExercises = [
    {
      name: "4-7-8 Technique",
      description: "Inhale for 4, hold for 7, exhale for 8. Perfect for falling asleep quickly.",
      duration: "5-10 minutes"
    },
    {
      name: "Box Breathing",
      description: "Equal counts of inhale, hold, exhale, hold. Great for stress relief.",
      duration: "3-15 minutes"
    },
    {
      name: "Progressive Relaxation",
      description: "Systematic muscle relaxation combined with deep breathing.",
      duration: "10-20 minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-x-hidden">
      <NavigationHeader />
      
      <main className="pt-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                  Sleep Better with
                  <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Audio Therapy
                  </span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Transform your nights with our collection of calming music, sleep stories, breathing exercises, and meditation audios designed for deep, restorative sleep.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                  >
                    Sleep Better Tonight - iOS
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.trnql.tranquil&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 text-lg font-semibold text-indigo-600 bg-indigo-50 border-2 border-indigo-200 rounded-xl hover:bg-indigo-100 transition-all duration-300 text-center"
                  >
                    Sleep Better Tonight - Android
                  </a>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="relative">
                  <img 
                    src="/sleep-music-mockup.png" 
                    alt="Tranquil AI sleep and audio therapy interface with meditation options"
                    className="mx-auto w-full max-w-[360px] h-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audio Types Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Your Personal Sleep Library
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose from a variety of audio experiences designed to help you unwind and sleep better
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {audioTypes.map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-6">
                    <img 
                      src={type.image} 
                      alt={`Tranquil AI ${type.title.toLowerCase()} feature interface`}
                      className="mx-auto w-full max-w-[280px] h-auto rounded-xl shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Breathing Exercises Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Guided Breathing Exercises
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Learn proven breathing techniques that activate your body's relaxation response
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {breathingExercises.map((exercise, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wind className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {exercise.name}
                    </h3>
                    <span className="text-indigo-600 font-medium text-sm">
                      {exercise.duration}
                    </span>
                  </div>
                  <p className="text-slate-600 text-center">
                    {exercise.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                The Science of Sound Sleep
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Discover how audio therapy can transform your sleep quality and overall well-being
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 hover:shadow-lg transition-shadow">
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
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Your Nightly Routine Made Simple
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Create the perfect bedtime routine with our guided audio experiences
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Choose Your Audio
                </h3>
                <p className="text-slate-600">
                  Select from sleep stories, nature sounds, or guided meditations based on your mood.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Get Comfortable
                </h3>
                <p className="text-slate-600">
                  Set your sleep timer, adjust the volume, and settle into your comfortable sleeping position.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Drift Into Sleep
                </h3>
                <p className="text-slate-600">
                  Let our carefully crafted audio guide you into deep, restorative sleep naturally.
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
                The Science of Sleep & Audio Therapy
              </h2>
              <p className="text-xl text-slate-600">
                Research-backed benefits of guided audio for sleep and relaxation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Why This Matters</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Quality sleep is fundamental to mental health, cognitive function, and emotional regulation. 
                  Audio therapy, including guided meditation, nature sounds, and breathing exercises, has been 
                  scientifically proven to improve sleep quality and reduce stress-related sleep disorders.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Sound-based interventions work by activating the parasympathetic nervous system, which promotes 
                  relaxation and prepares the body for restorative sleep. This is particularly effective for 
                  individuals with anxiety-related insomnia or stress-induced sleep disturbances.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Scientific Evidence</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
                    <p className="text-slate-700 mb-2">
                      <strong>Sleep Medicine Reviews:</strong> Audio-based sleep interventions significantly 
                      improve sleep quality and reduce time to fall asleep in clinical studies.
                    </p>
                    <a 
                      href="https://www.sciencedirect.com/science/article/abs/pii/S1087079217301278" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-700 underline text-sm font-medium"
                    >
                      [Sleep Research]
                    </a>
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
                    <p className="text-slate-700 mb-2">
                      <strong>Nature Sounds Study:</strong> Natural ambient sounds reduce cortisol levels 
                      and promote deeper sleep stages compared to silence or urban noise.
                    </p>
                    <a 
                      href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5486569/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-700 underline text-sm font-medium"
                    >
                      [Nature Therapy]
                    </a>
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
                    <p className="text-slate-700 mb-2">
                      <strong>Mindfulness Research:</strong> Guided meditation and breathing exercises 
                      effectively treat insomnia and improve overall sleep satisfaction.
                    </p>
                    <a 
                      href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2110998" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-700 underline text-sm font-medium"
                    >
                      [JAMA Study]
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="container mx-auto max-w-4xl text-center">
            <blockquote className="text-2xl lg:text-3xl font-medium text-slate-900 mb-8">
              "Sleep sounds and breathing sessions are lifesavers. I fall asleep so much faster now and wake up feeling more refreshed."
            </blockquote>
            <cite className="text-lg text-slate-600">
              — Diya K., Pune
            </cite>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Transform Your Sleep Tonight
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join thousands who have improved their sleep quality with our audio therapy collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-semibold text-indigo-600 bg-white rounded-xl hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl"
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

export default SleepAndAudio;