import React from "react";
import { SafeAreaView, Text } from "react-native";
import SafeViewAndroid from "../components/SafeViewAndroid";

function Account(props) {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Text>Account</Text>
    </SafeAreaView>
  );
}

export default Account;
