import React from "react";
import Card from "../Card/Card";
import "./List.css";

export default function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map(card => (
          <Card key={card.id} title={card.title} content={card.content} />
        ))}
        <button type="button" className="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

//Explaining the code (#2):
// List component accepts its own props = header
// Created a component instance of Card
// Passed a key, title, content = the props
