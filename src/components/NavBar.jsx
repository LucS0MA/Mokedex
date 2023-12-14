const NavBar = (props) => {
  console.log(props);
  return (
    <div>
      {props.pokemonIndex > 0 && (
        <button onClick={props.prevClick}>Précédent</button>
      )}
      {props.pokemonIndex < props.pokemonList.length - 1 && (
        <button onClick={props.nextClick}>Suivant</button>
      )}
    </div>
  );
};

export default NavBar;
