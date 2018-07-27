import firebase from 'react-native-firebase';

import { getUsersPath } from "../utils/firebasePathes";

export const firebaseMessaging = firebase.messaging();
export const firebaseDb = firebase.database();

export const createUser = (email, password) =>
  firebase.auth()
    .createUserWithEmailAndPassword(email, password);

export const signIn = (email, password) =>
  firebase.auth()
    .signInWithEmailAndPassword(email, password);

export const logout = () => firebase.auth().signOut();

export const listenStateChange = onUserChange => firebase.auth().onAuthStateChanged(onUserChange);

export const requestAndSaveUserPushToken = userId =>
  firebaseMessaging.requestPermissions()
    .then(firebaseMessaging.getToken)
    .then(token => {
      firebaseDb.ref(getUsersPath(userId)).set({pushToken: token});
    })
    .catch(err => console.log('something went wrong: ', err));
