import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { connect, useSelector } from "react-redux";
import { clearData } from "../redux/actions";
import { HomeStack } from "./home.stack";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../utils/helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RootNavigator = ({ clearData }) => {
  const { currentUser } = useSelector(({ User }) => User);
  const getUserDataFromStorage = async () => {
    const getUser = await AsyncStorage.getItem("user");
    const user = JSON.parse(getUser);
    if (user) {
      clearData("currentUser", user);
    }
  };
  useEffect(() => {
    getUserDataFromStorage();
  }, []);
  useEffect(() => {}, [currentUser]);
  return (
    <NavigationContainer ref={navigationRef} headerMode="none">
      <HomeStack />
    </NavigationContainer>
  );
};

export default connect(null, { clearData })(RootNavigator);
