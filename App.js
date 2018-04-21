import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import BookScreen from './component/screen/book-screen';

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
        <BookScreen />
      </View>
    )
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
