import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import ReviewStars from '../view/review-stars';
import RegisterBookButton from '../view/register-book-button'
import Moment from 'moment';

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
    }
});

export default class BookScreen extends Component {
    constructor(props) {
        super(props)
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
                <ScrollView style={styles.scroll}>
                    <View style={styles.container}>
                        <Image 
                            style={styles.thumbnail}
                            source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/91jyIdvWc3L.jpg'}} 
                        />
                        <View style={styles.detail}>
                            <Text style={{fontSize: 21}}>{book.title}</Text>
                            <Text style={[styles.item, {fontSize: 18}]}>{book.author}</Text>                            
                            <ReviewStars count="4" />  
                            <RegisterBookButton isRegistered={true} style={styles.item} />                          
                            <Text style={styles.item}>ISBN13 {book.isbn}</Text>
                            <Text style={styles.item}>
                                {book.publisher} / {Moment(book.released_at.toISOString).format('YYYY年MM月DD日発売')}
                            </Text>   
                            <Text style={styles.item}>
                                {Moment(book.read_at.toISOString).format('YYYY年MM月DD日読了')}
                            </Text>                                                      
                        </View>
                    </View>
                </ScrollView>
        )
    }
}
