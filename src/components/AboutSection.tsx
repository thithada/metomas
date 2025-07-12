// src/components/AboutSection.tsx
'use client'

import React from 'react';
import { MapPin } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-800 leading-relaxed">
              I'm a Software Engineering student with growing interest in
              DevOps and automation. I enjoy learning about different
              technologies and how teams collaborate to build and deploy
              software efficiently.
            </p>
            <p className="text-xl text-gray-800 leading-relaxed">
              Looking for an internship opportunity to expand my knowledge,
              contribute to projects, and learn from experienced professionals
              in a team environment.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
              <MapPin className="w-5 h-5 text-red-500 mr-3" />
              <span className="text-gray-900 text-lg font-medium">
                University of Phayao
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
              <span className="w-5 h-5 text-red-500 mr-3 text-center text-lg">
                🎓
              </span>
              <span className="text-gray-900 text-lg font-medium">
                Software Engineering (2023 - Present)
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
              <span className="w-5 h-5 text-red-500 mr-3 text-center text-lg">
                📊
              </span>
              <span className="text-gray-900 text-lg font-medium">GPA: 3.39</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;