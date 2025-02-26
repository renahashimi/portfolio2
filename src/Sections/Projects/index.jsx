import React, { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Holidaze",
    title: "Project Exam 2",
    image: "/Holidaze.jpg",
    description: "Holidaze is a modern, user-friendly holiday venue booking platform I built as part of my final exam in Front-End Development at Noroff. The goal of the project was to demonstrate my ability to create dynamic, responsive web applications using React and Tailwind CSS. The platform allows users to browse various holiday destinations and make bookings directly through the site. I integrated API calls for fetching venue data, and focused on creating a clean, responsive user interface with smooth transitions.",
    skills: ["React", "Tailwind", "Vite"],
    demoLink: "https://holidaze-pe2-rh.netlify.app/",
    codeLink: "https://github.com/renahashimi/holidaze-pe2.git",
  },
  {
    id: 2,
    name: "Lunaura",
    title: "JavaScript Frameworks",
    image: "/Lunaura.jpg",
    description: "Lunaura is a fully functional eCommerce website I developed during my intensive React learning module. This project required me to implement React in combination with Tailwind CSS and Styled-components to create a responsive, styled, and highly interactive online store. The website allows users to browse products, add them to the cart, and proceed to checkout. I utilized state management with React hooks, ensuring smooth updates to the user interface as users interact with the site. Lunaura helped me solidify my understanding of React's component-based architecture and advanced styling techniques.",
    skills: ["React", "Tailwind", "Vite", "Styled-components"],
    demoLink: "https://lunaura-rh-reactapp.netlify.app",
    codeLink: "https://github.com/renahashimi/fed-frameworks-ca.git",
  },
  {
    id: 3,
    name: "Midas Touch",
    title: "Semester Project 2",
    image: "/MidasTouch.jpeg",
    description: "Midas Touch is a web-based auction platform where users can list items, place bids, and manage their auctions. The site simulates a real auction environment, with users starting with 1000 credits, which they can use to bid on listings. This project allowed me to hone my skills in JavaScript, Bootstrap, Sass, and web development fundamentals such as forms, state management, and user authentication. I implemented a bidding system, allowing users to interact with listings and keep track of their credits and bids in real-time.",
    skills: ["JavaScript", "Bootstrap", "Sass", "HTML", "CSS"],
    demoLink: "https://midastouch-rh-sp2.netlify.app/",
    codeLink: "https://github.com/renahashimi/SemesterProject2.git",
  },
];
function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showFullImage, setShowFullImage] = useState(null);

  return (
    <section id="projects" className="flex flex-col items-center justify-center text-white">
      <div className="relative h-16 w-full mb-6 border-t-4 border-b-2 border-pink-600">
        <img src="/back3.jpg" alt="Background" className="w-full h-full object-cover" />
        <h2 className="absolute inset-0 flex items-center justify-end pe-6 text-3xl md:text-4xl tracking-widest font-play font-bold uppercase text-center bg-black bg-opacity-10 text-custom-light">
          My Projects
        </h2>
      </div>
     
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 mt-[60px]">
  {projects.map((project) => (
    <div 
      key={project.id} 
      className="bg-white font-lora shadow-lg p-2 text-center border-2 border-pink-500 transition-all duration-300 relative 
                 shadow-[0_0_10px_#ff00ff,0_0_10px_#ff00ff,0_0_10px_#ff00ff] hover:shadow-[0_0_10px_#ff00ff,0_0_10px_#ff00ff,0_0_30px_#ff00ff]"
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover mb-4 cursor-pointer" 
        onClick={() => setSelectedProject(project)}
      />
      <h3 className="text-xl font-black uppercase font-lora text-black rounded-lg border-2 border-custom-light">{project.name}</h3>
      <h4 className="text-xl font-semibold font-lora py-2 text-custom-dark h-[70px]">{project.title}</h4>
      <button 
        onClick={() => setSelectedProject(project)} 
        className="mt-4 px-4 py-2 text-black bg-custom-light font-black uppercase rounded-lg 
                   hover:bg-custom-dark hover:border-white transition-all w-full"
      >
        Read More
      </button>
    </div>
  ))}
</div>



{/* Modal */}
{selectedProject && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-5 z-[80]">
    <div className="bg-custom-medium text-white font-lora p-6 w-full overflow-y-auto max-h-[80vh]">
      <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
      
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
          <p className="text-lg lg:text-xl mb-4">{selectedProject.description}</p>
          <p className="text-xl mt-10 font-semibold">Skills:</p>
          <ul className="flex gap-2 mt-2 mb-4 font-semibold">
            {selectedProject.skills.map((skill, index) => (
              <li key={index} className="bg-custom-dark uppercase px-2 py-1 rounded text-sm">{skill}</li>
            ))}
          </ul>
          <p className="text-xl mt-10 font-semibold">Links:</p>
          <div className="flex gap-2 mt-2 mb-4 font-semibold">
            <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="bg-custom-dark uppercase px-2 py-1 rounded text-sm hover:underline">Live Demo</a>
            <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer" className="bg-custom-dark uppercase px-2 py-1 rounded text-sm hover:underline">GitHub</a>
          </div>
        </div>
      </div>

      <button 
        onClick={() => setSelectedProject(null)} 
        className="mt-4 px-4 py-2 text-black bg-custom-light hover:bg-custom-dark border-2 border-custom-light font-black uppercase rounded-lg hover:bg-custom-dark hover:border-2 hover:border-white transition-all w-full"
      >
        Close
      </button>
    </div>
  </div>
)}


      {/* Full-Size Image Modal */}
      {showFullImage && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-5 z-[99]"
          onClick={() => setShowFullImage(null)} // Click background to close
        >
          <img 
            src={showFullImage} 
            alt="Full-Size Project" 
            className="max-w-full max-h-screen object-contain"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
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