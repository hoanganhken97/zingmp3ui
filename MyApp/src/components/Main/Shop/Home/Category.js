import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

// import imgLittle from '../../../../img/temp/little.jpg';
// import imgMaxi from '../../../../img/temp/maxi.jpg';
// import imgParty from '../../../../img/temp/party.jpg';

const { width, height } = Dimensions.get('window');
const url = 'http://10.0.136.37:8080/api/images/type';

export default class Category extends Component {
    openListProduct() {
        const { navigation } = this.props;
        navigation.navigate('Screen_ProductList');
    }
    render() {
        const { types } = this.props;
        return (
            <View style={styles.wrapCategory}>
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={styles.title}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4, alignItems: 'center' }}>
                    <Swiper width={width - 40} height={(width - 40) / 2} autoplay autoplayTimeout={5}>
                        { types.map(e => (
                            <TouchableOpacity onPress={this.openListProduct.bind(this)} key={e.id}>
                                <ImageBackground source={{ uri: 'http://10.0.136.37:8080/api/images/type/${e.name}' }} style={styles.imgStyle}>
                                    <Text style={styles.textContent}>{e.name}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        )) }
                    </Swiper>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapCategory: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 3,
        padding: 10,
        paddingTop: 0,
        justifyContent: 'space-between',
    },
    imgStyle: {
        width: width - 40,
        height: (width - 40) / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
        title: {
        fontSize: 20,
        color: '#606467',
        fontFamily: 'sans-serif-medium'
    },
    textContent: {
        //fontFamily: 'sans-serif-medium',
        color: '#919191',
        fontSize: 20
    }
});
