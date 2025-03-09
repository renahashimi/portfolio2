import React, { useState, useEffect } from "react";

/**
 * GoUpButton component that displays a "scroll to top" button when the user scrolls down.
 * The button becomes visible once the user scrolls more than 300 pixels from the top.
 * Clicking the button smoothly scrolls the user back to the top of the page.
 *
 * @component
 * @example
 * return (
 *   <GoUpButton />
 * )
 */
function GoUpButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    /**
     * Handles the scroll event and determines whether the "Go Up" button
     * should be displayed based on the scroll position.
     */
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Scrolls the window smoothly to the top when the "Go Up" button is clicked.
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-custom-light text-black text-4xl py-1 px-2 rounded-full shadow-lg hover:bg-white border-4 border-black hover:shadow-[0_0_25px_#996689] md:mt-[50px] transition-all duration-300"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
}

export default GoUpButton;
