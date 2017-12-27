import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,
        Image, ScrollView } from 'react-native';

import iconBack from '../../../../../src/img/appIcon/back.png';
import iconCart from '../../../../../src/img/appIcon/cartfull.png';
import sp3 from '../../../../../src/img/temp/sp3.jpeg';
import sp5 from '../../../../../src/img/temp/sp5.jpeg';

export default class ProductDetail extends Component {
    render() {
        const { wrapper, container, header, wrapImg, wrapContent,
                iconStyle, imgStyle, wrapImgElement, titleContent,
                txtTitle, txtDevide, txtPrice, txtContent, footer } = styles;
        return (
            <View style={wrapper}>
                <View style={container}>
                    <View style={header}>
                        <TouchableOpacity>
                            <Image source={iconBack} style={iconStyle} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={iconCart} style={iconStyle} />
                        </TouchableOpacity>
                    </View>
                    <View style={wrapImg}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={wrapImgElement}>
                                <Image source={sp3} style={imgStyle} />
                            </View>
                            <View style={wrapImgElement}>
                                <Image source={sp5} style={imgStyle} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={wrapContent}>
                        <View style={titleContent}>
                            <Text style={txtTitle}>{'black off the'.toUpperCase()}</Text>
                            <Text style={txtDevide}> / </Text>
                            <Text style={txtPrice}>200$</Text>
                        </View>
                        <View style={txtContent}>

                        </View>
                        <View style={footer}>

                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#d8dde0',
        flex: 1
    },
    container: {
        backgroundColor: '#FFF',
        flex: 1
    },
    header: {
        width,
        height: height / 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    wrapImg: {
        flex: 1,
        borderWidth: 1
    },
    wrapContent: {
        flex: 1
    },
    iconStyle: {
        width: 33,
        height: 33
    },
    wrapImgElement: {
        marginLeft: 10
    },
    imgStyle: {
        width: width * 0.9,
        height: ((width * 0.9) * 452) / 361,
    },
    titleContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1
    },
    txtTitle: {
        fontSize: 22,
        color: 'black',
        fontFamily: 'sans-serif-medium'
    },
    txtDevide: {
        fontSize: 22
    },
    txtPrice: {
        fontSize: 22
    },
    txtContent: {
        flex: 4,
        borderWidth: 1
    },
    footer: {
        flex: 1,
        borderWidth: 1
    }
});
