import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderTitle,
} from "@react-navigation/stack";
import React from "react";
import Home from "../screens/home";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HOME" component={Home} options={{}} />
    </Stack.Navigator>
  );
};
