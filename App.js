import React, { Component } from "react";

import MainStack from "./src/navigation/MainStackNavigation";
import { setLocalNotification } from "./src/utils/helpers";

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return <MainStack />;
  }
}
