import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const PrevClick = () => {
    if (pokemonIndex > 0) setPokemonIndex(pokemonIndex - 1);
  };

  const NextClick = () => {
    if (pokemonIndex < pokemonList.length - 1)
      setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar
        prevClick={PrevClick}
        nextClick={NextClick}
        pokemonList={pokemonList}
        pokemonIndex={pokemonIndex}
      />
    </div>
  );
}

export default App;
