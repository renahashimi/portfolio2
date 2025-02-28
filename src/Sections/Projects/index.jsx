import React, { useState } from "react";
import projects from "./projectsData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";


function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showFullImage, setShowFullImage] = useState(null);

  return (
    <section id="projects" className="m-h-screen flex flex-col items-center justify-center text-white pt-[100px]">
      <h2
        className="mb-10 text-6xl sm:text-7xl md:text-8xl text-white tracking-wider font-allison font-bold text-center pt-[60px]"
        style={{ textShadow: "5px 8px 2px #6E5D5D" }}
      >
        My Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 pt-[60px]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white font-lora shadow-lg p-2 text-center border-2 border-custom-dark transition-all duration-300 relative shadow-[0_0_3px_#998787,0_0_12px_#998787,0_0_10px_black] hover:shadow-[0_0_10px_#6E5D5D,0_0_10px_#000,0_0_30px_#6E5D5D] opacity-80 hover:opacity-100"
          >
            <div className="max-w-[450px] md:max-w-full block md:flex md:flex-row lg:block items-center lg:items-start">
            <img
              src={project.image}
              alt={project.title}
              className="md:w-1/2 lg:w-full h-full max-h-[330px] lg:h-64 object-cover mb-4 lg:mb-0 lg:w-1/2 lg:h-auto lg:mr-4 border-2 border-custom-dark cursor-pointer shadow-lg shadow-black"
              onClick={() => setSelectedProject(project)}
            />
              <div className="md:w-1/2 flex flex-col md:ms-6 lg:ms-0 lg:block lg:w-full items-center lg:items-start">
                <h3 className="text-xl font-black uppercase font-lora text-black mt-5 pb-2 border-b-2 border-custom-dark">{project.name}</h3>
                <h4 className="text-lg font-semibold font-lora py-2 text-custom-dark h-[50px]">{project.title}</h4>
                
                <p className="md:text-base font-lora py-2 text-black p-2 md:h-[120px]">{project.descriptionSmall}</p>

                <div className="flex justify-center my-2 space-x-4">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center border-2 border-black max-w-1/2 text-black px-2 py-1 rounded-lg hover:bg-custom-dark hover:text-white transition">
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-900 text-white border-2 border-black px-2 py-1 rounded-lg hover:bg-custom-dark transition">
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>
              </div>
              
            </div>
            <button
                  onClick={() => setSelectedProject(project)}
                  className="my-3 px-4 py-2 text-black bg-custom-light font-black uppercase rounded-lg hover:bg-custom-dark hover:border-white hover:text-white transition-all w-3/4"
                >
                  Read More
                </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-5 z-[80]"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-custom-light text-black font-lora p-6 w-full overflow-y-auto max-h-[80vh] max-w-[95%]  relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-base sm:text-2xl uppercase font-bold mb-4">{selectedProject.name} - {selectedProject.title}</h2>

            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto max-w-full object-cover rounded-lg mb-4 cursor-pointer lg:w-1/2 lg:mr-4"
                onClick={() => setShowFullImage(selectedProject.image)}
              />

              {/* Content */}
              <div className="lg:w-1/2">
              <p className="text-lg font-play my-2 font-semibold bg-custom-medium/20  uppercase">Description</p>
                <p className="text-sm md:text-xl text-black lg:text-xl mb-4">{selectedProject.description}</p>
                <p className="text-lg font-play my-2 font-semibold bg-custom-medium/20 p-1 mt-10 uppercase">Created with</p>
                <ul className="flex flex-wrap gap-2 mt-2 mb-4 font-semibold">
                  {selectedProject.skills.map((skill, index) => (
                    <li key={index} className="border-2 border-custom-dark uppercase mt-2 px-2 py-1 rounded text-sm md:text-lg">
                      {skill}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-play my-2 font-semibold bg-custom-medium/20 p-1 mt-10 uppercase">Links</p>
                <div className="block sm:flex gap-2 mt-4 mb-4 font-semibold">
          
              <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center border-2 border-black max-w-1/2 text-black px-2 py-1 rounded-lg mb-3 sm:mb-0 hover:bg-custom-dark hover:text-white transition">
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </a>
              <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center border-2 border-black bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-custom-dark hover:border-black transition">
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="flex w-3/4 mx-auto justify-center mt-4 px-4 py-2 text-black text-lg bg-custom-medium hover:bg-custom-dark border-2 border-custom-light font-black uppercase rounded-lg hover:bg-custom-dark hover:border-2 hover:border-black hover:text-white transition-all w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Full-Size Image Modal */}
      {showFullImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 p-5 z-[99]"
          onClick={() => setShowFullImage(null)}
        >
          <img
            src={showFullImage}
            alt="Full-Size Project"
            className="max-w-full max-h-[70vh] object-contain border-4 border-custom-dark"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setShowFullImage(null)}
            className="absolute top-5 right-5 text-white text-4xl bg-black bg-opacity-50 px-4 py-2 rounded-lg"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
