import React from "react";
import { SafeAreaView, Text } from "react-native";
import SafeViewAndroid from "../components/SafeViewAndroid";

function Pokedex(props) {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}

export default Pokedex;
