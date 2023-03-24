import React, { useRef, useEffect } from "react";
import carousel1 from "../assets/images/carousel1.png";
import carousel2 from "../assets/images/carousel2.jpg";
import carousel3 from "../assets/images/carousel3.jpg";
import gsap from "gsap";

const BannerCarousel = () => {
  const firstHead = useRef(null);

  useEffect(() => {
    const first = firstHead.current;
    gsap.from(first, {
      letterSpacing: "5px",
      opacity: 0,
      duration: 1,
      ease: "Back.easeOut",
    });
  }, []);
  return (
    <section className="banner container-fluid p-0">
      <div id="bannerCarousel" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel3} className="d-block w-100" alt="building" />
          </div>
          <div className="carousel-item">
            <img src={carousel1} className="d-block w-100" alt="building" />
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="building" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="intro">
        <h1 className="mb-sm-2 mb-3" ref={firstHead}>
          Live a luxurious life <br />
          Book your dream home with us
        </h1>
      </div>
    </section>
  );
};

export default BannerCarousel;
