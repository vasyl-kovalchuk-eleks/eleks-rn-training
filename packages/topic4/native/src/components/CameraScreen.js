import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';

class CameraScreen extends Component {

  state = {
    uri: null
  };

  onTakePicture = async function () {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.setState({ uri: data.uri });
    }
  };

  renderPicture() {
    return (
      <Image
        style={ styles.picture }
        source={ { uri: this.state.uri } }
      />
    )
  }

  renderCamera() {
    return (
      <View style={ styles.container }>
        <RNCamera
          ref={ ref => {
            this.camera = ref;
          } }
          style={ styles.preview }
          type={ RNCamera.Constants.Type.back }
          flashMode={ RNCamera.Constants.FlashMode.on }
          permissionDialogTitle={ 'Permission to use camera' }
          permissionDialogMessage={ 'We need your permission to use your camera phone' }
        />
        <View style={ styles.buttonContainer }>
          <TouchableOpacity
            onPress={ this.onTakePicture.bind(this) }
            style={ styles.capture }
          >
            <Text style={ { fontSize: 14 } }> Take a picture </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return this.state.uri ? this.renderPicture() : this.renderCamera();
  }
}

CameraScreen.navigationOptions = {
  title: 'Camera',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  picture: {
    width: '100%',
    height: '100%'
  }
});

export default CameraScreen;