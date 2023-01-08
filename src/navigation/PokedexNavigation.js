import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pokedex from "../screens/Pokedex";

const stack = createStackNavigator();

function PokedexNavigation(props) {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{ title: "Pokedex", headerTitleAlign: "center" }}
      />
    </stack.Navigator>
  );
}

export default PokedexNavigation;
