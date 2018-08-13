import React, { Component } from 'react';
import { StyleSheet, DeviceEventEmitter, NativeModules, ScrollView, Text } from 'react-native';
import throttle from 'lodash/throttle';

const { SensorManager } = NativeModules;

class SensorsScreen extends Component {

  state = {
    accelerometer: { x: 0, y: 0, z: 0 },
    gyroscope: { x: 0, y: 0, z: 0 },
    orientation: { azimuth: 0, pitch: 0, roll: 0 },
    stepCounter: { steps: 0 },
    lightSensor: { light: 0 },
  };

  componentDidMount() {
    SensorManager.startAccelerometer(100);
    DeviceEventEmitter.addListener('Accelerometer', this.onCallListener('accelerometer'));

    SensorManager.startGyroscope(100);
    DeviceEventEmitter.addListener('Gyroscope', this.onCallListener('gyroscope'));

    SensorManager.startOrientation(100);
    DeviceEventEmitter.addListener('Orientation', this.onCallListener('orientation'));

    SensorManager.startStepCounter(1000);
    DeviceEventEmitter.addListener('StepCounter', this.onCallListener('stepCounter'));

    SensorManager.startLightSensor(100);
    DeviceEventEmitter.addListener('LightSensor', this.onCallListener('lightSensor'));
  }

  componentWillUnmount() {
    SensorManager.stopAccelerometer();
    SensorManager.stopGyroscope();
    SensorManager.stopOrientation();
    SensorManager.stopStepCounter();
    SensorManager.stopLightSensor();
  }

  onCallListener = key => throttle(data => {
    this.setState({ [key]: data });
  }, 1000);

  render() {
    const { accelerometer, gyroscope, orientation, stepCounter, lightSensor } = this.state;

    return (
      <ScrollView style={ styles.container }>
        <Text style={ styles.header }> Accelerometer </Text>
        <Text style={ styles.message }> x - { accelerometer.x } </Text>
        <Text style={ styles.message }> y - { accelerometer.y } </Text>
        <Text style={ styles.message }> z - { accelerometer.z } </Text>
        <Text style={ styles.header }> Gyroscope </Text>
        <Text style={ styles.message }> x - { gyroscope.x } </Text>
        <Text style={ styles.message }> y - { gyroscope.y } </Text>
        <Text style={ styles.message }> z - { gyroscope.z } </Text>
        <Text style={ styles.header }> Orientation </Text>
        <Text style={ styles.message }> azimuth - { orientation.azimuth } </Text>
        <Text style={ styles.message }> pitch - { orientation.pitch } </Text>
        <Text style={ styles.message }> roll - { orientation.roll } </Text>
        <Text style={ styles.header }> StepCounter </Text>
        <Text style={ styles.message }>
          { stepCounter.steps ? `steps - ${stepCounter.steps}` : 'StepCounter is not supported' }
        </Text>
        <Text style={ styles.header }> LightSensor </Text>
        <Text style={ styles.message }>
          { lightSensor.light ? `light - ${lightSensor.light}` : 'LightSensor is not supported' }
        </Text>
      </ScrollView>
    )
  }
}

SensorsScreen.navigationOptions = {
  title: 'Sensors',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  message: {
    color: 'grey',
    fontSize: 14,
    textAlign: 'center',
  }
});

export default SensorsScreen;