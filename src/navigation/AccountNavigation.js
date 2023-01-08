import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account";

const stack = createStackNavigator();

function AccountNavigation(props) {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Account"
        component={Account}
        options={{ title: "Mi Cuenta", headerTitleAlign: "center" }}
      />
    </stack.Navigator>
  );
}

export default AccountNavigation;
