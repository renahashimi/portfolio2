import React from "react";

function NavBar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 flex text-white sm:tracking-wider md:text-xl w-full p-4 font-play uppercase justify-center space-x-6 md:space-x-12 z-50"
      aria-label="Main Navigation"
    >
      <a href="#projects" className="cursor-pointer hover:text-gray-400" aria-label="Projects">
        Projects
      </a>
      <a href="#about" className="cursor-pointer hover:text-gray-400" aria-label="About Me">
        About Me
      </a>
      <a href="#contact" className="cursor-pointer hover:text-gray-400" aria-label="Contact">
        Contact
      </a>
    </nav>
  );
}

export default NavBar;
