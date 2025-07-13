'use client'

import React, { useState, useEffect } from 'react';
import { ExternalLink, Sword, Users, User, X, Code, Gamepad2, Settings, Car, Utensils } from 'lucide-react';

interface Project {
  title: string;
  type: string;
  role: string;
  description: string;
  category: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  theme: {
    background: string;
    accent: string;
    border: string;
    hover: string;
  };
}

const ProjectsSection: React.FC = () => {
  const [visibleBoxes, setVisibleBoxes] = useState<boolean[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const projects: Project[] = [
    {
      title: "Maintenance UP",
      type: "Team Project",
      role: "Frontend & Backend Developer",
      description: "A facility maintenance request and tracking system on campus. Developed user interface components and API endpoints for request management.",
      category: "Full-Stack",
      image: "/images/maintenance-up.jpg",
      icon: Settings,
      theme: {
        background: "bg-gradient-to-br from-gray-50 to-gray-100",
        accent: "text-red-800",
        border: "border-red-800",
        hover: "hover:bg-black"
      }
    },
    {
      title: "Autocar",
      type: "Team Project", 
      role: "Frontend & Backend Developer",
      description: "A repair-tracking system for personal vehicles. Built notification features and real-time status update functionality.",
      category: "Full-Stack",
      image: "/images/autocar.jpg",
      icon: Car,
      theme: {
        background: "bg-gradient-to-br from-gray-50 to-gray-100",
        accent: "text-red-800",
        border: "border-red-800",
        hover: "hover:bg-black"
      }
    },
    {
      title: "Nutrition Analysis",
      type: "Team Project",
      role: "Frontend & Backend Developer",
      description: "A system to collect and analyze daily caloric intake. Implemented data visualization and user management features.",
      category: "Full-Stack",
      image: "/images/nutrition-analysis.jpg",
      icon: Utensils,
      theme: {
        background: "bg-gradient-to-br from-gray-50 to-gray-100",
        accent: "text-red-800",
        border: "border-red-800",
        hover: "hover:bg-black"
      }
    },
    {
      title: "HowTheCat",
      type: "Solo Project",
      role: "Game Developer",
      description: "A 2D farming simulation game built from scratch. Implemented game mechanics, physics, and user interaction systems.",
      category: "Game Dev",
      image: "/images/howthecat.jpg",
      icon: Gamepad2,
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
      projects.forEach((_, index) => {
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

  // Handle project click with fade transition
  const handleProjectClick = (project: Project) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedProject(project);
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
        setSelectedProject(null);
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

  const getProjectTypeIcon = (type: string) => {
    return type === "Team Project" ? Users : User;
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal || showImageModal) {
      const scrollY = window.scrollY;
      
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        
        window.scrollTo(0, scrollY);
      };
    }
  }, [showModal, showImageModal]);

  return (
    <>
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4 text-gray-900 drop-shadow-lg" style={{ letterSpacing: '1px' }}>
              Projects
            </h2>
            <div className="w-20 h-1 bg-red-800 mx-auto mb-6 shadow-md shadow-red-800/50"></div>       
          </div>
          
          {/* Simple Grid Container with Fade-in Animation */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => handleProjectClick(project)}
                className={`cursor-pointer transition-all duration-700 transform hover:scale-105 group ${
                  visibleBoxes[index] ? 'opacity-100' : 'opacity-0'
                } ${
                  selectedProject?.title === project.title && showModal
                    ? `bg-white shadow-2xl border-2 ${project.theme.border} scale-105 ring-4 ring-opacity-50 ${project.theme.border.replace('border-', 'ring-')}`
                    : `bg-white/90 backdrop-blur hover:bg-black border-2 border-gray-200 hover:border-red-800 shadow-lg hover:shadow-xl hover:shadow-red-800/30`
                }`}
                style={{
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  textAlign: 'center',
                  minHeight: '140px',
                  transition: 'all 0.4s ease-in-out',
                  boxShadow: selectedProject?.title === project.title && showModal ? 
                    '0 0 20px rgba(153, 27, 27, 0.5)' : undefined
                }}
              >
                <div className={`w-12 h-12 mb-3 mx-auto flex items-center justify-center transition-all duration-300 ease-in-out ${
                  selectedProject?.title === project.title && showModal
                    ? 'text-red-800' 
                    : 'text-gray-700 group-hover:text-red-800 group-hover:drop-shadow-lg'
                }`}>
                  <project.icon className="w-8 h-8" />
                </div>
                <span className={`font-bold text-lg transition-all duration-300 ease-in-out block letter-spacing-wide ${
                  selectedProject?.title === project.title && showModal
                    ? 'text-red-800' 
                    : 'text-gray-900 group-hover:text-red-800 group-hover:drop-shadow-lg'
                }`} style={{ letterSpacing: '0.5px' }}>
                  {project.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {showModal && selectedProject && (
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
            className={`bg-white/95 backdrop-blur rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-gray-200 transform transition-all duration-500 ease-out ${
              showModal && !isTransitioning ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
            }`}
            style={{
              animation: showModal && !isTransitioning ? 'slideInModal 0.5s ease-out forwards' : 'none'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Content */}
            <div className="p-8">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-red-800/30 transition-all duration-300 border border-red-800/30 hover:border-red-800"
              >
                <X className="w-6 h-6 text-gray-700 hover:text-red-800 transition-colors duration-300" />
              </button>
              
              {/* Project Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center text-red-800 drop-shadow-lg`}>
                  <selectedProject.icon className="w-12 h-12" />
                </div>
                <h3 className={`text-3xl font-bold mb-4 text-red-800 drop-shadow-lg`} style={{ letterSpacing: '1px' }}>
                  {selectedProject.title}
                </h3>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                {/* Project Type */}
                <div className="flex items-center justify-center mb-4">
                  {React.createElement(getProjectTypeIcon(selectedProject.type), {
                    className: "w-5 h-5 text-red-800 mr-2"
                  })}
                  <Sword className="w-4 h-4 text-red-800 mr-2" />
                  <p className="text-sm text-gray-700 font-bold uppercase tracking-wide" style={{ letterSpacing: '1px' }}>
                    {selectedProject.type}
                  </p>
                </div>

                {/* Role */}
                <div className="text-center mb-6">
                  <p className="text-lg text-red-800 font-bold drop-shadow-sm" style={{ letterSpacing: '0.3px' }}>
                    <span className="text-gray-900">Role:</span> {selectedProject.role}
                  </p>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3" style={{ letterSpacing: '0.5px' }}>Description</h4>
                  <p className="text-gray-800 leading-relaxed text-lg font-medium drop-shadow-sm" style={{ letterSpacing: '0.2px' }}>
                    {selectedProject.description}
                  </p>
                </div>

                {/* Project Image */}
                {selectedProject.image && (
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3" style={{ letterSpacing: '0.5px' }}>Project Preview</h4>
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full max-w-lg mx-auto rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                      onClick={() => handleImageClick(selectedProject.image)}
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/400x200?text=Project+Image";
                      }}
                    />
                  </div>
                )}    
              </div>
              
              <div className="text-center">
                <button
                  onClick={closeModal}
                  className="px-8 py-3 bg-black hover:bg-red-800 text-white rounded-lg font-bold transition-all duration-300 ease-in-out border-2 border-red-800 hover:border-white shadow-lg hover:shadow-xl drop-shadow-lg mr-4"
                  style={{ 
                    letterSpacing: '0.5px',
                    boxShadow: '0 0 15px rgba(153, 27, 27, 0.4)'
                  }}
                >
                  Close
                </button>
                <button
                  className="px-8 py-3 bg-red-800 hover:bg-black text-white rounded-lg font-bold transition-all duration-300 ease-in-out border-2 border-red-800 hover:border-red-800 shadow-lg hover:shadow-xl drop-shadow-lg inline-flex items-center"
                  style={{ 
                    letterSpacing: '0.5px',
                    boxShadow: '0 0 15px rgba(153, 27, 27, 0.4)'
                  }}
                >
                  View Project
                  <ExternalLink className="ml-2 w-5 h-5" />
                </button>
              </div>
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
              alt="Project detail"
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

      {/* Enhanced Animation Styles */}
      <style jsx global>{`
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
        
        .group {
          border-style: solid !important;
        }
      `}</style>
    </>
  );
};

export default ProjectsSection;