import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Content from "./Content";
import Lesson from "./Lesson";
import { Unity3 } from "../assets/themesData";
import "../styles/ProcessQuality.css";

function ProcessQuality() {
  const { stateBackgroundMode } = useOutletContext();
  const textChange = stateBackgroundMode ? "headerTextDark" : "headerTextLight";

  return (
    <div className={`ProcessQuality ${textChange}`}>
      <Content
        title="Calidad de procesos y productos de software"
        data={Unity3}
      />
      <div className="lessonContainer">
        <section>
          <Lesson
            id="Calidad de procesos y productos"
            title="El concepto de calidad aplicado al software"
            content="Para comprender el concepto de calidad aplicado al software tenemos 
            que tener en cuenta los dos aspectos que lo vinculan. El producto de software 
            es generado como resultado de la ejecución de una serie de activi- dades 
            definidas por procesos específicos. Por lo tanto, un aspecto es el proceso 
            mencionado y el otro el pro- ducto de software en sí mismo. Ambos componentes 
            forman parte del producto final y por eso se analizarán en los siguientes 
            apartados."
          />
          <Lesson
            title="Calidad de productos"
            content="Para arribar al concepto partamos 
            desde el origen del producto de software, es decir desde los requeri- mientos y 
            necesidades del usuario y cliente. A partir de aquí elaboramos el producto intentando 
            cumplir con las expectativas del usuario y cliente. Entonces, si tenemos que lograr 
            que el software cumpla con esas expectativas, debemos tener esto en cuenta para juzgar 
            su valor. Así el grado de cuán cerca de lograrlo estamos representa la calidad del 
            producto generado. Por lo tanto, es sumamente importante la satisfacción del 
            usuario."
          />
          <p>
            Para continuar me gustaría que pensemos al producto de software
            desde dos perspectivas. Por un lado podríamos posicionarnos en el
            lugar del usuario que aprovecha las funcionalidades de la
            aplicación. Por ejem- plo, si estamos ante un editor de texto las
            opciones de guardar el documento y darle formato al texto son
            funciones de la aplicación. Pero ¿cómo se guarda el documento? Y
            aquí es necesario que la persona que desarrolló esta funcionalidad
            nos cuente cómo lo hizo, qué diseño empleó, qué funciones le
            brindaba el len- guaje que utilizó, qué parámetros eran necesarios,
            etc. Es decir que, por otro lado, estamos posicionados en el
            interior de la aplicación para analizar su código. A la calidad
            asociada a los aspectos internos de la aplicación, como el diseño
            del código, la legibilidad del código, etc. se la denomina "Calidad
            interna". Ahora nos podemos imaginar que la calidad relacionada con
            las características externas de la aplicación, como ser, la interfaz
            de usuario, se denomina "Calidad externa".
          </p>
          <p>
            Ambos aspectos hacen a la calidad integral del producto de software.
            De todas maneras, la calidad interna no es negociable, mientras que
            sí lo es la calidad externa. Pero ¿por qué decimos que la calidad
            interna no es negociable? Por un lado, es difícil que el usuario o
            cliente comprenda la necesidad, por ejemplo, de un buen diseño; y
            por otro lado, un mal diseño difícilmente pueda generar un producto
            con buena calidad externa.
          </p>
          <Lesson
            title="Calidad de procesos"
            content="Hemos definido hasta aquí el concepto de calidad de producto y queda pendiente especificar 
          el concepto de calidad de procesos. Pero antes de introducirnos en ello, definiremos a qué nos referimos 
          con el término proceso en este contexto. Un proceso es un conjunto de actividades que se realizan o 
          suceden para lograr un objetivo determinado. Generalmente el proceso se extiende en el tiempo y puede 
          tener estados. Para finalizar la comprensión definamos el concepto de actividad. Una actividad es un 
          conjunto de tareas que se realizan o suceden para lograr un objetivo determinado y no se prolonga en el tiempo."
          />
          <p>
            Dicho esto, podemos concluir que la calidad de procesos está
            definida por la calidad de las actividades individuales y éstas como
            conjunto, es decir como parte del proceso que conforman.
          </p>
          <p>
            Pensemos, por ejemplo, en una empresa que fabrica camisas. El
            proceso de fabricación de camisas consta de varias actividades.
            Comienza con el corte de la tela, continúa con la costura y por
            último el ensamble final de la prenda. La calidad en cada una de las
            actividades y la coordinación entre ellas hacen a la calidad en el
            proceso de fabricación. Por ejemplo, si los cortes realizados para
            las mangas de una camisa son diferentes unos con otros, las mangas
            de la camisa no quedarán iguales, lo que daría una calidad pobre al
            producto final. Lo mismo podría ocurrir si se utilizan dos mangas de
            distinta talla para el ensamblado de una camisa.
          </p>
          <p>
            ¿Y qué ocurre en el desarrollo de software? En el desarrollo de
            software sucede algo similar. Si el proceso de elicitación de
            requerimientos no define correctamente las necesidades del cliente,
            muy difícilmente cumpla con sus expectativas y provoque el rechazo
            del producto. Imaginemos ahora una falla en el proceso de diseño de
            la arquitectura de la aplicación. Posiblemente esto genere un
            retrabajo (significando un retraso) o una apli- cación poco
            modificable o, hasta incluso, un producto de baja eficiencia. Es
            decir que en todos estos casos el producto final tendrá poca calidad
            debido a las fallas en el proceso de desarrollo. Para intentar
            resolver estos inconvenientes han surgido las verificaciones y
            validaciones sobre los procesos que buscan mejorar su ejecución.
          </p>
        </section>
        <section>
          <Lesson
            id="Planeación de la verificación y validación"
            title="Validación y Verificación"
            content="Cuando nos referimos a 
          llevar a cabo una comprobación, estamos pensando en verificar si el proceso 
          se siguió de acuerdo a cómo había sido definido."
          />
          <Lesson
            title="Checklist"
            content="Los checklists (listas de control) pueden 
          ser empleados para la validación y verificación de los procesos y productos 
          de software. Los checklist se conforman de una lista de items que deben ser 
          verificados sobre el producto o proceso sobre el cual se esté ejecutando. 
          Cada uno de estos items puede estar formulado como preguntas que se contestarán 
          durante la ejecución de la validación. Estas preguntas podrán ser contestadas 
          con si, no o n/a, tengamos en cuenta que no se desea utilizar demasiado 
          tiempo para la ejecución. También puede anexarse un responsable a cada una de 
          las no conformidades halladas y acciones para su resolución."
          />
          <p>
            Para concluir, podemos decir que los checklist representan una
            herramienta rápida que lista los items que deben ser verificados
            para validar un producto o proceso.
          </p>
        </section>
        <section>
          <Lesson
            id="Métricas en el software"
            title="Métricas en el software"
            content="A efectos de calificar y clasificar un proceso 
          o un producto de software según su calidad debemos establecer categorías y criterios para ubicarlos 
          en ellas. Por lo tanto definiremos parámetros de calidad y luego formas de obtener los números asociados. 
          A estos números los llamamos medidas o métricas. En función del valor de estos parámetros calificaremos 
          la calidad de los productos y procesos de software."
          />
          <h3>
            Las medidas como mecanismo de aseguramiento y control de calidad
          </h3>
          <h4>Medidas como verificación de aseveraciones</h4>
          <p>
            Las medidas de determinados parámetros asociados a productos o
            procesos de software permiten, como en otras disciplinas, hacer
            afirmaciones sustentadas en observaciones provenientes de la
            realidad. En la figura 22.1 se muestra un esquema para graficar una
            aseveración muy utilizada en el área del desarrollo de soft- ware
            que dice que "la calidad de un producto depende de la calidad del
            proceso usado para su producción". Esta afirmación es indiscutida,
            sin embargo si deseamos corroborarla debemos sustentarla con medidas
            que muestren este comportamiento.
          </p>
          <h4>Modelo conceptual y modelo operacional</h4>
          <p>
            El proceso de definir medidas comienza con el análisis del fenómeno
            a medir. Esta parte del proceso de medidas opera sobre los conceptos
            asociados a este fenómeno y a las posibles alternativas de
            calificación y clasificación. A partir de este análisis surgen
            preguntas guías que conducen la transformación de este análisis
            conceptual al campo operacional en el cual se definen las medidas
            necesarias, los indicadores a visualizar o formas de presentación,
            el procedimiento de recolección de los datos, el proceso y los
            criterios de análisis y la decisión basada en la información y el
            procedimiento de almacenamiento. En una próxima sección trataremos
            cómo estas definiciones aplican a la obtención de medidas de
            productos y medidas en la mejora de procesos.
          </p>
          <h4>Indicadores y herramientas</h4>
          <p>
            Las medidas que se recolecten deberán ser las adecuadas a efectos de
            reflejar el fenómeno estudiado. Para esto es importante que posean
            las escalas adecuadas, la frecuencia de observación y las unidades
            apropia- das, y que sean relacionadas de la forma correcta. Si son
            medidas puntuales que han sido obtenidas según el procedimiento
            correcto, si son estadisticas que provienen de una población que le
            de validez estadística.
          </p>
          <p>
            A efectos de obtener indicadores que permitan visualizar los valores
            de las medidas y su evolución de forma tal que respondan a las
            preguntas deberemos combinar las observaciones obtenidas. Diferentes
            herramientas permiten representaciones distintas tales como los de
            tipo checklist ya vistos, histogramas, Pareto, de disper- sión, de
            control, series temporales, etc.
          </p>
        </section>
        <section>
          <Lesson
            id="Medidas de la calidad de productos de software"
            title="Medidas de la calidad de productos de software"
            content="Entre las medidas utilizadas para caracterizar un producto se 
            encuentran el tamaño, la complejidad, las carac- terísticas de diseño, 
            el nivel de calidad expresado de una forma preestablecida, etc."
          />
          <p>
            Las medidas son recolectadas para cuantificar tanto atributos
            internos como externos de calidad, como por ejemplo la satisfacción
            del cliente. Algunas de estas medidas son:
          </p>
          <ul>
            <li>Tiempo medio entre fallas.</li>
            <li>Densidad de errores.</li>
            <li>Problemas del cliente.</li>
            <li>Satisfacción del cliente.</li>
          </ul>
          <p>
            El primero mide el tiempo entre dos fallas consecutivas, el segundo
            el número de errores por alguna unidad que puede ser puntos de
            función o líneas de código. Ambos cuantifican la calidad interna del
            producto construido. Los dos restantes lo hacen con los atributos
            externos.
          </p>
          <h4>Atributos internos</h4>
          <p>
            El tiempo medio entre fallas es costoso de ensayar pero muchas veces
            es necesario, sobre todo en sistemas criticos de monitoreo de
            parámetros de salud, transporte de larga distancia, sistemas de
            alarmas y sistemas que en general deben funcionar en forma
            interrumpida.
          </p>
          <p>
            Otra forma de expresar atributos de calidad internos es a partir de
            la cantidad de defectos por unidad de lineas de código.
            Tradicionalmente esta era una práctica común que se vio afectada
            hace algunos años con la utilización de plataformas de terceros para
            la construcción del software propio por parte de las empresas. Estas
            plataformas suman código no escrito por los desarrolladores, sino
            por un proveedor que a su vez está proveyendo un producto que posee
            su propio nivel de calidad. Este atributo lo expresamos así:
          </p>
          <code>DLC = Cantidad defectos/Lineas de código</code>
          <p>
            Una alternativa es utilizar como unidad de medida los puntos
            función.
          </p>
          <h4>Atributos externos.</h4>
          <p>
            Los problemas del cliente se cuantifican como la cantidad de
            problemas por usuario que utiliza el sistema bajo medida.
          </p>
          <code>
            Problemas del cliente (PC) = cantidad de problemas / cantidad
            usuarios mes
          </code>
          <p>
            Esta medida se puede vincular con los atributos externos. En Metrics
            and Models in Software Quality Engineering se vinculan los problemas
            generados por los defectos (D) y problemas debidos a otras causas
            (NDCP) tales como el uso, la documentación poco clara, etc., con la
            satisfacción del cliente. En la figura 22.3 que sigue se muestra
            este vínculo a través de un diagrama de Venn donde la satisfacción
            del cliente (SC) es expresada en términos de los defectos (D) y las
            otras causas (NDCI).
          </p>
          <code>SC = 1-PC = 1-(DU NDPC)=(-D) U (I-NDCP)</code>
          <p>
            La satisfacción del cliente se mide con frecuencia en una escala de
            los siguientes niveles:
          </p>
          <ul>
            <li>Muy satisfecho.</li>
            <li>Satisfecho.</li>
            <li>Neutro.</li>
            <li>Insatisfecho.</li>
            <li>Muy Insatisfecho.</li>
          </ul>
        </section>
        <section>
          <Lesson
            id="Medidas de la calidad de procesos de software"
            title="Medidas de la calidad de procesos de software"
            content=""
          />
          <h4>Medidas asociadas al desarrollo</h4>
          <p>
            Una de las métricas más comunes y necesarias en ciclos de vida
            iterativos es la evolución de los errores detectados en el código
            mientras se suceden las iteraciones. La visualización de los errores
            detectados y cómo éstos van siendo corregidos determina la
            estabilidad de un proyecto. En la figura 22.4 se observa dicha
            evolución para un proyecto estable en el que los errores pendientes
            de corrección tienden a bajar a medida que el proyecto avanza. Este
            comportamiento permite establecer que el producto a instalar hacia
            el final de la planificación será estable.
          </p>
          <h4>Medidas asociadas a la mejora de procesos</h4>
          <p>
            Para la evaluación de los procesos de una organización un enfoque
            muy utilizado y que sirve de marco al plan de medidas y su análisis
            es el denominado GQM (Goal Question Metric).
          </p>
          <p>
            La estrategia con la cual se plantean las medidas a recolectar en
            este marco es que estén alineados los objetivos de medida a los de
            negocio. Como se muestra esquemáticamente en la siguiente figura
            22.5 este modelo consta de tres niveles. Uno es el conceptual o de
            negocio, el segundo es el operacional y el tercero es el
            cuantitativo asociado con las medidas y sus indicadores.
          </p>
          <p>
            Una guía de cómo llevar adelante la planificación y ejecución de un
            plan de medidas en este marco es:
          </p>
          <ol>
            <li>
              Definir de forma clara los objetivos de negocio de la
              organización.
            </li>
            <li>
              Generar preguntas acerca de estos objetivos que ayuden a
              visualizar las condiciones de sus logros. Dar respuesta a estas
              preguntas son los objetivos de medida.
            </li>
            <li>
              Especificar las medidas necesarias que deben recolectarse para
              responder a esas preguntas, los indicadores construidos con ellas
              y el proceso de seguimiento y conformidad entre los resultados
              obtenidos y las metas buscadas.
            </li>
            <li>
              Desarrollar mecanismos para la recolección de datos y su análisis
              al momento para aportar realimen- tación a los proyectos.
            </li>
            <li>Recopilar, validar, analizar y almacenar los datos.</li>
            <li>
              Analizar los datos recopilados y almacenados para evaluar la
              conformidad con los objetivos y formular recomendaciones para
              futuras mejoras.
            </li>
          </ol>
        </section>
        <div className="references">
        <h3>Referencias</h3>
          <ul>
            <li>
              "o de por vid" Lis, G, Pantaleo, L, Ingeniería de Software.
              México: Alfaomega, 2018. [En Línea] Disponible en:
              <a href="https://www.alphaeditorialcloud.com/reader/ingenieria-de-software?location=5"> Link </a>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProcessQuality;
