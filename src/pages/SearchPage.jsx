import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import CardPokemon from '../components/CardPokemon';

const SearchPage = () => {

  const location = useLocation();
  console.log(location);

  /*
    Ejemplo de console.log(location):
    {
      "pathname": "/search",
      "search": "?q=pikachu",
      "hash": "",
      "state": "pikachu" // lo que estoy buscando en el input de busqueda que sería el state
    }
  */

  const { globalPokemons } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase())); // location.state es lo que estoy buscando, lo que le sería pokemon.name, el toLowerCase es para convetir todo lo que pogamos en el state en minusculas
  // console.log(filteredPokemons);

  return (
    <div className="container">
      <p className="p-search">
        Se encontraron <span>{filteredPokemons.length}</span> pokemones {/* filteredPokemons.length es la cantidad de pokemones que tiene en el arreglo (Vector) */}
      </p>
      <div className="card-list-pokemon container">
        {filteredPokemons.map(pokemon => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  )
}

export default SearchPage
