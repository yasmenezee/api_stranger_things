import React from "react";
// Importa o React para poder usar React.createElement e componentes

function CharacterCard({ character }) {
  // Componente que recebe um objeto 'character' como propriedade (props)

  return React.createElement(
    "div",
    { className: "card" },
    // Cria um elemento <div> com a classe "card"

    React.createElement("img", {
      // Cria uma tag <img> com:
      src: character.photo || "https://via.placeholder.com/300",
      // usa a foto do personagem ou uma imagem genérica como fallback
      alt: character.name,
      // texto alternativo com o nome do personagem
    }),

    React.createElement(
      "div",
      { className: "card-body" },
      // Cria uma <div> interna para o conteúdo textual do card

      React.createElement("h2", null, character.name),
      // Título com o nome do personagem

      React.createElement("p", null, `Status: ${character.status}`),
      // Parágrafo com o status do personagem

      React.createElement("p", null, `Gênero: ${character.gender}`)
      // Parágrafo com o gênero do personagem
    )
  );
}

export default CharacterCard;
// Exporta o componente para ser usado em outras partes da aplicação
