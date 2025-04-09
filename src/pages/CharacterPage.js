import { useEffect, useState } from 'react';
import { fetchAllCharacters } from '../api/characters';
import CharacterCard from '../components/CharacterCard';

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllCharacters()
      .then((res) => {
        setCharacters(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao carregar personagens:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return React.createElement('p', null, 'Carregando personagens...');
  }

  return React.createElement(
    'div',
    { className: 'p-6 bg-black text-white min-h-screen' },
    React.createElement('h1', { className: 'text-3xl font-bold text-pink-400 mb-4' }, 'Personagens de Stranger Things'),
    React.createElement(
      'div',
      { className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' },
      characters.map((c) =>
        React.createElement(CharacterCard, { key: c.id, character: c })
      )
    )
  );
}

export default CharactersPage;