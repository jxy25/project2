import React, { useState } from "react";

const SearchPokemon = ({ data, addToTeam }) => {
  const [search, setSearch] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
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
      setSelectedPokemon(searchResult[0]);
    }
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
          <button onClick={() => addToTeam(selectedPokemon)}>
            Add to team
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchPokemon;
