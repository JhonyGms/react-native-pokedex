import React from "react";
import { StyleSheet, ActivityIndicator, FlatList } from "react-native";
import PokemonCard from "./PokemonCard";

function PokemonList(props) {
  const { pokemons, loadpokemons, isNext } = props;

  const loadMore = () => {
    loadpokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator size="large" style={styles.spinner} color="#000" />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});

export default PokemonList;
