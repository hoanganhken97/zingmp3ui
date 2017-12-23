import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import imgLittle from '../../../../img/temp/little.jpg';
import imgMaxi from '../../../../img/temp/maxi.jpg';
import imgParty from '../../../../img/temp/party.jpg';

const { width, height } = Dimensions.get('window');

export default class Category extends Component {
    openListProduct() {
        const { navigation } = this.props;
        navigation.navigate('Screen_ProductList');
    }
    render() {
        return (
            <View style={styles.wrapCategory}>
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={styles.title}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4, alignItems: 'center' }}>
                    <Swiper width={width - 40} height={(width - 40) / 2} >
                        <TouchableOpacity onPress={this.openListProduct.bind(this)}>
                            <ImageBackground source={imgLittle} style={styles.imgStyle}>
                                <Text style={styles.textContent}>Little Dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.openListProduct.bind(this)}>
                            <ImageBackground source={imgMaxi} style={styles.imgStyle}>
                                <Text style={styles.textContent}>Maxi Dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.openListProduct.bind(this)}>
                            <ImageBackground source={imgParty} style={styles.imgStyle}>
                                <Text style={styles.textContent}>Party Dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </Swiper>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapCategory: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 3,
        padding: 10,
        paddingTop: 0,
        justifyContent: 'space-between',
    },
    imgStyle: {
        width: width - 40,
        height: (width - 40) / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
        title: {
        fontSize: 20,
        color: '#606467',
        fontFamily: 'sans-serif-medium'
    },
    textContent: {
        //fontFamily: 'sans-serif-medium',
        color: '#919191',
        fontSize: 20
    }
});
