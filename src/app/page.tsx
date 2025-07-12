'use client'

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronDown, Send, User, MessageCircle } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    setIsVisible(true);

    // Scroll handler for navbar visibility and scroll to top button
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Navbar visibility logic
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show navbar
        setIsNavVisible(true);
      } else {
        // Scrolling down - hide navbar
        setIsNavVisible(false);
      }
      
      // Show scroll to top button when scrolled down significantly
      setShowScrollTop(currentScrollY > 500);
      
      setLastScrollY(currentScrollY);
    };

    // Close modal on ESC key press
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeSkillModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isModalOpen, lastScrollY]);

  const projects = [
    {
      title: "Maintenance UP",
      type: "Team Project",
      role: "Frontend & Backend Developer",
      tech: "React, Node.js, Express.js, MySQL, HTML, CSS",
      description: "A facility maintenance request and tracking system on campus. Developed user interface components and API endpoints for request management.",
      learned: "Team collaboration with Git, API integration, database design, and agile development workflow.",
      category: "Full-Stack"
    },
    {
      title: "Autocar",
      type: "Team Project", 
      role: "Frontend & Backend Developer",
      tech: "Vue.js, Node.js, Express.js, TiDB, HTML, CSS",
      description: "A repair-tracking system for personal vehicles. Built notification features and real-time status update functionality.",
      learned: "Real-time data handling, team coordination, and cross-platform development practices.",
      category: "Full-Stack"
    },
    {
      title: "Nutrition Analysis",
      type: "Team Project",
      role: "Frontend & Backend Developer",
      tech: "JavaScript, HTML, CSS, Node.js, Express.js",
      description: "A system to collect and analyze daily caloric intake. Implemented data visualization and user management features.",
      learned: "Data processing, team project management, and full-stack development workflow.",
      category: "Full-Stack"
    },
    {
      title: "HowTheCat",
      type: "Solo Project",
      role: "Game Developer",
      tech: "Godot Engine, Python (GDScript)",
      description: "A 2D farming simulation game built from scratch. Implemented game mechanics, physics, and user interaction systems.",
      learned: "Independent problem-solving, project planning, game engine development, and solo development lifecycle.",
      category: "Game Dev"
    }
  ];

  const skills = [
    {
      name: "JavaScript",
      logo: "JS",
      category: "Programming Language",
      description: "Core programming language for web development. Used extensively in frontend and backend projects."
    },
    {
      name: "TypeScript", 
      logo: "TS",
      category: "Programming Language",
      description: "Superset of JavaScript with static typing. Enhances code quality and maintainability."
    },
    {
      name: "Python",
      logo: "PY",
      category: "Programming Language",
      description: "Versatile programming language used for scripting, automation, and backend development."
    },
    {
      name: "HTML",
      logo: "HTML",
      category: "Markup Language",
      description: "Standard markup language for creating web pages and web applications."
    },
    {
      name: "CSS",
      logo: "CSS",
      category: "Styling Language",
      description: "Stylesheet language used for describing the presentation of web documents."
    },
    {
      name: "React",
      logo: "React",
      category: "Frontend Framework",
      description: "Used in Maintenance UP project for building interactive user interfaces."
    },
    {
      name: "Vue.js",
      logo: "Vue",
      category: "Frontend Framework",
      description: "Implemented in Autocar project for creating responsive frontend."
    },
    {
      name: "Node.js",
      logo: "Node",
      category: "Backend Runtime",
      description: "Backend development for multiple team projects, handling API endpoints."
    },
    {
      name: "Express.js",
      logo: "Express",
      category: "Backend Framework",
      description: "Web framework for Node.js used for building RESTful APIs and handling HTTP requests."
    },
    {
      name: "Tailwind CSS",
      logo: "TW",
      category: "CSS Framework",
      description: "Utility-first CSS framework for rapid UI development."
    },
    {
      name: "Next.js",
      logo: "Next",
      category: "React Framework",
      description: "React framework with server-side rendering and optimization features."
    },
    {
      name: "MySQL",
      logo: "MySQL",
      category: "Database",
      description: "Relational database used in projects for storing and managing data."
    },
    {
      name: "TiDB",
      logo: "TiDB",
      category: "Database",
      description: "Distributed SQL database used in Autocar project for handling vehicle repair data."
    },
    {
      name: "Godot Engine",
      logo: "Godot",
      category: "Game Engine",
      description: "2D/3D game engine used for developing HowTheCat farming simulation game."
    },
    {
      name: "Git",
      logo: "Git",
      category: "Version Control",
      description: "Essential tools for team collaboration and project management."
    },
    {
      name: "GitHub",
      logo: "GitHub",
      category: "Development Platform",
      description: "Web-based platform for version control and collaborative software development."
    },
    {
      name: "VS Code",
      logo: "VSC",
      category: "Development Tool",
      description: "Primary code editor with extensions for enhanced productivity."
    },
    {
      name: "Postman",
      logo: "Postman",
      category: "API Testing",
      description: "API testing and development tool used for testing backend endpoints."
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === "hero") {
      scrollToTop();
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openSkillModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeSkillModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  // Handle form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    setFormStatus('');

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setFormStatus('validation');
        return;
      }

      // Send to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setFormStatus(''), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    } finally {
      setIsFormSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            {/* Left - Brand */}
            <button 
              onClick={scrollToTop}
              className="text-4xl font-bold relative group"
            >
              <span className="text-gray-900 group-hover:text-red-500 transition-colors">Me</span>
              <span className="text-red-500 group-hover:text-gray-900 transition-colors">Tomas</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.75 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            {/* Center - Main Navigation */}
            <div className="hidden md:flex space-x-12">
              <button
                onClick={() => scrollToSection("about")}
                className="relative text-lg text-gray-800 hover:text-red-500 transition-colors font-medium group py-2"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="relative text-lg text-gray-800 hover:text-red-500 transition-colors font-medium group py-2"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="relative text-lg text-gray-800 hover:text-red-500 transition-colors font-medium group py-2"
              >
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
            
            {/* Right - Contact */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection("contact")}
                className="relative bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-12">
              <h1 className="text-9xl md:text-10xl lg:text-11xl font-extrabold mb-6 text-gray-900 tracking-tight">
                This
              </h1>
              <h1 className="text-9xl md:text-10xl lg:text-11xl font-extrabold mb-6 text-red-500 tracking-tight">
                Is
              </h1>
              <h1 className="text-9xl md:text-10xl lg:text-11xl font-extrabold mb-6 text-gray-900 tracking-tight">
                Me
              </h1>
              <h1 className="text-9xl md:text-10xl lg:text-11xl font-extrabold mb-6 text-red-500 tracking-tight">
                Tomas
              </h1>

              <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>

              <button
                onClick={() => scrollToSection("about")}
                className="inline-flex items-center px-10 py-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                Discover More
                <ChevronDown className="ml-3 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
              <div className="space-y-4 pt-6">
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
            <div className="space-y-8">
              <h3 className="text-3xl font-light text-gray-900 mb-6">
                Interests
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Fitness & Exercise",
                  "Travel & Adventure",
                  "Finance & Business",
                  "Self-Development",
                  "Reading Books",
                  "Gaming",
                ].map((interest, index) => (
                  <div
                    key={index}
                    className="bg-white/90 backdrop-blur rounded-xl p-4 text-center hover:bg-red-500 hover:text-white transition-all duration-300 border border-gray-200 hover:border-red-500 shadow-sm hover:shadow-md transform hover:scale-105"
                  >
                    <span className="font-medium text-gray-900 group-hover:text-white">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-red-500 shadow-lg hover:shadow-xl group"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm bg-red-500 text-white px-4 py-2 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3 font-medium uppercase tracking-wide">
                  {project.type}
                </p>
                <p className="text-sm text-red-600 mb-4 font-medium">
                  <strong>Role:</strong> {project.role}
                </p>
                <p className="text-gray-800 mb-4 leading-relaxed text-lg">
                  {project.description}
                </p>
                <p className="text-sm text-gray-700 mb-6 italic">
                  <strong>Learned:</strong> {project.learned}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.split(", ").map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="flex items-center text-red-500 hover:text-red-600 transition-colors font-medium">
                  View Details
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-4">
              Skills & Tools
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-800">
              Click on any skill to learn more about my experience
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                onClick={() => openSkillModal(skill)}
                className="bg-white/90 backdrop-blur rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl border border-gray-200 hover:border-red-500 group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors border group-hover:border-red-500">
                    <span className="text-sm font-bold text-white">
                      {skill.logo}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-500 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{skill.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Modal */}
      {isModalOpen && selectedSkill && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeSkillModal();
            }
          }}
        >
          <div className="bg-white rounded-2xl p-10 max-w-md w-full relative border shadow-2xl">
            <button
              onClick={closeSkillModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 border">
                <span className="text-lg font-bold text-white">
                  {selectedSkill.logo}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedSkill.name}
              </h3>
              <p className="text-red-500 text-sm mb-6 font-medium uppercase tracking-wide">
                {selectedSkill.category}
              </p>
              <p className="text-gray-800 leading-relaxed text-lg">
                {selectedSkill.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-2xl text-gray-800 leading-relaxed">
                I'm currently seeking internship opportunities in DevOps and
                Full-Stack Development. Let's connect!
              </p>
              
              <div className="space-y-6">
                <a
                  href="mailto:madname00@gmail.com"
                  className="flex items-center bg-white/90 backdrop-blur px-6 py-4 rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-300 border border-gray-200 hover:border-red-500 shadow-lg transform hover:scale-105 group"
                >
                  <Mail className="w-5 h-5 mr-4 text-red-500 group-hover:text-white" />
                  <span className="font-medium text-gray-900 group-hover:text-white">madname00@gmail.com</span>
                </a>
                
                <a
                  href="tel:093-494-9511"
                  className="flex items-center bg-white/90 backdrop-blur px-6 py-4 rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-300 border border-gray-200 hover:border-red-500 shadow-lg transform hover:scale-105 group"
                >
                  <Phone className="w-5 h-5 mr-4 text-red-500 group-hover:text-white" />
                  <span className="font-medium text-gray-900 group-hover:text-white">093-494-9511</span>
                </a>
              </div>
              
              <div className="flex space-x-6 pt-6">
                <a
                  href="https://linkedin.com/in/thithada"
                  className="bg-white/90 backdrop-blur p-4 rounded-2xl hover:bg-red-500 transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-red-500 shadow-lg group"
                >
                  <Linkedin className="w-6 h-6 text-gray-800 group-hover:text-white" />
                </a>
                <a
                  href="https://github.com/thithada"
                  className="bg-white/90 backdrop-blur p-4 rounded-2xl hover:bg-red-500 transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-red-500 shadow-lg group"
                >
                  <Github className="w-6 h-6 text-gray-800 group-hover:text-white" />
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Send a Message</h3>
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 bg-white/70 backdrop-blur text-gray-900"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 bg-white/70 backdrop-blur text-gray-900"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 bg-white/70 backdrop-blur text-gray-900"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 bg-white/70 backdrop-blur resize-none text-gray-900"
                    placeholder="Your message here..."
                  />
                </div>
                
                <button
                  onClick={handleFormSubmit}
                  disabled={isFormSubmitting}
                  className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:transform-none shadow-lg flex items-center justify-center"
                >
                  {isFormSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </button>
                
                {/* Form Status Messages */}
                {formStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    <p className="font-medium">✅ Message sent successfully!</p>
                    <p className="text-sm">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    <p className="font-medium">❌ Failed to send message.</p>
                    <p className="text-sm">Please try again or contact me directly via email.</p>
                  </div>
                )}
                
                {formStatus === 'validation' && (
                  <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg">
                    <p className="font-medium">⚠️ Please fill in all fields.</p>
                    <p className="text-sm">All fields are required to send your message.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white/90 backdrop-blur border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-700 text-lg">
            © 2024 Thithada Islam. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Portfolio;