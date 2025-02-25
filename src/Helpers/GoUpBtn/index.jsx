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
        className="fixed bottom-10 right-10 bg-custom-dark font-black text-black text-3xl p-3 rounded-full shadow-lg hover:bg-custom-light transition"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
}

export default GoUpButton;
