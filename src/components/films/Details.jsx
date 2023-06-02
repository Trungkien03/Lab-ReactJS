import { useParams } from "react-router-dom";
import filmsData from "../../shared/ListOfFilms";
import './Details.css';
import React from "react";

export const Details = () => {
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
        <div className="badges">{film.Title}</div>
        <div className="product-detailss">
          <h4>{film.Year}</h4>
          <div className="product-prices">Market value: € {cost}</div>
          <p>{film.info}</p>
          <div className="product-bottom-detailss"></div>
        </div>
      </div>
    </div>
  );
};
