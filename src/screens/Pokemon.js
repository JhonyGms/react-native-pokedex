import React from "react";
import { Text, View } from "react-native";

function Pokemon(props) {
  const { navigation, route } = props;
  return (
    <View>
      <Text>{route.params.id}</Text>
    </View>
  );
}

export default Pokemon;
