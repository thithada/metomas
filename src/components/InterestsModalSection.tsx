// src/components/InterestsModalSection.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { Dumbbell, Plane, Briefcase, Brain, BookOpen, Gamepad2, X } from 'lucide-react';

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

const InterestsModalSection: React.FC = () => {
  const [visibleBoxes, setVisibleBoxes] = useState<boolean[]>([]);
  const [selectedInterest, setSelectedInterest] = useState<Interest | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const interests: Interest[] = [
    {
      name: "Fitness & Exercise",
      icon: Dumbbell,
      description: "Staying active and maintaining physical health through regular workouts and exercise routines.",
      backgroundImage: "/images/fitness-bg.jpg",
      theme: {
        background: "bg-gradient-to-br from-gray-50 to-gray-100",
        accent: "text-red-800",
        border: "border-red-800",
        hover: "hover:bg-black"
      }
    },
    {
      name: "Travel & Adventure",
      icon: Plane,
      description: "Exploring new places, cultures, and experiences around the world.",
      backgroundImage: "/images/travel-bg.jpg",
      theme: {
        background: "bg-gradient-to-br from-gray-50 to-gray-100",
        accent: "text-red-800",
        border: "border-red-800",
        hover: "hover:bg-black"
      }
    },
    {
      name: "Finance & Business",
      icon: Briefcase,
      description: "Understanding markets, investments, and business strategies for financial growth.",
      backgroundImage: "/images/business-bg.jpg",
      theme: {
        background: "bg-gradient-to-br from-gray-50 to-gray-100",
        accent: "text-red-800",
        border: "border-red-800",
        hover: "hover:bg-black"
      }
    },
    {
      name: "Self-Development",
      icon: Brain,
      description: "Continuous learning and personal growth through books, courses, and new experiences.",
      backgroundImage: "/images/development-bg.jpg",
      theme: {
        background: "bg-gradient-to-br from-gray-50 to-gray-100",
        accent: "text-red-800",
        border: "border-red-800",
        hover: "hover:bg-black"
      }
    },
    {
      name: "Reading Books",
      icon: BookOpen,
      description: "Expanding knowledge and imagination through various genres of literature and non-fiction.",
      backgroundImage: "/images/reading-bg.jpg",
      theme: {
        background: "bg-gradient-to-br from-gray-50 to-gray-100",
        accent: "text-red-800",
        border: "border-red-800",
        hover: "hover:bg-black"
      }
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      description: "Enjoying video games as entertainment and exploring game design and development.",
      backgroundImage: "/images/gaming-bg.jpg",
      theme: {
        background: "bg-gradient-to-br from-gray-50 to-gray-100",
        accent: "text-red-800",
        border: "border-red-800",
        hover: "hover:bg-black"
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
        }, index * 150);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Handle interest click with fade transition
  const handleInterestClick = (interest: Interest) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedInterest(interest);
      setShowModal(true);
      setIsTransitioning(false);
    }, 150);
  };

  // Handle modal close
  const closeModal = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowModal(false);
      setTimeout(() => {
        setSelectedInterest(null);
        setIsTransitioning(false);
      }, 300);
    }, 150);
  };

  // Handle image click to show popup
  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowImageModal(true);
  };

  // Close image modal
  const closeImageModal = () => {
    setShowImageModal(false);
    setSelectedImage(null);
  };

  // Prevent body scroll when modal is open และป้องกันการกระตุก
  useEffect(() => {
    if (showModal || showImageModal) {
      // เก็บ scroll position ปัจจุบัน
      const scrollY = window.scrollY;
      
      // ตั้งค่า body ให้ไม่สามารถ scroll ได้และรักษา position
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // คืนค่า body กลับสู่สถานะเดิม
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        
        // คืนค่า scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [showModal, showImageModal]);

  return (
    <>
      <section 
        id="interests" 
        className="py-20 px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4 text-gray-900 drop-shadow-lg" style={{ letterSpacing: '1px' }}>
              Interests
            </h2>
            <div className="w-20 h-1 bg-red-800 mx-auto mb-6 shadow-md shadow-red-800/50"></div>       
          </div>
          
          {/* Static Grid Container with Fade-in Animation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                onClick={() => handleInterestClick(interest)}
                className={`cursor-pointer transition-all duration-700 transform hover:scale-105 group ${
                  visibleBoxes[index] ? 'opacity-100' : 'opacity-0'
                } ${
                  selectedInterest?.name === interest.name && showModal
                    ? `bg-white shadow-2xl border-2 ${interest.theme.border} scale-105 ring-4 ring-opacity-50 ${interest.theme.border.replace('border-', 'ring-')}`
                    : `bg-white/90 backdrop-blur hover:bg-black border-2 border-gray-200 hover:border-red-800 shadow-lg hover:shadow-xl hover:shadow-red-800/30`
                }`}
                style={{
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  textAlign: 'center',
                  minHeight: '120px',
                  transition: 'all 0.4s ease-in-out',
                  boxShadow: selectedInterest?.name === interest.name && showModal ? 
                    '0 0 20px rgba(153, 27, 27, 0.5)' : undefined
                }}
              >
                <div className={`w-12 h-12 mb-3 mx-auto flex items-center justify-center transition-all duration-300 ease-in-out ${
                  selectedInterest?.name === interest.name && showModal
                    ? 'text-red-800' 
                    : 'text-gray-700 group-hover:text-red-800 group-hover:drop-shadow-lg'
                }`}>
                  <interest.icon className="w-8 h-8" />
                </div>
                <span className={`font-bold text-xl transition-all duration-300 ease-in-out block letter-spacing-wide ${
                  selectedInterest?.name === interest.name && showModal
                    ? 'text-red-800' 
                    : 'text-gray-900 group-hover:text-red-800 group-hover:drop-shadow-lg'
                }`} style={{ letterSpacing: '0.5px' }}>
                  {interest.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {showModal && selectedInterest && (
        <div 
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-500 ease-out ${
            showModal && !isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            animation: showModal && !isTransitioning ? 'fadeInModal 0.5s ease-out forwards' : 'none'
          }}
          onClick={closeModal}
        >
          <div 
            className={`bg-white/95 backdrop-blur rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-gray-200 transform transition-all duration-500 ease-out ${
              showModal && !isTransitioning ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
            }`}
            style={{
              animation: showModal && !isTransitioning ? 'slideInModal 0.5s ease-out forwards' : 'none'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Content - Same as original InterestsSection detail modal */}
            <div className="text-center p-8">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-red-800/30 transition-all duration-300 border border-red-800/30 hover:border-red-800"
              >
                <X className="w-6 h-6 text-gray-700 hover:text-red-800 transition-colors duration-300" />
              </button>
              
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center text-red-800 drop-shadow-lg`}>
                <selectedInterest.icon className="w-12 h-12" />
              </div>
              <h3 className={`text-3xl font-bold mb-4 text-red-800 drop-shadow-lg`} style={{ letterSpacing: '1px' }}>
                {selectedInterest.name}
              </h3>
              <p className="text-gray-800 text-xl leading-relaxed max-w-3xl mx-auto mb-8 font-medium drop-shadow-sm" style={{ letterSpacing: '0.3px' }}>
                {selectedInterest.description}
              </p>
              
              {/* Interest Image Preview */}
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
                onClick={closeModal}
                className="px-8 py-3 bg-black hover:bg-red-800 text-white rounded-lg font-bold transition-all duration-300 ease-in-out border-2 border-red-800 hover:border-white shadow-lg hover:shadow-xl drop-shadow-lg"
                style={{ 
                  letterSpacing: '0.5px',
                  boxShadow: '0 0 15px rgba(153, 27, 27, 0.4)'
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal Popup */}
      {showImageModal && selectedImage && (
        <div 
          className={`fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[60] p-4 transition-all duration-400 ease-out ${
            showImageModal ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            animation: showImageModal ? 'fadeInModal 0.4s ease-out forwards' : 'none'
          }}
          onClick={closeImageModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 p-2 rounded-lg bg-black/50 hover:bg-red-800/80 border border-red-800/50 hover:border-red-800 transition-all duration-300"
            >
              <X className="w-8 h-8 text-white hover:text-white transition-colors duration-300" />
            </button>
            <img 
              src={selectedImage} 
              alt="Interest detail"
              className={`w-full h-full object-contain rounded-lg shadow-2xl transition-all duration-400 ease-out ${
                showImageModal ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                animation: showImageModal ? 'imageZoomIn 0.4s ease-out forwards' : 'none'
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInModal {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes slideInModal {
          0% {
            opacity: 0;
            transform: translateY(32px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes imageZoomIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Samurai hover effects */
        .group:hover {
          box-shadow: 0 0 15px rgba(153, 27, 27, 0.4) !important;
          transform: scale(1.05) !important;
        }
        
        /* เส้นขอบที่คมชัดแบบซามูไร */
        .group {
          border-style: solid !important;
        }
        
        /* ป้องกันการกระตุกของ scrollbar */
        body.modal-open {
          overflow: hidden;
          position: fixed;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default InterestsModalSection;