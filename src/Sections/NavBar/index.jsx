import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons from react-icons

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed flex justify-between items-center top-0 left-0 right-0 z-50 bg-black bg-opacity-90 border-b-2 border-custom-dark text-white sm:tracking-wider w-full p-4 font-play">
      <div className="flex items-center">
        {/* Logo & Name */}
        <div className="flex items-center">
          <img src="/logo2.png" alt="Logo" className="w-10 h-auto"/>
          <a href="#home">
          <h2 className="uppercase text-custom-light font-prata mt-2 ms-3 text-base md:text-xl hover:text-custom-medium transition-all">
            rena hashimi
          </h2>          
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white ml-auto flex justify-end focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation"
      >
        {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent 
        md:flex transition-all duration-300 ease-in-out 
        ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 md:opacity-100 md:scale-y-100"} 
        origin-top md:origin-center backdrop-blur-md shadow-lg md:shadow-none rounded-md md:rounded-none`}
        aria-label="Main Navigation"
      >
      <ul className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left lg:text-xl p-4 md:p-0 uppercase">
        <li><a href="#projects" onClick={() => setIsOpen(false)} className="block py-6 md:py-0 px-2 hover:text-gray-400 transition">Projects</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)} className="block py-6 md:py-0 px-2 hover:text-gray-400 transition">Skills</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)} className="block py-6 md:py-0 px-2 hover:text-gray-400 transition">About Me</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)} className="block py-6 md:py-0 px-2 hover:text-gray-400 transition">Contact</a></li>
      </ul>
      </nav>
    </header>
  );
}

export default NavBar;
