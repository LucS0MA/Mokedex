const NavBar = (props) => {
  console.log(props);

  return (
    <div>
      {props.pokemonList.map((poke, index) => (
        <button key={index} onClick={() => props.setPokemonIndex(index)}>
          {poke.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
