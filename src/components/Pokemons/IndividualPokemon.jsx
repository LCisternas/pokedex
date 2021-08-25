import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './pokemon.module.css';

const IndividualPokemon = ({ pokemon }) => {

  const [imageUrl, setImage] = useState('');
  const [pokemonStats, setStats] = useState([]);
  const { name, url } = pokemon
  useEffect(() => {
    if(name && url) {
      const consultaAPI = async () => {
        const result = await axios.get(url)
        setImage(result.data.sprites.other['official-artwork']['front_default'])
        setStats(result.data.stats)
      }
      consultaAPI()
    }
  }, [])
  const [open, setOpen] = useState(false)

  return (
    <div
      className={style.individualPokemon}>
      <div className={style.individualPokemonTitle}>
        <h1>{name}</h1>
      </div>
      <div className={style.individualPokemonImage}>
        <img src={imageUrl} />
      </div>
      <div className={style.individualPokemonButton}>
        <button
          type="button"
          onClick={() => setOpen(!open)}
        >Ver mas</button>
      </div>
      <div className={open ? style.moreInfo : style.notMoreInfo}>
        <div className={style.iconClose}>
          <a onClick={() => setOpen(!open)}><i className="fas fa-times"></i></a>
        </div>
        <div className={style.pokeInfo}>
          <div className={style.pokeTitle}>
            <h1>{ name }</h1>
          </div>
          <div className={style.pokeImage}>
            <img src={imageUrl} />
          </div>
          <div className={style.pokeStats}>
            {pokemonStats.map(pokemon => (
              <p key={pokemon.stat.url}>{pokemon.stat.name}: <span>{pokemon.base_stat}</span></p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default IndividualPokemon;