import axios from "axios";
import React, { Component } from "react";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
export default class Footer extends Component {
  state = {
    contacts: "",
  };

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:5000/api/contact");
    this.setState({ contacts: response.data[0] });
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

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
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
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
