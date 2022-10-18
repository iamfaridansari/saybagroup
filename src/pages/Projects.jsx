import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import gsap from "gsap";


const Projects = () => {
  // 
  const projectRef = useRef(null);
  const headRef = useRef(null);
  const [property, setProperty] = useState([])
  // 
  const fetchProperties = async () => {
    const res = await fetch("https://saybagroup.com/backend/api/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    console.log(data);
    // 
    setProperty(data)
  }
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
    fetchProperties()
  }, []);
  // 
  return (
    <section className="container py-5 px-0 mt-5 text-center">
      <h1 className="mb-md-5 mb-2 text-uppercase" ref={headRef}>
        projects
      </h1>

      <div className="container">
        <div className="cardContainer" ref={projectRef}>
          {property.map((item, index) => {
            return (
              <ProjectCard
                key={index}
                id={item.id}
                img={item.photo}
                classname={item.photo_class}
                title={item.name}
                address={item.address}
                iframe={item.iframe}
              />
            );
          })
          }
        </div>
      </div>
    </section>
  );
};

export default Projects;
