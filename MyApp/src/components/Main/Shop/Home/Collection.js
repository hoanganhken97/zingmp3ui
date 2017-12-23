import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import imgBanner from '../../../../img/temp/banner.jpg';

const { width, height } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        return (
            <View style={styles.wrapCollection}>
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={styles.title}>WINTER COLLECTION</Text>
                </View>
                <TouchableOpacity style={{ flex: 4, alignItems: 'flex-end' }} >
                    <Image source={imgBanner} style={styles.imgStyle} />
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapCollection: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        padding: 10,
        paddingTop: 0
    },
    imgStyle: {
        width: width - 40,
        height: (width - 40) / 2,
        flex: 1
    },
    title: {
        fontSize: 20,
        color: '#606467',
        fontFamily: 'sans-serif-medium'
    }
});
