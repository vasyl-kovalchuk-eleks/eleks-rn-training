const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.sendPushNotification = functions.database.ref('/users/{uid}/pushToken')
  .onCreate((snap, context) => {
    const uid = context.params.uid;
    const pushId = snap.val();

    return admin.database().ref('users').child(uid).once('value', snap => {
      const user = snap.val();
      const payload = {
        notification: {
          title: 'Firebase Notification',
          body: `Dear ${user.displayName}! \nYou have been successfully registered!`,
          sound: 'default',
          badge: '1'
        }
      };
      // sendToDevice can also accept an array of push tokens
      return admin.messaging().sendTodevice(pushId, payload);
    })
  });
