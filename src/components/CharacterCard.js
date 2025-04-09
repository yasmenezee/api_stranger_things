import React from "react";

function CharacterCard({ character }) {
  return React.createElement(
    "div",
    { className: "card" },
    React.createElement("img", {
      src: character.photo || "https://via.placeholder.com/300",
      alt: character.name,
    }),
    React.createElement(
      "div",
      { className: "card-body" },
      React.createElement("h2", null, character.name),
      React.createElement("p", null, `Status: ${character.status}`),
      React.createElement("p", null, `Gênero: ${character.gender}`)
    )
  );
}

export default CharacterCard;
