import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ChooseCard = ({ title, body, img }) => {
  const chooseRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const choose = chooseRef.current;

    gsap.from(choose, {
      y: "50px",
      duration: 1,
      scrollTrigger: {
        trigger: choose,
        start: "top 90%",
        end: "top 85%",
        scrub: 4,
        toggleActions: "restart pause resume complete",
      },
    });
  }, []);
  return (
    <div className="col-md text-center p-3 chooseCard" ref={chooseRef}>
      <div className="imgDiv">
        <img src={img} alt="image" />
      </div>
      <div>
        <h3 className="fw-bold text-capitalize mb-2">{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default ChooseCard;
