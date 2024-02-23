import React, { useState, useEffect } from "react";
import axios from "axios"; 
import "./styles.css";

const CardPokemon = ({ url }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await axios.get(url); 
        const data = response.data;
        setPokemonData(data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching Pokemon ", error);
      }
    }

    fetchPokemonData();
  }, [url]);


  if (loading) {
    return <div>Carregando</div>;
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