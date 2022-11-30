import React, { Component } from "react";
import axios from "axios";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

export default class Header extends Component {
  state = {
    about: "",
    contact: {},
  };

  componentDidMount = async () => {
    const aboutData = await axios.get("http://localhost:5000/api/about");
    this.setState({ about: aboutData.data[0] });

    const contactsData = await axios.get("http://localhost:5000/api/contact");
    this.setState({ contact: contactsData.data[0] });
  };
  render() {
    const { img, text, position } = this.state.about;
    return (
      <React.Fragment>
        <header id="home">
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">
                {this.state.contact.contact}.
              </h1>
              <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                I am a {position}
              </h3>
              <hr />
              <ul className="social">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/eslamicoo912"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/eslamicoo912/"
                  >
                    <AiFillLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/eslamicoo912/"
                  >
                    <AiFillFacebook />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
