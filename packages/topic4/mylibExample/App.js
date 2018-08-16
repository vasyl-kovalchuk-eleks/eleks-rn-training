/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import {ToastController, ImageView} from "react-native-mylib"

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ImageView src={[{uri: "https://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png"}]}
                           style={{height: 150, width: 300}} resizeMethod="SCALE"/>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <View style={{marginBottom: 16}}>
                    <Button title="Show short toast" onPress={() => ToastController.showShortToast("Some toast")}/>
                </View>
                <Button title="Show long toast" onPress={() => ToastController.showLongToast("Some toast")}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
