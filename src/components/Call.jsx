import React, { useRef, useEffect } from "react";
import { IoIosCall } from "react-icons/io";
import gsap from "gsap";

const Call = () => {
  const callRef = useRef(null);

  useEffect(() => {
    const call = callRef.current;
    gsap.fromTo(
      call,
      {
        rotate: "90deg",
        opacity: 0,
      },
      {
        rotate: "0deg",
        opacity: 1,
        duration: 1,
        ease: "Back.easeOut",
      }
    );
  }, []);
  return (
    <a href="tel:123456789" className="button shadow call" ref={callRef}>
      <IoIosCall />
    </a>
  );
};

export default Call;
