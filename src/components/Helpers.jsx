import React, { useEffect, useRef } from "react";
import Call from "./Call";
import ScrollToTop from "./ScrollToTop";

const Helpers = () => {
  const helper = useRef(null);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        helper.current.classList.add("active");
      } else {
        helper.current.classList.remove("active");
      }
    };
  }, [window.scrollY]);
  return (
    <div className="helper" ref={helper}>
      <Call />
      <ScrollToTop />
    </div>
  );
};

export default Helpers;
