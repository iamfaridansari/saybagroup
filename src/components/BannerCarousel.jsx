import React, { useRef, useEffect, useContext } from "react";
import { myContext } from "../App";
import img12 from "../assets/images/img12.png";
import img9 from "../assets/images/img9.jpg";
import img4 from "../assets/images/img14.jpg"
import gsap from "gsap";

const BannerCarousel = () => {
  const { modalActive } = useContext(myContext);

  const firstHead = useRef(null);

  useEffect(() => {
    const first = firstHead.current;

    if (!modalActive) {
      gsap.from(first, {
        letterSpacing: "5px",
        opacity: 0,
        duration: 1,
        ease: "Back.easeOut",
      });
    }
  }, [modalActive]);
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
            <img src={img4} className="d-block w-100" alt="image" />
          </div>
          <div className="carousel-item">
            <img src={img12} className="d-block w-100" alt="image" />
          </div>
          <div className="carousel-item">
            <img src={img9} className="d-block w-100" alt="image" />
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
          Book your dream home with us</h1>
      </div>
    </section>
  );
};

export default BannerCarousel;
