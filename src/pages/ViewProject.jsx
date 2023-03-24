import React, { useContext } from "react";
import { FaBed, FaChartArea, FaCheck, FaRupeeSign } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AppContext } from "../context/AppContext";

const ViewProject = () => {
  const { propertyDetails } = useContext(AppContext);
  return (
    <div className="container py-4">
      <div className="mb-4">
        <h1>{propertyDetails.title}</h1>
        <p>By - <span className="fw-bold">{propertyDetails.developer}</span></p>
      </div>
      <div className="configurations">
        <div>
          <p className="fw-bold">Configuration</p>
          <p>
            <FaBed className="me-1" />
            {propertyDetails.configuration &&
              propertyDetails.configuration.map((item, index) => {
                return (
                  <span key={index}>
                    {item}{" "}
                    {index !== propertyDetails.configuration.length - 1
                      ? ","
                      : ""}
                  </span>
                );
              })}
            BHK
          </p>
        </div>
        <div>
          <p className="fw-bold">Location</p>
          <p>
            <MdLocationOn />
            {propertyDetails.location}
          </p>
        </div>
        <div>
          <p className="fw-bold">Area</p>
          <p>
            <FaChartArea className="me-1" />
            {propertyDetails.area &&
              propertyDetails.area.map((item, index) => {
                return (
                  <span key={index}>
                    {item}{" "}
                    {index !== propertyDetails.area.length - 1 ? "," : ""}
                  </span>
                );
              })}
            sqft
          </p>
        </div>
        <div>
          <p className="fw-bold">Price</p>
          <p>
            {" "}
            <FaRupeeSign /> {propertyDetails.price} onwards
          </p>
        </div>
      </div>
      <div className="row align-items-center justify-content-between mt-4">
        <div className="col-md-6">
          <p className="fw-bold">Amenities</p>
          <p className="amenities">
            {propertyDetails.amenities &&
              propertyDetails.amenities.map((item, index) => {
                return (
                  <span key={index}>
                    <FaCheck className="primaryText me-1" />
                    {item}{" "}
                  </span>
                );
              })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
