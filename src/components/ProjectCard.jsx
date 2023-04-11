import React, { useContext } from "react";
import { FaBed, FaChartArea } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ProjectCard = ({ item }) => {
  const { backendAPI } = useContext(AppContext);
  return (
    <Link to={`/viewproject/${item._id}`} className="myCard shadow">
      <img src={backendAPI + "/" + item.images[0].path} alt="building" />
      <div className="content1">
        <p>{item.name}</p>
        <p>{item.city}</p>
      </div>
      <div className="content2">
        <p>
          <FaBed className="me-2" />
          {item.config.map((item2, index2) => {
            return (
              <span key={index2}>
                {item2.config} {index2 !== item.config.length - 1 ? "," : ""}
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
                {item2.area} {index2 !== item.area.length - 1 ? "," : ""}
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
