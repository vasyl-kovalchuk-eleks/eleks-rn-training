const uploadJSON = require('./firebase/uploader');

const topicsTemplate = require('./topics.json');
const jobName = 'Topics';

uploadJSON({
  path: '/topics',
  template: topicsTemplate,
  jobName
});
