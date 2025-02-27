import React from "react";

function HeroSection() {
  return (
    <div id="home"
      className="bg-cover bg-bottom min-h-screen flex flex-col items-center justify-center sm:items-start h-[600px] md:h-[800px] text-white border-b-4 border-custom-dark"
      style={{ backgroundImage: "url('/back3.jpg')" }}
      aria-label="Hero Section"
    >
      <div className="text-center sm:text-left sm:ms-[100px] px-2">
        <p className="font-lora text-xl md:text-3xl -mt-3 text-white font-bold">
          Front-end Developer
        </p>
        <h1
          className="mt-2 text-4xl md:text-6xl font-bold mb-4 font-prata text-custom-medium pt-1 tracking-wider"
          style={{
            textShadow: "3px 0 0px #fff",
          }}
        >
          RENA HASHIMI
        </h1>

        {/* Motivational Slogan */}
        <div className="pt-8 pt-[150px] text-custom-medium">
          <p className="font-prata text-lg md:text-2xl tracking-wide"
             style={{
              textShadow: "1px 0 0px #fff",
            }}
          >
            Roar with purpose, bloom with heart
          </p>
          <p className="font-lobster pt-2 text-2xl md:text-4xl tracking-wide">
            —every line of code is my expression          
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
