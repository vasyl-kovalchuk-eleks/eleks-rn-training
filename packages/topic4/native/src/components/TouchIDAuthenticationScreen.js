import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
import TouchID from 'react-native-touch-id';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class TouchIDAuthenticationScreen extends PureComponent {

  state = {
    biometryType: null,
    authenticationStatus: null
  };

  componentDidMount() {
    TouchID.isSupported()
      .then(biometryType => {
        if (biometryType === 'FaceID') {
          this.setState({ biometryType: 'FaceID is supported.' });
        } else if (biometryType === 'TouchID' || biometryType === true) { // iOS is TouchID, Android is true
          this.setState({ biometryType: 'TouchID is supported.' });
        } else {
          this.setState({ biometryType: 'This device does not support any hardware authentication.' });
        }
      })
      .catch(error => {
        this.setState({ biometryType: `Support error: ${ error.message}` });
      });
  }

  onClickTouchID = () => {
    const optionalConfigObject = {
      title: "Authentication Required", // Android
      color: "#e00606", // Android,
      fallbackLabel: "Show Passcode" // iOS (if empty, then label is hidden)
    };

    TouchID.authenticate('Demo react-native authentication.', optionalConfigObject)
      .then(() => {
        this.setState({ authenticationStatus: 'Authentication Successful.' });
      })
      .catch(error => {
        this.setState({ authenticationStatus: `Authentication error: ${error.details}` });
      });
  };

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.message }>
          { this.state.biometryType }
        </Text>
        <Text style={ styles.message }>
          { this.state.authenticationStatus }
        </Text>
        <Button
          onPress={ this.onClickTouchID }
          title="Authenticate"
        />
      </View>
    );
  }
}

TouchIDAuthenticationScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

TouchIDAuthenticationScreen.navigationOptions = {
  title: 'Face ID/Touch ID authentication',
};

export default TouchIDAuthenticationScreen;
