import React, { useRef, useEffect, useContext } from "react";
import { myContext } from "../App";
import { IoIosCall } from "react-icons/io";
import gsap from "gsap";

const Call = () => {
  const callRef = useRef(null);
  const { modalActive } = useContext(myContext);

  useEffect(() => {
    const call = callRef.current;
    if (!modalActive) {
      gsap.fromTo(
        call,
        {
          rotate : "90deg",
          opacity: 0,
        },
        {
          rotate : "0deg",
          opacity: 1,
          duration: 1,
          ease: "Back.easeOut",
        }
      );
    }
  }, [modalActive]);
  return (
    <a href="tel:123456789" className="myBtn shadow call" ref={callRef}>
      <IoIosCall />
    </a>
  );
};

export default Call;
