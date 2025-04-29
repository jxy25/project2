import React, { useState } from "react";

const SearchPokemon = ({ data }) => {
  const [search, setSearch] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [error, setError] = useState(null);

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    if (!search.trim()) {
      setError("Enter pokemon name");
      return;
    }

    const searchResult = data.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search)
    );

    if (searchResult.length === 0) {
      setError("no pokemon found with that name");
    } else {
      setError(null);
      setFilteredPokemon(searchResult);
      setSelectedPokemon(searchResult[0]);
    }
  };

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div>
      <h3>Search</h3>
      <input
        type="text"
        placeholder="Search by pokemon name"
        value={search}
        onChange={handleSearchChange}
      />

      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      {filteredPokemon.length > 0 && !selectedPokemon && (
        <ul>
          {filteredPokemon.map((value) => (
            <li key={pokemon.id} onClick={() => handleSelectPokemon(pokemon)}>
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}

      {selectedPokemon && (
        <div>
          <p>{selectedPokemon.name}</p>
          <p>ID:{selectedPokemon.id} </p>
          {selectedPokemon.image ? (
            <img
              src={selectedPokemon.image}
              alt={selectedPokemon.name}
              width="100"
            />
          ) : (
            <p>no image</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPokemon;
