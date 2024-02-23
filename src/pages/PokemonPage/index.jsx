import { useEffect, useState } from "react";
import CardPokemon from "../../components/CardPokemon";
import axios from "axios";
import "./styles.css";

const PokemonPage = () => {
  const [referenciasPokemons, setReferenciasPokemons] = useState([]);
  const [listaPokemons, setListaPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const pegar100ReferenciasPokemons = async () => {
    try {
      const resposta = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      setReferenciasPokemons(resposta.data.results);
    } catch (error) {
      console.error("Erro ao buscar as referencias dos pokemons", error);
    }
  };

  const pegarListaDePokemons = async () => {
    const promises = referenciasPokemons.map((referencia) =>
      axios.get(referencia.url)
    );

    try {
      const respostas = await Promise.all(promises);
      setListaPokemons(respostas.map((resposta) => resposta.data));
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao buscar os pokemons", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemons = listaPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    pegar100ReferenciasPokemons();
  }, []);

  useEffect(() => {
    if (referenciasPokemons.length > 0) {
      pegarListaDePokemons();
    }
  }, [referenciasPokemons]);

  if (isLoading) {
    return <div>Carregando</div>;
  }



  return (
    <div className="pokemon-container">
      <input
        type="text"
        placeholder="Pesquisar pokemon..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredPokemons.map((pokemon) => (
        <CardPokemon
          nome={pokemon.name}
          foto={pokemon.sprites.front_default}
          id={pokemon.id}
          url={pokemon.forms[0].url}
        />
      ))}
    </div>
  );
};

export default PokemonPage;