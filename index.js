import React from "react";
import { registerRootComponent } from "expo";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./src/redux/reducer";
import App from "./App";

const store = createStore(reducer);

const Entry = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Entry);
