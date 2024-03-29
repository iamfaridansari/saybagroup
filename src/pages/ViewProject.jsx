import React, { useContext, useEffect, useState } from "react";
import {
  FaBed,
  FaChartArea,
  FaCheck,
  FaKey,
  FaRupeeSign,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { months } from "../data/date";

const ViewProject = () => {
  const { backendAPI } = useContext(AppContext);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({
    name: "",
    city: "",
    location: "",
    address: "",
    possession: "",
    price: "",
    desc: "",
    amenities: [],
    area: [],
    config: [],
    images: [],
  });
  const viewProperty = async () => {
    try {
      setLoading(true);
      const res = await fetch(backendAPI + `/api/view/sayba/property/${id}`);
      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        setLoading(false);
        setDetail(data);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    viewProperty();
  }, []);
  //
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  useEffect(() => {
    setTimeout(() => {
      const getMonth = detail.possession.split("-");
      setYear(getMonth[0]);
      months.map((item, index) => {
        if (parseInt(getMonth[1]) === index + 1) {
          setMonth(item);
        }
      });
    }, 1000);
  }, [detail.possession]);
  return (
    <div className="container py-4">
      {loading ? (
        <Loading content="property details" />
      ) : (
        <>
          <div className="mb-4">
            <h1>{detail.name}</h1>
            <p>{detail.address}</p>
          </div>
          <div className="detailgrid mb-4">
            {detail.images.map((item, index) => {
              return (
                <div key={index}>
                  <img src={backendAPI + "/" + item.path} alt="" />
                </div>
              );
            })}
          </div>
          <p className="mb-4">{detail.desc}</p>
          <div className="configurations">
            <div>
              <p className="fw-bold">Configuration</p>
              <p>
                <FaBed className="me-1" />
                {detail.config &&
                  detail.config.map((item, index) => {
                    return (
                      <span key={index}>
                        {item.config}{" "}
                        {index !== detail.config.length - 1 ? "," : ""}
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
                {detail.location}, {detail.city}
              </p>
            </div>
            <div>
              <p className="fw-bold">Area</p>
              <p>
                <FaChartArea className="me-1" />
                {detail.area &&
                  detail.area.map((item, index) => {
                    return (
                      <span key={index}>
                        {item.area}{" "}
                        {index !== detail.area.length - 1 ? "," : ""}
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
                <FaRupeeSign /> {detail.price} onwards
              </p>
            </div>
            <div>
              <p className="fw-bold">Possession</p>
              <p>
                {" "}
                <FaKey /> {month}, {year}
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-between mt-4">
            <div className="col-md-6">
              <p className="fw-bold">Amenities</p>
              <p className="amenities">
                {detail.amenities &&
                  detail.amenities.map((item, index) => {
                    return (
                      <span key={index}>
                        <FaCheck className="primaryText me-1" />
                        {item.amenity}{" "}
                      </span>
                    );
                  })}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewProject;
