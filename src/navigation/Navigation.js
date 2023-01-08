import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Pokedex from "../screens/Pokedex";
import Account from "../screens/Account";
import Favorite from "../screens/Favorite";

const Tab = createBottomTabNavigator();

function Navigation(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pokedex" component={Pokedex} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>
  );
}

export default Navigation;
