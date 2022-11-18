import React from "react";

function Lesson({ title, content }) {
  return (
    <div className="Lesson responsiveLesson">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Lesson;
