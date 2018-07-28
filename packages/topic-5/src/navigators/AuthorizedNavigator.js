import { createStackNavigator } from "react-navigation";
import ProfileScreen from "../containers/ProfileScreen";
import * as routes from "../constants/navigation";
import MainScreen from "../containers/MainScreen";
import * as MESSAGE from "../constants/message";

export default createStackNavigator({
  [routes.MAIN_SCREEN]: {
    screen: MainScreen,
    path: 'mainScreen',
    navigationOptions: {
      title: MESSAGE.HOME,
    },
  },
  [routes.PROFILE_SCREEN]: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
    }
  },
}, {
  initialRouteName: routes.MAIN_SCREEN
});
