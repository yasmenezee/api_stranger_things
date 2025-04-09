import React from "react";
// Importa o React para usar React.createElement e criar o componente

function Header() {
  // Define um componente funcional chamado Header

  return React.createElement(
    "header",
    {
      style: {
        // Estilo inline aplicado ao elemento <header>
        backgroundColor: "#ff4757",       // Cor de fundo vermelho vibrante
        padding: "20px 0",                // Espaçamento interno (vertical)
        textAlign: "center",              // Centraliza o conteúdo
        color: "#fff",                    // Texto branco
        fontSize: "1.8rem",               // Tamanho grande da fonte
        fontWeight: "bold",               // Deixa o texto em negrito
        boxShadow: "0 2px 5px rgba(0,0,0,0.3)", // Sombra leve abaixo do header
      },
    },
    "Stranger Things"
    // Texto exibido dentro do cabeçalho
  );
}

export default Header;
// Exporta o componente para ser utilizado em outros arquivos do projeto