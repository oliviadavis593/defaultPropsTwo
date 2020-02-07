import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="Card">
      <button type="button">delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

//Explaining code (#1):
//Card components accepts 2 props = title & content
// These props will be passed into the List component
// The List component is the Card components parent
