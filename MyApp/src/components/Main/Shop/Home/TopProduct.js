import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,
        Dimensions, TouchableOpacity, ListView } from 'react-native';

const { width } = Dimensions.get('window');

const url = 'http://eotw2012.000webhostapp.com/api/images/product/';

export default class TopProduct extends Component {
    openProductDetail(product) {
        const { navigation } = this.props;
        navigation.navigate('Screen_ProductDetail', { productDetail: product });
    }
    render() {
        const { topProducts } = this.props;
        return (
            <View style={styles.wrapAll}>
                <View style={styles.wrapText}>
                    <Text style={styles.textStyle}>TOP PRODUCT</Text>
                </View>

                <ListView
                    contentContainerStyle={styles.wrapProduct}
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(topProducts)}
                    renderRow={(product) => (
                        <TouchableOpacity style={styles.wrapElement} onPress={() => { this.openProductDetail(product); }}>
                            <Image source={{ uri: `${url}${product.images[0]}` }} style={styles.imgStyle} />
                            <Text style={styles.textProductName}>{product.name.toUpperCase()}</Text>
                            <Text style={styles.textProductPrice}>{product.price}$</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapAll: {
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 3,
        padding: 10,
        paddingTop: 0
    },
    wrapText: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20,
        color: '#606467',
        fontFamily: 'sans-serif-medium',
        alignSelf: 'center',
        marginTop: 5
    },
    wrapProduct: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    wrapElement: {
        width: (width - 50) / 2,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        marginTop: 10
    },
    imgStyle: {
        width: (width - 50) / 2,
        height: (((width - 50) / 2) * 452) / 361,
    },
    textProductName: {
        textAlign: 'center',
        fontFamily: 'sans-serif-medium',
        marginVertical: 5
    },
    textProductPrice: {
        textAlign: 'center',
        marginBottom: 5
    }
});
