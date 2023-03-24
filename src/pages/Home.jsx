import React, { useContext, useRef, useEffect } from "react";
import BannerCarousel from "../components/BannerCarousel";
import ChooseCard from "../components/ChooseCard";
import ProjectCard from "../components/ProjectCard";
import chooseCard from "../data/chooseCardArray";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects } from "../data/projectsdata";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { scrollToTop } = useContext(AppContext);

  gsap.registerPlugin(ScrollTrigger);

  const chooseHeadRef = useRef(null);
  const projectCardRef = useRef(null);
  const taglineRef = useRef(null);
  const projectHeadRef = useRef(null);
  const testHeadRef = useRef(null);

  useEffect(() => {
    let chooseHead = chooseHeadRef.current;
    let projectCard = projectCardRef.current;
    let tagline = taglineRef.current;
    let projectHead = projectHeadRef.current;
    let testHead = testHeadRef.current;

    gsap.from(chooseHead, {
      letterSpacing: "5px",
      duration: 1,
      ease: "Back.easeOut",
      scrollTrigger: {
        trigger: chooseHead,
        start: "top 90%",
        end: "top 85%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(tagline, {
      letterSpacing: "5px",
      duration: 1,
      ease: "Back.easeOut",
      scrollTrigger: {
        trigger: tagline,
        start: "top 90%",
        end: "top 85%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(projectHead, {
      letterSpacing: "5px",
      duration: 1,
      ease: "Back.easeOut",
      scrollTrigger: {
        trigger: projectHead,
        start: "top 90%",
        end: "top 85%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(testHead, {
      letterSpacing: "5px",
      duration: 1,
      ease: "Back.easeOut",
      scrollTrigger: {
        trigger: testHead,
        start: "top 90%",
        end: "top 85%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(projectCard, {
      y: "50px",
      duration: 1,
      ease: "Back.easeOut",
      scrollTrigger: {
        trigger: projectCard,
        start: "top 90%",
        end: "top 85%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <>
      <BannerCarousel />

      <div className="container text-center py-5">
        <h2 className="mb-2 text-capitalize" ref={taglineRef}>
          We rise by lifting others
        </h2>
        <p>
          We believe that we always grow when we help others grow. Our vision is
          to sprawl across the region, uniting hands to our team to strengthen
          the bonds of work and motivation.
        </p>
      </div>

      <section className="container py-5">
        <h2 className="text-uppercase text-center" ref={projectHeadRef}>
          our projects
        </h2>
        <div className="mt-3 mb-4 cardContainer" ref={projectCardRef}>
          {projects
            .map((item, index) => {
              if (item.classname === "short") {
                return (
                  <ProjectCard
                    key={index}
                    item={item}
                  />
                );
              }
            })
            .slice(0, 6)}
        </div>
        <div className="text-center">
          <Link to="/projects" className="button shadow" onClick={scrollToTop}>
            View All
            <AiOutlineArrowRight className="ms-2" />
          </Link>
        </div>
      </section>

      <section className="container py-5">
        <div className="intro text-center">
          <h2 className="text-uppercase" ref={chooseHeadRef}>
            Why choose us
          </h2>
        </div>

        <div className="row align-items-start justify-content-between mt-3 gap-md-4 gap-2 px-sm-0 px-2">
          {chooseCard.map((item, index) => {
            return (
              <ChooseCard
                key={index}
                title={item.title}
                body={item.body}
                img={item.img}
              />
            );
          })}
        </div>
      </section>

      <section className="container py-5 testimonialContainer">
        <h2 className="text-center text-uppercase mb-3" ref={testHeadRef}>
          Testimonial
        </h2>
        <TestimonialCarousel />
      </section>
    </>
  );
};

export default Home;
