import { AppRegistry, YellowBox } from 'react-native';
import App from './App';

if (__DEV__) {
  console.ignoredYellowBox = ['Setting a timer'];
  // eslint-disable-next-line
  YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
}
// Register main application
AppRegistry.registerComponent('rntrainingtest', () => App);
