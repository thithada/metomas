'use client'
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Close modal on ESC key press
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeSkillModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isModalOpen]);

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

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openSkillModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeSkillModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">MeTomas</h1>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-red-500 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-red-500 transition-colors font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-700 hover:text-red-500 transition-colors font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-red-500 transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-12">
              <h1 className="text-8xl md:text-9xl font-extrabold mb-6 text-gray-900 tracking-tight">
                I'm
              </h1>
              <h1 className="text-8xl md:text-9xl font-extrabold mb-6 text-red-500 tracking-tight">
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
      <section id="about" className="py-20 px-6 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm a Software Engineering student with growing interest in
                DevOps and automation. I enjoy learning about different
                technologies and how teams collaborate to build and deploy
                software efficiently.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Looking for an internship opportunity to expand my knowledge,
                contribute to projects, and learn from experienced professionals
                in a team environment.
              </p>
              <div className="space-y-4 pt-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
                  <MapPin className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-gray-700 text-lg">
                    University of Phayao
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
                  <span className="w-5 h-5 text-red-500 mr-3 text-center text-lg">
                    🎓
                  </span>
                  <span className="text-gray-700 text-lg">
                    Software Engineering (2023 - Present)
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
                  <span className="w-5 h-5 text-red-500 mr-3 text-center text-lg">
                    📊
                  </span>
                  <span className="text-gray-700 text-lg">GPA: 3.39</span>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-light text-gray-800 mb-6">
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
                    className="bg-white/80 backdrop-blur rounded-xl p-4 text-center hover:bg-red-500 hover:text-white transition-all duration-300 border border-gray-200 hover:border-red-500 shadow-sm hover:shadow-md transform hover:scale-105"
                  >
                    <span className="font-medium">{interest}</span>
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
            <h2 className="text-5xl font-light text-gray-800 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-red-500 shadow-lg hover:shadow-xl group"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm bg-red-500 text-white px-4 py-2 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3 font-medium uppercase tracking-wide">
                  {project.type}
                </p>
                <p className="text-sm text-red-600 mb-4 font-medium">
                  <strong>Role:</strong> {project.role}
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                  {project.description}
                </p>
                <p className="text-sm text-gray-600 mb-6 italic">
                  <strong>Learned:</strong> {project.learned}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.split(", ").map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full border"
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
      <section id="skills" className="py-20 px-6 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-800 mb-4">
              Skills & Tools
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
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
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors border group-hover:border-red-500">
                    <span className="text-sm font-bold text-white">
                      {skill.logo}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-500 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{skill.category}</p>
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
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
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
              <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border">
                <span className="text-lg font-bold text-white">
                  {selectedSkill.logo}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {selectedSkill.name}
              </h3>
              <p className="text-red-500 text-sm mb-6 font-medium uppercase tracking-wide">
                {selectedSkill.category}
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                {selectedSkill.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-800 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            I'm currently seeking internship opportunities in DevOps and
            Full-Stack Development. Let's connect!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <a
              href="mailto:madname00@gmail.com"
              className="flex items-center bg-white/90 backdrop-blur px-8 py-4 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 border border-gray-200 hover:border-red-500 shadow-lg transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-3 text-red-500" />
              <span className="font-medium">madname00@gmail.com</span>
            </a>
            <a
              href="tel:093-494-9511"
              className="flex items-center bg-white/90 backdrop-blur px-8 py-4 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 border border-gray-200 hover:border-red-500 shadow-lg transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-3 text-red-500" />
              <span className="font-medium">093-494-9511</span>
            </a>
          </div>
          <div className="flex justify-center space-x-8">
            <a
              href="https://linkedin.com/in/thithada"
              className="bg-white/90 backdrop-blur p-4 rounded-full hover:bg-red-500 transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-red-500 shadow-lg group"
            >
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-white" />
            </a>
            <a
              href="https://github.com/thithada"
              className="bg-white/90 backdrop-blur p-4 rounded-full hover:bg-red-500 transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-red-500 shadow-lg group"
            >
              <Github className="w-6 h-6 text-gray-700 group-hover:text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white/80 backdrop-blur border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-lg">
            © 2024 Thithada Islam. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;