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
    <footer className="container-fluid p-2 shadow text-center">
      <div className="container">
        <p className="text-white">
          Copyright <FaCopyright /> Sayba Properties. Developed by Farid Ansari.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
