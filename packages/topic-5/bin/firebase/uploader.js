const firebaseDb = require('./firebase-admin').database();

const uploadJSON = ({path, template, jobName}) => {
  firebaseDb.ref(path).set(template)
    .then((result) => {
      onSuccess(jobName)
    })
    .catch(() => {
      onError(jobName)
    });
};

const onSuccess = (jobName) =>  {
  console.info(`\x1b[32m${jobName} uploading DONE\x1b[0m`);
  process.exit();
};

const onError = (jobName) => e => {
  console.error(`\x1b[31m${jobName} uploading FAILD\x1b[0m`, e);
  process.exit();
};

module.exports = uploadJSON;
