import React from 'react';

function CharacterCard({ character }) {
  return React.createElement(
    'div',
    { className: 'bg-gray-800 rounded-xl shadow-lg p-4' },
    React.createElement('img', {
      src: character.image || 'https://via.placeholder.com/150',
      alt: character.name,
      className: 'w-full h-48 object-cover rounded-md mb-3',
    }),
    React.createElement('h2', { className: 'text-xl font-semibold' }, character.name),
    React.createElement('p', { className: 'text-sm text-gray-300' }, `Status: ${character.status}`),
    React.createElement('p', { className: 'text-sm text-gray-300' }, `Espécie: ${character.species}`)
  );
}

export default CharacterCard;