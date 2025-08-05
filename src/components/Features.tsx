import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Brain,
  Moon,
  Pen,
  Target,
  Calendar,
  Sparkles,
  Users,
  ArrowRight,
  CheckCircle,
  X
} from 'lucide-react';
import AITherapistSection from './AITherapistSection';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    title: 'Mood Logging with AI Insights',
    description:
      'Advanced mood tracking with AI-powered pattern recognition that learns from your emotional data to provide predictive insights and personalized recommendations.',
    icon: <Brain className="w-7 h-7 text-cyan-600" />,
    color: 'from-cyan-500/10 to-blue-500/10',
    borderColor: 'border-cyan-200/50',
    hoverColor: 'hover:border-cyan-300',
    benefits: ['Pattern Recognition', 'Predictive Analytics', 'Trend Visualization']
  },
  {
    title: 'Sleep Therapy & Meditation',
    description:
      'Curated library of sleep stories, binaural beats, and guided meditations with adaptive content that evolves based on your preferences and sleep quality.',
    icon: <Moon className="w-7 h-7 text-indigo-600" />,
    color: 'from-indigo-500/10 to-purple-500/10',
    borderColor: 'border-indigo-200/50',
    hoverColor: 'hover:border-indigo-300',
    benefits: ['Sleep Stories', 'Binaural Beats', 'Progress Tracking']
  },
  {
    title: 'Journaling Suite',
    description:
      'Multi-format journaling platform with AI-powered prompts, sentiment analysis, and automated insights to deepen self-reflection and emotional awareness.',
    icon: <Pen className="w-7 h-7 text-emerald-600" />,
    color: 'from-emerald-500/10 to-teal-500/10',
    borderColor: 'border-emerald-200/50',
    hoverColor: 'hover:border-emerald-300',
    benefits: ['AI Prompts', 'Sentiment Analysis', 'Export Options']
  },
  {
    title: 'Goal-Setting & Scheduling',
    description:
      'Intelligent goal management system with habit tracking, milestone celebrations, and adaptive scheduling that learns from your lifestyle patterns.',
    icon: <Target className="w-7 h-7 text-orange-600" />,
    color: 'from-orange-500/10 to-red-500/10',
    borderColor: 'border-orange-200/50',
    hoverColor: 'hover:border-orange-300',
    benefits: ['Habit Tracking', 'Smart Reminders', 'Progress Analytics']
  },
  {
    title: 'Real Therapist Integration',
    description:
      'Seamless connection to licensed mental health professionals with secure messaging, appointment scheduling, and integrated session notes.',
    icon: <Calendar className="w-7 h-7 text-purple-600" />,
    color: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'border-purple-200/50',
    hoverColor: 'hover:border-purple-300',
    benefits: ['Licensed Professionals', 'Secure Messaging', 'Session Integration']
  },
  {
    title: 'Personalized Wellness Plans',
    description:
      'Dynamic wellness strategies powered by machine learning that adapt to your progress, preferences, and life circumstances in real-time.',
    icon: <Sparkles className="w-7 h-7 text-pink-600" />,
    color: 'from-pink-500/10 to-rose-500/10',
    borderColor: 'border-pink-200/50',
    hoverColor: 'hover:border-pink-300',
    benefits: ['ML-Powered', 'Real-time Adaptation', 'Custom Strategies']
  }
];

const moodImages = [
  {
    src: "/mood-happy.png",
    alt: "Happy Mood"
  },
  {
    src: "/mood-neutral.png",
    alt: "Neutral Mood"
  },
  {
    src: "/mood-sad.png",
    alt: "Sad Mood"
  }
];

const sleepMeditationSlides = [
  {
    src: "/sleep-music-mockup.png",
    alt: "Sleep Therapy Screenshot",
    title: "Sleep Therapy",
    subtitle: "Personalized Sleep Soundscapes",
    text: "Unwind each night with soothing, science-backed soundscapes and gentle sleep stories. Our sleep therapy adapts to your needs, helping you fall asleep faster and wake up refreshed. Discover a new level of restfulness and let your mind drift into tranquility.",
    bullets: [
      "Curated sleep sounds for every mood",
      "Track your sleep patterns and progress",
      "Wake up feeling truly restored"
    ],
    border: "border-indigo-100"
  },
  {
    src: "/meditation-mockup.png",
    alt: "Meditation Screenshot",
    title: "Meditation Studio",
    subtitle: "Guided Mindfulness & Focus",
    text: "Recharge your mind and body with guided meditations designed for relaxation, focus, and emotional balance. Whether you're a beginner or a seasoned meditator, our sessions help you find calm, clarity, and inner peace—anytime, anywhere.",
    bullets: [
      "Guided sessions for stress relief and focus",
      "Breathing exercises and mindfulness tools",
      "Personalized routines for your lifestyle"
    ],
    border: "border-cyan-100"
  }
];

const journalingSlides = [
  {
    src: "/journaling-1.png",
    alt: "Gratitude Journaling Screenshot",
    title: "Gratitude Journaling",
    subtitle: "Reflect & Appreciate Daily",
    text: "Express your gratitude and reflect on positive moments each day. Our journaling suite helps you build a habit of thankfulness, boost your mood, and foster a positive mindset—one entry at a time.",
    bullets: [
      "Simple daily gratitude prompts",
      "Track your positive moments",
      "Build a lasting habit of appreciation"
    ],
    border: "border-emerald-100"
  },
  {
    src: "/journaling-2.png",
    alt: "Prompt Journaling Screenshot",
    title: "Prompt Journaling",
    subtitle: "Reflect & Appreciate Daily",
    text: "Express your gratitude and reflect on positive moments each day. Our journaling suite helps you build a habit of thankfulness, boost your mood, and foster a positive mindset—one entry at a time.",
    bullets: [
      "Simple daily gratitude prompts",
      "Track your positive moments",
      "Build a lasting habit of appreciation"
    ],
    border: "border-cyan-100"
  },
  {
    src: "/journaling-3.png",
    alt: "Journaling UI Screenshot",
    title: "Journaling UI",
    subtitle: "Reflect & Appreciate Daily",
    text: "Express your gratitude and reflect on positive moments each day. Our journaling suite helps you build a habit of thankfulness, boost your mood, and foster a positive mindset—one entry at a time.",
    bullets: [
      "Simple daily gratitude prompts",
      "Track your positive moments",
      "Build a lasting habit of appreciation"
    ],
    border: "border-blue-100"
  }
];

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

const FeatureCard = ({ feature, index, setOpenModalIndex }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  // Custom handler for first three features
  const handleLearnMore = () => {
    if (index < 3) {
      setOpenModalIndex(index);
    }
  };

  return (
    <motion.div
      className={`group relative bg-gradient-to-br ${feature.color} backdrop-blur-sm 
                  border ${feature.borderColor} ${feature.hoverColor}
                  rounded-3xl p-5 sm:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl
                  transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} overflow-hidden min-h-[400px] sm:min-h-[480px] flex flex-col justify-between`}
      style={{ transitionDelay: `${index * 50}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Ripple effect */}
      <span className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-active:opacity-100 transition-opacity duration-300" />
      {/* Floating background elements */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700`} />
        <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full opacity-15 group-hover:scale-125 transition-transform duration-700 delay-100`} />
      </div>
      {/* Coming Soon Badge for features 3, 4, 5 */}
      {index >= 3 && (
        <div className="absolute top-4 right-4 z-20">
          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200/50 shadow-sm">
            <span className="text-xs font-medium text-amber-700">Coming Soon</span>
          </div>
        </div>
      )}
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 justify-between">
        {/* Icon with animated background */}
        <div className="relative mb-6">
          <motion.div
            className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300 ${isHovered ? 'rotate-6 scale-110' : ''}`}
            animate={isHovered ? { scale: 1.15, rotate: 8 } : { scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {feature.icon}
          </motion.div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent group-hover:from-white/60 transition-all duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
          {feature.description}
        </p>

        {/* Benefits */}
        <div className="space-y-2 mb-6">
          {feature.benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className={`flex items-center text-xs text-slate-500 transform transition-all duration-300 delay-${idx * 100}`}
              style={{ 
                transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                transitionDelay: `${idx * 50}ms`
              }}
            >
              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        {index < 3 && (
          <button
            className={`group/btn flex items-center text-sm font-medium text-slate-600 hover:text-slate-800 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}
            onClick={handleLearnMore}
            type="button"
          >
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>
        )}
      </div>
    </motion.div>
  );
};

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const [moodImageIndex, setMoodImageIndex] = useState(0);
  const [sleepMeditationIndex, setSleepMeditationIndex] = useState(0);
  const [journalingIndex, setJournalingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Reset mood image index when modal closes/opens
  useEffect(() => {
    if (openModalIndex !== 0) setMoodImageIndex(0);
    if (openModalIndex !== 1) setSleepMeditationIndex(0);
    if (openModalIndex !== 2) setJournalingIndex(0);
  }, [openModalIndex]);

  // Modal content for the first three features
  const featureModals = [0, 1, 2].map(idx => (
    openModalIndex === idx && (
      <div key={idx} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-fadeInMessage flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-10">
          {/* Cross button at top right */}
          <button
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 z-30 bg-white rounded-full p-1 shadow-sm"
            onClick={() => setOpenModalIndex(null)}
            aria-label="Close"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
          {/* Left: Images or Hero */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center gap-4 w-full md:w-1/2 mt-8 md:mt-0">
            {idx === 0 && (
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full flex items-center justify-center">
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full shadow p-2 hover:bg-blue-100 transition disabled:opacity-30 z-10"
                    onClick={() => setMoodImageIndex((moodImageIndex + moodImages.length - 1) % moodImages.length)}
                    disabled={moodImageIndex === 0}
                    aria-label="Previous mood image"
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-500"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>
                  <img
                    src={moodImages[moodImageIndex].src}
                    alt={moodImages[moodImageIndex].alt}
                    className="rounded-2xl object-cover border border-blue-100 transition-all duration-300 w-full max-w-[280px] h-auto max-h-[400px] md:max-h-[540px]"
                    style={{ aspectRatio: '9/19', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)' }}
                  />
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full shadow p-2 hover:bg-blue-100 transition disabled:opacity-30 z-10"
                    onClick={() => setMoodImageIndex((moodImageIndex + 1) % moodImages.length)}
                    disabled={moodImageIndex === moodImages.length - 1}
                    aria-label="Next mood image"
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-500"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                </div>
                {/* Dots */}
                <div className="flex justify-center mt-4 gap-2">
                  {moodImages.map((img, i) => (
                    <button
                      key={i}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${i === moodImageIndex ? 'bg-blue-500' : 'bg-blue-200'}`}
                      onClick={() => setMoodImageIndex(i)}
                      aria-label={`Go to mood image ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
            {idx === 1 && (
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full flex items-center justify-center">
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full shadow p-2 hover:bg-indigo-100 transition disabled:opacity-30 z-10"
                    onClick={() => setSleepMeditationIndex((sleepMeditationIndex + sleepMeditationSlides.length - 1) % sleepMeditationSlides.length)}
                    disabled={sleepMeditationIndex === 0}
                    aria-label="Previous slide"
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-indigo-500"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>
                  <img
                    src={sleepMeditationSlides[sleepMeditationIndex].src}
                    alt={sleepMeditationSlides[sleepMeditationIndex].alt}
                    className={`rounded-2xl object-cover border transition-all duration-300 w-full max-w-[280px] h-auto max-h-[400px] md:max-h-[540px] ${sleepMeditationSlides[sleepMeditationIndex].border}`}
                    style={{ aspectRatio: '9/19', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)' }}
                  />
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full shadow p-2 hover:bg-indigo-100 transition disabled:opacity-30 z-10"
                    onClick={() => setSleepMeditationIndex((sleepMeditationIndex + 1) % sleepMeditationSlides.length)}
                    disabled={sleepMeditationIndex === sleepMeditationSlides.length - 1}
                    aria-label="Next slide"
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-indigo-500"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                </div>
                {/* Dots */}
                <div className="flex justify-center mt-4 gap-2">
                  {sleepMeditationSlides.map((slide, i) => (
                    <button
                      key={i}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${i === sleepMeditationIndex ? 'bg-indigo-500' : 'bg-indigo-200'}`}
                      onClick={() => setSleepMeditationIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
            {idx === 2 && (
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full flex items-center justify-center">
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full shadow p-2 hover:bg-emerald-100 transition disabled:opacity-30 z-10"
                    onClick={() => setJournalingIndex((journalingIndex + journalingSlides.length - 1) % journalingSlides.length)}
                    disabled={journalingIndex === 0}
                    aria-label="Previous slide"
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-500"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>
                  <img
                    src={journalingSlides[journalingIndex].src}
                    alt={journalingSlides[journalingIndex].alt}
                    className={`rounded-2xl object-cover border transition-all duration-300 w-full max-w-[280px] h-auto max-h-[400px] md:max-h-[540px] ${journalingSlides[journalingIndex].border}`}
                    style={{ aspectRatio: '9/19', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)' }}
                  />
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full shadow p-2 hover:bg-emerald-100 transition disabled:opacity-30 z-10"
                    onClick={() => setJournalingIndex((journalingIndex + 1) % journalingSlides.length)}
                    disabled={journalingIndex === journalingSlides.length - 1}
                    aria-label="Next slide"
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-500"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                </div>
                {/* Dots */}
                <div className="flex justify-center mt-4 gap-2">
                  {journalingSlides.map((slide, i) => (
                    <button
                      key={i}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${i === journalingIndex ? 'bg-emerald-500' : 'bg-emerald-200'}`}
                      onClick={() => setJournalingIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Right: Text Content */}
          <div className="flex-1 flex flex-col justify-center mt-6 md:mt-0">
            {idx === 0 && (
              <>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
                    {features[idx].icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">Unlock Your Emotional Patterns</h3>
                    <p className="text-xs md:text-sm text-slate-600">Visualize your mood journey and grow every day</p>
                  </div>
                </div>
                <p className="text-sm md:text-lg text-slate-700 mb-4 leading-relaxed">
                  Discover how your moods evolve over time with our beautiful, AI-powered mood logging. Visualize your emotional journey, spot trends, and gain insights that help you grow. Our intuitive interface and smart analytics make it easy to understand yourself better—every day.
                </p>
                <ul className="list-disc pl-4 md:pl-6 text-slate-600 mb-4 text-sm md:text-base space-y-1">
                  <li>Track your feelings with a tap</li>
                  <li>See your mood history at a glance</li>
                  <li>Get personalized insights and gentle nudges for self-care</li>
                </ul>
              </>
            )}
            {idx === 1 && (
              <>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                    {features[idx].icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">{sleepMeditationSlides[sleepMeditationIndex].title}</h3>
                    <p className="text-xs md:text-sm text-slate-600">{sleepMeditationSlides[sleepMeditationIndex].subtitle}</p>
                  </div>
                </div>
                <p className="text-sm md:text-lg text-slate-700 mb-4 leading-relaxed">
                  {sleepMeditationSlides[sleepMeditationIndex].text}
                </p>
                <ul className="list-disc pl-4 md:pl-6 text-slate-600 mb-4 text-sm md:text-base space-y-1">
                  {sleepMeditationSlides[sleepMeditationIndex].bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </>
            )}
            {idx === 2 && (
              <>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center">
                    {features[idx].icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">{journalingSlides[journalingIndex].title}</h3>
                    <p className="text-xs md:text-sm text-slate-600">{journalingSlides[journalingIndex].subtitle}</p>
                  </div>
                </div>
                <p className="text-sm md:text-lg text-slate-700 mb-4 leading-relaxed">
                  {journalingSlides[journalingIndex].text}
                </p>
                <ul className="list-disc pl-4 md:pl-6 text-slate-600 mb-4 text-sm md:text-base space-y-1">
                  {journalingSlides[journalingIndex].bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    )
  ));

  return (
    <motion.section
      id="features"
      className="relative py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-cyan-100/40 to-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-purple-100/40 to-pink-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </motion.div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* AI Companion Section */}
        <motion.div className="mb-10 sm:mb-20" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <AITherapistSection />
        </motion.div>
        {/* Feature Introduction */}
        <motion.div className="text-center mb-10 sm:mb-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Wellness Platform
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
            Features That Transform Your
            <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Mental Wellness Journey
            </span>
          </h2>
          <p className="text-base sm:text-xl text-slate-600 max-w-xl sm:max-w-3xl mx-auto leading-relaxed">
            Experience a comprehensive suite of AI-powered tools designed to support, 
            enhance, and accelerate your path to better mental health and wellbeing.
          </p>
        </motion.div>
        {/* Feature Cards Grid */}
        <motion.div
          className="grid gap-6 sm:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ minWidth: 0 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              style={{ minWidth: 0 }}
            >
              <FeatureCard feature={feature} index={index} setOpenModalIndex={setOpenModalIndex} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* AnimatePresence for modals */}
      <AnimatePresence>
        {featureModals}
      </AnimatePresence>
    </motion.section>
  );
};

export default Features;