import React, { useContext } from 'react';
import style from './pokemon.module.css';
import { pokemonContext } from '../../context/pokemonContext';
import PokemonList from './PokemonList';

const Pokemons = () => {
  
  const { pokemones } = useContext(pokemonContext);

  return (
    <div className={style.pokemonsContainer}>
      {
        pokemones.length === 0 ? 
        <h1 className={style.titleReserv}>Selecciona una categoria de pokemones</h1> 
        : <PokemonList pokemones={pokemones} />
      }
    </div>
  );
}
 
export default Pokemons;