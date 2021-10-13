import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderTitle,
} from "@react-navigation/stack";
import React from "react";
import Home from "../screens/home";
import CreditsDetails from "../screens/home/Credits.screen";
const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HOME" component={Home} options={{}} />
      <Stack.Screen name="CREDITS" component={CreditsDetails} options={{}} />
    </Stack.Navigator>
  );
};
