import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaBed, FaChartArea } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ item }) => {
  const { setPropertyDetails, scrollToTop } = useContext(AppContext);
  const setProperty = () => {
    setPropertyDetails(item);
    scrollToTop();
  };
  return (
    <Link
      to="/viewproject"
      className={"myCard shadow " + item.classname}
      onClick={setProperty}
    >
      <img src={item.img} alt="building" />
      <div className="content1">
        <p>{item.title}</p>
        <p>{item.location}</p>
      </div>
      <div className="content2">
        <p>
          <FaBed className="me-2" />
          {item.configuration.map((item2, index2) => {
            return (
              <span key={index2}>
                {item2} {index2 !== item.configuration.length - 1 ? "," : ""}
              </span>
            );
          })}
          BHK
        </p>
        <p>
          <FaChartArea className="me-2" />
          {item.area.map((item2, index2) => {
            return (
              <span key={index2}>
                {item2} {index2 !== item.area.length - 1 ? "," : ""}
              </span>
            );
          })}
          sqft
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
