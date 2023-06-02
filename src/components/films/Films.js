import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import filmsData from "../../shared/ListOfFilms";
import { Link } from 'react-router-dom'
import "./Films.css";

export const Films = () => {
  const [film, setFilm] = useState([]);

  return (
    <div>
      <Container>
        <Row>
          {filmsData.map((film) => (
            <Col className="film-card" key={film.id} md={4} sm={6} xs={12}>
              <Card className="film-item">
                <div className="image-container">
                  <div className="image-wrapper">
                    <Card.Img
                      className="film-image"
                      variant="top"
                      src={film.Image}
                      alt={film.Title}
                    />
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{film.Title}</Card.Title>
                  <Card.Text>{`Year: ${film.Year}`}</Card.Text>
                  <Card.Text>{`Nation: ${film.Nation}`}</Card.Text>
                  <Button onClick={() => {setFilm(film)}} variant="contained" className="mr-2">
                  <a href='#popup1' id='openPopUp'>Detail</a>
                  </Button>
                    <Link to={`details/${film.id}`}> 
                    <p><button  >Detail</button></p>
                    </Link>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={film.Image} />
          <h3>{film.Title} - {film.Year}</h3>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">{film.info}</div>
        </div>
      </div>
    </div>
  );
};
