import React, { Component } from 'react';
import { View, Text, StyleSheet,
        TouchableOpacity, Dimensions,
        ScrollView, Image } from 'react-native';

import imgSp1 from '../../../../img/temp/sp1.jpeg';

//Hàm viết hoa các chữ cái đầu trong chuỗi.
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
const { width, height } = Dimensions.get('window');

export default class Search extends Component {
    render() {
        const { wrapProductList, wrapperElement, productImg, productInfo,
                lastRowInfo, textName, textPrice, textMaterial,
                textColor, textShowDetail, productColor } = styles;
        return (
            <ScrollView style={wrapProductList} showsVerticalScrollIndicator={false}>
                <View style={wrapperElement}>
                    <Image style={productImg} source={imgSp1} />
                    <View style={productInfo}>
                        <Text style={textName}>{toTitleCase('lace sleeve si')}</Text>
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
                <View style={wrapperElement}>
                    <Image style={productImg} source={imgSp1} />
                    <View style={productInfo}>
                        <Text style={textName}>{toTitleCase('lace sleeve si')}</Text>
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
                <View style={wrapperElement}>
                    <Image style={productImg} source={imgSp1} />
                    <View style={productInfo}>
                        <Text style={textName}>{toTitleCase('lace sleeve si')}</Text>
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
                <View style={wrapperElement}>
                    <Image style={productImg} source={imgSp1} />
                    <View style={productInfo}>
                        <Text style={textName}>{toTitleCase('lace sleeve si')}</Text>
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
        );
    }
}

const styles = StyleSheet.create({
    wrapProductList: {
        flex: 1,
        backgroundColor: '#d8dde0'
    },
    wrapperElement: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 3,
        margin: 10
    },
    titleStyle: {
        fontFamily: 'sans-serif-medium',
        color: '#C52F79',
        fontSize: 20
    },
    productImg: {
        width: width / 4,
        height: ((width / 4) * 452) / 361,
        borderRadius: 3
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 20,
        flex: 1,
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textName: {
        fontFamily: 'sans-serif-medium',
        color: '#969696',
        fontSize: 20,
    },
    textPrice: {
        fontFamily: 'monospace',
        fontWeight: '500',
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
