import React, { useEffect, useRef, useState } from "react";
import BlogCard from "../components/BlogCard";
import gsap from "gsap";

const Blog = () => {
  const blogRef = useRef(null);
  const headRef = useRef(null);

  const [blogs, setBlogs] = useState([])
  const getBlogs = async () => {
    const res = await fetch("https://saybagroup.com/backend/api/blog", {
      method: "POST",
    })
    const data = await res.json()
    console.log(data);
    // 
    setBlogs(data)
  }

  useEffect(() => {
    const blog = blogRef.current;
    const head = headRef.current;

    gsap.from(blog, { y: "100px", duration: 1, ease: "Back.easeOut" });
    gsap.from(head, {
      letterSpacing: "10px",
      duration: 1,
      ease: "Back.easeOut",
    });
    // 
    getBlogs()
  }, []);

  return (
    <section className="container py-5 mt-5 px-0 text-center">
      <h1 className="mb-md-5 mb-2 text-uppercase" ref={headRef}>
        Blogs
      </h1>

      <div className="container">
        <div className="cardContainer" ref={blogRef}>
          {blogs.map((item, index) => {
            return (
              <BlogCard
                key={index}
                id={item.id}
                img={item.photo}
                name={item.name }
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
