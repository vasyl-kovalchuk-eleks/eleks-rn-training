import firebase from 'react-native-firebase';

export const fetchTopics = () => {
  return firebase.database().ref('/topics').once('value').then(snapshot => snapshot.val())
};
