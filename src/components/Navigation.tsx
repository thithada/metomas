// src/components/Navigation.tsx
'use client'

import React from 'react';

interface NavigationProps {
  isNavVisible: boolean;
  scrollToTop: () => void;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  isNavVisible, 
  scrollToTop, 
  scrollToSection 
}) => {
  return (
    <nav className={`fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Left - Brand */}
          <button 
            onClick={scrollToTop}
            className="text-4xl font-bold relative group"
          >
            <span className="text-gray-900 group-hover:text-red-500 transition-colors">Me</span>
            <span className="text-red-500 group-hover:text-gray-900 transition-colors">Tomas</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
          
          {/* Center - Main Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="relative text-lg text-gray-800 hover:text-red-500 transition-colors font-medium group py-2"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("interests")}
              className="relative text-lg text-gray-800 hover:text-red-500 transition-colors font-medium group py-2"
            >
              Interests
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="relative text-lg text-gray-800 hover:text-red-500 transition-colors font-medium group py-2"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="relative text-lg text-gray-800 hover:text-red-500 transition-colors font-medium group py-2"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
          
          {/* Right - Contact */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="relative bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;