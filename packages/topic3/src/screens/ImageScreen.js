import React, { PureComponent } from 'react';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';

// -- BACKROUND IMAGE --
// <ImageBackground style={styles.wrappedImage} source={require("../assets/durer.jpeg")}>
// <Text style={styles.durerText}>Durer</Text>
// </ImageBackground>

// -- BASE64 IMAGE --
// const base64Icon = 'data:image/png;base64,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';
// source={uri: base64Icon}

export default class ImageScreen extends PureComponent {
    render(){
        return(
            <View style={styles.container}>
                <Image resizeMode='contain' style={styles.canvas} source={require("../assets/durer.jpeg")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    canvas: {
        height: 600,
        width: 280
    },
    wrappedImage: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 200
    },
    durerText: {
        color: 'red',
        fontSize: 25
    }
});