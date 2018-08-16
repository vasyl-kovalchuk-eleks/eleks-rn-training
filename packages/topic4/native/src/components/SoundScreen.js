import React, { Component } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Sound from 'react-native-sound';

const soundList = [
  {
    title: 'local sound',
    isRequire: true,
    url: require('../../assets/error.wav'),
  },
  {
    title: 'mp3 remote download',
    url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
  },
  {
    title: 'mp3 remote - file doesn\'t exist',
    url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/file-not-here.mp3',
  },
  {
    title: 'aac remote download',
    url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/pew2.aac',
  },
  {
    title: 'wav remote download',
    url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
  },
];

const Button = ({ title, onPress }) => (
  <TouchableOpacity onPress={ onPress }>
    <Text style={ styles.button }>{ title }</Text>
  </TouchableOpacity>
);

const Header = ({ children, style }) => <Text style={ [styles.header, style] }>{ children }</Text>;

const Feature = ({ title, onPress }) => (
  <View style={ styles.feature }>
    <Header style={ { flex: 1 } }>{ title }</Header>
    <Button title="Play" onPress={ onPress }/>
  </View>
);

class SoundScreen extends Component {
  onPressPlay = (metadata) => {
    const callback = (error, sound) => {
      if (error) {
        Alert.alert('File does not exist');
        return;
      }

      sound.play(() => {
        // Release when it's done so we're not using up resources
        sound.release();
      });
    };

    // If the audio is a 'require' then the second parameter must be the callback.
    if (metadata.isRequire) {
      const sound = new Sound(metadata.url, error => callback(error, sound));
    } else {
      const sound = new Sound(metadata.url, metadata.basePath, error => callback(error, sound));
    }
  };

  render() {
    return (
      <ScrollView style={ styles.container } contentContainerStyle={ styles.scrollContainer }>
        { soundList.map(sound => {
          return (
            <Feature
              key={ sound.title }
              title={ sound.title }
              onPress={ () => {
                this.onPressPlay(sound);
              } }
            />
          );
        }) }
      </ScrollView>
    );
  }
}

SoundScreen.navigationOptions = {
  title: 'Sound',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
    padding: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(240,240,240,1)',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    padding: 7,
  },
  header: {
    textAlign: 'left',
  },
  feature: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(180,180,180)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(230,230,230)',
  },
});

export default SoundScreen;
