import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Content from "./Content";
import Lesson from "./Lesson";
import { Unity1 } from "../assets/themesData";
import ISO from "../assets/iso.png";
import Certificate from "../assets/certificate.png";
import Control from "../assets/qcontrol.png";
import SQA from "../assets/assurance.png";
import "../styles/QualityConcepts.css";

function QualityConcepts() {
  const { stateBackgroundMode } = useOutletContext();
  const textChange = stateBackgroundMode ? "headerTextDark" : "headerTextLight";

  return (
    <div className={`QualityConcepts ${textChange}`}>
      <Content title="Conceptos de Calidad" data={Unity1} />
      <div className="lessonContainer">
        <section className="intro">
          <Lesson id="Introducción a la Calidad"
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
          <br/>
          <Lesson
            title="La Calidad según la norma ISO 9000"
            content="De acuerdo con la norma internacional ISO 9000, el término calidad 
            debe entenderse como el grado en el que un conjunto de caracteristicas (rasgos 
            diferenciadores) cumple con ciertos requisitos (necesidades o expectativas 
            establecidas). Los requisitos deben satisfacer las expectativas del cliente."
          />
          <img src={Certificate}></img>
        </section>

        <section className="control">
          <Lesson id="Control de Calidad"
            title="Control de la Calidad"
            content="Control de calidad es el proceso de regulación a través del cual podemos medir la calidad real, compararla con las normas y actuar sobre la diferencia. Los otros significados de control de calidad son:"
          />
          <ol>
            <li>
              Una parte del proceso de regulación, p. e., inspección del
              producto.
            </li>
            <li>
              El nombre de un departamento que se dedica a tiempo completo a la
              función de calidad. En este uso, el término se pone con iniciales
              mayúsculas, es decir, Control de Calidad.
            </li>
            <li>
              Las herramientas, conocimientos prácticos o técnicas por medio de
              las cuales se desarrollan algunas o todas las funciones de
              calidad.
            </li>
          </ol>
          <img src={Control}></img>
        </section>

        <section className="assurance">
          <div>
            <Lesson id="Aseguramiento de la Calidad"
              title="Aseguramiento de la calidad"
              content="Son todas aquellas acciones planificadas 
          que dan la confianza adecuada para que un producto o servicio cumpla determinadosrequisitos de calidad. 
          Se trata de:"
            />
            <ul>
              <li>
                Evaluar cómo y por qué se hacen las cosas con auditorías
                periódicas.
              </li>
              <li>Documentar cómo se van a hacer.</li>
              <li>
                Registrar los resultados para mostrar que efectivamente se han
                realizado.
              </li>
              <li>
                En situaciones contractuales sirve también para establecer la
                confianza con el proveedor.
              </li>
            </ul>
            <p>
              Existen diferentes sistemas de aseguramiento de la calidad; el más
              conocido y reconocido internacionalmente es el que corresponde con
              la norma ISO 9001.
            </p>
          </div>
          <img src={ISO} alt="logo ISO"></img>
        </section>

        <section className="sqaactivity">
          <Lesson id="SQA" title="Aseguramiento de calidad de software - SQA" content="Una de las definiciones más utilizadas de SQA es la propuesta por 
          el IEEE, El aseguramiento de la calidad del software es un conjunto de actividades que definen y evalúan la 
          adecuación del proceso de software para proporcionar evidencia que establece la confianza de que los procesos 
          de software son apropiados y producen productos de software de calidad adecuada para los procesos previstos. 
          Un atributo clave de SQA es la objetividad de la función de SQA con respecto al proyecto. La función SQA 
          también puede ser organizacionalmente independiente del proyecto, es decir, libre de presiones técnicas, 
          administrativas y financieras del proyecto."/>
          <img src={SQA}></img>
        </section>

        <div className="references">
          <h3>Referencias</h3>
          <ul>
            <li>
              ALCALDE SAN MIGUEL, Pablo. Calidad 3. Ediciones Paraninfo, SA,
              2019.
            </li>
            <li>
              JURAN, Joseph M. Manual de control de calidad. Volumen 1. Reverté,
              2021.
            </li>
            <li>GALIN, Daniel. Software quality: concepts and practice. John Wiley & Sons, 2018.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default QualityConcepts;
