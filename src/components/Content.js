import React from "react";

function Content({title, data}){
    return(
        <aside className="Content webContent">
            <h2>{title}</h2>
            <ul>
                {data.map( list => (<li key={list}><a>{list}</a></li>))}
            </ul>
        </aside>
    )
}
export default Content;