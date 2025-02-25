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
    <div className="bg-black min-h-screen">
      {/* Navbar */}
        <NavBar />

      {/* Hero Section with Background Image */}
        <HeroSection />

      {/* Skills Section */}
        <Skills />
  
      {/* Projects Section */}
        <Projects />

      {/* About Me Section */}
        <AboutMe />

      {/* Contact Section */}
        <Contact />

      {/* Helpers */}
        <GoUpButton />
    </div>
  );
}

export default App;
