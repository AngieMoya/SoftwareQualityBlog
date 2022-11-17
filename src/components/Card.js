import React from "react";
import "../styles/Card.css";

function Card({ image, title }) {

  return (
    <div className="Card">
      <img src={image}></img>
      <h2>{title}</h2>
    </div>
  );
}

export default Card;
