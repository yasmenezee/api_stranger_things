import axios from 'axios';

export function fetchAllCharacters() {
  return axios.get('https://stranger-things-api.fly.dev/api/v1/characters');
}