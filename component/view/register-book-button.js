import React, { Component } from 'react';
import { StyleSheet, Alert, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Style from '../../AppStyle';

const styles = StyleSheet.create({
    container: {
        marginLeft: 0,
    },
    button: {
        borderRadius: 8,
        width: 220,
    },
    registered: {
        backgroundColor: Style.color.darkGrayColor,
    },
    register: {
        backgroundColor: Style.color.accentColor,
    },    
});

export default class RegisterBookButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isRegistered: props.isRegistered || false
        }
    }

    render() {
        return this.state.isRegistered ? (
            <Button 
                icon={{name: 'check-circle', size: 21}}
                buttonStyle={[styles.registered, styles.button]}
                onPress={() => {
                    Alert.alert('You tapped the button!');
                }}
                containerViewStyle={styles.container}
                title={`本棚に追加済み`} />
        ) : (
            <Button 
                icon={{name: 'add-circle', size: 21}}
                containerStyle={{ margin: 0 }}
                buttonStyle={[styles.register, styles.button]}
                onPress={() => {
                    Alert.alert('You tapped the button!');
                }}
                containerViewStyle={styles.container}
                title={`本棚に追加する`} />
        )
    }
}