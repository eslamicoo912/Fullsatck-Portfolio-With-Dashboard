import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";

export default function AboutD() {
  const [aboutData, setAboutData] = useState({});
  const [loading, setLoading] = useState(true);
  const [visibleForm, setVisibleForm] = useState(false);
  const [formData, setFormData] = useState({
    img: "",
    text: "",
    position: "",
  });

  const getData = async () => {
    const response = await axios.get(
      "https://portfolio-oqt5.onrender.com/api/about"
    );
    const data = response.data[0];
    setAboutData(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setFormData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const patchData = async (e) => {
    await axios.patch(
      "https://portfolio-oqt5.onrender.com/api/about",
      formData
    );
    setVisibleForm(false);
  };

  if (loading) return <h1 className="loading">Loading...</h1>;

  if (visibleForm)
    return (
      <div className="aboutD">
        <form onSubmit={patchData}>
          <div className="input-wrapper">
            <label>Img</label>
            <input name="img" value={formData.img} onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <label>Summary</label>
            <textarea
              name="text"
              value={formData.text}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="input-wrapper">
            <label>Position</label>
            <input
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Update</button>
        </form>
      </div>
    );

  return (
    <div className="aboutD">
      <FiEdit
        className="icon"
        onClick={() => {
          setVisibleForm(true);
          setFormData(aboutData);
        }}
      />
      <div className="img-container wrapper">
        <img alt="" src={aboutData.img} />
      </div>
      <div className="position-container wrapper">
        <h3>{aboutData.position}</h3>
      </div>
      <div className="text-container wrapper">
        <p>{aboutData.text}</p>
      </div>
    </div>
  );
}
