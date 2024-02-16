import React, { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import "./styles.css";

const CardPokemon = ({ url }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching Pokemon ", error);
      }
    }

    fetchPokemonData();
  }, [url]);

  if (!pokemonData) {
    return <CircularProgress disableShrink />;
  }

  const { name: nome, id, sprites: { front_default: foto } } = pokemonData;

  return (
    <div className="pokemon-card" key={id}>
      <a href={url} className="pokemon-item">
        <img src={foto} alt="Foto do pokemon" />
        <p> {nome} </p>
      </a>
    </div>
  );
};

export default CardPokemon;