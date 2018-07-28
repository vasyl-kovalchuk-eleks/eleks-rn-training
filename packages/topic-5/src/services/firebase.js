import firebase from 'react-native-firebase';

import { getUsersPath } from "../utils/firebasePathes";

export const firebaseMessaging = firebase.messaging();
export const firebaseDb = firebase.database();

export const createUser = (email, password) =>
  firebase.auth()
    .createUserAndRetrieveDataWithEmailAndPassword(email, password)
    .then(({user}) => {
      if (!user.emailVerified) {
        user.sendEmailVerification();
      }

      requestAndSaveUserPushToken(user.uid);
    });

export const signIn = (email, password) =>
  firebase.auth()
    .signInWithEmailAndPassword(email, password);

export const logout = () => firebase.auth().signOut();

export const listenStateChange = onUserChange => firebase.auth().onAuthStateChanged(onUserChange);

export const requestAndSaveUserPushToken = userId =>
  firebaseMessaging.hasPermission()
    .then(enable => {
      if(!enable){
        return firebaseMessaging.requestPermissions();
      }
      return enable;
    })
    .then(()=> firebaseMessaging.getToken())
    .then(token => firebaseDb.ref(getUsersPath(userId)).update({pushToken: token}));
