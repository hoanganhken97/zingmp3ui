import React, { Component } from 'react';
import { View, Text, StyleSheet,
        TouchableOpacity, Dimensions,
        ScrollView, Image } from 'react-native';

import backList from '../../../../img/appIcon/backList.png';
import imgSp1 from '../../../../img/temp/sp1.jpeg';
import imgSp2 from '../../../../img/temp/sp2.jpeg';
import imgSp3 from '../../../../img/temp/sp3.jpeg';
import imgSp4 from '../../../../img/temp/sp4.jpeg';
import imgSp5 from '../../../../img/temp/sp5.jpeg';


const { width, height } = Dimensions.get('window');
export default class ProductDetail extends Component {
    render() {
        const { wrapProductList, wrapHeader,
                wrapperAll, iconBack, titleStyle,
                productContainer, productImg, productInfo,
                lastRowInfo, textName, textPrice, textMaterial,
                textColor, textShowDetail, productColor } = styles;
        return (
            <View style={wrapProductList} >
                <ScrollView style={wrapperAll}>
                    <View style={wrapHeader}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack(); }}>
                            <Image source={backList} style={iconBack} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Party Dress</Text>
                        <View style={iconBack} />
                    </View>
                    <View style={productContainer}>
                        <Image style={productImg} source={imgSp1} />
                        <View style={productInfo}>
                            <Text style={textName}>Lace Sleeve Si</Text>
                            <Text style={textPrice}>100$</Text>
                            <Text style={textMaterial}>Material Silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={textColor}>Color RoyalBlue</Text>
                                <View style={productColor} />
                                <TouchableOpacity>
                                    <Text style={textShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImg} source={imgSp1} />
                        <View style={productInfo}>
                            <Text style={textName}>Lace Sleeve Si</Text>
                            <Text style={textPrice}>100$</Text>
                            <Text style={textMaterial}>Material Silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={textColor}>Color RoyalBlue</Text>
                                <View style={productColor} />
                                <TouchableOpacity>
                                    <Text style={textShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImg} source={imgSp1} />
                        <View style={productInfo}>
                            <Text style={textName}>Lace Sleeve Si</Text>
                            <Text style={textPrice}>100$</Text>
                            <Text style={textMaterial}>Material Silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={textColor}>Color RoyalBlue</Text>
                                <View style={productColor} />
                                <TouchableOpacity>
                                    <Text style={textShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImg} source={imgSp1} />
                        <View style={productInfo}>
                            <Text style={textName}>Lace Sleeve Si</Text>
                            <Text style={textPrice}>100$</Text>
                            <Text style={textMaterial}>Material Silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={textColor}>Color RoyalBlue</Text>
                                <View style={productColor} />
                                <TouchableOpacity>
                                    <Text style={textShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImg} source={imgSp1} />
                        <View style={productInfo}>
                            <Text style={textName}>Lace Sleeve Si</Text>
                            <Text style={textPrice}>100$</Text>
                            <Text style={textMaterial}>Material Silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={textColor}>Color RoyalBlue</Text>
                                <View style={productColor} />
                                <TouchableOpacity>
                                    <Text style={textShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapProductList: {
        flex: 1,
        backgroundColor: '#d8dde0',
        padding: 10,
    },
    wrapperAll: {
        backgroundColor: '#fff',
        paddingHorizontal: 10
    },
    wrapHeader: {
        height: height / 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center'
    },
    iconBack: {
        width: 33,
        height: 33
    },
    titleStyle: {
        fontFamily: 'sans-serif-medium',
        color: '#C52F79',
        fontSize: 20
    },
    productContainer: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#F3F3F3',
        paddingVertical: 15
    },
    productImg: {
        width: width / 4,
        height: ((width / 4) * 452) / 361
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 10,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textName: {
        fontFamily: 'sans-serif-medium',
        color: '#DBDBDB',
        fontSize: 20,
        fontWeight: '400'
    },
    textPrice: {
        fontFamily: 'sans-serif-medium',
        color: '#C52F79'
    },
    textMaterial: {
        fontFamily: 'sans-serif-medium',
    },
    textColor: {
        fontFamily: 'sans-serif-medium',
    },
    textShowDetail: {
        fontFamily: 'sans-serif-medium',
        color: '#C52F79',
        fontSize: 12
    },
    productColor: {
        backgroundColor: '#4267B2',
        width: 20,
        height: 20,
        borderRadius: 10
    }
});
