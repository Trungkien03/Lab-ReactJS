import React from "react";
import { Button } from "react-bootstrap";
export const News = () => {
  return (
    <div>
      <div className="about-section">
        <h1>News Movies</h1>
      </div>
      <h2 style={{ textAlign: "center" }}></h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src="https://images.thedirect.com/media/article_full/marvel-mcu-movies.jpg"
              alt="Jane"
              style={{ width: "100%", height: "300px" }}
            />
            <div className="container">
              <h5>Best Marvel Films of all times</h5>
              <p className="title">CEO &amp; Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <Button className="button">Read</Button>
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img
              src="https://www.cleveland.com/resizer/-j7V-k2bY_MbtNuyyumSzwt7628=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.cleveland.com/home/cleve-media/width2048/img/ent_impact_home/photo/moviefranchisesjpg-d56bacac61629769.jpg"
              alt="Mike"
              style={{ width: "100%", height: "300px" }}
            />
            <div className="container">
              <h5>What Your Favourite Film Genre Says About You</h5>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <Button className="button">Read</Button>
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img
              src="https://media.licdn.com/dms/image/C4E12AQFEpPVKRNrUyA/article-cover_image-shrink_720_1280/0/1604975514778?e=2147483647&v=beta&t=iMz3JEyHUM3MgqiHS_VnmpjYRdTLc9YQrKD3MBREAfI"
              alt="John"
              style={{ width: "100%", height: "300px" }}
            />
            <div className="container">
              <h5>Summer Movie Guide: What to watch from May</h5>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <Button className="button">Read</Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
