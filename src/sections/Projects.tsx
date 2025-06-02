 
/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "IndieVibe",
      description:
        "A platform to help users find nearby boutiques and book appointments easily. Built with Next.js, Tailwind CSS, and TypeScript for a modern experience.",
      image: "/image.png",
      githubLink: "https://github.com/Subodhini0906/IndieVibe",
    },
    {
      id: 2,
      title: "Be My Vision",
      description:
        "Support tools for visually impaired individuals to navigate daily life using smart technologies. Focused on accessibility and independence.",
      image: "/vision.png",
      githubLink: "https://github.com/Epics-VIT-Bhopal/FastAPIBackend",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold border-b-4 border-purple-500 inline-block pb-2">
            Projects
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            A curated collection of creative works spanning technology and design
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              } items-center gap-12`}
            >
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-purple-500 hover:text-white transition"
                >
                  View Project
                </a>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 shadow-lg rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-500">More projects coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
