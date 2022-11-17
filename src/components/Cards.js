import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import image1 from "../assets/sigmund-LyF5jsdcYW0-unsplash.jpg";
import image2 from "../assets/thisisengineering-raeng-8Jw2WhafOOg-unsplash.jpg";
import image3 from "../assets/joan-gamell-XmZ4GDAp9G0-unsplash.jpg";
import image4 from "../assets/fotis-fotopoulos-xQ2qynQ92xs-unsplash.jpg";
import "../styles/Cards.css";

function Cards() {

  return (
    <section className="Cards">
      <div>
        <Link to="qualityconcepts"><Card image={image1} title="Conceptos de Calidad" /></Link>
        <Link to="processquality"><Card image={image2} title="Calidad de procesos y productos de software"/></Link>
      </div>
      <div>
        <Link to="qualityplan"><Card image={image3} title="Plan de Calidad" /></Link>
        <Link to="technicalreviews"><Card image={image4} title="Revisiones Técnicas Formales" /></Link>
      </div>
    </section>
  );
}

export default Cards;
