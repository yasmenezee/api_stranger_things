import React from "react";
// Importa o React para poder usar React.createElement

function Footer() {
  // Define um componente funcional chamado Footer

  return React.createElement(
    "footer",
    {
      style: {
        // Aplica estilos inline ao elemento <footer>
        backgroundColor: "#1e1e1e", // Cor de fundo escura
        padding: "15px 0",          // Espaçamento interno (topo e base)
        textAlign: "center",        // Centraliza o texto
        color: "#aaa",              // Cor do texto em cinza claro
        marginTop: "40px",          // Espaçamento acima do rodapé
        fontSize: "0.9rem",         // Tamanho da fonte um pouco menor
      },
    },
    "Feito com 💡 por YASMIN!!!!!! | © 2025"
    // Texto exibido dentro do rodapé
  );
}

export default Footer;
// Exporta o componente para ser usado em outras partes do projeto