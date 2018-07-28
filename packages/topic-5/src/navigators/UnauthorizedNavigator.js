import { createStackNavigator } from "react-navigation";

import * as routes from "../constants/navigation";
import LoginScreen from "../containers/LoginScreen";
import SignUp from "../containers/SignUpScreen";

export default createStackNavigator({
  [routes.LOGIN_SCREEN]: { screen: LoginScreen },
  [routes.SIGN_UP_SCREEN]: { screen: SignUp },
});
