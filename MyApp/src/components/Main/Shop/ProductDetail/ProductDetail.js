import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,
        Image, ScrollView } from 'react-native';

import iconBack from '../../../../../src/img/appIcon/back.png';
import iconCart from '../../../../../src/img/appIcon/cartfull.png';
import Global from '../../../Global';

const url = 'http://eotw2012.000webhostapp.com/api/images/product/';

export default class ProductDetail extends Component {
    addThisProductToCart() {
        const { productDetail } = this.props.navigation.state.params;
        Global.addProductToCart(productDetail);
    }
    render() {
        const { wrapper, container, header, wrapImg, wrapContent,
                iconStyle, imgStyle, wrapImgElement, titleContent,
                txtTitle, txtDevide, txtPrice, txtContent, footer,
                txtContentStyle, txtFooter, txtColor, wrapFooterColor } = styles;
        const { name, price, color, material, description, images } = this.props.navigation.state.params.productDetail;
        return (
            <View style={wrapper}>
                <View style={container}>
                    <View style={header}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack(); }}>
                            <Image source={iconBack} style={iconStyle} />
                        </TouchableOpacity>
                            <TouchableOpacity onPress={this.addThisProductToCart.bind(this)}>
                            <Image source={iconCart} style={iconStyle} />
                        </TouchableOpacity>
                    </View>
                    <View style={wrapImg}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={wrapImgElement}>
                                <Image source={{ uri: `${url}${images[0]}` }} style={imgStyle} />
                            </View>
                            <View style={wrapImgElement}>
                                <Image source={{ uri: `${url}${images[1]}` }} style={imgStyle} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={wrapContent}>
                        <View style={titleContent}>
                            <Text style={txtTitle}>{name.toUpperCase()}</Text>
                            <Text style={txtDevide}> / </Text>
                            <Text style={txtPrice}>{price}$</Text>
                        </View>
                        <View style={txtContent}>
                            <Text style={txtContentStyle}>{description}</Text>
                        </View>
                        <View style={footer}>
                            <Text style={txtFooter}>Material {material}</Text>
                            <View style={wrapFooterColor}>
                                <Text style={txtColor}>Color {color}</Text>
                                <View
                                    style={{ width: 20,
                                    height: 20,
                                    borderRadius: 20 / 2,
                                    backgroundColor: color.toLowerCase(),
                                    borderColor: '#C52F79' }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const { width, height } = Dimensions.get('window');
const imgWidth = width * 0.9;
const imgHeight = (imgWidth * 452) / 361;
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
        flex: 1
    },
    wrapContent: {
        flex: 1,
        paddingHorizontal: 10
    },
    iconStyle: {
        width: 33,
        height: 33
    },
    wrapImgElement: {
        marginLeft: 10,
        width: imgWidth,
        height: imgHeight
    },
    imgStyle: {
        width: imgWidth,
        height: imgHeight
    },
    titleContent: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#E2E4E9',
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
        fontSize: 22,
        fontFamily: 'monospace'
    },
    txtContent: {
        flex: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 10
    },
    txtContentStyle: {
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
        color: '#888888'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtFooter: {
        color: '#C52F79',
        fontSize: 17
    },
    wrapFooterColor: {
        flexDirection: 'row'
    },
    txtColor: {
        color: '#C52F79',
        fontSize: 17,
        marginRight: 20
    },
    // colorStyle: {
    //     width: 20,
    //     height: 20,
    //     borderRadius: 20 / 2,
    //     backgroundColor: 'ORANGE'.toLowerCase(),
    //     borderColor: '#C52F79'
    // }
});
