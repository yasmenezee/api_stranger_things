import React from 'react';
// Importa o React para criar componentes

import CharactersPage from './pages/CharactersPage';
// Importa o componente CharactersPage, que provavelmente exibe os personagens

function App() {
  // Componente principal da aplicação

  return React.createElement(CharactersPage);
  // Renderiza o componente CharactersPage usando React.createElement
}

export default App;
// Exporta o componente App para ser usado no ponto de entrada da aplicação (ex: index.js)