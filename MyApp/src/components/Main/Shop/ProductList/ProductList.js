import React, { Component } from 'react';
import { View, Text, StyleSheet,
        TouchableOpacity, Dimensions,
        Image, ListView, RefreshControl } from 'react-native';

import backList from '../../../../img/appIcon/backList.png';
import getListProduct from '../../../../api/getListProduct';

const url = 'http://10.0.136.37:8080/api/images/product/';

//Hàm viết hoa các chữ cái đầu trong chuỗi.
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

const { width, height } = Dimensions.get('window');
export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listProducts: ds,
            refreshing: false,
            page: 2
        };
        this.storageArr = [];
    }
    componentDidMount() {
        const idType = this.props.navigation.state.params.category.id;
        getListProduct(idType, 1)
        .then(arrProduct => {
            this.storageArr = arrProduct;
            this.setState({ listProducts: this.state.listProducts.cloneWithRows(this.storageArr) });
        })
        .catch(err => console.log(err));
    }

    gotoDetail(product) {
        const { navigation } = this.props;
        navigation.navigate('Screen_ProductDetail', { productDetail: product });
    }

    render() {
        const { wrapProductList, wrapHeader,
                wrapperAll, iconBack, titleStyle,
                productContainer, productImg, productInfo,
                lastRowInfo, textName, textPrice, textMaterial,
                textColor, textShowDetail, productColor } = styles;
        const { category } = this.props.navigation.state.params;
        return (
            <View style={wrapProductList}>
                <View style={wrapperAll}>
                    <View style={wrapHeader}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack(); }}>
                            <Image source={backList} style={iconBack} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>{category.name}</Text>
                        <View style={iconBack} />
                    </View>
                    <ListView
                        removeClippedSubviews={false}
                        dataSource={this.state.listProducts}
                        renderRow={(product) => (
                            <View style={productContainer}>
                                <Image style={productImg} source={{ uri: `${url}${product.images[0]}` }} />
                                <View style={productInfo}>
                                    <Text style={textName}>{toTitleCase(product.name)}</Text>
                                    <Text style={textPrice}>{product.price}$</Text>
                                    <Text style={textMaterial}>Material {product.material}</Text>
                                    <View style={lastRowInfo}>
                                        <Text style={textColor}>Color {product.color}</Text>
                                        <View
                                            style={{
                                                backgroundColor: product.color.toLowerCase(),
                                                width: 20,
                                                height: 20,
                                                borderRadius: 10
                                            }}
                                        />
                                        <TouchableOpacity onPress={() => { this.gotoDetail(product); }}>
                                            <Text style={textShowDetail}>SHOW DETAILS</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={() => {
                                    this.setState({ refreshing: true });
                                    const newPage = this.state.page + 1;
                                    const idType = category.id;
                                    getListProduct(idType, newPage)
                                    .then(arrProduct => {
                                        this.storageArr = arrProduct.concat(this.storageArr);
                                        this.setState({
                                            listProducts: this.state.listProducts.cloneWithRows(this.storageArr),
                                            refreshing: false
                                        });
                                    })
                                    .catch(err => console.log(err));
                                }}
                            />
                        }
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapProductList: {
        flex: 1,
        backgroundColor: '#d8dde0',
    },
    wrapperAll: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        flex: 1
    },
    wrapHeader: {
        height: height / 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        color: '#C8C8C8',
        fontSize: 20,
        fontWeight: '300'
    },
    textPrice: {
        fontFamily: 'monospace',
        fontSize: 15,
        color: '#C52F79',
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
