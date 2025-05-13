// src/components/ScrollToTop.js
import React, { useState, useEffect } from 'react';
import { SlArrowUp } from "react-icons/sl";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility); // Cleanup
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 text-yellow-500 flex justify-center items-center h-15 w-15 right-8 border-1 border-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 hover:text-white transition-all duration-300 z-50"
        >
          <SlArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;