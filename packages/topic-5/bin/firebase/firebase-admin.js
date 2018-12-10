const admin = require('firebase-admin');
const path = require('path');
const serviceAccount = path.join(
  __dirname,
  './eleks-rn-training-firebase-adminsdk.json'
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://eleks-rn-training.firebaseio.com"
});

module.exports = admin;
