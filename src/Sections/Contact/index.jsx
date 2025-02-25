import React from "react";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="md:min-h-screen flex flex-col items-center justify-center text-white  mt-[100px] pb-[150px]">
      <h2 className="mb-10 text-3xl md:text-5xl text-custom-light tracking-wider font-play font-bold uppercase text-center">
        Connect with me
      </h2>
      <p className="font-lora text-white text-center mx-10 pb-10 text-xl"><span className="font-black">Let's connect!</span> I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
      <div className="text-center text-custom-dark">
        <div className="flex space-x-10">
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
      </section>
  );
}

export default Contact;
