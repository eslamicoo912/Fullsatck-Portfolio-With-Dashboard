import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import resumeData from "./resumeData";
import Login from "./components/Login";
import Menu from "./components/Dashboard/Menu";
import Projects from "./components/Dashboard/Projects";
import AboutD from "./components/Dashboard/AboutD";
import EducationD from "./components/Dashboard/EducationD";
import WorkD from "./components/Dashboard/WorkD";
import SkillsD from "./components/Dashboard/SkillsD";
import ContactsD from "./components/Dashboard/ContactsD";

class App extends Component {
  render() {
    const sessionStatus = sessionStorage.getItem("status");
    if (sessionStatus == 200)
      return (
        <div className="Dashboard">
          <Router>
            <Menu />
            <Routes>
              <Route path="/" element={<Projects />} />
              <Route path="/about" element={<AboutD />} />
              <Route path="/work" element={<WorkD />} />
              <Route path="/education" element={<EducationD />} />
              <Route path="/skills" element={<SkillsD />} />
              <Route path="/contacts" element={<ContactsD />} />
            </Routes>
          </Router>
        </div>
      );
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
