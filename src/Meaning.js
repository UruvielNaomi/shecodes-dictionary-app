import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
    console.log(props.meaning);

    return (
        <div className="Meaning">
            <h4>{props.meaning.partOfSpeech}</h4>
            <p className="definition">{props.meaning.definition}</p>
            <p className="example">{props.meaning.example}</p>
        </div>
    );
}