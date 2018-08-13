import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Module 3!</Text>
        <Text style={styles.instructions}>Let's get started</Text>

        <Image style={styles.logo} resizeMode="contain"
            source={{ uri: 'https://facebook.github.io/react-native/img/header_logo.png' }}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Directions')} style={styles.navigationBtn}>
            <Text style={styles.instructions}> Flat List </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Durer')} style={styles.navigationBtn}>
            <Text style={styles.instructions}> Image </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Animation')} style={styles.navigationBtn}>
            <Text style={styles.instructions}> Animation </Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#11151c',
    },
    logo: {
        width: 50,
        height: 50
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    },
    instructions: {
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: 5,
    },
    navigationBtn: {
        borderWidth: 1,
        borderColor: '#ffffff',
        marginTop: 20,
        padding: 10,
        minWidth: 150
    },
    btnText: {
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: 5,
        fontWeight: 'bold'
    }
});