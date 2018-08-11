# Topic 3
An example project to dive into basic of react-native.

## Setup and run
```
# clone RNTraining project from eleks gitlab
git clone git@gitlab2.eleks-software.local:react-native/RNTrainings.git

# navigate to topic 3 project
cd RNTrainings/packages/topic3

# For iOS
react-native run-ios

# For Android
react-native run-android

```
## Troubleshoots

This project was developed on MacOS using newest version of react-native 0.56.0. 
If you are Window's user issue https://github.com/facebook/react-native/issues/20056 will be faced!

To fix it try

```
# navigate to topic 3 project
cd RNTrainings/packages/topic3

npm uninstall react-native --save
npm install react-native@0.55.4 --save

```
