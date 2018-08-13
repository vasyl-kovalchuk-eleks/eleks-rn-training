
# react-native-mylib

## Getting started

`$ npm install react-native-mylib --save`

### Mostly automatic installation

`$ react-native link react-native-mylib`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-mylib` and add `RNMylib.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNMylib.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNMylibPackage;` to the imports at the top of the file
  - Add `new RNMylibPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-mylib'
  	project(':react-native-mylib').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-mylib/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-mylib')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNMylib.sln` in `node_modules/react-native-mylib/windows/RNMylib.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Mylib.RNMylib;` to the usings at the top of the file
  - Add `new RNMylibPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNMylib from 'react-native-mylib';

// TODO: What to do with the module?
RNMylib;
```
  