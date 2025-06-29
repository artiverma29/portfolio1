import React from 'react';
import { Code, Brain, Rocket, Users, MapPin, Calendar, Music, Camera, Book, Coffee, Search, Grid3X3, GraduationCap, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Crafting responsive, modern web applications with clean, efficient code',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Leveraging artificial intelligence to create smarter, more intuitive user experiences',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Always exploring new technologies and pushing the boundaries of what\'s possible',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with AI tools and human teams to deliver exceptional results',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const hobbies = [
    {
      icon: Search,
      name: 'Internet Research',
      description: 'Skilled at finding information and diving deep into topics online',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Grid3X3,
      name: 'Sudoku',
      description: 'Number puzzles that sharpen logical thinking and problem-solving',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Book,
      name: 'Reading',
      description: 'Tech blogs, sci-fi novels, and personal development books',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Music,
      name: 'Music',
      description: 'Listening to various genres and discovering new artists',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Coffee,
      name: 'Coffee',
      description: 'Exploring different brewing methods and coffee cultures',
      color: 'from-amber-500 to-amber-600'
    }
  ];

  // Individual heart components
  const RedHeart = ({ size = 24 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="animate-pulse"
    >
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        fill="#EF4444"
        stroke="#EF4444"
        strokeWidth="1"
      />
    </svg>
  );

  const YellowHeart = ({ size = 24 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="animate-pulse"
      style={{ animationDelay: '0.2s' }}
    >
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        fill="#EAB308"
        stroke="#EAB308"
        strokeWidth="1"
      />
    </svg>
  );

  const BlueHeart = ({ size = 24 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="animate-pulse"
      style={{ animationDelay: '0.4s' }}
    >
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        fill="#3B82F6"
        stroke="#3B82F6"
        strokeWidth="1"
      />
    </svg>
  );

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-blue-600 dark:text-blue-400">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
                Student Developer on a Mission
              </h3>
              
              {/* Personal Info */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                  <Calendar size={16} className="text-blue-600 dark:text-blue-400" />
                  <span className="text-black dark:text-white text-sm font-medium">20 years old</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                  <MapPin size={16} className="text-blue-600 dark:text-blue-400" />
                  <span className="text-black dark:text-white text-sm font-medium">Daman, India</span>
                </div>
              </div>

              <p className="text-black dark:text-gray-300 leading-relaxed">
                As a 20-year-old, 2nd year college student from Daman, I've discovered the incredible 
                power of combining traditional web development skills with artificial intelligence. My journey 
                started with curiosity about how websites work, and quickly evolved into a fascination with 
                how AI can enhance and accelerate the development process.
              </p>
              <p className="text-black dark:text-gray-300 leading-relaxed">
                I believe that the future of web development lies in the seamless integration of human 
                creativity and AI capabilities. By leveraging AI tools effectively, I can prototype faster, 
                debug smarter, and create more sophisticated applications than ever before.
              </p>
              <p className="text-black dark:text-gray-300 leading-relaxed">
                Every project I work on is an opportunity to learn something new and push the boundaries 
                of what's possible when you combine passion, persistence, and the right AI assistance.
              </p>
            </div>

            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg flex items-center justify-center border border-blue-200 dark:border-blue-700">
                <div className="text-center">
                  <Code size={64} className="text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <p className="text-black dark:text-white text-sm font-medium">Student + AI = ∞ Possibilities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Journey Highlight */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 mb-16 text-white">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center gap-4 mb-4">
                <GraduationCap size={40} className="text-yellow-300" />
                <Lightbulb size={40} className="text-yellow-300 animate-pulse" />
                <TrendingUp size={40} className="text-yellow-300" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">🚀 Always Learning & Exploring</h3>
              <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed">
                I'm on an exciting journey of continuous discovery in the ever-evolving world of technology. 
                Every day brings new frameworks, tools, and possibilities to explore!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <GraduationCap size={32} className="text-yellow-300 mb-3" />
                <h4 className="text-lg font-semibold mb-2">Currently Learning</h4>
                <p className="text-blue-100 text-sm">
                  Diving deep into advanced React patterns, exploring new AI tools, and mastering modern web development practices
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Lightbulb size={32} className="text-yellow-300 mb-3" />
                <h4 className="text-lg font-semibold mb-2">Exploring Next</h4>
                <p className="text-blue-100 text-sm">
                  Backend technologies, cloud platforms, mobile development, and the latest in AI/ML integration
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <TrendingUp size={32} className="text-yellow-300 mb-3" />
                <h4 className="text-lg font-semibold mb-2">Growth Mindset</h4>
                <p className="text-blue-100 text-sm">
                  Embracing challenges, learning from failures, and staying curious about emerging technologies
                </p>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-blue-100 font-medium">
                💡 "The best time to plant a tree was 20 years ago. The second best time is now." - Learning never stops!
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-200"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-black dark:text-white mb-2">{highlight.title}</h4>
                  <p className="text-black dark:text-gray-300 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>

          {/* Hobbies Section */}
          <div className="bg-blue-50/50 dark:bg-gray-900/50 rounded-xl p-8 border border-blue-200 dark:border-blue-700">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center gap-2 mb-4">
                <RedHeart size={28} />
                <YellowHeart size={28} />
                <BlueHeart size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">When I'm Not Coding</h3>
              <p className="text-black dark:text-gray-300">
                Life is about balance! Here are some things I love doing in my free time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby, index) => {
                const Icon = hobby.icon;
                const content = (
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 hover:transform hover:scale-105 transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 h-full">
                    <div className={`w-10 h-10 bg-gradient-to-r ${hobby.color} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-black dark:text-white mb-2">{hobby.name}</h4>
                    <p className="text-black dark:text-gray-300 text-sm mb-2">{hobby.description}</p>
                    {hobby.link && (
                      <p className="text-blue-600 dark:text-blue-400 text-xs font-medium">
                        {hobby.linkText}
                      </p>
                    )}
                  </div>
                );

                return (
                  <div key={index}>
                    {hobby.link ? (
                      <a
                        href={hobby.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block cursor-pointer"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;