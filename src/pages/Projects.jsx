import React, { useContext, useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { AppContext } from "../context/AppContext";
import gsap from "gsap";
import Loading from "../components/Loading";

const Projects = () => {
  const { backendAPI } = useContext(AppContext);
  //
  const projectRef = useRef(null);
  const headRef = useRef(null);
  //
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProperties = async () => {
    try {
      setLoading(true);
      const res = await fetch(backendAPI + "/api/get/sayba/property");
      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        setProperties(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProperties();
    //
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
      {loading ? (
        <Loading content="projects" />
      ) : (
        <div className="cardContainer" ref={projectRef}>
          {properties.map((item, index) => {
            return <ProjectCard key={index} item={item} />;
          })}
        </div>
      )}
    </section>
  );
};

export default Projects;
