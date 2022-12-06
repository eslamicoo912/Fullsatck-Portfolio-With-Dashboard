import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactCard from "./ContactCard";
import { MdPersonAddAlt } from "react-icons/md";

export default function ContactsD() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    contact: "",
  });

  const getData = async () => {
    const response = await axios.get(
      "https://portfolio-oqt5.onrender.com/api/contact"
    );
    const { data } = response;
    setContacts(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  });

  const handleChange = (e) => {
    setFormData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const addContact = async () => {
    await axios.post(
      "https://portfolio-oqt5.onrender.com/api/contact",
      formData
    );
    setFormData({ contact: "" });
  };

  if (loading) return <h1 className="loading">Loading...</h1>;

  return (
    <div className="table">
      <form onSubmit={addContact}>
        <input
          placeholder="Enter the contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <MdPersonAddAlt onClick={addContact} className="add-icon" />
      </form>
      <div className="table-header">
        <div className="header__item">
          <a id="name" className="filter__link" href="#">
            Contact
          </a>
        </div>

        <div className="header__item">
          <a id="draws" className="filter__link filter__link--number" href="#">
            Edit
          </a>
        </div>
        <div className="header__item">
          <a id="draws" className="filter__link filter__link--number" href="#">
            Delete
          </a>
        </div>
      </div>
      <div className="table-content">
        {contacts &&
          contacts.map((item, index) => {
            const { _id, contact } = item;
            return (
              <ContactCard contact={contact} object_id={_id} key={index} />
            );
          })}
      </div>
    </div>
  );
}
