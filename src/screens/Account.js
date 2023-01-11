import React from "react";
import { SafeAreaView, Text } from "react-native";
import LoginForm from "../components/auth/LoginForm";
import UserData from "../components/auth/UserData";
import SafeViewAndroid from "../components/SafeViewAndroid";

function Account(props) {
  const auth = null;

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      {auth ? <UserData /> : <LoginForm />}
    </SafeAreaView>
  );
}

export default Account;
