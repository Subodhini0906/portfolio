/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "IndieVibe",
      description: "IndieVibe is a platform designed to help busy men and women find nearby boutiques and easily book appointments without having to visit in person. This website allows users to browse boutiques, read reviews, and secure appointments, saving them time and effort. It’s built with Next.js, Tailwind CSS, and TypeScript, providing a sleek, modern, and responsive web experience.",
      image: "\image.png",
      githubLink: "https://github.com/Subodhini0906/IndieVibe"
    },
    {
      id: 2,
      title: "Be My Vision",
      description: "This project is dedicated to providing support and tools for visually impaired individuals to navigate and handle their daily activities with autonomy and effectiveness. The aim is to provide visually impaired individuals with a means to perceive their environment in a manner similar to that of individuals with normal vision. ",
      image: "\vision.png",
      githubLink: "https://github.com/Epics-VIT-Bhopal/FastAPIBackend"
    },

  ];

  return (
    <section id="projects" className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 border-b-4 inline-block border-purple-500 pb-2">
            Projects
          </h2>
          <p className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto">
            A curated collection of creative works spanning photography, technology, and design
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative bg-gray-900 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-2xl flex ${
                index % 2 === 0 ? 'flex-col lg:flex-row' : 'flex-col lg:flex-row-reverse'
              }`}
            >
              <div className="relative lg:w-1/2 h-80 lg:h-96 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
                >
                  Full project
                </a>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400">
            More projects coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;