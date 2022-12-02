import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ContactUs() {
  const [contacts, setContacts] = useState([]);
  const [aboutData, setAboutData] = useState({});

  const getData = async () => {
    const contactsData = await axios.get("http://localhost:5000/api/contact");
    setContacts(contactsData.data);
    const aboutData = await axios.get("http://localhost:5000/api/about");
    setAboutData(aboutData.data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  const { img } = aboutData;
  return (
    <section id="contact">
      <div className="row">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <aside className="eigth columns footer-widgets">
          <div className="widget">
            {contacts.map((item, index) => {
              return (
                <p key={index} className="cont">
                  {item.contact}
                </p>
              );
            })}
          </div>
        </aside>
        <div className="three columns">
          <img className="profile-pic" src={img} alt="" />
        </div>
      </div>
    </section>
  );
}
