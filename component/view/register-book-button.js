import React, { Component } from 'react';
import { StyleSheet, Alert, Text, View, Button, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c0c0c0',
        borderRadius: 8,
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default class RegisterBookButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity 
                style={styles.container}
                onPress={() => {
                    Alert.alert('You tapped the button!');
                }}>
                <Text>Hello</Text>
            </TouchableOpacity>
        )
    }
}