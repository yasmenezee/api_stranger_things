import React from "react";
// Importa a biblioteca React

import ReactDOM from "react-dom/client";
// Importa o módulo para renderizar o React na DOM (versão moderna com createRoot)

import App from "./App";
// Importa o componente principal da aplicação

import "./styles/global.css"; // Se usar CSS manual
// Importa o arquivo de estilos globais para aplicar na aplicação

const root = ReactDOM.createRoot(document.getElementById("root"));
// Cria o ponto de montagem React usando o elemento com id="root" do HTML

root.render(React.createElement(App));
// Renderiza o componente App dentro da div #root, usando React.createElement
