const functions = require('firebase-functions'),
  admin = require('firebase-admin'),
  auth = require('./auth'),
  push = require("./pushNotifications");

admin.initializeApp(functions.config().firebase);

module.exports = {
  createUser: auth.createUser,
  deleteUser: auth.deleteUser,
  sendPushNotification: push.sendPushNotification
};
