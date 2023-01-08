import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorite from "../screens/Favorite";

const stack = createStackNavigator();

function FavoriteNavigation(props) {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Favorite"
        component={Favorite}
        options={{ title: "Favoritos", headerTitleAlign: "center" }}
      />
    </stack.Navigator>
  );
}

export default FavoriteNavigation;
