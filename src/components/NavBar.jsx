const NavBar = (props) => {
  console.log(props);

  const handleClick = (poke) => {
    if (poke.name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };

  return (
    <div>
      {props.pokemonList.map((poke, index) => (
        <button
          key={index}
          onClick={() => {
            props.setPokemonIndex(index);
            handleClick(poke);
          }}
        >
          {poke.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
