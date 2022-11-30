import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import ContactCard from "./ContactCard";
import { MdPersonAddAlt } from "react-icons/md";

/*
export default function ContactsD() {
  

  return (
    <div className="contactsD">
      {contacts.map((item, index) => {
        const {
          _id,
          fullname,
          address,
          phone,
          linkedin,
          github,
          facebook,
          email,
        } = item;
        return (
          <div className="contact" key={index}>
            <div className="contact-container">
              <div className="info">
                <h5>Full Name:</h5>
                <h5>{fullname}</h5>
              </div>
              <div className="btns">
                <FiEdit className="edit icon" onClick={() => editHandle(_id)} />
                <MdDelete
                  className="delete icon"
                  onClick={() => deleteWork(_id)}
                />
              </div>
            </div>
            <div className="contact-container">
              <div className="info">
                <h5>Address:</h5>
                <h5>{address}</h5>
              </div>
              <div className="btns">
                <FiEdit className="edit icon" onClick={() => editHandle(_id)} />
                <MdDelete
                  className="delete icon"
                  onClick={() => deleteWork(_id)}
                />
              </div>
            </div>
            <div className="contact-container">
              <div className="info">
                <h5>Phone:</h5>
                <h5>{phone}</h5>
              </div>
              <div className="btns">
                <FiEdit className="edit icon" onClick={() => editHandle(_id)} />
                <MdDelete
                  className="delete icon"
                  onClick={() => deleteWork(_id)}
                />
              </div>
            </div>
            <div className="contact-container">
              <div className="info">
                <h5>Linkedin:</h5>
                <h5>{linkedin}</h5>
              </div>
              <div className="btns">
                <FiEdit className="edit icon" onClick={() => editHandle(_id)} />
                <MdDelete
                  className="delete icon"
                  onClick={() => deleteWork(_id)}
                />
              </div>
            </div>
            <div className="contact-container">
              <div className="info">
                <h5>Github:</h5>
                <h5>{github}</h5>
              </div>
              <div className="btns">
                <FiEdit className="edit icon" onClick={() => editHandle(_id)} />
                <MdDelete
                  className="delete icon"
                  onClick={() => deleteWork(_id)}
                />
              </div>
            </div>
            <div className="contact-container">
              <div className="info">
                <h5>Facebook:</h5>
                <h5>{facebook}</h5>
              </div>
              <div className="btns">
                <FiEdit className="edit icon" onClick={() => editHandle(_id)} />
                <MdDelete
                  className="delete icon"
                  onClick={() => deleteWork(_id)}
                />
              </div>
            </div>
            <div className="contact-container">
              <div className="info">
                <h5>Email:</h5>
                <h5>{email}</h5>
              </div>
              <div className="btns">
                <FiEdit className="edit icon" onClick={() => editHandle(_id)} />
                <MdDelete
                  className="delete icon"
                  onClick={() => deleteWork(_id)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
*/

export default function ContactsD() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    contact: "",
  });

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/api/contact");
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
    await axios.post("http://localhost:5000/api/contact", formData);
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
