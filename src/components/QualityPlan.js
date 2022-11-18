import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Content from "./Content";
import Lesson from "./Lesson";
import { Unity2 } from "../assets/themesData";
import "../styles/QualityPlan.css";

function QualityPlan() {
  const { stateBackgroundMode } = useOutletContext();
  const textChange = stateBackgroundMode ? "headerTextDark" : "headerTextLight";

  return (
    <div className={`QualityPlan ${textChange}`}>
      <Content title="Plan de Calidad" data={Unity2} />
      <div className="lessonContainer">
        <section className="standar">
          <Lesson title="Estándares de Calidad de software" content="..."/>
        </section>
        <section className="norm">
          <Lesson title="Normas y Modelos de referencia" content="..."/>
        </section>
        <section className="model">
          <Lesson title="Modelo CMMI" content="..."/>
        </section>
      </div>
    </div>
  );
}

export default QualityPlan;
