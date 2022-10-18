import React, { useState } from "react";
import Slider from "react-slick";
import image from "../assets/images/image.jpg";
import building1 from "../assets/images/building1.png";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const ProjectCarousel = () => {
  const images = [
    image,
    building1,
    building1,
    image,
    building1,
    image,
    building1,
  ];
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <AiOutlineArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <AiOutlineArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="projectCarouselContainer">
      <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <div
              className={index === imageIndex ? "sslide activeSlide" : "sslide"}
              key={index}
            >
              <img src={image} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;
