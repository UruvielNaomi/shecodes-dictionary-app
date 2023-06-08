import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index){
          if (index < 4){
          return (
            <div key={index}>
              <Meaning meaning={meaning}/>
            </div>
          );
          } else {
            return (null)
          }
        })}  
      </div>
    );
  }
}