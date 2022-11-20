import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [visibleForm, setVisibleForm] = useState(false);
  const [formData, setFormData] = useState({
    img: "",
    title: "",
    text: "",
    github: "",
    live: "",
  });

  const getProjects = async () => {
    const getProjects = await axios.get("http://localhost:5000/api/projects");
    setProjects(getProjects.data);
  };

  useEffect(() => {
    getProjects();
  }, [visibleForm]);

  const { img, title, text, github, live } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postProject = await axios.post(
      "http://localhost:5000/api/projects",
      formData
    );
    setVisibleForm(false);
    window.location = "http://localhost:3000/projects";
  };

  const handleChange = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  if (visibleForm)
    return (
      <div className="projects">
        <form onSubmit={handleSubmit}>
          <h4>Project Data</h4>
          <input
            placeholder="image url"
            value={img}
            name="img"
            onChange={handleChange}
          />
          <input
            placeholder="title"
            value={title}
            name="title"
            onChange={handleChange}
          />
          <input
            placeholder="text"
            value={text}
            name="text"
            onChange={handleChange}
          />
          <input
            placeholder="github link"
            value={github}
            name="github"
            onChange={handleChange}
          />
          <input
            placeholder="live demo"
            value={live}
            name="live"
            onChange={handleChange}
          />
          <button type="submit">Add Project</button>
        </form>
      </div>
    );

  const editProject = async (title) => {};

  const deleteProject = async (title) => {
    const project = projects.filter((pro) => pro.title === title);
    await axios.delete(`http://localhost:5000/api/projects/${project[0]._id}`);
    window.location = "http://localhost:3000/projects";
  };

  return (
    <div className="projects">
      <button className="add" onClick={() => setVisibleForm(true)}>
        New Project
      </button>
      <div className="list">
        {projects &&
          projects.map((item, index) => {
            return (
              <div key={index} className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01">
                    <img src={`${item.img}`} className="item-img" alt="" />
                    <div className="overlay">
                      <div className="portfolio-item-meta info">
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                      </div>

                      <div className="btns">
                        <FiEdit
                          onClick={() => editProject(item.title)}
                          className="edit icon"
                        />
                        <MdDelete
                          onClick={() => deleteProject(item.title)}
                          className="delete icon"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
