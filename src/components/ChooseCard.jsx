import React from "react";

const ChooseCard = ({ title, body, img }) => {
  return (
    <div className="col-md text-center p-3 chooseCard">
      <div className="imgDiv">
        <img src={img} alt="building" />
      </div>
      <div>
        <h3 className="fw-bold text-capitalize mb-2">{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default ChooseCard;
