import React from "react";
import "../styles/Aboutblog.css";
import Academy from "../assets/badge.png";

function Aboutblog({ stateBackgroundMode }) {
  const textSection = stateBackgroundMode ? "textLight" : "textDark";

  return (
    <section className="Aboutblog">
      <div>
        <h2 className={textSection}>
          La información contenida en este Blog te permitira identificar un plan
          de calidad y como esta conformado, además te informara las diferentes
          directrices de las RTF.
        </h2>
        <img src={Academy}></img>
        <h2 className={textSection}>
          Podrás identificar las medidas de fiabilidad y disponibilidad del
          software brindandote lo básico para desarrollar software aplicando
          factores de calidad.
        </h2>
        <h3>Este blog fue realizado por fines académicos.</h3>
      </div>
    </section>
  );
}

export default Aboutblog;
