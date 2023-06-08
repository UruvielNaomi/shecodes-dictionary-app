import React from "react";
import "./Example.css";

export default function Example(props){
    if (props.example) {
        return(
            <span className="Example">
                <span className="example">Example: </span> {props.example}
            </span>
        );
    } else {
        return (null);
    }
}