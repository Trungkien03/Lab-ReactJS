import React from "react";
import "./About.css";
import {Button } from "react-bootstrap";
export const About = () => {
  return (
    <div>
      <>
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>
        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img
                src="https://kenh14cdn.com/203336854389633024/2023/4/19/photo-3-16818845978792108016051.jpg"
                alt="Jane"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Jane Doe</h2>
                <p className="title">CEO &amp; Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <Button className="button">Contact</Button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src="https://hrchannels.com/uptalent/attachments/images/20220622/110422064_to-chat-ceo.jpg"
                alt="Mike"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Mike Ross</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p>
                  <Button className="button">Contact</Button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src="https://iabm.edu.vn/wp-content/uploads/2020/10/ceo-va-cfo-su-khac-biet-la-gi-1.jpg"
                alt="John"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>John Doe</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p>
                  <Button className="button">Contact</Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
