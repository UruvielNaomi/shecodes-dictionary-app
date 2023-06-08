import React from "react";
import "./Synonyms.css";

export default function Synonyms (props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Similar:</strong>
          <ul>
            {props.synonyms.map(function (meaning, index){
              return(
                <li key={index}>
                  {meaning}
                </li>
              );
            })}
          </ul>
      </div>
    );   
  } else {
      return (null);
  }
}