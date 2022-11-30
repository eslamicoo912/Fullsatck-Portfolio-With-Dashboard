import React, { Component } from "react";
import axios from "axios";
export default class ContactUs extends Component {
  state = {
    contacts: [],
    aboutData: "",
  };

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:5000/api/contact");
    this.setState({ contacts: response.data });
    const aboutData = await axios.get("http://localhost:5000/api/about");
    this.setState({ aboutData: aboutData.data[0] });
  };
  render() {
    const { fullname, address, phone, linkedin, github, email, portfolio } =
      this.state.contacts;
    const { img, text } = this.state.aboutData;
    return (
      <section id="contact">
        <div className="row">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              {this.state.contacts.map((item, index) => {
                return <p className="cont">{item.contact}</p>;
              })}
            </div>
          </aside>
          <div className="three columns">
            <img className="profile-pic" src={img} alt="" />
          </div>
        </div>
      </section>
    );
  }
}
