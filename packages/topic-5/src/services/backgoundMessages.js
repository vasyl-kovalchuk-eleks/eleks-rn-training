// @flow
import firebase from 'react-native-firebase';
// Optional flow type
import type { RemoteMessage } from 'react-native-firebase';

export default async (message: RemoteMessage) => {
  // handle your message

  console.log(RemoteMessage);
  return Promise.resolve();
}
