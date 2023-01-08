import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

const Login = () => {
  const Tab = createBottomTabNavigator();
  console.log(Tab);
  return <Text> hello </Text>;
};

export default Login;
