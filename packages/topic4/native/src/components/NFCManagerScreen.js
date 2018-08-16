import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import NfcManager from 'react-native-nfc-manager'

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

class NFCManagerScreen extends PureComponent {

  state = {
    isSupported: false,
    status: null,
    error: null,
  };

  componentDidMount() {
    NfcManager.isSupported()
      .then(isSupported => {
        this.setState({ isSupported });
      })
      .catch(error => {
        this.setState({ error: `Support error: ${ error.message}` });
      });
  }

  componentWillUnmount() {
    NfcManager.stop();
  }

  onClickStartNFC = () => {
    NfcManager.start({
      onSessionClosedIOS: () => {
        this.setState({ status: 'ios session closed' });
      }
    })
      .then(result => {
        this.setState({ status: `Server is runing: ${result}` });
        NfcManager.registerTagEvent(tag => {
          this.setState({ status: `Tag Discovered: ${tag}` });
        });
      })
      .catch(error => {
        this.setState({ error: `Support error: ${ error.message}` });
      })
  };

  render() {
    const { isSupported, status, error } = this.state;

    return (
      <View style={ styles.container }>
        <Text style={ styles.message }>
          { isSupported ? 'NFC is supported by device.' : 'NFC is not supported by device.' }
        </Text>
        <Text style={ styles.message }>
          { status }
        </Text>
        <Text style={ styles.message }>
          { error }
        </Text>
        <Button
          onPress={ this.onClickStartNFC }
          title="Start NFC listener"
        />
      </View>
    );
  }
}

NFCManagerScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

NFCManagerScreen.navigationOptions = {
  title: 'NFC manager',
};

export default NFCManagerScreen;
