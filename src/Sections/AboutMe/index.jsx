import React from "react";

function AboutMe() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center text-white mx-auto mt-[30px] lg:mt-0 p-2">
      <h2
        className="mb-10 text-6xl sm:text-7xl md:text-8xl text-white tracking-wider font-allison font-bold text-center pt-[60px]"
        style={{ textShadow: "5px 8px 6px #6E5D5D" }}
      >
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-[60px]">
        {/* Image */}
        <img 
          src="/myImg.png" 
          alt="Img" 
          className="w-48 md:w-60 lg:w-72 h-auto rounded-full opacity-85 object-cover md:rounded-none md:border-2 md:border-custom-dark md:shadow-[0_0_5px_#998787] md:mt-[50px] transition-all duration-300"
        />

        {/* Content */}
        <div className="max-w-lg text-center md:text-left font-lora text-lg space-y-4 p-3">
          <p className="text-2xl font-black text-custom-light">Hi, I'm Rena!</p>

          <p>
            I'm a front-end developer passionate about building clean, responsive, and user-friendly websites. I specialize in HTML, CSS, JavaScript, and React to create seamless digital experiences.
          </p>

          <p>
            I’m currently studying <span className="font-semibold">Front-End Development</span> at <span className="font-semibold">Noroff School of Technology and Digital Media</span>, expecting to graduate in <span className="font-semibold">March 2025</span>. My studies have given me hands-on experience in modern web technologies, UI/UX design, and problem-solving through code.
          </p>

          <p>
            I love learning new technologies and staying up-to-date with the latest design trends. When I’m not coding, I explore design aesthetics and refine my creative skills.
          </p>

        </div>
      </div>
    </section>
  );
}

export default AboutMe;
