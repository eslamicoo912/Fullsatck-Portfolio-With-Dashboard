import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import resumeData from "./resumeData";
import Login from "./components/Login";

class App extends Component {
  render() {
    const sessionStatus = sessionStorage.getItem("status");
    if (sessionStatus == 200) return <h1>Eslam</h1>;
    else
      return (
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Header />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route
                path="/messages"
                element={<Testimonials resumeData={resumeData} />}
              />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </Router>
        </div>
      );
  }
}

export default App;
