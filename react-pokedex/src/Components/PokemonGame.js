import Pokedex from './Pokedex';

const PokemonGame = (props) => {
  const hands = drawHands(props.pokemonArray);
  const hand1Exp = hands.hand1.reduce(
    (exp, pokemon) => exp + pokemon.base_experience,
    0
  );
  const hand2Exp = hands.hand2.reduce(
    (exp, pokemon) => exp + pokemon.base_experience,
    0
  );

  return (
    <>
      <div>
        <Pokedex
          pokemonArray={hands.hand1}
          totalExp={hand1Exp}
          isWinner={hand1Exp > hand2Exp}
        />
        <Pokedex
          pokemonArray={hands.hand2}
          totalExp={hand2Exp}
          isWinner={hand2Exp > hand1Exp}
        />
      </div>
    </>
  );
};

function drawHands(pokemonArray) {
  if (!pokemonArray) return null;
  let hand1 = [];
  let hand2 = [...pokemonArray];
  while (hand1.length !== hand2.length) {
    const randomIndex = Math.floor(Math.random() * hand2.length);
    const randomPokemon = hand2.splice(randomIndex, 1)[0];
    hand1.push(randomPokemon);
  }

  return { hand1, hand2 };
}

export default PokemonGame;
