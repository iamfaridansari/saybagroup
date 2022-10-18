import React, { useEffect, useRef } from "react";
import AboutComponent from "../components/AboutComponent";
import aboutBanner from "../components/aboutBannerArray";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const AboutUs = () => {
  gsap.registerPlugin(ScrollTrigger);
  const missionLeftRef = useRef(null);
  const missionRightRef = useRef(null);
  const visionLefttRef = useRef(null);
  const visionRightRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    const missionLeft = missionLeftRef.current;
    const missionRight = missionRightRef.current;
    const visionLeftt = visionLefttRef.current;
    const visionRight = visionRightRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const intro = introRef.current;

    gsap.from(missionLeft, {
      translateX: "-50%",
      ease: "Back.easeOut",
      scrollTrigger: {
        trigger: ".missionContainer",
        start: "top 90%",
        end: "top 85%",
        toggleActions: "play none none reverse",
        scrub: 2,
      },
    });
    gsap.from(missionRight, {
      translateX: "50%",
      ease: "Back.easeOut",
      scrollTrigger: {
        trigger: ".missionContainer",
        start: "top 90%",
        end: "top 85%",
        toggleActions: "play none none reverse",
        scrub: 2,
      },
    });

    gsap.from(visionLeftt, {
      translateX: "-50%",
      ease: "Back.easeOut",
      scrollTrigger: {
        trigger: ".visionContainer",
        start: "top 90%",
        end: "top 85%",
        toggleActions: "play none none reverse",
        scrub: 2,
      },
    });

    gsap.from(visionRight, {
      translateX: "50%",
      ease: "Back.easeOut",
      scrollTrigger: {
        trigger: ".visionContainer",
        start: "top 90%",
        end: "top 85%",
        toggleActions: "play none none reverse",
        scrub: 2,
      },
    });

    gsap.from(title, {
      letterSpacing: "5px",
      duration: 1,
      ease: "Back.easeOut",
    });

    gsap.from(subtitle, {
      y: "-50px",
      opacity: 0,
      duration: 1,
      ease: "Back.easeOut",
      delay: 1,
    });

    gsap.from(intro, {
      y: 50,
      autoAlpha: 0.5,
      scrollTrigger: {
        trigger: intro,
        start: "top 90%",
        end: "top 85%",
        toggleActions: "play none none reverse",
        scrub: 2,
      },
    });
  }, []);
  return (
    <>
      <section className="container-fluid p-0 py-5 aboutBanner">
        <div className="text-center">
          <h1
            className=" text-uppercase text-white text-center mb-2"
            ref={titleRef}
          >
            Sayba Group
          </h1>
          <p className="title text-white" ref={subtitleRef}>
            We rise by lifting others
          </p>
        </div>

        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            {aboutBanner.map((item, index) => {
              return (
                <AboutComponent
                  key={index}
                  img={item.img}
                  title={item.title}
                  subtitle={item.subtitle}
                  comp={index}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-fluid p-0 py-5">
        <div className="container">
          <p className="mb-5 text-center" ref={introRef}>
            Sayba Group is a construction company that needs no introduction in
            the construction vertical. With a bounty of over 18 years of
            excellence in this Realty world, we, at Sayba Group have
            successfully completed 35 projects. We believe in delivering quality
            and strive to find better solutions for our clients. The priority of
            Sabya Group has been the timely delivery of projects. The
            Organization maintains a strong foundation of trust and mutual
            respect generated through positive relationship with clients,
            architects, engineers, subcontractors and suppliers.
          </p>
        </div>

        <div className="container p-0 overflow-hidden">
          <div className="row m-0 align-items-start justify-content-between missionContainer">
            <div className="col-sm-6 text-start" ref={missionLeftRef}>
              <h1 className="text-uppercase  mb-sm-3 mb-2">Mission</h1>
              <p className="mb-sm-0 mb-2">
                Since inception, we have been working hard towards delivering
                dreams to our customers with their complete satisfaction. It is
                our ulterior motive maintain the habit of gaining people's trust
                by delivering quality before or within the committed timelines.
              </p>
            </div>
            <div className="col-lg-5 col-sm-6" ref={missionRightRef}>
              <img src={img5} className="myRadius shadow" alt="" />
            </div>
          </div>
        </div>

        <div className="container p-0 overflow-hidden">
          <div className="row m-0 align-items-start justify-content-between mt-5 visionContainer">
            <div className="col-sm-6 order-sm-2" ref={visionRightRef}>
              <h1 className="text-uppercase  mb-sm-3 mb-2 text-md-end">
                Vision
              </h1>
              <p className="text-md-end mb-sm-0 mb-2">
                We believe that we always grow when we help others grow. Our
                vision is to sprawl across the region, uniting hands to our team
                to strengthen the bonds of work and motivation.
              </p>
            </div>
            <div className="col-lg-5 col-sm-6 order-sm-1" ref={visionLefttRef}>
              <img src={img6} className="myRadius shadow landscape" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
