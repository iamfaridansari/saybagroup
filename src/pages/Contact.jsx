import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;

    gsap.from(left, {
      translateX: "-100%",
      duration: 1,
      ease: "Back.easeOut",
    });
    gsap.from(right, {
      translateX: "100%",
      duration: 1,
      ease: "Back.easeOut",
    });
  }, []);

  const [details, setDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const [success, setSuccess] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (success !== "") {
        setSuccess("");
      }
    }, 3000);
  }, [success]);

  return (
    <>
      <section className="container py-5 contactContainer">
        <div className="row align-items-start justify-content-between">
          <div className="col-lg-8 col-md-6" ref={leftRef}>
            <div>
              <h1 className="mb-2 text-uppercase">Contact us</h1>
              <p className="mb-4">
                We are committed to deliver your dreams timely with zero
                compromise on quality.
              </p>

              <div>
                <div className="mb-4">
                  <p className="title">
                    <FaPhoneAlt className="me-2" />
                    Phone
                  </p>
                  <a href="tel:8657450676">8657450676</a>
                </div>
                <div className="mb-4">
                  <p className="title">
                    <FaEnvelope className="me-2" />
                    Email
                  </p>
                  <a href="mailto:contactus@saybagroup.com">
                    contactus@saybagroup.com
                  </a>
                </div>
                <div>
                  <p className="title">
                    <FaMapMarkerAlt className="me-2" />
                    Address
                  </p>
                  <a
                    href="https://goo.gl/maps/UQP9F5NSX9Bnrgxn9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sayba Group, 3rd Floor, Star Heights, Bharat Cinema, Near
                    Railway Station, Kurla- West, Kurla, Maharashtra, India
                    400070
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" ref={rightRef}>
            <form className="bg-white shadow p-3 mt-md-0 mt-5">
              <p className=" mb-2 title primaryText">Send us a message</p>
              <div className="mb-2">
                <input
                  type="text"
                  className="input"
                  placeholder="Full name"
                  name="name"
                  value={details.name}
                  onChange={handleInput}
                />
                <small className="text-danger">{error.name}</small>
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  className="input"
                  placeholder="Email address"
                  name="email"
                  value={details.email}
                  onChange={handleInput}
                />
                <small className="text-danger">{error.email}</small>
              </div>
              <div className="mb-2">
                <input
                  type="number"
                  className="input"
                  placeholder="Mobile number"
                  name="mobile"
                  value={details.mobile}
                  onChange={handleInput}
                />
                <small className="text-danger">{error.mobile}</small>
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="input"
                  placeholder="Subject"
                  name="subject"
                  value={details.subject}
                  onChange={handleInput}
                />
                <small className="text-danger">{error.subject}</small>
              </div>
              <div className="mb-2">
                <textarea
                  className="textarea"
                  name="message"
                  value={details.message}
                  onChange={handleInput}
                  placeholder="Tell us more about your queries"
                ></textarea>
                <small className="text-danger">{error.message}</small>
              </div>
              <small className="text-success">{success}</small>
              <div className="text-end">
                <button className={success === "" ? "button" : "button mt-2"}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
