import React from "react";
import pokemons from "./data";
import Pokemon from "./pokemon";

class Pokedex extends React.Component {
  render() {
    return (
      <div className="App">
      { pokemons.map((poke) => <Pokemon name={poke.name} type={poke.type} value={poke.averageWeight.value} measurementUnit={poke.averageWeight.measurementUnit} image={poke.image} />) }
    </div>
    )
  }
}

export default Pokedex;