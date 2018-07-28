import {StackActions, NavigationActions} from "react-navigation";

export const navigateToProfileScreen = ()=>(dispatch, getState)=>{
  dispatch(StackActions.push({
    routeName: "Profile"
  }))
};

export const switchToAnotherMainScreen = ()=>(dispatch, getState)=>{
  dispatch(NavigationActions.navigate({routeName: "Main2"}));
};

export const navigateToAppScreen = ()=>(dispatch)=>{
  dispatch(NavigationActions.navigate({routeName: "App"}));
};
