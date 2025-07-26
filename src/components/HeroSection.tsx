//src\components\HeroSection.tsx
'use client'

import React from 'react';
import { ChevronDown, Mail, Linkedin, Github, Facebook, Instagram, FileText } from 'lucide-react';

interface HeroSectionProps {
  isVisible: boolean;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isVisible, scrollToSection }) => {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 relative bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h1 className="text-9xl md:text-10xl lg:text-11xl font-extrabold mb-6 text-white tracking-tight drop-shadow-2xl"
                style={{ letterSpacing: '2px' }}>
              This<span className="text-red-800 drop-shadow-lg"> Is</span>
            </h1>
            
            <h1 className="text-9xl md:text-10xl lg:text-11xl font-extrabold mb-6 text-red-800 tracking-tight drop-shadow-2xl"
                style={{ letterSpacing: '2px' }}>
              Me <span className="text-white drop-shadow-lg">Tomas</span>
            </h1>
            
            <div className="w-24 h-1 bg-red-800 mx-auto mb-8 shadow-lg shadow-red-800/50"></div>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
               style={{ letterSpacing: '0.5px' }}>
              A passionate developer forging digital experiences with precision and discipline
            </p>

            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex items-center px-12 py-5 bg-black hover:bg-red-800 text-white rounded-lg font-bold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl border-2 border-red-800 hover:border-white drop-shadow-lg group mb-12"
              style={{ 
                letterSpacing: '1px',
                boxShadow: '0 0 20px rgba(153, 27, 27, 0.4)'
              }}
            >
              Discover More
              <ChevronDown className="ml-3 w-6 h-6 group-hover:text-white transition-colors duration-300" />
            </button>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6">
              {[
                {
                  href: "https://github.com/thithada",
                  icon: <Github className="w-7 h-7 text-red-800 group-hover:text-white group-hover:drop-shadow-lg transition-all duration-300" />,
                },
                {
                  href: "mailto:madname00@gmail.com",
                  icon: <Mail className="w-7 h-7 text-red-800 group-hover:text-white group-hover:drop-shadow-lg transition-all duration-300" />,
                },
                {
                  href: "https://linkedin.com/in/thithada",
                  icon: <Linkedin className="w-7 h-7 text-red-800 group-hover:text-white group-hover:drop-shadow-lg transition-all duration-300" />,
                },
                {
                  href: "https://www.instagram.com/thithada_tomas/?hl=en",
                  icon: <Instagram className="w-7 h-7 text-red-800 group-hover:text-white group-hover:drop-shadow-lg transition-all duration-300" />,
                },
                {
                  href: "https://www.facebook.com/teetadar.pathan.9",
                  icon: <Facebook className="w-7 h-7 text-red-800 group-hover:text-white group-hover:drop-shadow-lg transition-all duration-300" />,
                },
                {
                  href: "/Resume_Thithada_66026055.pdf",
                  icon: <FileText className="w-7 h-7 text-red-800 group-hover:text-white group-hover:drop-shadow-lg transition-all duration-300" />,
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseUp={(e) => e.currentTarget.blur()}
                  className="bg-black/60 backdrop-blur p-4 rounded-lg hover:bg-red-800 transition-all duration-300 ease-in-out transform hover:scale-110 border-2 border-red-800/50 hover:border-white shadow-lg group focus:outline-none"
                  style={{ 
                    transition: 'all 0.4s ease-in-out',
                    boxShadow: '0 0 10px rgba(153, 27, 27, 0.3)'
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        section:hover .floating-element {
          animation: float 3s ease-in-out infinite;
        }

        h1 {
          text-shadow: 0 0 30px rgba(153, 27, 27, 0.3);
        }

        .group:hover {
          box-shadow: 0 0 15px rgba(153, 27, 27, 0.6) !important;
        }

        a:focus,
        a:active {
          outline: none;
          box-shadow: none !important;
          background-color: inherit !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
