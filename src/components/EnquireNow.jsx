import React, { useContext, useEffect, useRef, useState } from "react";
import { myContext } from "../App";
import building1 from "../assets/images/building1.png";
import { FaTimes } from "react-icons/fa";

const EnquireNow = () => {
  const modalRef = useRef(null);
  const { modalActive, setModalActive, setFirstLoad } = useContext(myContext);

  useEffect(() => {
    if (modalActive) {
      modalRef.current.classList.add("active")
      document.body.style.overflow = "hidden"
    }
    if (!modalActive) {
      modalRef.current.classList.remove("active")
      document.body.style.overflow = "auto"
    }
  }, [modalActive])

  const closeModal = () => {
    setModalActive(false);
    setFirstLoad(false)
    setDetails({
      name: "",
      email: "",
      mobile: "",
    });
  };

  // enquire now from
  const [details, setDetails] = useState({
    name: "",
    email: "",
    mobile: "",
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

    let url = `https://saybagroup.com/backend/api/enquiry`;
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name: details.name,
          email: details.email,
          mobile: details.mobile,
        }),
      });
      let data = await response.json();
      console.log(data);
      setDetails({
        name: "",
        email: "",
        mobile: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="enquireNow" ref={modalRef}>
      <div className="container p-sm-5 p-3 bg-gradient shadow">
        <div className="closeBtn" onClick={closeModal}>
          <FaTimes />
        </div>
        <div className="row align-items-start justify-content-between gap-sm-5 gap-4">
          <div className="col-md">
            <img src={building1} alt="" />
          </div>
          <div className="col-md">
            <p className="title primaryText">
              Get One Step Closer To Your Dream Home
            </p>

            <form className="mt-3">
              <div className="mb-2">
                <input
                  type="text"
                  className="myInput"
                  placeholder="Full name"
                  value={details.name}
                  onChange={handleInput}
                  name="name"
                />
              </div>
              <div className="mb-2">
                <input
                  type="number"
                  className="myInput"
                  placeholder="Mobile number"
                  value={details.mobile}
                  onChange={handleInput}
                  name="mobile"
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  className="myInput"
                  placeholder="Email address"
                  value={details.email}
                  onChange={handleInput}
                  name="email"
                />
              </div>
              <div className="text-end mt-3">
                <button className="myBtn" onClick={submitForm}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquireNow;
