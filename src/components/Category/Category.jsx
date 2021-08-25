import React, { useContext } from 'react';
import style from './category.module.css';
import { pokemonContext } from '../../context/pokemonContext';

const Category = () => {

  const { tiposPokemons, setTipo } = useContext(pokemonContext);

  return (
    <div className={style.categoryContainer}>
      {tiposPokemons.map(tipos => (
        <button
          key={tipos.url}
          onClick={() => setTipo(tipos.url)}
        >{ tipos.name }</button>
      ))}
    </div>
  );
}
 
export default Category;