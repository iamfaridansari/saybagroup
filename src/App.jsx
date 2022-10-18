import React, { createContext, useState, useRef, useEffect } from "react";
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
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer";
import EnquireNow from "./components/EnquireNow";
import EnquireNowBtn from "./components/EnquireNowBtn";
import Helpers from "./components/Helpers";
import ViewProject from "./components/ViewProject";
import ViewBlog from "./components/ViewBlog";

export const myContext = createContext();

const App = () => {
  // enquire now modal
  const [modalActive, setModalActive] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true)

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
        modalActive,
        setModalActive,
        scrollToTop,
        linksRef,
        buildingRef,
        closeRef, firstLoad, setFirstLoad
      }}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/viewProject/:id" element={<ViewProject />} />
        <Route path="/viewBlog/:id" element={<ViewBlog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <EnquireNow />
      <EnquireNowBtn />
      <Helpers />
      <Footer />
    </myContext.Provider>
  );
};

export default App;
