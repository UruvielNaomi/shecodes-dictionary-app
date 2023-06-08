import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="border">
          <h2>{props.results.word}</h2>
          <Phonetics phonetic={props.results.phonetic}/>
        </div>

        {props.results.meanings.map(function (meaning, index){
          
          if (index < 4){
            return (
              <div key={index} className="border">
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