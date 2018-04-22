import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReviewStars extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.stars}>
                    {Array.from(Array(5).keys()).map((index) =>
                        ((index + 1) <= this.props.count) ? "★" : "☆"
                    )}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    stars: {
        color: '#ffd700',
        fontSize: 32,
    }
});
