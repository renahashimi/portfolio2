import React, { useState, useEffect } from "react";

function GoUpButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-custom-light text-black text-3xl py-1 px-2 rounded-full shadow-lg hover:bg-white border-4 border-custom-medium hover:shadow-[0_0_25px_#ff00ff] md:mt-[50px] transition-all duration-300"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
}

export default GoUpButton;
