'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');

// [START createUser]
/**
 * Store user profile.
 */
// [START onCreateTrigger]
exports.createUser = functions.auth.user().onCreate((event) => {
  // [END onCreateTrigger]
  // send an email;
  const user = event.data || event;

  const userObject = {
    displayName: user.displayName,
    email: user.email,
    photoUrl: user.photoURL,
    createdOn: user.metadata.createdAt
  };

  return admin.database().ref('users').child(user.uid).set(userObject);
});
// [END createUser]

// [START sendByeEmail]
/**
 * Deletes user metadata from database
 */
// [START onDeleteTrigger]
exports.deleteUser = functions.auth.user().onDelete((user) => {
// [END onDeleteTrigger]
  const email = user.email;
  const displayName = user.displayName;
  // send an email;

  return admin.database().ref('users').child(user.uid).remove();
});
// [END sendByeEmail]
