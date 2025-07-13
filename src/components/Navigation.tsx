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
    <nav className={`fixed top-0 w-full bg-black/95 backdrop-blur-md border-b-2 border-red-800 z-50 shadow-2xl shadow-red-800/20 transition-all duration-500 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Left - Brand */}
          <button 
            onClick={scrollToTop}
            className="text-4xl font-bold relative group"
            style={{ letterSpacing: '1px' }}
          >
            <span className="text-white group-hover:text-red-800 transition-all duration-300 ease-in-out drop-shadow-lg">Me</span>
            <span className="text-red-800 group-hover:text-white transition-all duration-300 ease-in-out drop-shadow-lg">Tomas</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-800 transition-all duration-300 group-hover:w-full shadow-md shadow-red-800/50"></span>
          </button>
          
          {/* Center - Main Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="relative text-lg text-white hover:text-red-800 transition-all duration-300 ease-in-out font-bold group py-2 drop-shadow-lg"
              style={{ letterSpacing: '0.5px' }}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-800 transition-all duration-300 group-hover:w-full shadow-md shadow-red-800/50"></span>
            </button>
            <button
              onClick={() => scrollToSection("interests")}
              className="relative text-lg text-white hover:text-red-800 transition-all duration-300 ease-in-out font-bold group py-2 drop-shadow-lg"
              style={{ letterSpacing: '0.5px' }}
            >
              Interests
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-800 transition-all duration-300 group-hover:w-full shadow-md shadow-red-800/50"></span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="relative text-lg text-white hover:text-red-800 transition-all duration-300 ease-in-out font-bold group py-2 drop-shadow-lg"
              style={{ letterSpacing: '0.5px' }}
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-800 transition-all duration-300 group-hover:w-full shadow-md shadow-red-800/50"></span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="relative text-lg text-white hover:text-red-800 transition-all duration-300 ease-in-out font-bold group py-2 drop-shadow-lg"
              style={{ letterSpacing: '0.5px' }}
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-800 transition-all duration-300 group-hover:w-full shadow-md shadow-red-800/50"></span>
            </button>
          </div>
          
          {/* Right - Contact */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="relative bg-black hover:bg-red-800 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-red-800 hover:border-white drop-shadow-lg"
              style={{ 
                letterSpacing: '0.5px',
                boxShadow: '0 0 15px rgba(153, 27, 27, 0.4)'
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        nav:hover {
          box-shadow: 0 0 20px rgba(153, 27, 27, 0.3) !important;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;