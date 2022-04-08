import '../Styles/Pokedex.css';
import PokemonCard from './PokemonCard';

const Pokedex = (props) => {
  const cards = props.pokemonArray.map((pokemon) => {
    return <PokemonCard pokemonData={pokemon} />;
  });
  let title = <div></div>;
  if (props.isWinner) {
    title = <h2 className='Pokedex__title--winner'>Winner</h2>;
  } else {
    title = <h2 className='Pokedex__title--loser'>Loser</h2>;
  }

  return (
    <div className='Pokedex'>
      {title}
      <h4 className='Pokedex__EXP'>Total EXP: {props.totalExp}</h4>
      <div className='Pokedex__content'>{cards}</div>
    </div>
  );
};

export default Pokedex;
