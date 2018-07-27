import { createStackNavigator } from "react-navigation";

import * as routes from "../constants/navigation";
import LoginScreen from "../containers/LoginScreen";
import LoadingScreen from "../containers/LoadingScreen";
import SignUp from "../containers/SignUpScreen";

export default createStackNavigator({
  [routes.LOADING_SCREEN]: { screen: LoadingScreen },
  [routes.LOGIN_SCREEN]: { screen: LoginScreen },
  [routes.SIGN_UP_SCREEN]: { screen: SignUp },
}, {
  initialRouteName: routes.LOADING_SCREEN
});
