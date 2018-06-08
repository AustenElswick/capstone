import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import ListScreen from "./screens/listScreen";
import WebScreen from "./screens/webScreen";
import FavoritesScreen from './screens/favoritesScreen'

// Register Screens
Navigation.registerComponent("NerdLive.ListScreen", () => ListScreen);
Navigation.registerComponent("NerdLive.WebScreen", () => WebScreen);
Navigation.registerComponent("NerdLive.FavoritesScreen", () => FavoritesScreen);

  Promise.all([
    Icon.getImageSource("md-browsers", 30),
    Icon.getImageSource("ios-star", 30)
  ]).then(sources => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'News List',
        screen: 'NerdLive.ListScreen',
        icon: sources[0],
        title: 'News List'
      },
      {
        label: 'Favorites',
        screen: 'NerdLive.FavoritesScreen',
        icon: sources[1],
        title: 'Favorited Articles'
      }
    ]
  });
});
