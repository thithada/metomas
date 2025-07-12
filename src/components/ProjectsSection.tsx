// src/components/ProjectsSection.tsx
'use client'

import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  type: string;
  role: string;
  tech: string;
  description: string;
  learned: string;
  category: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
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

  return (
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
  );
};

export default ProjectsSection;
