import React from 'react';
import PokemonProvider from './context/pokemonContext';
import Navbar from '../src/components/Navbar/Navbar';
import Pokemons from '../src/components/Pokemons/Pokemons'
import Category from './components/Category/Category';

function App() {
  return (
    <PokemonProvider>
      <div className='main'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='categorys'>
          <Category />
        </div>
        <div className='content'>
          <Pokemons />
        </div>
      </div>
    </PokemonProvider>
  );
}

export default App;
