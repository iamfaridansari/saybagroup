import React from "react";
import testimonials from "../data/testimonialdata";

const TestimonialCarousel = () => {
  return (
    <div
      id="testimonialCarousel"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-inner mb-3 text-center">
        {testimonials.map((item, index) => {
          return (
            <div
              className={index === 0 ? "carousel-item active" : "carousel-item"}
              key={index}
            >
              <div className="profilepic text-center">
                <img src={item.img} alt="testimonial" />
              </div>
              <p>{item.review}</p>
              <h3 className="fw-bold">{item.name}</h3>
            </div>
          );
        })}
      </div>
      <div className="carousel-indicators">
        {testimonials.map((item, index) => {
          return (
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to={index}
              className="active"
              aria-current={index === 0 ? "true" : "false"}
              aria-label={"slide " + index}
              key={index}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
