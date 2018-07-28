const functions = require('firebase-functions'),
  admin = require('firebase-admin'),
  auth = require('./auth'),
  push = require("./pushNotifications");

admin.initializeApp(functions.config().firebase);

module.exports = {
  onCreateUser: auth.createUser,
  sendEventData: auth.deleteUser,
  sendPushNotification: push.sendPushNotification
};
