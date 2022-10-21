import React, { useEffect, useState } from "react";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ViewProject = () => {
  const { id } = useParams("")
  const [details, setDetails] = useState({})
  const [amenities, setAmenities] = useState([])
  const getProperty = async () => {
    const res = await fetch("https://saybagroup.com/backend/api/listproject", {
      method: "POST",
      body: JSON.stringify({
        id
      })
    })
    const data = await res.json()
    console.log(data);
    // 
    setDetails(data)
    const unsorted = data.amenities.split(",")
    setAmenities(unsorted)
  }

  useEffect(() => {
    getProperty()
  }, [])
  // amenities

  return (
    <section className="container py-5 mt-5">
      <div className="mb-4">
        <h1 className="mb-2">{details.name}</h1>
        <p>{details.address}</p>
      </div>

      <div className="detailSection">
        <p className="title fw-bold mb-3">Description</p>
        <p>{details.description}</p>
      </div>

      <div className="detailSection">
        <div className="row align-items-center justify-content-start">
          <div className="col-md-6">
            <img src={`https://saybagroup.com/backend/public/img/project_images/${details.photo}`} className="rounded" alt="image" />
          </div>
        </div>
      </div>

      <div className="detailSection">
        <p className="title fw-bold mb-3">Additional details</p>
        <div className="row align-items-start justify-content-between">
          <div className="col-md">
            <p className="mb-2">
              Type: <strong>{details.type}</strong>
            </p>
            <p>
              Year: <strong>{details.year}</strong>
            </p>
          </div>
          <div className="col-md mt-md- mt-4">
            <div className="d-flex align-items-center justify-content-start">
              <BsFileEarmarkPdfFill className="icon primaryText" />
              <FiDownload className="icon primaryText me-2" />
              <a href="/" className=" title fw-bold">
                Download brochure
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="detailSection">
        <p className="title fw-bold mb-3">Features / Amenities</p>

        <div className="row align-items-center justify-content-between">
          {
            amenities.map((item, index) => {
              return (
                <p className="col-md-6 mb-2" key={index}>
                  <FaCheck className="me-2 primaryText" />{item}
                </p>
              )
            })
          }
        </div>
      </div>

      <div className="detailSection">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457430403!2d2.2769948739278507!3d48.85894658138312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sin!4v1662457066889!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
};

export default ViewProject;
