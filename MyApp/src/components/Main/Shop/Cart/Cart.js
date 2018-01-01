import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,
        Dimensions, Image, ListView } from 'react-native';

import Global from '../../../Global';
import sendOrder from '../../../../api/sendOrder';
import getToken from '../../../../api/getToken';

const url = 'http://10.0.136.37:8080/api/images/product/';

//Hàm viết hoa các chữ cái đầu trong chuỗi.
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
const { width } = Dimensions.get('window');

export default class Cart extends Component {
    async onSendOrder() {
        try {
            const token = await getToken();
            const arrayDetail = this.props.cartArray.map(e => ({
                id: e.product.id,
                quantity: e.quantity
            }));
            const result = await sendOrder(token, arrayDetail);
            if (result === 'THEM_THANH_CONG') {
                console.log('Them thanh cong');
            } else {
                console.log('Them that bai', result);
            }
        } catch (e) {
            console.log(e);
        }
    }

    incQuantity(id) {
        Global.increaseQuantity(id);
    }

    decQuantity(id) {
        Global.decreaseQuantity(id);
    }

    deleteProduct(id) {
        Global.removeProduct(id);
    }

    openProductDetail(product) {
        const { navigation } = this.props;
        navigation.navigate('Screen_ProductDetail', { productDetail: product });
    }

    render() {
        const { container, wrapElement, imgStyle,
                wrapContent, titleStyle, priceStyle,
                header, footer, numberOfProduct, showDetailContainer,
                textDetail, checkoutButton, checkoutTitle } = styles;
        const { cartArray } = this.props;
        const arrSum = cartArray.map(e => e.product.price * e.quantity);
        const Sum = arrSum.length ? arrSum.reduce((a, b) => a + b) : 0;
        return (
            <View style={container} >
                <ListView
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(cartArray)}
                    renderRow={cartItem => (
                        <View style={wrapElement}>
                            <Image source={{ uri: `${url}${cartItem.product.images[0]}` }} style={imgStyle} />
                            <View style={wrapContent}>
                                <View style={header}>
                                    <Text style={titleStyle}>{toTitleCase(cartItem.product.name)}</Text>
                                    <TouchableOpacity onPress={() => this.deleteProduct(cartItem.product.id)}>
                                        <Text style={{ color: '#969696', fontSize: 15 }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={priceStyle}>{cartItem.product.price}$</Text>
                                <View style={footer}>
                                    <View style={numberOfProduct}>
                                        <TouchableOpacity onPress={() => this.decQuantity(cartItem.product.id)}>
                                            <Text style={{ color: 'black' }}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={{ color: 'black' }}>{cartItem.quantity}</Text>
                                        <TouchableOpacity onPress={() => this.incQuantity(cartItem.product.id)}>
                                            <Text style={{ color: 'black' }}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={showDetailContainer} onPress={() => this.openProductDetail(cartItem.product)}>
                                        <Text style={textDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
                <TouchableOpacity style={checkoutButton} onPress={this.onSendOrder.bind(this)}>
                    <Text style={checkoutTitle}>TOTAL {Sum}$ CHECKOUT NOW</Text>
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
        height: width / 2.7,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgStyle: {
        width: (((width / 3)) * 361) / 452,
        height: (width / 3),
        borderRadius: 3,
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
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontFamily: 'sans-serif-medium'
    }
});
