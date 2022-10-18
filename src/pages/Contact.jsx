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
      ease: "Back.easeOut"
    });
    gsap.from(right, {
      translateX: "100%",
      duration: 1,
      ease: "Back.easeOut"
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

  const submitForm = async (e) => {
    e.preventDefault();

    if (!details.name) {
      setError({
        name: "Enter your name",
      });
    } else if (!details.email) {
      setError({
        email: "Enter your email address",
      });
    } else if (!details.mobile) {
      setError({
        mobile: "Enter your 10 digit mobile number",
      });
    } else if (!details.message) {
      setError({
        message: "Enter your message",
      });
    } else if (details.mobile.length !== 10) {
      setError({
        mobile: "Enter your 10 digit mobile number",
      });
    } else {
      try {
        const url = `https://saybagroup.com/backend/api/contactus`;

        let response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            name: details.name,
            email: details.email,
            mobile: details.mobile,
            subject: details.subject,
            message: details.message,
          }),
        });
        let data = await response.json();
        console.log(data);
        setSuccess("Your message has been submitted!");
        setDetails({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
        setError({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        console.log(error);
      }
    }
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
      <section className="container py-5 mt-5 contactContainer">
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
            <form
              className="bg-white shadow p-3 mt-md-0 mt-5"
            >
              <p className=" mb-2 title primaryText fw-bold">
                Send us a message
              </p>
              <div className="mb-2">
                <input
                  type="text"
                  className="myInput"
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
                  className="myInput"
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
                  className="myInput"
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
                  className="myInput"
                  placeholder="Subject"
                  name="subject"
                  value={details.subject}
                  onChange={handleInput}
                />
                <small className="text-danger">{error.subject}</small>
              </div>
              <div className="mb-2">
                <textarea
                  className="myTextarea"
                  name="message"
                  value={details.message}
                  onChange={handleInput}
                  placeholder="Tell us more about your queries"
                ></textarea>
                <small className="text-danger">{error.message}</small>
              </div>
              <small className="text-success">{success}</small>
              <button className={success === "" ? "myBtn" : "myBtn mt-2"} onClick={submitForm}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
