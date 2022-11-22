import React from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/Content.css";

function Content({ title, data }) {
  const { stateBackgroundMode } = useOutletContext();
  const textChange = stateBackgroundMode ? "headerTextDark" : "headerTextLight";

  return (
    <aside className="Content webContent">
      <div className="fixedContent">
        <h2>{title}</h2>
        <ul>
          {data.map((list) => (
            <li key={list}>
              <a className={textChange} href={`#${list}`}>
                {list}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
export default Content;
