import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ListView } from 'react-native';

import imgSp1 from '../../../../img/temp/sp1.jpeg';
import imgSp2 from '../../../../img/temp/sp2.jpeg';
import imgSp3 from '../../../../img/temp/sp3.jpeg';
import imgSp4 from '../../../../img/temp/sp4.jpeg';
import imgSp5 from '../../../../img/temp/sp5.jpeg';

const { width, height } = Dimensions.get('window');

export default class TopProduct extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const { topProducts } = this.props;
        this.state = {
            dataSource: ds.cloneWithRows(topProducts)
        };
    }
    openProductDetail() {
        const { navigation } = this.props;
        navigation.navigate('Screen_ProductDetail');
    }
    render() {
        return (
            <View style={styles.wrapAll}>
                <View style={styles.wrapText}>
                    <Text style={styles.textStyle}>TOP PRODUCT</Text>
                </View>
                <View Style={styles.wrapProduct}>
                    {this.props.topProducts.map(e => (
                        <TouchableOpacity style={styles.wrapElement} onPress={this.openProductDetail.bind(this)} key={e.id}>
                            <Image source={imgSp2} style={styles.imgStyle} />
                            <Text style={styles.textProductName}>PRODUCT NAME</Text>
                            <Text style={styles.textProductPrice}>250$</Text>
                        </TouchableOpacity>
                    ))}
                </View>
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
        height: 50,
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 20,
        color: '#606467',
        fontFamily: 'sans-serif-medium'
    },
    wrapProduct: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    wrapElement: {
        width: (width - 50) / 2,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
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
