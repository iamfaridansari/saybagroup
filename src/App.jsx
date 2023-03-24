import React from "react";
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
import ViewProject from "./pages/ViewProject";
import { AppContextProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/viewproject" element={<ViewProject />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Helpers />
      <Footer />
    </AppContextProvider>
  );
};

export default App;
