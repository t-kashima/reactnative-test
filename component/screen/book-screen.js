import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ReviewStars from '../view/review-stars';

export default class BookScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <ReviewStars count="4" />
                <Text style={{fontSize: 32}}>Hello</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
