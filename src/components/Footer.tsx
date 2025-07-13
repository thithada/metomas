// src/components/Footer.tsx
'use client'

import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-black/95 backdrop-blur border-t-2 border-red-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Code className="w-5 h-5 text-red-800 mr-2" />
            <span className="text-white font-bold text-lg drop-shadow-lg" style={{ letterSpacing: '1px' }}>
              Crafted with
            </span>
            <Heart className="w-5 h-5 text-red-800 mx-2 animate-pulse" />
            <span className="text-white font-bold text-lg drop-shadow-lg" style={{ letterSpacing: '1px' }}>
              and discipline
            </span>
          </div>
          
          <p className="text-gray-300 text-lg font-medium mb-2 drop-shadow-sm" style={{ letterSpacing: '0.3px' }}>
            © 2024 <span className="text-red-800 font-bold">Thithada Islam</span>
          </p>
          
          <p className="text-gray-400 text-sm font-medium drop-shadow-sm" style={{ letterSpacing: '0.2px' }}>
            Built with <span className="text-red-800 font-bold">Next.js</span> and <span className="text-red-800 font-bold">Tailwind CSS</span>
          </p>
          
          <div className="mt-6 w-20 h-1 bg-red-800 mx-auto shadow-md shadow-red-800/50"></div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        footer {
          background-image: radial-gradient(circle at top, rgba(153, 27, 27, 0.1) 0%, transparent 50%);
        }
      `}</style>
    </footer>
  );
};

export default Footer;