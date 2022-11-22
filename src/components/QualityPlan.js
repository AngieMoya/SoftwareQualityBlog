import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Content from "./Content";
import Lesson from "./Lesson";
import { Unity2 } from "../assets/themesData";
import cmmi from "../assets/cmmi.jpg";
import ExtIntQuality from "../assets/ext-int-quality.png";
import norma from "../assets/normas.png";
import "../styles/QualityPlan.css";

function QualityPlan() {
  const { stateBackgroundMode } = useOutletContext();
  const textChange = stateBackgroundMode ? "headerTextDark" : "headerTextLight";

  return (
    <div className={`QualityPlan ${textChange}`}>
      <Content title="Plan de Calidad" data={Unity2} />
      <div className="lessonContainer">
        <section className="norm">
          <Lesson
            id="Normas y estándares de calidad para el desarrollo del software"
            title="Normas y Estándares de calidad para el desarrollo de software"
            content="Un  estándar  es  una  serie  de  recomendaciones  a  seguir para la entrega de un producto, 
            dentro de la calidad del software es una metodología para que los  entregables  cumplan  con  las  
            expectativas  del  negocio. Dentro de los estándares más aplicados a la calidad del software se encuentran 
            los siguientes:ISO/IEC 9126, ISO/IEC 14598, ISO/IEC 25000, IEEE 1061, CMMI, SPICE, los cuales serán descritos 
            a continuación."
          />
          <Lesson
            id="Normas y estándares de calidad para el desarrollo del software"
            title="Norma ISO/IEC 9126"
            content="La norma ISO/IEC 9126, tiene como fin cuantificar los productos de software, esta norma nos indica 
          las características de la calidad del software y fue elaborado para cubrir las necesidades de error que genera.  
          La  norma  fue  diseñada  en  los  siguientes  factores: calidad de proceso, calidad del producto, calidad  del  
          software  y  calidad  de  uso.  Por  otro  lado, presenta dos modelos de calidad, el primero referido a la 
          calidad interna y externa y el segundo modelo referido a la calidad en uso; a continuación se describe cada 
          uno de ellos.ISO/IEC  9126-1:  hace  referencia  al  modelo  de   calidad   de   un   producto   de   software,   
          en   primera   instancia   especifica   las   características   del  modelo  que  están  divididas  en  seis  
          tanto  en  calidad  interna  como  externa,  además  dentro  de  estas  se  dividen  en  otras  categorías.  
          La  calidad  externa es aquella que es medible con el uso del producto, y la calidad interna realiza una revisión 
          relacionada con los atributos del software (Figura 1).  Permite  especificar  y  calificar  la  calidad  de  un 
          software  desde  diferentes  puntos  de  vista,  los  cuales se relacionan con los requerimientos, uso, 
          adquisición,  desarrollo,  auditoria  de  software  y  mantenimiento."
          />
          <div className="attributes">
            <ul>
              <h4>Funcionalidad :</h4>
              <li>Adecuación.</li>
              <li>Exactitud.</li>
              <li>Interoperabilidad.</li>
              <li>Seguridad de acceso.</li>
              <li>Cumplimiento funcional.</li>
            </ul>
            <ul>
              <h4>Fiabilidad :</h4>
              <li>Madurez.</li>
              <li>Tolerancia a fallos.</li>
              <li>Capacidad de recuperación</li>
              <li>Cumplimiento de la fiabilidad</li>
            </ul>
            <ul>
              <h4>Usabilidad :</h4>
              <li>Capacidad para ser entendido</li>
              <li>Capacidad para ser aprendido.</li>
              <li>Capacidad para ser operado.</li>
              <li>Capacidad de atracción.</li>
              <li>Cumplimiento de la usabilidad.</li>
            </ul>
            <ul>
              <h4>Eficiencia :</h4>
              <li>Comportamiento temporal.</li>
              <li>Utilización de recursos.</li>
              <li>Cumplimiento de la eficiencia.</li>
            </ul>
            <ul>
              <h4>Mantenibilidad :</h4>
              <li>Capacidad para ser analizado.</li>
              <li>Capacidad para ser cambiado.</li>
              <li>Estabilidad.</li>
              <li>Capacidad para ser probado.</li>
              <li>Cumplimiento de la mantenibilidad.</li>
            </ul>
            <ul>
              <h4>Portabilidad :</h4>
              <li>Adaptabilidad.</li>
              <li>Instalabilidad.</li>
              <li>Coexistencia.</li>
              <li>Capacidad para reemplazar.</li>
            </ul>
          </div>
          <p>
            ISO/IEC TR 9126-2:2003 (métricas externas): suministra unos
            parámetros que hacen posible la medición a través de los seis
            atributos que tiene la norma; los parámetros externos hacen posible
            cuantificar el comportamiento de un sistema basada en un PC a través
            de software. Estos parámetros proporcionan a los verificadores,
            usuarios, desarrolladores y evaluadores la capacidad para evaluar la
            calidad del softwaredurante su funcionamiento. Los parámetros los
            pueden definir los evaluadores o el área usuaria, con el fin de
            obtener unos parámetros básicos y así aplicarlos a los productos,
            basados en el modelo estándar de calidad.
          </p>
          <img src={ExtIntQuality}></img>
          <p>
            ISO/IEC TR 9126-3:2003 (métricas internas): el fundamento de esta
            métrica es lograr que la calidad externa y la calidad de uso
            pretendida, esta métrica hace posible evaluar la calidad del
            software relacionado con los inconvenientes presentados antes de su
            puesta en producción. Este tipo de métrica utiliza número de
            elementos de construcciones de software, donde se visualizan las
            sentencias de código fuente, gráficos, flujo de datos, estado de
            procesos, entre otros.
          </p>
          <p>
            ISO/IEC TR 9126-4:2004 (calidad en uso): las métricas de calidad en
            uso calculan los efectos de uso del software en un determinado campo
            de uso; estas métricas evalúan si el producto cumple con las
            necesidades del usuario. La calidad de uso se ve reflejada en un
            escenario real. A continuación se nombran algunos atributos que se
            deben tener en cuenta para la calidad en uso:
          </p>
          <ul className="attributes">
            <li>Efectividad.</li>
            <li>Productividad.</li>
            <li>Seguridad física.</li>
            <li>Satisfacción.</li>
          </ul>
          <p>
            <strong>SO/IEC 14598</strong>
          </p>
          <p>
            La ISO/IEC 14598 es utilizada actualmente como una metodología para
            evaluar el productor de software. La norma establece una serie de
            etapas e involucra el marco de trabajo donde se manipula el software
            y se evalúa la calidad del producto, definiendo dentro de esto las
            siguientes características primordiales en los procesos de
            evaluación:
          </p>
          <ul className="attributes">
            <li>Repetitividad.</li>
            <li>Reproducibilidad.</li>
            <li>Imparciabilidad.</li>
            <li>Objetividad.</li>
          </ul>
          <p>Sin embargo, es necesario hacer énfasis en lo siguiente:</p>
          <ul className="attributes">
            <li>Análisis de los requisitos de evaluación.</li>
            <li>Evaluación de las especificaciones.</li>
            <li>Evaluación del diseño y definición del plan de evaluación.</li>
            <li>Ejecución del plan de evaluación.</li>
            <li>Evaluación de la conclusión.</li>
          </ul>
          <p>
            La Norma ISO/IEC 14598 define el proceso para evaluar un producto de
            software, el mismo consta de seis partes:
          </p>
          <ul className="attributes">
            <li>
              ISO/IEC 14598-1 (visión general): suministra una visión general de
              las otras cinco partes a continuación mencionadas y explica la
              relación entre la evaluación del producto software y el modelo de
              calidad definido en la norma ISO/IEC 9126.
            </li>
            <br />
            <li>
              ISO/IEC 14598-2 (planeamiento y gestión): está compuesto por guías
              y requisitos para determinar las funciones de soporte como lo es
              la planificación y gestión de la evaluación del producto.
            </li>
            <br />
            <li>
              ISO/IEC 14598-3 (proceso para desenvolvedores): determina los
              requisitos y guías para la evaluación del producto software cuando
              esta es llevada a cabo en paralelo con el desarrollo por parte del
              desarrollador.
            </li>
            <br />
            <li>
              ISO/IEC 14598-4 (proceso para adquirientes): suministra las guías
              y requisitos para llevar a cabo la evaluación del producto de
              softwaremostrándole a los compradores que desean adquirir o
              utilizar el producto existente.
            </li>
            <br />
            <li>
              ISO/IEC 14598-5 (proceso para avaladores): determina las guías y
              requisitos para la evaluación del producto software cuando la
              evaluación es realizada por evaluadores independientes.
            </li>
            <br />
            <li>
              ISO/IEC 14598-6 (documentación de módulos): suministra las guías
              para la documentación del módulo de evaluación.
            </li>
          </ul>
          <p>
            La evaluación de los productos de software va relacionada con las
            necesidades que tengan los usuarios finales o proveedor; así,
            normalmente una evaluación de software está compuesta por lo
            siguiente:
          </p>
          <ul className="attributes">
            <li>
              Definición de perfiles de calidad de referencia de software.
            </li>
            <li>
              Evaluación de acuerdo con los modelos de calidad predefinidos.
            </li>
            <li>
              Certificación de la calidad del software de acuerdo a los modelos
              de calidad y normas.
            </li>
            <li>Las comparaciones entre productos.</li>
            <li>La reingeniería del software.</li>
            <li>Servicio de monitoreo de calidad del producto.</li>
          </ul>
          <p>
            <strong>Norma ISO/IEC 25000 (SQuaRE)</strong>
          </p>
          <p>
            Algunas características que se espera de todo software desarrollado
            son:
          </p>
          <ul className="attributes">
            <li>Golpe estratégico; oportunidad de ventaja competitiva.</li>
            <li>
              Los requisitos del software son la base de las medidas de calidad.
            </li>
            <li>
              Afecta la organización en general (directivos, trabajadores,
              clientes).
            </li>
            <li>
              Planificación, diseño de objetivos, coordinación, formación,
              adaptación de toda la organización.
            </li>
            <li>
              Si el software se ajusta a sus requisitos explícitos, pero falla
              en obtener los implícitos, la calidad del software queda en
              entredicho.
            </li>
            <li>
              Los estándares específicos definen un conjunto de criterios de
              desarrollo que guían la forma en que se aplica la ingeniería del
              software.
            </li>
          </ul>
          <p>
            Estas son características que se deben tener en cuenta para
            desarrollar un software, para ello es importante guiarse por un
            estándar, donde se mantendrán unos parámetros de métricas que el
            software deberá alcanzar al momento de evaluarlo, en esta
            oportunidad hablaremos de la norma ISO 25000.
          </p>
          <p>
            ISO 25000:2005 (SQuaRE, del inglés Software Quality Requirements and
            Evaluation): son una serie de normas que se basan en ISO 9126 y en
            ISO 14598 (evaluación del software); cuenta con los siguientes
            pasos: recopilar los datos, preparación de los datos y análisis de
            los datos. Algunos aspectos importantes de la ISO 25000 son:
          </p>
          <img src={norma}></img>
        </section>
        <section className="model">
          <Lesson
            id="Modelo CMMI"
            title="Modelo CMMI"
            content="Capability Maturity Model Integration - CMMI es un modelo de procesos que 
          contiene las mejores prácticas de la industria para el desarrollo, mantenimiento, adquisición y operación de 
          productos y servicios (CMMI Product Team, 2010). Su enfoque es la mejora de procesos, que provee a las 
          organizaciones de los elementos esenciales para un proceso efectivo y provee guía para la calidad de los procesos
          (Altwies & Preston, 2016)."
          />
          <p>
            CMMI fue desarrollado por el Software Engineering Institute (SEI).
            El objetivo de CMMI es crear productos de calidad que permita
            obtener resultados medibles y repetibles (Conrad, Misenar & Feldman,
            2016). CMMI mide la madurez del proceso de desarrollo del software
            en una escala del 1 al 5 e integra disciplinas como sistemas y
            software en un solo marco de trabajo, describe formas efectivas y
            probadas de hacer las cosas, no es un enfoque radical.
          </p>
          <p>
            El modelo CMMI consta de 22 áreas de proceso. Las áreas de proceso
            de Nivel 2 y 3 son las siguientes: Planificación de Proyecto (PP),
            Seguimiento y Control de Proyectos (PMC), Desarrollo de Equipos
            Integrado (IT), Gestión de Riesgos (RSKM), Desarrollo de Requisitos
            (RD), Gestión de Requisitos (RM), Solución Técnica (TS), Integración
            del Producto (SI), Verificación (VER), Validación (VAL), Medición y
            Análisis (MA), Gestión de la Configuración (CM), Aseguramiento de
            Calidad de Proceso y Producto (PPQA).
          </p>
          <img src={cmmi}></img>
        </section>
        <div className="references">
          <h3>Referencias</h3>
          <ul>
            <li>
              CHAVARRÍA, Alex Espejo; ORÉ, Sussy Bayona; PASTOR, Carlos.
              Aseguramiento de la Calidad en el Proceso de Desarrollo de
              Software utilizando CMMI, TSP y PSP/Quality Assurance in the
              Software Development Process using CMMI, TSP and PSP. Revista
              Ibérica de Sistemas e Tecnologias de Informação, 2016, no 20, p.
              62.
            </li>
            <li>
              Espinel González, L. A., Acosta, N. J., & García Tovar, J. L.
              (2017). Estándares para la calidad de software. Tecnología
              Investigación y Academia, 5(1), 75–84. Recuperado a partir de:
              <a href="https://revistas.udistrital.edu.co/index.php/tia/article/view/8388"> Link </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default QualityPlan;
