import React from "react";

function HeroSection() {
  return (
    <div
      className="bg-cover bg-bottom flex flex-col items-center justify-center sm:items-start h-[600px] text-white"
      style={{ backgroundImage: "url('/backImg.jpg')" }}
      aria-label="Hero Section"
    >
      <div className="text-center sm:text-left sm:ms-[150px] px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-prata text-custom-medium bg-black/60 pt-1 tracking-wider">
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
