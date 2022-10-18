import React, { useRef, useEffect, useContext } from "react";
import { myContext } from "../App";
import logo from "../assets/images/logo.png";
import { BsBuilding } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const { scrollToTop, linksRef, buildingRef, closeRef, setModalActive } =
    useContext(myContext);

  const toggleNavbar = () => {
    linksRef.current.classList.toggle("active");
    buildingRef.current.classList.toggle("active");
    closeRef.current.classList.toggle("active");
  };

  const d = () => {
    window.scrollTo(0, 0);
    let nav = document.querySelector("nav");
    nav.classList.remove("active");
    linksRef.current.classList.remove("active");
    buildingRef.current.classList.remove("active");
    closeRef.current.classList.remove("active");
  };

  // gsap
  const navRef = useRef(null);
  useEffect(() => {
    const nav = navRef.current;
    // gsap.from(nav, {
    //   y: "-50px",
    //   duration: 0.5,
    // });
  }, []);
  return (
    <>
      <nav className="container-fluid p-2" ref={navRef}>
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="logo" onClick={scrollToTop}>
            <img src={logo} alt="img" />
          </Link>

          <ul className="list-unstyled navlinks" ref={linksRef}>
            <li>
              <NavLink to="/" onClick={scrollToTop}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" onClick={scrollToTop}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={scrollToTop}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={scrollToTop}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={scrollToTop}>
                Contact us
              </NavLink>
            </li>
          </ul>

          <div className="hamburger d-lg-none" onClick={toggleNavbar}>
            <div className="building" ref={buildingRef}>
              <BsBuilding />
            </div>
            <div className="close" ref={closeRef}>
              <AiFillCloseCircle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
