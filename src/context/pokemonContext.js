import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const pokemonContext = createContext();

const PokemonProvider = (props) => {

  const [tiposPokemons, setTiposPokemon] = useState([]);
  const [tipo, setTipo] = useState('');
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const consultaAPI = async () => {
      const url = 'https://pokeapi.co/api/v2/type';
      const result = await axios.get(url);
      setTiposPokemon(result.data.results)
    }
    consultaAPI()
  }, [])

  useEffect(() => {
    if(tipo !== '') {
      const consultaAPI = async () => {
        const url = tipo
        const result = await axios.get(url)
        setPokemones(result.data.pokemon)
      }
      consultaAPI()
    }
  }, [tipo])

  return (
    <pokemonContext.Provider
      value={{
        tiposPokemons,
        pokemones,
        setTipo
      }}
    >
      { props.children }
    </pokemonContext.Provider>
  );
}
 
export default PokemonProvider;