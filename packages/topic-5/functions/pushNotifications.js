const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.sendPushNotification = functions.database.ref('/users/{uid}/pushToken')
  .onWrite((change, context) => {
      // Only edit data when it is first created.
      if (!change.before.exists()) {
        const uid = context.params.uid;
        const pushId = change.after.val();

        return admin.database().ref('users/' + uid).once('value', snap => {
          const user = snap.val();
          console.log('User ', user);
          console.log('Push Token: ', pushId);
          //Click the following link: https://rntrainingtest.page.link/welcome
          const message = {
            notification: {
              title: 'Firebase Notification',
              body: `HI Dear ${user.displayName}!`,
            },
            token: pushId
          };
          // sendToDevice can also accept an array of push tokens
          return admin.messaging().send(message).then(() => {
            console.log('Notification has been sent!!!')
          }).catch(e => {
            console.log('Notification hasn\'t been sent!!! ', e)
          });
        }).catch((e) => {
          console.log('Something went wrong!!!', e);
        });
      }

      return Promise.resolve(false);
  });
