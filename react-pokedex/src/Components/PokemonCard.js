import '../Styles/PokemonCard.css';

const PokemonCard = (props) => {
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonData.id}.png`;
  
  const card = (
    <div className='PokemonCard'>
      <h3 className='PokemonCard--name'>{props.pokemonData.name}</h3>
      <img
        src={pokemonImage}
        alt={props.pokemonData.name}
        className='PokemonCard--image'
      />
      <div className='PokemonCard--details'>
        <p>Type: {props.pokemonData.type}</p>
        <p>EXP: {props.pokemonData.base_experience}</p>
      </div>
    </div>
  );

  return card;
};

export default PokemonCard;
