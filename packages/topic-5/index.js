import { AppRegistry } from 'react-native';
import App from './App';
import beckgroundMessages from './src/services/backgoundMessages';

// Register main application
AppRegistry.registerComponent('rntrainingtest', () => App);
// Register background task for notifications
AppRegistry.registerHeadlessTask('RNTrainingsBackgroundMessage', () => beckgroundMessages);
