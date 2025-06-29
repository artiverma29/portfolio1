import React from 'react';
import { ExternalLink, Github, Bot, Code, Palette, Smartphone, Calculator, Music, ShoppingCart, Camera, Globe, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      title: 'AI-Powered Task Manager',
      description: 'A smart task management application that uses AI to prioritize tasks, suggest deadlines, and provide productivity insights.',
      tech: ['React', 'TypeScript', 'AI APIs', 'Tailwind CSS'],
      icon: Bot,
      color: 'from-blue-500 to-blue-600',
      features: ['Smart task prioritization', 'AI-generated insights', 'Productivity analytics', 'Natural language input']
    },
    {
      title: 'Responsive Portfolio Website',
      description: 'A modern, fully responsive portfolio website built with React and enhanced with AI-assisted development workflows.',
      tech: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
      icon: Code,
      color: 'from-indigo-500 to-indigo-600',
      features: ['Responsive design', 'Smooth animations', 'SEO optimized', 'Modern UI/UX']
    },
    {
      title: 'AI Color Palette Generator',
      description: 'An intelligent color palette generator that creates harmonious color schemes using AI and design principles.',
      tech: ['JavaScript', 'CSS3', 'AI APIs', 'Canvas API'],
      icon: Palette,
      color: 'from-cyan-500 to-cyan-600',
      features: ['AI color generation', 'Export to various formats', 'Accessibility testing', 'Brand color analysis']
    },
    {
      title: 'Mobile-First Web App',
      description: 'A progressive web application designed with mobile-first approach, featuring offline capabilities and push notifications.',
      tech: ['PWA', 'Service Workers', 'IndexedDB', 'Web APIs'],
      icon: Smartphone,
      color: 'from-teal-500 to-teal-600',
      features: ['Offline functionality', 'Push notifications', 'App-like experience', 'Cross-platform compatibility']
    },
    {
      title: 'Smart Calculator Pro',
      description: 'An advanced calculator with scientific functions, unit conversions, and AI-powered equation solving capabilities.',
      tech: ['React', 'JavaScript', 'Math.js', 'CSS Grid'],
      icon: Calculator,
      color: 'from-purple-500 to-purple-600',
      features: ['Scientific calculations', 'Unit conversions', 'History tracking', 'Voice input support']
    },
    {
      title: 'Music Streaming Interface',
      description: 'A beautiful music streaming app interface with playlist management, audio visualization, and personalized recommendations.',
      tech: ['React', 'Web Audio API', 'CSS Animations', 'Local Storage'],
      icon: Music,
      color: 'from-pink-500 to-pink-600',
      features: ['Audio visualization', 'Playlist management', 'Search functionality', 'Responsive player controls']
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive e-commerce admin dashboard with sales analytics, inventory management, and customer insights.',
      tech: ['React', 'Chart.js', 'REST APIs', 'Bootstrap'],
      icon: ShoppingCart,
      color: 'from-green-500 to-green-600',
      features: ['Sales analytics', 'Inventory tracking', 'Customer management', 'Order processing']
    },
    {
      title: 'Photo Gallery App',
      description: 'An elegant photo gallery application with image filters, album organization, and social sharing features.',
      tech: ['React', 'Canvas API', 'File API', 'CSS Filters'],
      icon: Camera,
      color: 'from-orange-500 to-orange-600',
      features: ['Image filters', 'Album organization', 'Drag & drop upload', 'Social sharing']
    },
    {
      title: 'Weather Forecast App',
      description: 'A comprehensive weather application with 7-day forecasts, interactive maps, and location-based alerts.',
      tech: ['React', 'Weather API', 'Geolocation', 'Chart.js'],
      icon: Globe,
      color: 'from-sky-500 to-sky-600',
      features: ['7-day forecast', 'Interactive maps', 'Location alerts', 'Weather history']
    },
    {
      title: 'Interactive Game Hub',
      description: 'A collection of browser-based games including puzzle games, memory challenges, and multiplayer options.',
      tech: ['JavaScript', 'Canvas API', 'WebSocket', 'CSS Animations'],
      icon: Gamepad2,
      color: 'from-red-500 to-red-600',
      features: ['Multiple game types', 'Multiplayer support', 'Score tracking', 'Achievement system']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-blue-600 dark:text-blue-400">
              Featured Projects
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
                >
                  {/* Project Header */}
                  <div className={`h-32 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon size={48} className="text-white/90" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-black dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-black dark:text-gray-400 flex items-center">
                            <div className="w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md border border-blue-200 dark:border-blue-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm rounded-lg transition-colors">
                        <ExternalLink size={16} />
                        Demo
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-blue-600 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 text-blue-600 dark:text-blue-400 hover:text-white dark:hover:text-white text-sm rounded-lg transition-colors">
                        <Github size={16} />
                        Code
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-700">
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">More Projects Coming Soon!</h3>
              <p className="text-black dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm constantly working on new projects that explore the intersection of web development and AI. 
                Each project is an opportunity to learn something new and push the boundaries of what's possible.
              </p>
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Let's Collaborate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;