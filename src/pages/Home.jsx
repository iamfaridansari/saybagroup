import React, {
  useContext, useRef, useEffect, useState
} from "react";
import { myContext } from "../App";
import BannerCarousel from "../components/BannerCarousel";
import ChooseCard from "../components/ChooseCard";
import ProjectCard from "../components/ProjectCard";
import chooseCard from "../components/chooseCardArray";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import BlogCard from "../components/BlogCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Loading from "../components/Loading";

const Home = () => {
  const { scrollToTop, setModalActive, firstLoad } = useContext(myContext);

  gsap.registerPlugin(ScrollTrigger);

  const chooseHeadRef = useRef(null);
  const projectCardRef = useRef(null);
  const blogCardRef = useRef(null);
  const taglineRef = useRef(null);
  const projectHeadRef = useRef(null);
  const blogHeadRef = useRef(null);
  const testHeadRef = useRef(null);

  useEffect(() => {
    let chooseHead = chooseHeadRef.current;
    let projectCard = projectCardRef.current;
    let blogCard = blogCardRef.current;
    let tagline = taglineRef.current;
    let projectHead = projectHeadRef.current;
    let blogHead = blogHeadRef.current;
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
    gsap.from(blogHead, {
      letterSpacing: "5px",
      duration: 1,
      ease: "Back.easeOut",
      scrollTrigger: {
        trigger: blogHead,
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

    gsap.from(blogCard, {
      y: "50px",
      duration: 1,
      ease: "Back.easeOut",
      scrollTrigger: {
        trigger: blogCard,
        start: "top 90%",
        end: "top 85%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  // fetch properties
  const [propertyLoad, setPropertyLoad] = useState(false)
  const [property, setProperty] = useState([])
  const fetchProperties = async () => {
    try {
      setPropertyLoad(true)
      const res = await fetch("https://saybagroup.com/backend/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()
      console.log(data, res.status);
      if (res.status === 200) {
        setProperty(data)
        setPropertyLoad(false)
      }
    } catch (error) {
      setPropertyLoad(false)
      console.log(error);
    }
  }
  // fetch blogs
  const [blogLoad, setBlogLoad] = useState(false)
  const [blogs, setBlogs] = useState([])
  const getBlogs = async () => {
    try {
      setBlogLoad(true)
      const res = await fetch("https://saybagroup.com/backend/api/blog", {
        method: "POST",
      })
      const data = await res.json()
      console.log(data);
      if (res.status === 200) {
        setBlogLoad(false)
        setBlogs(data)
      }
      setBlogs(data)
    } catch (error) {
      console.log(error);
      setBlogLoad(false)
    }
  }
  useEffect(() => {
    fetchProperties()
    getBlogs()
    // 
    if (firstLoad) {
      setTimeout(() => {
        setModalActive(true)
      }, [3000])
    }
  }, [])
  // 
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
        {
          propertyLoad ? <Loading content="properties" /> :

            <div className="mt-3 mb-4 cardContainer" ref={projectCardRef}>
              {
                property.map((item, index) => {
                  if (item.feature === "Yes" && item.photo_class === "short") {
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
                  }
                })}
            </div>
        }
        <div className="text-center">
          <Link to="/projects" className="myBtn shadow" onClick={scrollToTop}>
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

      <section className="container my-5">
        <h2 className="text-uppercase text-center" ref={blogHeadRef}>
          Blogs
        </h2>
        {
          blogLoad ? <Loading content="blogs" /> :
            <div className="mt-3 mb-4 cardContainer" ref={blogCardRef}>
              {blogs.map((item, index) => {
                if (item.feature === "Yes") {
                  return (
                    <BlogCard
                      key={index}
                      id={item.id}
                      img={item.photo}
                      title={item.name}
                      description={item.description}
                    />
                  );
                }
              })}
            </div>
        }
        <div className="text-center">
          <Link to="/blog" className="myBtn shadow" onClick={scrollToTop}>
            View All
            <AiOutlineArrowRight className="ms-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
