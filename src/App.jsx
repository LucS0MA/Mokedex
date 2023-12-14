import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

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
    setPokemonIndex(pokemonIndex - 1);
  };

  const NextClick = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 && <button onClick={PrevClick}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={NextClick}>Suivant</button>
      )}
    </div>
  );
}

export default App;
