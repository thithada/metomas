// src/components/HeroSection.tsx
'use client'

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  isVisible: boolean;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isVisible, scrollToSection }) => {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h1 className="text-9xl md:text-10xl lg:text-11xl font-extrabold mb-6 text-gray-900 tracking-tight">
              This<span className="text-red-500"> Is</span>
            </h1>
            
            <h1 className="text-9xl md:text-10xl lg:text-11xl font-extrabold mb-6 text-red-500 tracking-tight">
              Me <span className="text-gray-900">Tomas</span>
            </h1>
            
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>

            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex items-center px-10 py-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
            >
              Discover More
              <ChevronDown className="ml-3 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;