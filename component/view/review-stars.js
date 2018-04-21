import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class ReviewStars extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Text style={styles.stars}>
                {Array.from(Array(5).keys()).map((index) =>
                    ((index + 1) <= this.props.count) ? "★" : "☆"
                )}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    stars: {
        color: '#ffd700',
        fontSize: 32,
    }
});
