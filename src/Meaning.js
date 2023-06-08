import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
    console.log(props.meaning);

    return (
        <div className="Meaning">
            <h4>{props.meaning.partOfSpeech}</h4>
            <p className="definition"><strong>Definition</strong>: {props.meaning.definition}</p>
            <p>Example: <span className="example">{props.meaning.example}</span></p>
            <p>Synonyms: {props.meaning.synonyms}</p>
        </div>
    );
}