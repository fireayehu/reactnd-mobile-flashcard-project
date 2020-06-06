import React from "react";
import { registerRootComponent } from "expo";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { NavigationContainer } from "@react-navigation/native";
import reducer from "./src/redux/reducer";
import App from "./App";

const store = createStore(reducer);

const Entry = () => (
  <NavigationContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </NavigationContainer>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Entry);
