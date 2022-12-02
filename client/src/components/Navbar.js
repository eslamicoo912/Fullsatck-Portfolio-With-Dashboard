import React, { useEffect, useState } from "react";
import { RiAdminLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("/home");

  const homeClick = () => {
    setCurrentPage("/home");
  };
  const aboutClick = () => {
    setCurrentPage("/about");
  };
  const resumeClick = () => {
    setCurrentPage("/resume");
  };
  const projectsClick = () => {
    setCurrentPage("/portfolio");
  };
  const testimonialsClick = () => {
    setCurrentPage("/testimonials");
  };
  const contactClick = () => {
    setCurrentPage("/contact");
  };

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  return (
    <React.Fragment>
      <nav id="nav-wrap">
        <Link
          to=""
          className="mobile-btn"
          href="#nav-wrap"
          title="Show navigation"
        >
          Show navigation
        </Link>
        <Link to="" className="mobile-btn" href="/#" title="Hide navigation">
          Hide navigation
        </Link>
        <ul id="nav" className="nav">
          <li
            onClick={homeClick}
            className={currentPage === "/home" ? "current" : ""}
          >
            <Link to="/" className="smoothscroll">
              Home
            </Link>
          </li>
          <li
            onClick={aboutClick}
            className={currentPage === "/about" ? "current" : ""}
          >
            <Link to="/about" className="smoothscroll">
              About
            </Link>
          </li>
          <li
            onClick={resumeClick}
            className={currentPage === "/resume" ? "current" : ""}
          >
            <Link to="/resume" className="smoothscroll">
              Resume
            </Link>
          </li>
          <li
            onClick={projectsClick}
            className={currentPage === "/portfolio" ? "current" : ""}
          >
            <Link to="/portfolio" className="smoothscroll">
              Projects
            </Link>
          </li>
          <li
            onClick={testimonialsClick}
            className={currentPage === "/testimonials" ? "current" : ""}
          >
            <Link to="/messages" className="smoothscroll">
              Testimonials
            </Link>
          </li>
          <li
            onClick={contactClick}
            className={currentPage === "/contact" ? "current" : ""}
          >
            <Link to="/contact" className="smoothscroll">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className="icon-container">
              <RiAdminLine className="icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
