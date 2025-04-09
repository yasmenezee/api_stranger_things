import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css'; // Se usar CSS manual

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));