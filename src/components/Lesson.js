import React from "react";
import "../styles/Lesson.css";

function Lesson({ title, content, id }) {
  return (
    <div id={id} className="Lesson responsiveLesson">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Lesson;
