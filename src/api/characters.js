import axios from 'axios';
// Importa a biblioteca axios, usada para fazer requisições HTTP

export function fetchAllCharacters() {
  // Exporta uma função que busca todos os personagens da API
  return axios.get('https://stranger-things-api.fly.dev/api/v1/characters');
  // Faz uma requisição GET para a API do Stranger Things e retorna a promessa (Promise)
}
