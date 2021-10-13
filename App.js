import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import RootNavigator from "./src/navigation/root.navigator";
import reducers from "./src/redux/reducers";
import { LogBox } from "react-native";
import {
  useFonts,
  Lato_100Thin,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";

LogBox.ignoreAllLogs(true);

const loggerMiddleware = createLogger({ predicate: () => __DEV__ });
const middleware = applyMiddleware(thunk, loggerMiddleware);
const store = createStore(reducers, {}, middleware);

const images = [
  require("./assets/icons/energy.png"),
  require("./assets/icons/save.png"),
  require("./assets/icons/search.png"),
  require("./assets/animations/paying.json"),
];
const fonts = {};

export default (props) => {
  const [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });
  const [isLoadingComplete, setIsLoadingComplete] = React.useState(false);

  const handleResourcesAsync = async () => {
    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all([cacheImages, Font.loadAsync(fonts)]);
  };

  if (!fontsLoaded && !isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={handleResourcesAsync}
        onError={(error) => console.warn(error)}
        onFinish={() => setIsLoadingComplete(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <RootNavigator />
    </Provider>
  );
};
