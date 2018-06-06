import { Navigation } from "react-native-navigation";

import ListScreen from "./screens/listScreen";
import WebScreen from "./screens/webScreen";


// Register Screens
Navigation.registerComponent("NerdLive.ListScreen", () => ListScreen);
Navigation.registerComponent("NerdLive.WebScreen", () => WebScreen);


// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "NerdLive.ListScreen",
    title: "Login"
  }
});
