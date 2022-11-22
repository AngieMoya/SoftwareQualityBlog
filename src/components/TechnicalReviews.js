import React from "react";
import { useOutletContext } from "react-router-dom";
import Content from "./Content";
import Lesson from "./Lesson";
import { Unity4 } from "../assets/themesData";
import "../styles/TechnicalReviews.css";

function TechnicalReviews() {
  const { stateBackgroundMode } = useOutletContext();
  const textChange = stateBackgroundMode ? "headerTextDark" : "headerTextLight";

  return (
    <div className={`TechnicalReviews ${textChange}`}>
      <Content title="Revisiones técnicas formales" data={Unity4} />
      <div className="lessonContainer">
        <section>
          <Lesson
            id="¿Que es?"
            title="Revisión tecnica formal - RTF"
            content="Es una actividad del control de calidad del software realizada por
            ingenieros de software (y otras personas)."
          />
          <h3>Objetivos</h3>
          <ul>
            <li>
              Descubrir los errores en funcionamiento, lógica o implementación
              de cualquier representación del software.
            </li>
            <li>
              Validar que el software que se revisa cumple sus requerimientos.
            </li>
            <li>
              Garantizar que el software está representado de acuerdo con
              estándares predefinidos.
            </li>
            <li>Obtener software desarrollado de manera uniforme.</li>
            <li>Hacer proyectos más manejables.</li>
          </ul>
          <h3>Restricciones</h3>
          <ul>
            <li>
              En la revisión deben involucrarse de tres a cinco personas
              (normalmente).
            </li>
            <li>
              Debe haber preparación previa, pero no debe exigir más de dos
              horas de trabajo de cada persona.
            </li>
            <li>
              La duración de la reunión de revisión debe ser de al menos dos
              horas.
            </li>
            <p>
              <em>*Se centra en una parte específica del software general*</em>
            </p>
          </ul>
          <h3>Proceso</h3>
          <ol>
            <li>
              El desarrollador informa al líder del proyecto que ha terminado y
              que se requiere hacer una revisión.
            </li>
            <li>
              El líder del proyecto contacta al líder de la revisión, quien
              evalúa el producto en cuanto a su conclusión, genera copias de los
              materiales del producto y las distribuye a dos o tres revisores
              para la preparación previa.
            </li>
            <li>
              Cada revisor dedica de una a dos horas a la inspección del
              producto, toma notas y se familiariza con el trabajo.
            </li>
            <li>
              El líder del proyecto también revisa el producto y establece una
              agenda para la reunión de revisión, que por lo general se programa
              para el día siguiente.
            </li>
          </ol>
        </section>
        <section>
          <Lesson id="Asistentes a revisión" title="Asistentes a revisión" />
          <ul>
            <li>
              Acuden el líder de ésta, todos los revisores y el desarrollador.
              Uno de los revisores adopta el rol de secretario (registra por
              escrito todos los acontecimientos importantes que surjan durante
              la revisión).
            </li>
            <li>El desarrollador hace una introducción breve.</li>
            <li>
              El desarrollador recorre el producto, mientras los revisores
              comentan de acuerdo a sus notas.
            </li>
          </ul>
        </section>
        <section>
          <Lesson
            id="Reporte y registro de la revisión"
            title="Reporte y registro de la revisión"
          />
          <ol>
            <li>
              Reporte técnico formal de la Revisión
              <br />
              <ul>
                <li>¿Qué fue lo que se revisó?</li>
                <li>¿Quién lo revisó?</li>
                <li>¿Cuáles fueron los descubrimientos y las conclusiones?</li>
              </ul>
              <li>
                Se vuelve parte del registro histórico del proyecto y se entrega
                al líder del proyecto y a otras partes interesadas.
              </li>
            </li>
          </ol>
          <p>La lista de pendientes de la revisión tiene dos propósitos: </p>
          <ul>
            <li>Identificar áreas de problemas en el producto.</li>
            <li>
              servir como lista de verificación de acciones que guíe al
              desarrollador cuando se hagan las correcciones. La lista de
              pendientes normalmente se anexa al reporte técnico.
            </li>
          </ul>
          <p>
            <em>*Procedimiento de seguimiento*</em>
          </p>
        </section>
        <section>
          <Lesson
            id="Directrices de la revisión"
            title="Directrices de la revisión"
            content="Lineamientos"
          />
          <ul>
            <li>Revise el producto, no al productor</li>
            <li>Establezca una agenda y sígala.</li>
            <li>Limite el debate y las contestaciones.</li>
            <li>
              Enuncie áreas de problemas, pero no intente resolver cada uno.
            </li>
            <li>Tome notas por escrito.</li>
            <li>
              Limite el número de participantes e insista en la preparación
              previa.
            </li>
            <li>
              Desarrolle una lista de verificación para cada producto que sea
              probable que se revise.
            </li>
            <li>Asigne recursos y programe tiempo para las RTF.</li>
            <li>Dé una capacitación significativa a todos los revisores.</li>
            <li>Revise las primeras revisiones.</li>
          </ul>
        </section>
        <div className="references">
          <h3>Referencias</h3>
          <ul>
            <li>
              Pressman, R.S., Ingeniería del Software. Un enfoque práctico,
              quinta edición, 2002, España.
            </li>
            <li>
              Sommerville I., Ingeniería de Software, Addison-Wesley, 6ª.
              Edición, 2002, México.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TechnicalReviews;
