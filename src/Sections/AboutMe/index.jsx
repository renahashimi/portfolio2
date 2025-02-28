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
          src="/myImg.jpeg" 
          alt="Img" 
          className="w-48 md:w-60 lg:w-72 h-auto rounded-full opacity-85 object-cover md:mt-[40px]"
        />

     {/* Content */}
<div className="max-w-lg text-center md:text-left font-lora text-lg space-y-4 p-3">

<p className="text-2xl font-black text-custom-light">Hi, I'm Rena!</p>

<p>
  I'm a front-end developer passionate about building clean, responsive, and user-friendly websites. 
  I specialize in HTML, CSS, JavaScript, and React to craft seamless digital experiences.
</p>

<p>
  I stay up-to-date with the latest technologies and design trends to continually improve my craft. 
  When I'm not coding, I dive into design aesthetics to refine my creative skills and expand my knowledge.
</p>

<p>
  I approach design with clarity and simplicity, aiming to create intuitive user experiences. 
  Every project is an opportunity to blend creativity with functionality—writing code that not only works but feels right.
</p>


</div>

      </div>
       {/* Education Section */}
  <div className="block font-lora items-center text-center md:text-start max-w-lg lg:max-w-[700px]">
    <h3 className="text-xl font-play font-bold text-custom-medium mt-10 mb-3">EDUCATION</h3>
    <p className="font-semibold">Front-End Development</p>
    <p className="mt-2 text-lg font-prata">Noroff School of Technology and Digital Media</p>
    <p className="text-base text-custom-light mt-2">
      Gained hands-on experience in modern web technologies, UI/UX principles, and problem-solving through code.
    </p>

  </div>
    </section>
  );
}

export default AboutMe;
