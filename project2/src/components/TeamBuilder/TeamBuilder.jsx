import React from "react";

const TeamBuilder = ({ myTeam }) => {
  return (
    <div className="loadout">
      <h2>Team Loadout</h2>
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
  );
};

export default TeamBuilder;
