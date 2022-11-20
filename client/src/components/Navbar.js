import React, { Component } from "react";
import axios from "axios";
import { RiAdminLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default class Header extends Component {
  state = {
    contacts: "",
    about: "",
    current: "home",
  };

  componentDidMount = async () => {
    const contactsData = await axios.get("http://localhost:5000/api/contact");
    this.setState({ contacts: contactsData.data[0] });

    const aboutData = await axios.get("http://localhost:5000/api/about");
    this.setState({ about: aboutData.data[0] });
  };
  render() {
    const homeClick = () => {
      this.setState({ current: "home" });
    };
    const aboutClick = () => {
      this.setState({ current: "about" });
    };
    const resumeClick = () => {
      this.setState({ current: "resume" });
    };
    const projectsClick = () => {
      this.setState({ current: "projects" });
    };
    const testimonialsClick = () => {
      this.setState({ current: "testimonials" });
    };
    const contactClick = () => {
      this.setState({ current: "contact" });
    };

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
              className={this.state.current === "home" ? "current" : ""}
            >
              <Link to="/" className="smoothscroll">
                Home
              </Link>
            </li>
            <li
              onClick={aboutClick}
              className={this.state.current === "about" ? "current" : ""}
            >
              <Link to="/about" className="smoothscroll">
                About
              </Link>
            </li>
            <li
              onClick={resumeClick}
              className={this.state.current === "resume" ? "current" : ""}
            >
              <Link to="/resume" className="smoothscroll">
                Resume
              </Link>
            </li>
            <li
              onClick={projectsClick}
              className={this.state.current === "projects" ? "current" : ""}
            >
              <Link to="/portfolio" className="smoothscroll">
                Projects
              </Link>
            </li>
            <li
              onClick={testimonialsClick}
              className={this.state.current === "testimonials" ? "current" : ""}
            >
              <Link to="/messages" className="smoothscroll">
                Testimonials
              </Link>
            </li>
            <li
              onClick={contactClick}
              className={this.state.current === "contact" ? "current" : ""}
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
}
