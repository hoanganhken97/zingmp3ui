import React, { Component } from 'react';
import { View, Text, StyleSheet,
        TouchableOpacity, Dimensions,
        ListView, Image } from 'react-native';

import Global from '../../../Global';

//Hàm viết hoa các chữ cái đầu trong chuỗi.
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

const url = 'http://10.0.136.37:8080/api/images/product/';
const { width } = Dimensions.get('window');

export default class Search extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listProduct: ds
        };
        Global.setArraySearch = this.setSearchArray.bind(this);
    }

    setSearchArray(arrProduct) {
        this.setState({ listProduct: this.state.listProduct.cloneWithRows(arrProduct) });
    }

    openProductDetail(product) {
        const { navigation } = this.props;
        navigation.navigate('Screen_ProductDetail', { productDetail: product });
    }

    render() {
        const { wrapProductList, wrapperElement, productImg, productInfo,
                lastRowInfo, textName, textPrice, textMaterial,
                textColor, textShowDetail } = styles;
        return (
            <View style={wrapProductList}>
                <ListView
                    dataSource={this.state.listProduct}
                    renderRow={sProduct => (
                        <View style={wrapperElement}>
                            <Image style={productImg} source={{ uri: `${url}${sProduct.images[0]}` }} />
                            <View style={productInfo}>
                                <Text style={textName}>{toTitleCase(sProduct.name)}</Text>
                                <Text style={textPrice}>{sProduct.price}$</Text>
                                <Text style={textMaterial}>Material {sProduct.material}</Text>
                                <View style={lastRowInfo}>
                                    <Text style={textColor}>Color {sProduct.color}</Text>
                                    <View
                                        style={{
                                            backgroundColor: sProduct.color.toLowerCase(),
                                            width: 20,
                                            height: 20,
                                            borderRadius: 10
                                        }}
                                    />
                                    <TouchableOpacity onPress={() => this.openProductDetail(sProduct)}>
                                        <Text style={textShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
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
    }
});
