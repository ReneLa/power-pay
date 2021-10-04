import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { HomeStack } from "./home.stack";

const Tab = createBottomTabNavigator();

const getTabBarVisible = (route) => {
  const routName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "HOME-STACK";

  if (routName === "EVENT DETAILS") {
    return false;
  }

  return true;
};

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        // showLabel: false,
        inactiveTintColor: "#919191",
        activeTintColor: "#1E90FF",
        labelStyle: {
          // fontFamily: "RobotoSlab_600SemiBold",
          fontSize: 11.5,
        },
        style: {
          backgroundColor: "#4A4453",
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="HOME-STACK"
        component={HomeStack}
        options={({ navigation, route }) => ({
          tabBarLabel: "Home",
          tabBarVisible: getTabBarVisible(route),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
