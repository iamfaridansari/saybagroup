import React, { useState } from "react";
import { FaCopyright } from "react-icons/fa";
import { useEffect } from "react";

const Footer = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message !== "") {
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }, [message]);
  return (
    <div className="container-fluid p-2 shadow text-center">
      <div className="container">
        <p>
          Copyright <FaCopyright /> Sayba Properties. Developed by Farid Ansari.
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
