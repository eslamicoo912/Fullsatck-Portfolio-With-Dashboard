import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import {
  MdCastForEducation,
  MdContactMail,
  MdInfo,
  MdOutlineWork,
  MdDashboard,
  MdOutlineLogout,
} from "react-icons/md";
export default function Menu() {
  return (
    <nav className="menu">
      <div className="head">
        <MdDashboard className="icon" />
        <h3>Dashboard</h3>
      </div>
      <ul>
        <li>
          <AiOutlineFundProjectionScreen className="icon" />
          <Link to="/">Projects</Link>
        </li>
        <li>
          <MdInfo className="icon" />
          <Link to="/about">About</Link>
        </li>
        <li>
          <MdOutlineWork className="icon" />
          <Link to="/work">Work</Link>
        </li>

        <li>
          <MdCastForEducation className="icon" />
          <Link to="/education">Education</Link>
        </li>

        <li>
          <MdContactMail className="icon" />
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <MdOutlineLogout className="icon" />
          <Link
            to="/"
            onClick={() => {
              sessionStorage.clear();
              window.location = "/";
            }}
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}
