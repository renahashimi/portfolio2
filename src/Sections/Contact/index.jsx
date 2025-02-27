import React from "react";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center text-black bg-custom-medium mt-[100px] pb-[150px]">
      <h2 className="mb-10 text-7xl md:text-8xl text-black tracking-wider font-allison font-bold text-center pt-[60px]" 
        style={{ textShadow: "5px 8px 2px #6E5D5D, 0 0 2px #B000B0" }}>
        Connect with me
      </h2>
      <p className="font-lora text-black text-center mx-10 pb-10 text-xl md:text-2xl"><span className="font-black">Let's connect!</span> I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
     
      <div className="w-full h-full">

  <div className=" flex py-3 text-center text-black w-full justify-center bg-custom-dark">
    <div className="flex space-x-12">
      <a
        href="mailto:r.ah@live.no"
        target="_blank"
        rel="noopener noreferrer"
        className="text-6xl hover:text-blue-800"
        aria-label="Send me an email"
      >
        <FaEnvelope />
      </a>
      <a
        href="https://www.instagram.com/renahashimi/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-6xl hover:text-red-800"
        aria-label="Follow me on Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://github.com/renahashimi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-6xl hover:text-green-800"
        aria-label="Check out my GitHub"
      >
        <FaGithub />
      </a>
    </div>
  </div>
</div>

      </section>
  );
}

export default Contact;
