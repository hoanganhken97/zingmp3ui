import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,
        Dimensions, Image, ScrollView } from 'react-native';

import imgSp1 from '../../../../img/temp/sp1.jpeg';

const { width, height } = Dimensions.get('window');
export default class Cart extends Component {
    render() {
        const { container, wrapElement, imgStyle,
                wrapContent, titleStyle, priceStyle,
                header, footer, numberOfProduct, showDetailContainer,
                textDetail, checkoutButton, checkoutTitle} = styles;
        return (
            <View style={container} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={wrapElement}>
                        <Image source={imgSp1} style={imgStyle} />
                        <View style={wrapContent}>
                            <View style={header}>
                                <Text style={titleStyle}>Lace Sleeve Si</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: '#969696', fontSize: 15 }}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={priceStyle}>117$</Text>
                            <View style={footer}>
                                <View style={numberOfProduct}>
                                    <TouchableOpacity>
                                        <Text style={{ color: 'black' }}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: 'black' }}>3</Text>
                                    <TouchableOpacity>
                                        <Text style={{ color: 'black' }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={showDetailContainer}>
                                    <Text style={textDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={wrapElement}>
                        <Image source={imgSp1} style={imgStyle} />
                        <View style={wrapContent}>
                            <View style={header}>
                                <Text style={titleStyle}>Lace Sleeve Si</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: '#969696', fontSize: 15 }}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={priceStyle}>117$</Text>
                            <View style={footer}>
                                <View style={numberOfProduct}>
                                    <TouchableOpacity>
                                        <Text style={{ color: 'black' }}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: 'black' }}>3</Text>
                                    <TouchableOpacity>
                                        <Text style={{ color: 'black' }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={showDetailContainer}>
                                    <Text style={textDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={wrapElement}>
                        <Image source={imgSp1} style={imgStyle} />
                        <View style={wrapContent}>
                            <View style={header}>
                                <Text style={titleStyle}>Lace Sleeve Si</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: '#969696', fontSize: 15 }}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={priceStyle}>117$</Text>
                            <View style={footer}>
                                <View style={numberOfProduct}>
                                    <TouchableOpacity>
                                        <Text style={{ color: 'black' }}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: 'black' }}>3</Text>
                                    <TouchableOpacity>
                                        <Text style={{ color: 'black' }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={showDetailContainer}>
                                    <Text style={textDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={wrapElement}>
                        <Image source={imgSp1} style={imgStyle} />
                        <View style={wrapContent}>
                            <View style={header}>
                                <Text style={titleStyle}>Lace Sleeve Si</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: '#969696', fontSize: 15 }}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={priceStyle}>117$</Text>
                            <View style={footer}>
                                <View style={numberOfProduct}>
                                    <TouchableOpacity>
                                        <Text style={{ color: 'black' }}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: 'black' }}>3</Text>
                                    <TouchableOpacity>
                                        <Text style={{ color: 'black' }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={showDetailContainer}>
                                    <Text style={textDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={wrapElement}>
                        <Image source={imgSp1} style={imgStyle} />
                        <View style={wrapContent}>
                            <View style={header}>
                                <Text style={titleStyle}>Lace Sleeve Si</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: '#969696', fontSize: 15 }}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={priceStyle}>117$</Text>
                            <View style={footer}>
                                <View style={numberOfProduct}>
                                    <TouchableOpacity>
                                        <Text style={{ color: 'black' }}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: 'black' }}>3</Text>
                                    <TouchableOpacity>
                                        <Text style={{ color: 'black' }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={showDetailContainer}>
                                    <Text style={textDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={checkoutButton}>
                    <Text style={checkoutTitle}>TOTAL {1000}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
    );
  }
}
//361 x 452
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d8dde0'
    },
    wrapElement: {
        height: width / 2.5,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgStyle: {
        width: (((width / 3)) * 361) / 452,
        height: (width / 3),
        borderRadius: 5,
    },
    wrapContent: {
        height: (width / 3),
        flex: 1,
        marginLeft: 10,
        justifyContent: 'space-between'
    },
    titleStyle: {
        fontFamily: 'sans-serif-medium',
        color: '#969696',
        fontSize: 20,
        paddingLeft: 10
    },
    priceStyle: {
        color: '#C52F79',
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'monospace',
        paddingLeft: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    showDetailContainer: {
        flex: 1,
        //flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    textDetail: {
        color: '#C52F79',
        textAlign: 'right',
        fontSize: 12
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#4267B2',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontFamily: 'sans-serif-medium'
    }
});
