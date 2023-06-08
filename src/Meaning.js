import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
    console.log(props.meaning);

    return (
        <div className="Meaning">
            <h4>{props.meaning.partOfSpeech}</h4>
            <p className="definition"><strong>Definition</strong>: {props.meaning.definition}</p>
            <p><Example example={props.meaning.example} /></p>
            <p><Synonyms synonyms={props.meaning.synonyms}/></p>
        </div>
    );
}