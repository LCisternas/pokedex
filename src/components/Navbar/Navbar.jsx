import React, { useState, useContext } from 'react';
import logo from '../../images/imagen-pokeapi.png';
import style from './navbar.module.css';
import { pokemonContext } from '../../context/pokemonContext';

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const { tiposPokemons, setTipo } = useContext(pokemonContext)

  return (
    <div className={style.navbarContainer}>
      <div className={style.logo}>
        <img src={logo} />
      </div>
      <div className={style.iconFalse}>
        <a onClick={() => setOpen(!open)}>
          <i className="fas fa-bars"></i>
        </a>
      </div>

      <div className={open ? style.trueSidebar : style.falseSidebar}>
        <div className={style.iconTrue}>
          <a onClick={() => setOpen(!open)}><i className="fas fa-times"></i></a>
        </div>

        <div className={style.navbarButtons}>
          {tiposPokemons.map(tipos => (
            <button
              key={tipos.url}
              onClick={() => {
                setTipo(tipos.url)
                setOpen(!open)
              }}
            >{tipos.name}</button>
          ))}
        </div>
        
      </div>
    </div>
  );
}
 
export default Navbar;