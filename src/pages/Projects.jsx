import React, { useEffect, useRef } from "react";
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
    <section className="container py-4 px-0 text-center">
      <h1 className="mb-md-4 mb-2 text-uppercase" ref={headRef}>
        projects
      </h1>

      <div className="container">
        <div className="cardContainer" ref={projectRef}>
          {projects.map((item, index) => {
            return (
              <ProjectCard
                key={index}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
