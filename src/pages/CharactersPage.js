import React, { useEffect, useState } from "react";
import { fetchAllCharacters } from "../api/characters";
import CharacterCard from "../components/CharacterCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // 🔍 Estado para busca

  useEffect(() => {
    fetchAllCharacters()
      .then((res) => {
        setCharacters(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar personagens:", err);
        setLoading(false);
      });
  }, []);

  // 🔎 Filtro com base no termo digitado
  const filteredCharacters = characters.filter(
    (char) =>
      char.name && char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return React.createElement("p", null, "Carregando personagens...");
  }

  return React.createElement(
    "div",
    null,
    React.createElement(Header),
    // 🧠 Campo de busca
    React.createElement(
      "div",
      { className: "search-container" },
      React.createElement("input", {
        type: "text",
        placeholder: "Buscar personagem...",
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        className: "search-input",
      })
    ),
    // 🧍‍♀️ Exibição dos cards filtrados
    React.createElement(
      "div",
      { className: "store-container" },
      filteredCharacters.map((c) =>
        React.createElement(CharacterCard, { key: c.id, character: c })
      )
    ),
    React.createElement(Footer)
  );
}

export default CharactersPage;
