import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ img, classname, title, id }) => {
  const scrolltotop = () => {
    window.scroll(0, 0)
  }
  return (
    <Link
      to={`/viewProject/${id}`}
      className={"myCard shadow " + classname}
      onClick={scrolltotop}
    >
      <img src={`https://saybagroup.com/backend/public/img/project_images/${img}`} alt="image" />
      <div className="content text-center">
        <p className="text-white title">{title}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
