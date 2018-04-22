import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import ReviewStars from '../view/review-stars';
import RegisterBookButton from '../view/register-book-button';
import Moment from 'moment';
import NavigationBar from 'react-native-navbar';

const styles = StyleSheet.create({
    scroll: {
        alignSelf: 'stretch',
        flex: 1,
    },    
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#864815',
    },
    detail: {
        flex: 1,
        backgroundColor: '#ffffffcc',
        padding: 16,
        opacity: 60               
    },
    thumbnail: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
        marginTop: 24,
        marginBottom: 24,
        alignSelf: 'center',
    },
    item: {
        marginTop: 8, 
        marginBottom: 8,
    },
    section: {
        marginTop: 16, 
        marginBottom: 16,
    },
    navigationBar: {
        height: 80,
        backgroundColor: '#864815',
    },
    shadow: {
        height: 1,
        width: '100%',
        backgroundColor: '#c0c0c0'
    }
});

const titleConfig = {
    title: '本の紹介',
    style: {color: '#fff', fontSize: 24, alignItems: 'center', marginTop: 16}
};

const statusBarConfig = {
    style: {backgroundColor: '#864815'},
    tintColor: '#864815'
}

const rightButtonConfig = {
    title: 'Next',
    style: {marginTop: 16},
    handler: () => alert('hello!'),
};

export default class BookScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {isRegistered: false};
    }

    onClickRegisterBook = () => {
        this.setState((previousState) => {
            return {isRegistered: !previousState.isRegistered};
        });
        
    }

    render() {
        const book = {
            title: 'ノックの音が',
            author: '星 新一',
            isbn: '9784087711288',
            publisher: '集英社',
            released_at: Date(),
            read_at: Date()
        }
        return (
            <View style={{flex: 1, width: '100%', backgroundColor: '#864815'}}>
                <NavigationBar
                    title={titleConfig}
                    rightButton={rightButtonConfig}
                    style={styles.navigationBar}
                    statusBar={statusBarConfig}
                />
                <View
                    style={styles.shadow} />
                <ScrollView style={styles.scroll}>
                    <View style={styles.container}>
                        <Image 
                            style={styles.thumbnail}
                            source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/91jyIdvWc3L.jpg'}} 
                        />
                        <View style={styles.detail}>
                            <Text style={{fontSize: 21}}>{book.title}</Text>
                            <Text style={[{fontSize: 18, marginTop: 16, marginBottom: 24}]}>{book.author}</Text>                            
                            <RegisterBookButton isRegistered={this.state.isRegistered} onClick={this.onClickRegisterBook} style={{marginTop: 24, marginBottom: 24}} />                                      
                            {/* <ReviewStars count="4" style={{marginTop: 32, marginBottom: 16}} />                   */}
                            <Text style={{marginTop: 32, marginBottom: 8}}>ISBN13 {book.isbn}</Text>
                            <Text style={styles.item}>
                                {book.publisher} / {Moment(book.released_at.toISOString).format('YYYY年MM月DD日発売')}
                            </Text>   
                            <Text style={styles.item}>
                                {Moment(book.read_at.toISOString).format('YYYY年MM月DD日読了')}
                            </Text>                                                      
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
