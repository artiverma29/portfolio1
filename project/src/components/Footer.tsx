import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-black dark:text-white mb-4">
            <span>Built with</span>
            <Heart size={16} className="text-blue-600 dark:text-blue-400 fill-current" />
            <span>and</span>
            <Code size={16} className="text-blue-600 dark:text-blue-400" />
            <span>by Arti Verma</span>
          </div>
          
          <div className="flex items-center justify-center gap-4 text-sm text-gray-700 dark:text-gray-300">
            <span>© {currentYear} Arti Verma</span>
            <span>•</span>
            <span>Powered by React & AI</span>
            <span>•</span>
            <span>Always Learning</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;