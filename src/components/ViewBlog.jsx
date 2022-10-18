import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewBlog = () => {
  const { id } = useParams("")
  const getBlog = async () => {
    const res = await fetch("https://saybagroup.com/backend/api/listblog", {
      method: "POST",
      body: JSON.stringify({
        id
      })
    })
    const data = await res.json()
    console.log(data);
    setBlog(data)
  }
  useEffect(() => {
    getBlog()
  }, []);

  const [blog, setBlog] = useState({});
  // 
  useEffect(() => {
    const blogdesc = document.querySelector(".blogdesc")
    blogdesc.innerHTML = blog.description
  }, [blog])
  // 
  return (
    <div className="container-fluid pt-5 mt-5">
      <div className="container p-2 mb-5">
        <h1>Blog</h1>
      </div>

      <div className="container detailSection p-3 mb-2">
        <p className="title fw-bold mb-2">{blog.name}</p>

        <div className="row mt-2 align-items-center justify-content-start">
          <div className="col-sm-6 col-8">
            <img
              src={`https://saybagroup.com/backend/public/img/blog_images/${blog.photo}`}
              className="myRadius"
              style={{ aspectRatio: 1.8 }}
              alt=""
            />
          </div>
        </div>

        <div className="blogdesc">
          {/* {
            blog.content.map((item, index) => {
              return (
                <div className="mt-5" key={index}>
                  <p className="title fw-bold mb-2">{item.title}</p>
                  <ul className="ms-4">
                    {
                      item.body.map((item, index) => {
                        return (
                          <li className="mb-3" key={index}>{item}</li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          } */}
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
