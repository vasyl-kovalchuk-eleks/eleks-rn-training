/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class App extends Component {

    state = {
        count: 0
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.count}</Text>
                <Button
                    title="increase"
                    onPress={() => this.setState({count: this.state.count + 1})}
                />
                <Button
                    title="decrease"
                    onPress={() => this.setState({count: this.state.count - 1})}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    }
});