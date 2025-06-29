import React from 'react';
import { Code2, Database, Globe, Bot, Zap, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: ['HTML5 & CSS3', 'JavaScript/TypeScript', 'React', 'Tailwind CSS', 'Responsive Design'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Backend & Tools',
      icon: Database,
      skills: ['Node.js', 'Git & GitHub', 'API Integration', 'Database Basics', 'Deployment'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'AI & Automation',
      icon: Bot,
      skills: ['AI-Assisted Coding', 'Prompt Engineering', 'ChatGPT/Claude', 'Code Generation', 'AI Workflows'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Design & UX',
      icon: Palette,
      skills: ['UI/UX Principles', 'Color Theory', 'Typography', 'User Research', 'Prototyping'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50/50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-blue-600 dark:text-blue-400">
              Skills & Expertise
            </span>
          </h2>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-black dark:text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Learning Philosophy */}
          <div className="text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-blue-200 dark:border-blue-700">
              <Zap className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Continuous Learning Journey</h3>
              <p className="text-black dark:text-gray-300 max-w-2xl mx-auto">
                As a college student in the rapidly evolving world of technology and AI, I believe that the ability to learn and adapt 
                is the most valuable skill. I'm constantly exploring new technologies, experimenting with AI tools, 
                and pushing myself to grow as both a developer and an AI practitioner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;