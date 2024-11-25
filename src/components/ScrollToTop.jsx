"use client";
import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  const handleToggle = () => {
    window.scrollTo({
      top: "0",
      behaviour: "smooth",
    });
  };
  return (
    <div>
      {show && (
        <div onClick={handleToggle} className="fixed right-5 bottom-5 z-50">
          <FaArrowCircleUp className="text-5xl text-red-600 cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
