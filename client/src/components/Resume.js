import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Resume() {
  const [skills, setSkills] = useState([]);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const getData = async () => {
    const skillsData = await axios.get(
      "https://portfolio-oqt5.onrender.com/api/skills"
    );
    setSkills(skillsData.data[0].skills);

    const educationsData = await axios.get(
      "https://portfolio-oqt5.onrender.com/api/educations"
    );
    setEducations(educationsData.data);

    const experiencesData = await axios.get(
      "https://portfolio-oqt5.onrender.com/api/works"
    );
    setExperiences(experiencesData.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {educations &&
            educations.map((item) => {
              return (
                <div className="row item education-item">
                  <div className="twelve columns">
                    <p className="school">{item.school}</p>
                    <p className="info">
                      {item.degree}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        From {item.start_date} To {item.end_date}
                      </em>
                    </p>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {experiences &&
            experiences.map((item) => {
              const { start_date, end_date, company, position, text } = item;
              return (
                <div className="experience">
                  <div className="about-company">
                    <p className="company">{company}</p>
                    <div className="dates">
                      <p className="start_date">{start_date}</p>
                      <p>-</p>
                      <p className="end_date">{end_date}</p>
                    </div>
                  </div>

                  <div className="info">
                    <p className="position">{position}</p>
                  </div>
                  <p className="text">{text}</p>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="bars">
            <ul className="skills">
              {skills &&
                skills.map((item) => {
                  return (
                    <li>
                      <em>{item.name}</em>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
