import React from 'react'
import Wallpaper from "../components/login/Wallpaper";
import LoginForm from "./login/LoginForm";
import Logo from "../components/login/Logo";

const LoginScreen = () => {
  return (
    <Wallpaper>
      <Logo/>
      <LoginForm/>
    </Wallpaper>
  )
};

LoginScreen.navigationOptions = {
  header: null,
};

export default LoginScreen;
