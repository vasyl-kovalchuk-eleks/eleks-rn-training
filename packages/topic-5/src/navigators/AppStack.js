import * as React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator, createStackNavigator, createTabNavigator } from "react-navigation";
import ProfileScreen from "../containers/ProfileScreen";
import * as routes from "../constants/navigation";
import TopicsScreen from "../containers/MainTopicsScreen";
import * as MESSAGE from "../constants/message";
import TopicScreen from "../containers/TopicScreen";

const DrawerNavigatorScreen = createDrawerNavigator({
  [routes.MAIN_SCREEN]: {
    screen: createStackNavigator({
      [routes.HOME_SCREEN]: {
        screen: TopicsScreen,
        navigationOptions: {
          title: MESSAGE.TOPICS,
        }
      },
      [routes.TOPIC_SCREEN]: {
        screen: TopicScreen,
        navigationOptions: {
          title: MESSAGE.TOPIC,
        }
      }
    }, {
      initialRouteName: routes.HOME_SCREEN
    })
  },
  [routes.PROFILE_SCREEN]: {
    screen: ProfileScreen,
    navigationOptions: {
      title: MESSAGE.PROFILE,
    }
  },
}, {
  initialRouteName: routes.MAIN_SCREEN
});


export default DrawerNavigatorScreen;
