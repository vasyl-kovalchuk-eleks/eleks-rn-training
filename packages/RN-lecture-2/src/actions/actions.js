import {StackActions} from "react-navigation";

export const navigateToProfileScreen = ()=>(dispatch, getState)=>{
  dispatch(StackActions.push({
    routeName: "Profile"
  }))
};
