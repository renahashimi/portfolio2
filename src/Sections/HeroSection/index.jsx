import React from "react";

function HeroSection() {
  return (
    <div
      className="bg-cover bg-bottom min-h-screen flex flex-col items-center justify-center sm:items-start h-[600px] md:h-[800px] text-white"
      style={{ backgroundImage: "url('/back2.jpg')" }}
      aria-label="Hero Section"
    >
      <div className="text-center sm:text-left sm:ms-[100px] px-2">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-prata text-custom-medium pt-1 tracking-wider">
          RENA HASHIMI
        </h1>
        <p className="font-lora text-lg md:text-2xl -mt-3 text-white font-bold">
          Front-end Developer
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
