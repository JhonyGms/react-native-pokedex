import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

function Pokedex() {
  const [pokemons, setpokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadpokemons();
    })();
  }, []);

  const loadpokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      const pokemonArray = [];
      for await (const pokemonItem of response.results) {
        const pokemonDetail = await getPokemonDetailsByUrlApi(pokemonItem.url);
        pokemonArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other["official-artwork"].front_default,
        });
      }
      setpokemons([...pokemons, ...pokemonArray]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <PokemonList
        pokemons={pokemons}
        loadpokemons={loadpokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}

export default Pokedex;
