import React, { Component } from "react";
import axios from "axios";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

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
        <header id="home">
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{fullname}.</h1>
              <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                I am a {position}
              </h3>
              <hr />
              <ul className="social">
                <li>
                  <a target="_blank" rel="noreferrer" href={github}>
                    <AiFillGithub />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href={linkedin}>
                    <AiFillLinkedin />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href={facebook}>
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
