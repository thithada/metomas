// src/components/AboutSection.tsx
'use client'

import React from 'react';
import { MapPin, GraduationCap, BarChart3 } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-4 drop-shadow-lg" style={{ letterSpacing: '1px' }}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-red-800 mx-auto shadow-md shadow-red-800/50"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-800 leading-relaxed drop-shadow-sm font-medium" style={{ letterSpacing: '0.3px' }}>
              I'm a <span className="text-red-800 font-bold drop-shadow-lg">Software Engineering student</span> with growing interest in
              DevOps and automation. I enjoy learning about different
              technologies and how teams collaborate to build and deploy
              software efficiently.
            </p>
            <p className="text-xl text-gray-800 leading-relaxed drop-shadow-sm font-medium" style={{ letterSpacing: '0.3px' }}>
              Looking for an <span className="text-red-800 font-bold drop-shadow-lg">internship opportunity</span> to expand my knowledge,
              contribute to projects, and learn from experienced professionals
              in a team environment.
            </p>
            
            
          </div>
          
          <div className="space-y-6">
            {/* University */}
            <div className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-red-800 transition-all duration-300 shadow-lg hover:shadow-xl group">
              <div className="w-3 h-3 bg-red-800 rounded-full mr-4 group-hover:animate-pulse"></div>
              <MapPin className="w-6 h-6 text-red-800 mr-4 group-hover:drop-shadow-lg transition-all duration-300" />
              <span className="text-gray-900 text-lg font-bold group-hover:text-red-800 transition-colors duration-300 drop-shadow-sm" style={{ letterSpacing: '0.3px' }}>
                University of Phayao
              </span>
            </div>
            
            {/* Education */}
            <div className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-red-800 transition-all duration-300 shadow-lg hover:shadow-xl group">
              <div className="w-3 h-3 bg-red-800 rounded-full mr-4 group-hover:animate-pulse"></div>
              <GraduationCap className="w-6 h-6 text-red-800 mr-4 group-hover:drop-shadow-lg transition-all duration-300" />
              <span className="text-gray-900 text-lg font-bold group-hover:text-red-800 transition-colors duration-300 drop-shadow-sm" style={{ letterSpacing: '0.3px' }}>
                Software Engineering (2023 - Present)
              </span>
            </div>
            
            {/* GPA */}
            <div className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-red-800 transition-all duration-300 shadow-lg hover:shadow-xl group">
              <div className="w-3 h-3 bg-red-800 rounded-full mr-4 group-hover:animate-pulse"></div>
              <BarChart3 className="w-6 h-6 text-red-800 mr-4 group-hover:drop-shadow-lg transition-all duration-300" />
              <span className="text-gray-900 text-lg font-bold group-hover:text-red-800 transition-colors duration-300 drop-shadow-sm" style={{ letterSpacing: '0.3px' }}>
                GPA: 3.39
              </span>
            </div>
            
            
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        .group:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 15px rgba(153, 27, 27, 0.3);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;