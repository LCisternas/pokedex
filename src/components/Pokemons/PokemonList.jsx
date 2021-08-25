import React from 'react';
import IndividualPokemon from './IndividualPokemon';
import style from './pokemon.module.css';

const PokemonList = ({ pokemones }) => {
  
  return (
    <div className={style.pokemonListContainer}>
      {pokemones.map(pokemon => (
        <IndividualPokemon 
          key={pokemon.pokemon.url}
          pokemon={pokemon.pokemon}
        />
      ))}
    </div>
  );
}
 
export default PokemonList;