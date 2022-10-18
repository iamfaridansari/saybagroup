import React, { useContext, useState } from "react";
import { myContext } from "../App";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const { scrollToTop } = useContext(myContext);
  //
  const [newsletter, setNewsletter] = useState("");
  const [message, setMessage] = useState("")
  const [error, setError] = useState(false)
  // 
  const subscribeForm = async (e) => {
    e.preventDefault();
    const url = `https://saybagroup.com/backend/api/newsletter`;

    if (newsletter === "") {
      window.alert("Enter email address")
    } else {


      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: newsletter
        })
      })
      const data = await res.json()
      console.log(data);
      // 
      if (data.status === 200) {
        setError(false)
        setMessage(data.messages)
        setNewsletter("")
      } else if (data.status !== 200) {
        setError(true)
        setMessage(data.messages)
      }
    };
  }

  useEffect(() => {
    if (message !== "") {
      setTimeout(() => {
        setMessage("")
      }, 3000)
    }
  }, [message])
  return (
    <div className="container-fluid py-md-5 py-2 pb-5 px-0 shadow">
      <div className="container">
        <div className="row align-items-start justify-content-between gap-md-0 gap-4">
          <div className="col-md-4">
            <p className="title fw-bold mb-2">Important links</p>
            <ul className="list-unstyled row align-items-start justify-content-between">
              <li className="col-md-6 col-sm col-6 mb-2">
                <Link to="/blog" onClick={scrollToTop}>
                  Blog
                </Link>
              </li>
              <li className="col-md-6 col-sm col-6 mb-2">
                <Link to="/projects" onClick={scrollToTop}>
                  Projects
                </Link>
              </li>
              <li className="col-md-6 col-sm col-6 mb-2">
                <Link to="/aboutus" onClick={scrollToTop}>
                  About Us
                </Link>
              </li>
              <li className="col-md-6 col-sm col-6 mb-2">
                <Link to="/contact" onClick={scrollToTop}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <p className="title fw-bold mb-2">Subscribe</p>
            <p className={error ? "text-danger" : "text-success"}>{message}</p>
            <form className="subscribeForm">
              <input
                type="text"
                placeholder="Email address"
                value={newsletter}
                name="email"
                onChange={(e) => setNewsletter(e.target.value)}
              />
              <button onClick={subscribeForm}>
                <AiOutlineArrowRight />
              </button>
            </form>
            <ul className="list-unstyled d-flex align-items-center justify-content-center">
              <li>
                <a
                  href="https://wa.me/9108657450676"
                  className="icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/saybagroup/"
                  className="fs-4 mx-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/saybagroupin/"
                  className="icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
