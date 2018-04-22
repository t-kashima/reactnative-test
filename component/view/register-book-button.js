import React, { Component } from 'react';
import { StyleSheet, Alert, Text, View, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Style from '../../AppStyle';

const styles = StyleSheet.create({
    container: {
        marginLeft: 0,
    },
    button: {
        borderRadius: 8,   
        width: 220,
    },
    button_registered: {
        borderRadius: 8,
        width: 225,
    },
    registered: {
        backgroundColor: Style.color.darkGrayColor,
        height: 45,
        alignItems: 'center',
        flexDirection: 'row',
    },
    register: {
        backgroundColor: Style.color.accentColor,
    },
    bookstand: {
        backgroundColor: Style.color.accentColor,
        width: 45,
        height: 45,
        borderTopRightRadius: 8,        
        borderBottomRightRadius: 8, 
        justifyContent: 'center',
        marginLeft: 16
    }    
});

export default class RegisterBookButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.isRegistered ? (
            <TouchableOpacity
                style={[styles.registered, styles.button_registered]}
                onPress={this.props.onClick}>
                <Icon 
                    name='check-circle'
                    color='#fff'
                    size={21}
                    containerStyle={{marginRight: 10, marginLeft: 16}} />
                <Text style={{color: '#fff', fontSize: 18}}>本棚に追加済み</Text>
                <TouchableOpacity
                    style={[styles.registered, styles.bookstand]}>
                    <Icon 
                        name='home'
                        color='#fff'
                        size={21} />                    
                </TouchableOpacity>              
            </TouchableOpacity>
        ) : (
            <Button 
                icon={{name: 'add-circle', size: 21}}
                containerStyle={{ margin: 0 }}
                buttonStyle={[styles.register, styles.button]}
                onPress={this.props.onClick}
                containerViewStyle={styles.container}
                title={`本棚に追加する`} />
        )
    }
}