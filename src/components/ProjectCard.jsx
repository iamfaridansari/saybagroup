import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ img, classname, title }) => {
  const scrolltotop = () => {
    window.scroll(0, 0);
  };
  return (
    <Link
      to="/viewproject"
      className={"myCard shadow " + classname}
      onClick={scrolltotop}
    >
      <img src={img} alt="building" />
      <div className="content text-center">
        <p className="text-white title">{title}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
