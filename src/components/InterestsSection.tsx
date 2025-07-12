// src/components/InterestsSection.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { Dumbbell, Plane, Briefcase, Brain, BookOpen, Gamepad2 } from 'lucide-react';

interface Interest {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  backgroundImage?: string;
  theme: {
    background: string;
    accent: string;
    border: string;
    hover: string;
  };
}

interface InterestsSectionProps {
  selectedInterest: Interest | null;
  handleInterestClick: (interest: Interest) => void;
  setSelectedInterest: (interest: Interest | null) => void;
}

const InterestsSection: React.FC<InterestsSectionProps> = ({ 
  selectedInterest, 
  handleInterestClick, 
  setSelectedInterest 
}) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleBoxes, setVisibleBoxes] = useState<boolean[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const interests: Interest[] = [
    {
      name: "Fitness & Exercise",
      icon: Dumbbell,
      description: "Staying active and maintaining physical health through regular workouts and exercise routines.",
      backgroundImage: "/images/fitness-bg.jpg",
      theme: {
        background: "bg-gradient-to-br from-green-50 to-emerald-100",
        accent: "text-green-600",
        border: "border-green-300",
        hover: "hover:bg-green-500"
      }
    },
    {
      name: "Travel & Adventure",
      icon: Plane,
      description: "Exploring new places, cultures, and experiences around the world.",
      backgroundImage: "/images/travel-bg.jpg",
      theme: {
        background: "bg-gradient-to-br from-blue-50 to-cyan-100",
        accent: "text-blue-600",
        border: "border-blue-300",
        hover: "hover:bg-blue-500"
      }
    },
    {
      name: "Finance & Business",
      icon: Briefcase,
      description: "Understanding markets, investments, and business strategies for financial growth.",
      backgroundImage: "/images/business-bg.jpg",
      theme: {
        background: "bg-gradient-to-br from-yellow-50 to-amber-100",
        accent: "text-yellow-600",
        border: "border-yellow-300",
        hover: "hover:bg-yellow-500"
      }
    },
    {
      name: "Self-Development",
      icon: Brain,
      description: "Continuous learning and personal growth through books, courses, and new experiences.",
      backgroundImage: "/images/development-bg.jpg",
      theme: {
        background: "bg-gradient-to-br from-purple-50 to-violet-100",
        accent: "text-purple-600",
        border: "border-purple-300",
        hover: "hover:bg-purple-500"
      }
    },
    {
      name: "Reading Books",
      icon: BookOpen,
      description: "Expanding knowledge and imagination through various genres of literature and non-fiction.",
      backgroundImage: "/images/reading-bg.jpg",
      theme: {
        background: "bg-gradient-to-br from-orange-50 to-red-100",
        accent: "text-orange-600",
        border: "border-orange-300",
        hover: "hover:bg-orange-500"
      }
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      description: "Enjoying video games as entertainment and exploring game design and development.",
      backgroundImage: "/images/gaming-bg.jpg",
      theme: {
        background: "bg-gradient-to-br from-pink-50 to-rose-100",
        accent: "text-pink-600",
        border: "border-pink-300",
        hover: "hover:bg-pink-500"
      }
    }
  ];

  // Initialize fade-in animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      interests.forEach((_, index) => {
        setTimeout(() => {
          setVisibleBoxes(prev => {
            const newVisible = [...prev];
            newVisible[index] = true;
            return newVisible;
          });
        }, index * 150); // Staggered delay of 150ms between each box
      });
    }, 300); // Initial delay before starting animations

    return () => clearTimeout(timer);
  }, []);

  // Handle image click to show popup
  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowImageModal(true);
  };

  // Handle interest click with fade transition
  const handleInterestClickWithBackground = (interest: Interest) => {
    if (selectedInterest && selectedInterest.name === interest.name) {
      // If clicking the same interest, close it
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedInterest(null);
        setIsTransitioning(false);
      }, 300);
    } else {
      // If changing to a different interest
      setIsTransitioning(true);
      setTimeout(() => {
        handleInterestClick(interest);
        setIsTransitioning(false);
      }, selectedInterest ? 300 : 0); // Only delay if there's a current selection
    }
  };

  // Background style based on selected interest
  const sectionStyle = selectedInterest?.backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${selectedInterest.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
      }
    : {};

  return (
    <section 
      id="interests" 
      className={`py-20 px-6 transition-all duration-500 ${
        selectedInterest ? 'bg-black/20' : ''
      }`}
      style={sectionStyle}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-light mb-4 ${selectedInterest ? 'text-white' : 'text-gray-900'}`}>
            Interests
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className={`text-xl ${selectedInterest ? 'text-white/90' : 'text-gray-800'}`}>
            Click on any interest to learn more about my passion
          </p>
        </div>
        
        {/* Static Grid Container with Fade-in Animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              onClick={() => handleInterestClickWithBackground(interest)}
              className={`cursor-pointer transition-all duration-700 transform hover:scale-105 ${
                visibleBoxes[index] ? 'opacity-100' : 'opacity-0'
              } ${
                selectedInterest?.name === interest.name
                  ? `bg-white shadow-2xl border-2 ${interest.theme.border} scale-105 ring-4 ring-opacity-50 ${interest.theme.border.replace('border-', 'ring-')}`
                  : `bg-white/90 backdrop-blur ${interest.theme.hover} hover:text-white border border-gray-200 hover:border-red-500 shadow-lg hover:shadow-xl`
              }`}
              style={{
                borderRadius: '1rem',
                padding: '1.5rem',
                textAlign: 'center',
                minHeight: '120px',
                transition: 'opacity 0.8s ease-in-out, transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
              }}
            >
              <div className={`w-12 h-12 mb-3 mx-auto flex items-center justify-center transition-colors ${
                selectedInterest?.name === interest.name 
                  ? interest.theme.accent 
                  : 'text-gray-700 group-hover:text-white'
              }`}>
                <interest.icon className="w-8 h-8" />
              </div>
              <span className={`font-medium text-lg transition-colors block ${
                selectedInterest?.name === interest.name 
                  ? interest.theme.accent 
                  : 'text-gray-900 group-hover:text-white'
              }`}>
                {interest.name}
              </span>
            </div>
          ))}
        </div>

        {/* Interest Detail Modal */}
        {selectedInterest && (
          <div className={`mt-16 bg-white/95 backdrop-blur rounded-2xl p-8 shadow-2xl border-2 border-gray-200 transition-all duration-500 ${
            isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}>
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center ${selectedInterest.theme.accent}`}>
                <selectedInterest.icon className="w-12 h-12" />
              </div>
              <h3 className={`text-3xl font-bold mb-4 ${selectedInterest.theme.accent}`}>
                {selectedInterest.name}
              </h3>
              <p className="text-gray-800 text-xl leading-relaxed max-w-3xl mx-auto mb-6">
                {selectedInterest.description}
              </p>
              
              {/* Interest Image Preview - เพิ่ม click เพื่อ popup */}
              {selectedInterest.backgroundImage && (
                <div className="mb-6">
                  <img 
                    src={selectedInterest.backgroundImage} 
                    alt={selectedInterest.name}
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                    onClick={() => handleImageClick(selectedInterest.backgroundImage!)}
                  />
                </div>
              )}
              
              <button
                onClick={() => handleInterestClickWithBackground(selectedInterest)}
                className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Image Modal Popup */}
        {showImageModal && selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={() => setShowImageModal(false)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={() => setShowImageModal(false)}
                className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedImage} 
                alt="Interest detail"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>

      {/* Add custom CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default InterestsSection;