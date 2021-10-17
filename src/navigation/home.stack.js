import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderTitle,
} from "@react-navigation/stack";
import React from "react";
import Home from "../screens/home";
import CreditsDetails from "../screens/home/Credits.screen";
import HistoryTrans from "../screens/home/History.screen";
import MeterDetailsScreen from "../screens/home/MeterDetails.screen";
const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HOME" component={Home} options={{}} />
      <Stack.Screen name="CREDITS" component={CreditsDetails} options={{}} />
      <Stack.Screen
        name="METER-DETAILS"
        component={MeterDetailsScreen}
        options={{}}
      />
      <Stack.Screen
        name="HISTORY-PURCHASE"
        component={HistoryTrans}
        options={{}}
      />
    </Stack.Navigator>
  );
};
