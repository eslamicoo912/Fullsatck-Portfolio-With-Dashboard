import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaGithub, FaHandPointer } from "react-icons/fa";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [visibleForm, setVisibleForm] = useState(null);
  const [editTitle, setEditTitle] = useState(null);
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

  const handleChange = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    if (visibleForm === "add")
      await axios.post("http://localhost:5000/api/projects", formData);
    if (visibleForm === "edit") {
      const project = projects.filter((pro) => pro.title === editTitle);
      await axios.patch(
        `http://localhost:5000/api/projects/${project[0]._id}`,
        formData
      );
    }
    setVisibleForm(null);
    getProjects();
  };

  const deleteProject = async (title) => {
    const project = projects.filter((pro) => pro.title === title);
    await axios.delete(`http://localhost:5000/api/projects/${project[0]._id}`);
    getProjects();
  };

  const getTitle = (title) => {
    setEditTitle(title);
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
          <button type="submit">
            {visibleForm === "add" ? "Add Project" : "Edit Project"}
          </button>
        </form>
      </div>
    );
  return (
    <div className="projects">
      <button
        className="add"
        onClick={() => {
          setVisibleForm("add");
          setFormData("");
        }}
      >
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
                        <FaGithub className="icon github" />
                        <FaHandPointer className="icon live" />
                        <FiEdit
                          onClick={() => {
                            setVisibleForm("edit");
                            getTitle(item.title);
                            setFormData(item);
                          }}
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
