import React, { Component } from "react";
import axios from "axios";
import { FaHandPointer, FaGithub } from "react-icons/fa";
export default class Porfolio extends Component {
  state = {
    projects: "",
  };
  componentDidMount = async () => {
    const projectsData = await axios.get("http://localhost:5000/api/projects");
    this.setState({ projects: projectsData.data });
  };
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {this.state.projects &&
                this.state.projects.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href="#modal-01">
                          <img src={`${item.img}`} alt="" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.title}</h5>
                              <p>{item.text}</p>
                            </div>
                            <div className="btns">
                              <FaGithub className="icon github" />
                              <FaHandPointer className="icon live" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
