import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import axios from "axios";

export default function ContactCard({ contact, object_id }) {
  const [visibleInput, setVisibleInput] = useState("");
  const [contactInput, setContactInput] = useState("");

  const editBtn = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/api/contact/${object_id}`, {
      contact: contactInput,
    });
    setVisibleInput("");
    console.log(contactInput);
  };

  const deleteBtn = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:5000/api/contact/${object_id}`);
  };
  return (
    <div className="table-row">
      {visibleInput === object_id ? (
        <form>
          <input
            value={contact}
            name="contactInput"
            onChange={(e) => setContactInput(e.target.value)}
          />{" "}
          <button onClick={editBtn}>Edit</button>
        </form>
      ) : (
        <div className="table-data">{contact}</div>
      )}
      <div className="table-data">
        <FiEdit
          className="edit icon"
          onClick={() => setVisibleInput(object_id)}
        />
      </div>
      <div className="table-data">
        <MdDelete className="delete icon" onClick={deleteBtn} />
      </div>
    </div>
  );
}
