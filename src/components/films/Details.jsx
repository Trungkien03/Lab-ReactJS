import { useParams } from "react-router-dom";
import filmsData from "../../shared/ListOfFilms";
import "./Details.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Icon } from "react-materialize";
import Modal from "../Modal";

export const Details = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userName = useParams();
  const film = filmsData.find((obj) => {
    return obj.id == userName.id;
  });
  let cost = film.cost.toLocaleString();
  return (
    <div className="containers">
      <div className="product-cards">
        <div className="product-tumbs">
          <img src={`../${film.Image}`} alt="" />
        </div>
        <div className="product-content">
          <div className="badges">{film.Title}</div>
          <div className="product-detailss">
            <div className="product-info">
              <h4>{film.Year}</h4>
              <div className="product-prices">Market value: € {cost}</div>
              <p>{film.info}</p>
              <div className="product-bottom-detailss"></div>
              <Button onClick={() => setIsOpen(true)}>
                <Icon>ondemand_video</Icon>
              </Button>
              {isOpen && <Modal setIsOpen={setIsOpen} film={film} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
