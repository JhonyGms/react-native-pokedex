import React from "react";
import { SafeAreaView, Text } from "react-native";
import SafeViewAndroid from "../components/SafeViewAndroid";

function Favorite(props) {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Text>Favorite</Text>
    </SafeAreaView>
  );
}

export default Favorite;
