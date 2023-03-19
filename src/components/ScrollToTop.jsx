import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="button scrollToTop shadow" onClick={scrollToTop}>
      <AiOutlineArrowUp />
    </div>
  );
};

export default ScrollToTop;
