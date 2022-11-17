import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import "../styles/Aboutme.css";

function Aboutme() {
  const { stateBackgroundMode } = useOutletContext();
  const textChange = stateBackgroundMode ? "headerTextDark" : "headerTextLight";

  return (
    <div className="Aboutme">
      <div className="profile">
        <div className="profileImage"></div>
        <h2 className={textChange}>Angie Moya Urbina</h2>
        <p className={textChange}>Barranquilla - Colombia</p>
        <p className={textChange}>Estudiante de Ingeniería de Sistemas</p>
      </div>
      <div className="prologo">
        <h2 className={textChange}>Prólogo</h2>
        <p className={textChange}>
          Hola! mi nombre en Angie Moya soy estudiante de Ingeniería de sistemas
          en la Universidad Libre en la seccional de Barranquilla, realice este
          blog por motivos académicos basandome en el perfil profesional que
          estoy construyendo para el mundo laboral, el cual actualmente es de
          Front end por lo tanto realice este blog en React. Espero y les sea útil!
        </p>
        <p className={textChange}>Saludos!</p>
      </div>
    </div>
  );
}

export default Aboutme;
