import * as React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator, createTabNavigator } from "react-navigation";
import ProfileScreen from "../containers/ProfileScreen";
import * as routes from "../constants/navigation";
import HomeTabScreen from "../containers/HomeTabScreen";
import TopicsTabScreen from "../containers/TopicsTabScreen";

const MainScreen = {
  screen: createTabNavigator({
    [routes.HOME_TAB_SCREEN]: {
      screen: HomeTabScreen
    },
    [routes.TOPICS_TAB_SCREEN]: {
      screen: TopicsTabScreen
    }
  }),
  navigationOptions: {
    header: null
  }
};

export default createStackNavigator({
  [routes.MAIN_SCREEN]: MainScreen,
  [routes.PROFILE_SCREEN]: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
    }
  },
}, {
  initialRouteName: routes.MAIN_SCREEN
});
