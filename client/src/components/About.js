import React, { useEffect, useState } from "react";
import axios from "axios";
export default function About() {
  const [aboutData, setAboutData] = useState({});

  const getData = async () => {
    const response = await axios.get(
      "https://portfolio-oqt5.onrender.com/api/about"
    );
    const { data } = response;
    setAboutData(data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  const { img, text } = aboutData;
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
                <span>Eslam Ashraf</span>
                <br />
                <span>Sharkia, Egypt</span>
                <br />
                <span>01013540912</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
