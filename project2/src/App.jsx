import React, { useState, useEffect } from "react";
import Display from "./components/Display/Display";
import SearchPokemon from "./components/SearchPokemon/SearchPokemon";
import TeamBuilder from "./components/TeamBuilder/TeamBuilder";
import UploadTeam from "./components/UploadTeam/UploadTeam";
import RandomPkmn from "./components/RandomPkmn/RandomPkmn";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router";
import { Route, Routes } from "react-router";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [myTeam, setMyTeam] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const limit = 151;

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
      );
      if (!res.ok) {
        throw new Error("failed");
      }

      const data = await res.json();

      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const detailRes = await fetch(pokemon.url);
          const detailData = await detailRes.json();

          return {
            name: pokemon.name,
            id: detailData.id,
            image: detailData.sprites.front_default,
          };
        })
      );

      setData(pokemonDetails);
      setCurrentPokemon(pokemonDetails[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToTeam = (pokemon) => {
    if (myTeam.length < 6 && !myTeam.some((p) => p.id === pokemon.id)) {
      setMyTeam((prevTeam) => [...prevTeam, pokemon]);
    }
  };

  const handleRandomPokemon = async () => {
    setLoading(true);
    setError(null);

    try {
      const randomId = Math.floor(Math.random() * 151) + 1;
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

      const res = await fetch(apiUrl);
      if (!res.ok) {
        console.log("error");
      }
      const data = await res.json();

      setCurrentPokemon({
        name: data.name,
        id: data.id,
        image: data.sprites.front_default,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    const currentIndex = data.indexOf(currentPokemon);
    if (currentIndex < data.length - 1) {
      setCurrentPokemon(data[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = data.indexOf(currentPokemon);
    if (currentIndex > 0) {
      setCurrentPokemon(data[currentIndex - 1]);
    }
  };

  return (
    <div>
      <NavBar />
      {/* <h1>Build your team!</h1> */}
      {/* <NavBar /> */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Display
                data={data}
                addToTeam={addToTeam}
                currentPokemon={currentPokemon}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                myTeam={myTeam}
              />
              <SearchPokemon data={data} addToTeam={addToTeam} />
              <RandomPkmn randomPokemon={handleRandomPokemon} />
            </>
          }
        />
        <Route
          path="/team-loadout"
          element={
            <div>
              <TeamBuilder myTeam={myTeam} />
              <UploadTeam myTeam={myTeam} />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
