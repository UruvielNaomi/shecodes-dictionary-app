import React from "react";

export default function Synonyms (props) {
    if (props.synonyms) {
        return (
            <ul className="Synonyms">
                {props.synonyms.map(function (meaning, index){
                    return(
                        <li key={index}>
                            {meaning}
                            </li>
                    );
                })}
            </ul>
         );   
    } else {
        return (null);
    }
}