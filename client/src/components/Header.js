import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

export default function Header() {
  const [aboutData, setAboutData] = useState({});
  const [contacts, setContacts] = useState({});
  const [loading, setLoadind] = useState(true);

  const getData = async () => {
    const aboutData = await axios.get(
      "https://portfolio-oqt5.onrender.com/api/about"
    );
    setAboutData(aboutData.data[0]);

    const contactsData = await axios.get(
      "https://portfolio-oqt5.onrender.com/api/contact"
    );
    setContacts(contactsData.data[0]);
    setLoadind(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading)
    return (
      <header id="home">
        <h1>Loading...</h1>
      </header>
    );

  const { position } = aboutData;
  return (
    <React.Fragment>
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{contacts.contact}.</h1>
            <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
              I am a {position}
            </h3>
            <hr />
            <ul className="social">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/eslamicoo912"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/eslamicoo912/"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/eslamicoo912/"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
