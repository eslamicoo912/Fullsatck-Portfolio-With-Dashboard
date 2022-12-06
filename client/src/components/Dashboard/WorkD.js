import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

export default function WorkD() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleForm, setVisibleForm] = useState(null);
  const [formData, setFormData] = useState({
    start_date: "",
    end_date: "",
    company: "",
    position: "",
    text: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(
      "https://portfolio-oqt5.onrender.com/api/works"
    );
    const { data } = response;
    setWorks(data);
    setLoading(false);
  };

  const editHandle = async (_id) => {
    setVisibleForm("edit");
    const response = await axios.get(
      `https://portfolio-oqt5.onrender.com/api/works/${_id}`
    );
    const { data } = response;
    setFormData(data);
  };

  const handleChange = (e) => {
    setFormData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const addWork = async () => {
    await axios.post("https://portfolio-oqt5.onrender.com/api/works", formData);
    setVisibleForm(null);
  };

  const updateWork = async () => {
    const { _id } = formData;
    await axios.patch(
      `https://portfolio-oqt5.onrender.com/api/works/${_id}`,
      formData
    );
    setVisibleForm(null);
  };

  const deleteWork = async (_id) => {
    await axios.delete(`https://portfolio-oqt5.onrender.com/api/works/${_id}`);
    window.location.reload();
  };

  if (loading) return <h1 className="loading">Loading...</h1>;

  return (
    <div className={visibleForm ? "workDForm" : "workD"}>
      {!visibleForm && (
        <button onClick={() => setVisibleForm("add")}>
          Add Work Experience
        </button>
      )}
      {visibleForm ? (
        <form onSubmit={visibleForm === "edit" ? updateWork : addWork}>
          <div className="field-container">
            <label>Start Date</label>
            <input
              value={formData.start_date}
              name="start_date"
              onChange={handleChange}
            />
          </div>
          <div className="field-container">
            <label>End Date</label>
            <input
              placeholder=""
              value={formData.end_date}
              name="end_date"
              onChange={handleChange}
            />
          </div>
          <div className="field-container">
            <label>Company</label>
            <input
              placeholder=""
              value={formData.company}
              name="company"
              onChange={handleChange}
            />
          </div>
          <div className="field-container">
            <label>Position</label>
            <input
              placeholder=""
              value={formData.position}
              name="position"
              onChange={handleChange}
            />
          </div>
          <div className="field-container textarea">
            <label>Text</label>
            <textarea
              placeholder=""
              value={formData.text}
              name="text"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="btns-container">
            <button type="submit">
              {visibleForm === "edit" ? "Update" : "Add"}
            </button>
            <button className="cancel" onClick={() => setVisibleForm(null)}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="works-list">
          {works.map((work, index) => {
            const { _id, start_date, end_date, company, position, text } = work;
            return (
              <div className="experience" key={index}>
                <p className="company">{company}</p>
                <div className="dates">
                  <p className="start_date">{start_date}</p>
                  <p>-</p>
                  <p className="end_date">{end_date}</p>
                </div>

                <div className="info">
                  <p className="position">{position}</p>
                </div>
                <p className="text">{text}</p>
                <div className="btns">
                  <FiEdit
                    className="edit icon"
                    onClick={() => editHandle(_id)}
                  />
                  <MdDelete
                    className="delete icon"
                    onClick={() => deleteWork(_id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
