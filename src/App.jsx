import React, { createContext, useRef } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
//
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer";
import Helpers from "./components/Helpers";

export const myContext = createContext();

const App = () => {
  const linksRef = useRef(null);
  const buildingRef = useRef(null);
  const closeRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    linksRef.current.classList.remove("active");
    buildingRef.current.classList.remove("active");
    closeRef.current.classList.remove("active");
  };

  return (
    <myContext.Provider
      value={{
        scrollToTop,
        linksRef,
        buildingRef,
        closeRef,
      }}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Helpers />
      <Footer />
    </myContext.Provider>
  );
};

export default App;
