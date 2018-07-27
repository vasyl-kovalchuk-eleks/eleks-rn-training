import { createStackNavigator } from "react-navigation";
import ProfileScreen from "../containers/ProfileScreen";
import * as routes from "../constants/navigation";
import MainScreen from "../containers/MainScreen";

export default createStackNavigator({
  [routes.MAIN_SCREEN]: { screen: MainScreen },
  [routes.PROFILE_SCREEN]: { screen: ProfileScreen },
}, {
  initialRouteName: routes.MAIN_SCREEN
});
