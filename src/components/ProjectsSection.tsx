//src\components\ProjectsSection.tsx
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
  link: string;
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
      link: "https://repair-up.netlify.app/",
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
      link: "https://autocar2.vercel.app/",
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
      link: "https://project-nutrition-blush.vercel.app/",
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
      type: "Solo Project, Ongoing",
      role: "Game Developer",
      description: "A 2D farming simulation game built from scratch. Implemented game mechanics, physics, and user interaction systems.",
      category: "Game Dev",
      image: "/images/howthecat.jpg",
      link: "https://github.com/thithada/HowTheCat",
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

  // Handle view project button click
  const handleViewProject = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
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
                className={`project-card cursor-pointer transition-all duration-700 transform group ${
                  visibleBoxes[index] ? 'opacity-100' : 'opacity-0'
                } ${
                  selectedProject?.title === project.title && showModal
                    ? `bg-white shadow-2xl border-2 ${project.theme.border} scale-105 ring-4 ring-opacity-50 ${project.theme.border.replace('border-', 'ring-')}`
                    : `bg-white/90 backdrop-blur border-2 border-gray-200 shadow-lg`
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
                onMouseLeave={(e) => e.currentTarget.blur()}
                onTouchEnd={(e) => e.currentTarget.blur()}
              >
                <div className={`w-12 h-12 mb-3 mx-auto flex items-center justify-center transition-all duration-300 ease-in-out ${
                  selectedProject?.title === project.title && showModal
                    ? 'text-red-800' 
                    : 'text-gray-700'
                }`}>
                  <project.icon className="w-8 h-8" />
                </div>
                <span className={`font-bold text-lg transition-all duration-300 ease-in-out block ${
                  selectedProject?.title === project.title && showModal
                    ? 'text-red-800' 
                    : 'text-gray-900'
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
                className="modal-close-btn absolute top-4 right-4 p-2 rounded-full bg-black/20 transition-all duration-300 border border-red-800/30 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-opacity-50"
                onMouseLeave={(e) => e.currentTarget.blur()}
                onTouchEnd={(e) => e.currentTarget.blur()}
              >
                <X className="w-6 h-6 text-gray-700 transition-colors duration-300" />
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
                      className="project-image w-full max-w-lg mx-auto rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-opacity-50"
                      onClick={() => handleImageClick(selectedProject.image)}
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/400x200?text=Project+Image";
                      }}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleImageClick(selectedProject.image);
                        }
                      }}
                    />
                  </div>
                )}    
              </div>
              
              <div className="text-center">
                <button
                  onClick={closeModal}
                  className="modal-btn px-8 py-3 bg-black text-white rounded-lg font-bold transition-all duration-300 ease-in-out border-2 border-red-800 shadow-lg drop-shadow-lg mr-4 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-opacity-50"
                  style={{ 
                    letterSpacing: '0.5px',
                    boxShadow: '0 0 15px rgba(153, 27, 27, 0.4)'
                  }}
                  onMouseLeave={(e) => e.currentTarget.blur()}
                  onTouchEnd={(e) => e.currentTarget.blur()}
                >
                  Close
                </button>
                <button
                  onClick={() => handleViewProject(selectedProject.link)}
                  className="modal-btn px-8 py-3 bg-red-800 text-white rounded-lg font-bold transition-all duration-300 ease-in-out border-2 border-red-800 shadow-lg drop-shadow-lg inline-flex items-center focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-opacity-50"
                  style={{ 
                    letterSpacing: '0.5px',
                    boxShadow: '0 0 15px rgba(153, 27, 27, 0.4)'
                  }}
                  onMouseLeave={(e) => e.currentTarget.blur()}
                  onTouchEnd={(e) => e.currentTarget.blur()}
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
              className="image-close-btn absolute -top-12 right-0 p-2 rounded-lg bg-black/50 border border-red-800/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-opacity-50"
              onMouseLeave={(e) => e.currentTarget.blur()}
              onTouchEnd={(e) => e.currentTarget.blur()}
            >
              <X className="w-8 h-8 text-white transition-colors duration-300" />
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
        
        /* Fix sticky hover for project cards */
        @media (hover: hover) {
          .project-card:hover {
            background-color: black !important;
            border-color: rgba(153, 27, 27, 1) !important;
            transform: scale(1.05) !important;
            box-shadow: 0 0 15px rgba(153, 27, 27, 0.4) !important;
          }
          
          .project-card:hover span {
            color: rgba(153, 27, 27, 1) !important;
            filter: drop-shadow(0 0 5px rgba(153, 27, 27, 0.3)) !important;
          }
          
          .project-card:hover div {
            color: rgba(153, 27, 27, 1) !important;
            filter: drop-shadow(0 0 5px rgba(153, 27, 27, 0.3)) !important;
          }
          
          .modal-btn:hover {
            background-color: rgba(153, 27, 27, 1) !important;
            border-color: white !important;
            transform: scale(1.05) !important;
          }
          
          .modal-close-btn:hover {
            background-color: rgba(153, 27, 27, 0.3) !important;
            border-color: rgba(153, 27, 27, 1) !important;
          }
          
          .modal-close-btn:hover svg {
            color: rgba(153, 27, 27, 1) !important;
          }
          
          .project-image:hover {
            transform: scale(1.05) !important;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2) !important;
          }
          
          .image-close-btn:hover {
            background-color: rgba(153, 27, 27, 0.8) !important;
            border-color: rgba(153, 27, 27, 1) !important;
          }
        }
        
        /* Touch feedback for mobile */
        .project-card:active {
          background-color: black !important;
          border-color: rgba(153, 27, 27, 1) !important;
          transform: scale(0.98) !important;
        }
        
        .modal-btn:active {
          transform: scale(0.98) !important;
        }
        
        .modal-close-btn:active {
          background-color: rgba(153, 27, 27, 0.3) !important;
          transform: scale(0.95) !important;
        }
        
        .image-close-btn:active {
          background-color: rgba(153, 27, 27, 0.8) !important;
          transform: scale(0.95) !important;
        }
        
        /* Remove tap highlight and prevent text selection */
        .project-card,
        .modal-btn,
        .modal-close-btn,
        .image-close-btn,
        .project-image {
          -webkit-tap-highlight-color: transparent;
          user-select: none;
          -webkit-user-select: none;
        }
        
        /* Focus styles for accessibility */
        .project-card:focus-visible,
        .modal-btn:focus-visible,
        .modal-close-btn:focus-visible,
        .image-close-btn:focus-visible,
        .project-image:focus-visible {
          outline: 2px solid rgba(153, 27, 27, 0.8);
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
};

export default ProjectsSection;