import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, img, name }) => {
  const scrolltotop = () => {
    window.scroll(0, 0)
  }
  return (
    <Link
      to={`/viewBlog/${id}`}
      className="myCard shadow"
      onClick={scrolltotop}
    >
      <img src={`https://saybagroup.com/backend/public/img/blog_images/${img}`} alt="image" />
      <div className="content text-center">
        <p className="text-white">{name}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
