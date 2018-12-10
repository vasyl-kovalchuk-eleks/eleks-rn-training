import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import autobind from 'autobindr';

import steps from '../assets/directions';

export default class Directions extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: steps
        }

        autobind(this);
    }

    onFinishItem(id){

        const { data } = this.state;

        const updatedDirections = data.map(item => {
            const returnValue = { ...item };

            if (item.id == id) {
                returnValue.done = true;
            }

            return returnValue
        })

        this.setState({ data: updatedDirections });

    }

    renderItem({ item }) {
        return (
            <View style={styles.listItem}>
                <View style={[styles.listItemCell, styles.leftCell]}>
                    <TouchableOpacity onPress={ () => this.onFinishItem(item.id) } style={[styles.listItemBtn, item.done && styles.doneButton]}>
                        <Text style={[styles.btnText, item.done && styles.blackTxt]}>{item.done ? 'Done' : 'Finish'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.listItemCell, styles.rightCell]}>
                    <Text style={[styles.regularText, item.done && styles.textThrough]}>{item.step}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    regularText: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    textThrough: {
        textDecorationLine: 'line-through',
        fontWeight: 'normal'
    },
    doneButton: {
        backgroundColor: '#aaa19b'
    },
    listItemCell: {
        flexDirection: 'column',
        marginHorizontal: 3,
    },
    listItemBtn: {
        backgroundColor: 'red',
        padding: 5
    },
    btnText: {
        color: '#ffffff',
        textAlign: 'center'
    },
    blackTxt: {
        color: 'black'
    },
    leftCell: {
        justifyContent: 'center',
        width: '22%'
    },
    rightCell: {
        width: '74%'
    },
    listItem: {
        backgroundColor: '#ffffff',
        marginVertical: 1,
        marginHorizontal: 5,
        padding: 5,
        minHeight: 60,
        borderWidth: 1,
        flexDirection: 'row'
    }
});