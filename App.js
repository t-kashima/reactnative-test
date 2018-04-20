import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import ReviewStars from './component/review-stars';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Hello, world!!!</Text>

        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press"
        />  */}

        <ReviewStars count="3" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
