import React from "react";
import NavBar from "./Sections/NavBar";
import HeroSection from "./Sections/HeroSection";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import AboutMe from "./Sections/AboutMe";
import Contact from "./Sections/Contact";
import GoUpButton from "./Helpers/GoUpBtn";

function App() {
  return (
    <div className="bg-black">
      {/* Main Content */}
      <div className="relative z-10 bg-black max-w-[1400px] mx-auto border-4 border-custom-medium shadow-[0_0_35px_#998787] transition-all duration-300">
        
        {/* Navbar */}
        <div className="py-5">
          <NavBar />
        </div>

        {/* Hero Section */}
        <div className="py-16">
          <HeroSection />
        </div>

        {/* Projects Section */}
        <div className="py-16">
          <Projects />
        </div>

        {/* Skills Section */}
        <div className="py-16">
          <Skills />
        </div>

        {/* About Me Section */}
        <div className="py-16">
          <AboutMe />
        </div>

        {/* Contact Section */}
        <div className="pt-16">
          <Contact />
        </div>

        {/* Helpers */}
          <GoUpButton />
      </div>
    </div>
  );
}

export default App;
