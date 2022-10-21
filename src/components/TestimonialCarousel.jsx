import React, { useState, useEffect } from "react";

const TestimonialCarousel = () => {
  const [testimonial, setTestimonial] = useState([])
  const fetchTestimonial = async () => {
    const res = await fetch("https://saybagroup.com/backend/api/home", {
      method: "POST",
    })
    const data = await res.json()
    console.log(data.testimonial);
    setTestimonial(data.testimonial)
  }

  useEffect(() => {
    fetchTestimonial()
  }, [])
  return (
    <div
      id="testimonialCarousel"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-inner mb-3 text-center">
        {testimonial.map((item, index) => {
          return (
            <div
              className={index === 0 ? "carousel-item active" : "carousel-item"}
              key={index}
            >
              <div className="profilepic text-center">
                <img src={`https://saybagroup.com/backend/public/img/testimonial_images/${item.photo}`} alt="image" />
              </div>
              <p>{item.description}</p>
              <h3 className="fw-bold">{item.name}</h3>
            </div>
          );
        })}
      </div>
      <div className="carousel-indicators">
        {testimonial.map((item, index) => {
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
