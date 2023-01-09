import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";

const stack = createStackNavigator();

function PokedexNavigation(props) {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          title: "",
          headerTitleAlign: "center",
          headerTransparent: true,
        }}
      />
      <stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{ title: "Pokemon", headerTitleAlign: "center" }}
      />
    </stack.Navigator>
  );
}

export default PokedexNavigation;
