import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
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
              <a href="/">{resumeData.linkedinId}</a>
              <h4>Gmail :</h4>
              <a href="/">{resumeData.gmail}</a>
              <h4>Phone</h4>
              <h5 className="contact-phone">01013540912</h5>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
