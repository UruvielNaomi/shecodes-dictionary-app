import React from "react";
import "./Images.css";

export default function Images (props) {
  console.log(props.image)

  if (props.image) {
    return (
      <div className="Images">
        <div className="border">
          {props.image.map(function (image, index) {

            if (index < 6) {
            return (
              <img src={image.webformatURL} alt="cute doodle"/>
            );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}