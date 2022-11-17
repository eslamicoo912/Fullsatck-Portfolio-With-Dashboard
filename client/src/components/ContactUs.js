import React, { Component } from "react";
import axios from "axios";
export default class ContactUs extends Component {
  state = {
    contacts: "",
  };

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:5000/api/contact");
    this.setState({ contacts: response.data[0] });
  };
  render() {
    const { fullname, address, phone, linkedin, github, email, portfolio } =
      this.state.contacts;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Linked in :</h4>
              <a href="/">{linkedin}</a>
              <h4>Gmail :</h4>
              <a href="/">{email}</a>
              <h4>Phone</h4>
              <h5 className="contact-phone">{phone}</h5>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
