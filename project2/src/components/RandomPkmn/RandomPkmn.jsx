import React from "react";

const RandomPkmn = ({ randomPokemon }) => {
  return (
    <div>
      <button onClick={randomPokemon}>Random</button>
    </div>
  );
};

export default RandomPkmn;
