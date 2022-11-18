import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Content from "./Content";
import Lesson from "./Lesson";
import { unity1 } from "../assets/themesData";
import "../styles/QualityConcepts.css";

function QualityConcepts() {
  const { stateBackgroundMode } = useOutletContext();
  const textChange = stateBackgroundMode ? "headerTextDark" : "headerTextLight";

  return (
    <div className={`QualityConcepts ${textChange}`}>
      <Content title="Conceptos de Calidad" data={unity1} />
      <div className="lessonContainer">
        <section className="intro">
          <Lesson
            title="Introducción a la calidad"
            content="Se puede decir que la calidad es algo que va implícito en los genes 
            de la humanidad; es la capacidad que tiene el ser humano de hacer bien las cosas. 
            Antes de la implantación de los sistemas de producción industrial, los artesanos 
            se las arreglaban para realizar todo el proceso. Tomemos el ejemplo de un alfarero:
            lo primero quhacía era averiguar las necesidades de sus clientes: cazuelas, 
            cántaros (prospección de mercado); él mismo se encargaba de adquirir la arcilla más
            adecuada en función de su calidad, precio y cercanía (selección de proveedores: 
            calidad en las compras); realizaba sus propios diseños (calidad en el diseño); 
            fabricaba las piezas en el torno y las cocía (calidad en la producción); las 
            revisaba una por una para comprobar las que se habían dañado en el horno 
            (control de calidad) y. al final, las vendía. Además atendía, si se presentaba, 
            alguna reclamación de los clientes (servicio postventa: atención al cliente)."
          />
          <Lesson
            title="La Calidad según la norma ISO 9000"
            content="De acuerdo con la norma internacional ISO 9000, el término calidad 
            debe entenderse como el grado en el que un conjunto de caracteristicas (rasgos 
            diferenciadores) cumple con ciertos requisitos (necesidades o expectativas 
            establecidas). Los requisitos deben satisfacer las expectativas del cliente."
          />
        </section>

        <section className="control">
          <Lesson title="Control de la Calidad" content="Control de calidad es el proceso de regulación a través del cual podemos medir la calidad real, compararla con las normas y actuar sobre la diferencia. Los otros significados de control de calidad son: 
            1. Una parte del proceso de regulación, p. e., inspección del producto. 
            2. El nombre de un departamento que se dedica a tiempo completo a la función de calidad. En este uso, el término se pone con iniciales mayúsculas, es decir, Control de Calidad. 
            3. Las herramientas, conocimientos prácticos o técnicas por medio de las cuales se desarrollan algunas o todas las funciones de calidad." />
        </section>

        <section className="assurance">
            <Lesson />
        </section>

        <section className="cost">
            <Lesson />
        </section>

        <section className="sqaactivity">
            <Lesson />
        </section>

        <div className="references">
          <h3>Referencias</h3>
          <ul>
            <li>
              ALCALDE SAN MIGUEL, Pablo. Calidad 3. Ediciones Paraninfo, SA,
              2019.
            </li>
            <li>JURAN, Joseph M. Manual de control de calidad. Volumen 1. Reverté, 2021.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default QualityConcepts;
