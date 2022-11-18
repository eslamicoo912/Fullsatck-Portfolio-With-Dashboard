import React, { Component } from "react";
import axios from "axios";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

export default class Header extends Component {
  state = {
    contacts: "",
    about: "",
  };

  componentDidMount = async () => {
    const contactsData = await axios.get("http://localhost:5000/api/contact");
    this.setState({ contacts: contactsData.data[0] });

    const aboutData = await axios.get("http://localhost:5000/api/about");
    this.setState({ about: aboutData.data[0] });
  };
  render() {
    const {
      fullname,
      address,
      phone,
      linkedin,
      github,
      email,
      portfolio,
      facebook,
    } = this.state.contacts;
    const { img, text, position } = this.state.about;
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
            <li className="current">
              <Link to="/" className="smoothscroll">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="smoothscroll">
                About
              </Link>
            </li>
            <li>
              <Link to="/resume" className="smoothscroll">
                Resume
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="smoothscroll">
                Works
              </Link>
            </li>
            <li>
              <Link to="/messages" className="smoothscroll">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/contact" className="smoothscroll">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
