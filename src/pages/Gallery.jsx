import React, { useEffect, useRef } from "react";
import Amenities from "../components/Amenities";
import ProjectCarousel from "../components/ProjectCarousel";
import gsap from "gsap";

const Gallery = () => {
  const headRef = useRef(null);

  useEffect(() => {
    const head = headRef.current;

    gsap.from(head, {
      letterSpacing: "10px",
      duration: 1,
      ease: "Back.easeOut",
    });
  }, []);
  return (
    <>
      <section className="container py-5 mt-5 text-center">
        <h1 className="mybb mb-5 text-uppercase" ref={headRef}>
          Gallery
        </h1>
        <br />

        <p className="title mybb mb-2 text-uppercase">Projects</p>
        <ProjectCarousel />

        <p className="title mybb mb-2 text-uppercase">Amenities</p>
        <Amenities />
      </section>
    </>
  );
};

export default Gallery;
