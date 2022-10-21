import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutComponent = ({ img, title, subtitle }) => {
  const about = useRef([]);
  about.current = [];
  const addAbout = (item) => {
    if (item && !about.current.includes(item)) {
      about.current.push(item);
    }
  };
  //
  useEffect(() => {
    const timeline = gsap.timeline({});

    about.current.forEach((item) => {
      timeline.from(item, {
        transform: "translateY(100%)",
        opacity: 0,
        duration: 1,
        stagger: 1,
        ease: "Back.easeOut",
      });
    });
  }, []);
  return (
    <div className="col-sm col-6" ref={addAbout}>
      <img src={img} alt="image" />
      <h3 className="title text-white">{title}</h3>
      <h3 className="text-white text-uppercase">{subtitle}</h3>
    </div>
  );
};

export default AboutComponent;
