import React, { useState } from "react";

const Display = ({
  data,
  addToTeam,
  currentPokemon,
  handleNext,
  handlePrevious,
  myTeam,
}) => {
  return (
    <div className="display">
      <h1>Build your team!</h1>
      {currentPokemon ? (
        <div>
          <h3>{currentPokemon.name}</h3>
          <p>ID: {currentPokemon.id}</p>
          {currentPokemon.image ? (
            <img
              src={currentPokemon.image}
              alt={currentPokemon.name}
              width="200"
            />
          ) : (
            <p>no data available</p>
          )}

          <div className="prevnext">
            <button
              onClick={handlePrevious}
              disabled={data.indexOf(currentPokemon) === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={data.indexOf(currentPokemon) === data.length - 1}
            >
              Next
            </button>
          </div>

          <div>
            <button onClick={() => addToTeam(currentPokemon)}>
              Add to team
            </button>

            {myTeam.length === 0 ? (
              <p>Your team is empty, add a pokemon</p>
            ) : (
              <ul className="displaypkmn">
                {myTeam.map((pokemon) => (
                  <li key={pokemon.id} className="pkmnteam">
                    <h4>{pokemon.name}</h4>
                    <img src={pokemon.image} alt={pokemon.name} width="100" />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <p>no data</p>
      )}
    </div>
  );
};

export default Display;
