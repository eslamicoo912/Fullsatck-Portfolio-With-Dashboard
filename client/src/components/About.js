import React, { Component } from "react";
import axios from "axios";
export default class About extends Component {
  state = {
    aboutData: "",
    contacts: "",
  };

  componentDidMount = async () => {
    const aboutData = await axios.get("http://localhost:5000/api/about");
    this.setState({ aboutData: aboutData.data[0] });

    const contactsData = await axios.get("http://localhost:5000/api/contact");
    this.setState({ contacts: contactsData.data[0] });
  };

  render() {
    const { img, text } = this.state.aboutData;
    const { fullname, address, phone, linkedin, github, email, portfolio } =
      this.state.contacts;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={img} alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{text}</p>

            <div className="row">
              <div className=" contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{fullname}</span>
                  <br />
                  <span>{address}</span>
                  <br />
                  <a href="/">{portfolio}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
