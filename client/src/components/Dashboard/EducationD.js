import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

export default function WorkD() {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleForm, setVisibleForm] = useState(null);
  const [formData, setFormData] = useState({
    start_date: "",
    end_date: "",
    school: "",
    degree: "",
    text: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/api/educations");
    const { data } = response;
    setEducations(data);
    setLoading(false);
  };

  const editHandle = async (_id) => {
    setVisibleForm("edit");
    const response = await axios.get(
      `http://localhost:5000/api/educations/${_id}`
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
    await axios.post("http://localhost:5000/api/educations", formData);
    setVisibleForm(null);
  };

  const updateWork = async () => {
    const { _id } = formData;
    await axios.patch(`http://localhost:5000/api/educations/${_id}`, formData);
    setVisibleForm(null);
  };

  const deleteWork = async (_id) => {
    await axios.delete(`http://localhost:5000/api/educations/${_id}`);
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
            <label>school</label>
            <input
              placeholder=""
              value={formData.school}
              name="school"
              onChange={handleChange}
            />
          </div>
          <div className="field-container">
            <label>degree</label>
            <input
              placeholder=""
              value={formData.degree}
              name="degree"
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
        <div className="educations-list">
          {educations.map((work, index) => {
            const { _id, start_date, end_date, school, degree, text } = work;
            return (
              <div className="experience" key={index}>
                <p className="school">{school}</p>
                <div className="dates">
                  <p className="start_date">{start_date}</p>
                  <p>-</p>
                  <p className="end_date">{end_date}</p>
                </div>

                <div className="info">
                  <p className="degree">{degree}</p>
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
