import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [adminData, setAdminData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setAdminData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://portfolio-oqt5.onrender.com/admin/login",
      adminData
    );

    window.location = "/";

    if (response.status === 200) {
      const { message } = response.data;
      if (message === "success_login") {
        sessionStorage.setItem("status", response.status);
      }
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          value={adminData.username}
          name="username"
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          value={adminData.password}
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
