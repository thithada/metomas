// src/components/SkillsSection.tsx
'use client'

import React from 'react';

interface Skill {
  name: string;
  logo: string;
  category: string;
  description: string;
}

interface SkillsSectionProps {
  openSkillModal: (skill: Skill) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ openSkillModal }) => {
  const skills: Skill[] = [
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

  return (
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
  );
};

export default SkillsSection;
