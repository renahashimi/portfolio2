import React, { useState, useEffect } from "react";
import NavBar from "./Sections/NavBar";
import HeroSection from "./Sections/HeroSection";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import AboutMe from "./Sections/AboutMe";
import Contact from "./Sections/Contact";
import GoUpButton from "./Helpers/GoUpBtn";

/**
 * App component that serves as the main entry point for the application.
 * It includes various sections such as the NavBar, HeroSection, Skills, Projects, AboutMe, and Contact.
 * Additionally, a GoUpButton helper is included for smooth scrolling to the top.
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black">
      {/* Display Logo */}
      {showLogo && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-[#111111]">
  <div className="block">
    <img src="/logo2.png" alt="Rena Hashimi Logo" id="logo" />
    <h1
      className="my-5 text-center text-4xl md:text-6xl font-bold mb-4 font-prata text-[#757575] pt-1 tracking-wider"
      style={{
        textShadow: "3px 0 0px #fff",
      }}
    >
      RENA HASHIMI
    </h1>
  </div>
</div>

      )}

      {/* Main Content */}
      <div className="relative z-10 bg-[#111111] max-w-[1400px] mx-auto border-4 border-custom-medium shadow-[0_0_35px_#998787] transition-all duration-300">
        
        {/* Navbar */}
        <div>
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
