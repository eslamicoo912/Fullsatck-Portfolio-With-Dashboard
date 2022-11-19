import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:5000/admin/login",
        this.state
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
            value={this.state.username}
            name="username"
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <input
            placeholder="password"
            type="password"
            value={this.state.password}
            name="password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
