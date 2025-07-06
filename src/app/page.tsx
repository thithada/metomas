'use client'
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Maintenance UP",
      type: "Team Project",
      tech: "React, Node.js, MySQL",
      description: "A facility maintenance request and tracking system on campus. Solved broken facility reporting issues by creating an efficient request management system.",
      category: "Full-Stack"
    },
    {
      title: "Autocar",
      type: "Team Project", 
      tech: "Vue.js, Express, TiDB",
      description: "A repair-tracking system for personal vehicles sent to service centers. Features real-time status updates and progress notifications.",
      category: "Full-Stack"
    },
    {
      title: "Nutrition Analysis",
      type: "Team Project",
      tech: "JavaScript, HTML, CSS",
      description: "A project built according to instructor requirements, aimed to collect and analyze each user's daily caloric intake.",
      category: "Frontend"
    },
    {
      title: "HowTheCat",
      type: "Solo Project",
      tech: "JavaScript, Canvas API",
      description: "A personal 2D farming game designed and developed from scratch, exploring core gameplay mechanics, interaction, and visual style.",
      category: "Game Dev"
    }
  ];

  const skills = {
    "Testing": ["Manual Testing", "Test Case Writing", "Bug Reporting"],
    "Programming": ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"],
    "Frontend": ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    "Backend": ["Node.js", "Express"],
    "Database": ["MySQL", "TiDB"],
    "Tools": ["Git", "GitHub", "VS Code", "Postman", "JIRA", "Figma"]
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Thithada Islam
            </h1>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                    <span className="text-4xl font-bold">Yo This Tomasa</span>
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Thithada Islam
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-6">
                Software Engineering Student
              </p>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                Passionate about QA and Software Testing • University of Phayao • GPA 3.39
              </p>
              <button 
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
                <ChevronDown className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I'm a Software Engineering student passionate about QA and software testing. I enjoy the process of identifying bugs and resolving issues to enhance software reliability.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Currently seeking an internship opportunity to expand my expertise and gain practical experience in quality assurance testing.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span>University of Phayao</span>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 text-blue-400 mr-3 text-center">🎓</span>
                  <span>Software Engineering (2023 - Present)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 text-blue-400 mr-3 text-center">📊</span>
                  <span>GPA: 3.39</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Fitness & Exercise", "Travel & Adventure", "Finance & Business", "Self-Development", "Reading Books", "Gaming"].map((interest, index) => (
                  <div key={index} className="bg-slate-700 rounded-lg p-3 text-center hover:bg-slate-600 transition-colors">
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-blue-500">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                  <span className="text-sm bg-purple-600 px-3 py-1 rounded-full">{project.category}</span>
                </div>
                <p className="text-sm text-slate-400 mb-2">{project.type}</p>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.split(', ').map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-slate-700 px-2 py-1 rounded text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  View Details
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
                <div className="space-y-2">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm currently seeking internship opportunities in QA and software testing. Let's connect!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <a href="mailto:madname00@gmail.com" className="flex items-center bg-slate-800 px-6 py-3 rounded-full hover:bg-slate-700 transition-colors border border-slate-600 hover:border-blue-500">
              <Mail className="w-5 h-5 mr-3 text-blue-400" />
              madname00@gmail.com
            </a>
            <a href="tel:093-494-9511" className="flex items-center bg-slate-800 px-6 py-3 rounded-full hover:bg-slate-700 transition-colors border border-slate-600 hover:border-blue-500">
              <Phone className="w-5 h-5 mr-3 text-blue-400" />
              093-494-9511
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/thithada" className="bg-slate-800 p-4 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 border border-slate-600 hover:border-blue-500">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/thithada" className="bg-slate-800 p-4 rounded-full hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 border border-slate-600 hover:border-gray-500">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Thithada Islam. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;