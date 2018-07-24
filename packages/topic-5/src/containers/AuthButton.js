import React from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import AuthButton from "../components/AuthButton";

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Login' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
