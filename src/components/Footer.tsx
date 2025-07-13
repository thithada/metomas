// src/components/Footer.tsx
'use client'

import React from 'react';
import { Sword } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-black/95 backdrop-blur border-t-2 border-red-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Sword className="w-6 h-6 text-red-800 mr-3 animate-pulse" />
            <span className="text-white font-bold text-xl drop-shadow-lg" style={{ letterSpacing: '1px' }}>
              "The way of the warrior is in training"
            </span>
            <Sword className="w-6 h-6 text-red-800 ml-3 animate-pulse" />
          </div>
          
          <p className="text-gray-300 text-lg font-medium mb-2 drop-shadow-sm" style={{ letterSpacing: '0.3px' }}>
            <span className="text-red-800 font-bold">Thithada Islam</span>
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