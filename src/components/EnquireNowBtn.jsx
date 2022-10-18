import React, { useContext } from "react";
import { myContext } from "../App";

const EnquireNowBtn = () => {
  const { setModalActive } = useContext(myContext);

  return (
    <button
      className="myBtn enquireNowBtn shadow"
      onClick={() => setModalActive(true)}
    >
      Enquire Now
    </button>
  );
};

export default EnquireNowBtn;
