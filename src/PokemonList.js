import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((monster, i) => <div key={monster.pokemon + i}>
        <p>{monster.pokemon}</p>
        <img src={monster.url_image} />
      </div>)}
    </div>
  );
}
