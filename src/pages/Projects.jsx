import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import gsap from "gsap";
import { projects } from "../data/projectsdata";

const Projects = () => {
  //
  const projectRef = useRef(null);
  const headRef = useRef(null);
  //
  useEffect(() => {
    const project = projectRef.current;
    const head = headRef.current;
    gsap.from(project, { y: "100px", duration: 1, ease: "Back.easeOut" });
    gsap.from(head, {
      letterSpacing: "10px",
      duration: 1,
      ease: "Back.easeOut",
    });
    //
  }, []);
  //
  return (
    <section className="container py-5 px-0 mt-5 text-center">
      <h1 className="mb-md-5 mb-2 text-uppercase" ref={headRef}>
        projects
      </h1>

      <div className="container">
        <div className="cardContainer" ref={projectRef}>
          {projects.map((item, index) => {
            return (
              <ProjectCard
                key={index}
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                area={item.area}
                bedroom={item.bedroom}
                location={item.location}
                developer={item.developer}
                classname={item.classname}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
