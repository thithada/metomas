// src/components/ScrollToTopButton.tsx
'use client'

import React from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopButtonProps {
  showScrollTop: boolean;
  scrollToTop: () => void;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ 
  showScrollTop, 
  scrollToTop 
}) => {
  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-black hover:bg-red-800 text-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110 z-50 group border-2 border-red-800 hover:border-white"
      style={{
        boxShadow: '0 0 20px rgba(153, 27, 27, 0.4)'
      }}
      aria-label="Scroll to top"
    >
      <ChevronUp 
        className="w-6 h-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:drop-shadow-lg font-bold" 
        strokeWidth={3}
      />
      
      {/* Samurai Touch - Optional katana effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-red-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Custom Styles */}
      <style jsx>{`
        button:hover {
          box-shadow: 0 0 25px rgba(153, 27, 27, 0.6) !important;
          animation: samuraiPulse 2s infinite;
        }
        
        @keyframes samuraiPulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(153, 27, 27, 0.4);
          }
          50% { 
            box-shadow: 0 0 30px rgba(153, 27, 27, 0.7);
          }
        }
      `}</style>
    </button>
  );
};

export default ScrollToTopButton;