import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableHighlight, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class MVHot extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => { this.props.navigation.navigate('Screen_DetailMVHot'); }} style={styles.touchTitle} underlayColor='#C4BABA'>
                    <View style={styles.wraptitle}>
                        <Text style={styles.title}>MV HOT</Text>
                        <Text style={styles.content}>Xem thêm</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.wrapAllVideo}>
                    <View style={styles.wrapRowVideo}>
                        <View style={styles.wrapElementVideo}>
                            <Image style={styles.imgStyle} source={require('../../img/mvHot/mv1.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_black.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>357K</Text>
                            </View>
                            <Text style={styles.textVideoTittle}>Come Back Home</Text>
                            <Text style={styles.textVideoContent}>Vũ Cát Tường</Text>
                        </View>
                        <View style={styles.wrapElementVideo}>
                            <Image style={styles.imgStyle} source={require('../../img/mvHot/mv2.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_black.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>456K</Text>
                            </View>
                            <View style={styles.wrapVideoContent}>
                                <Text style={styles.textVideoTittle}>Chạm Khẽ Tim Anh Một Chút Thôi</Text>
                                <Text style={styles.textVideoContent}>Noo Phước Thịnh</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.wrapRowVideo}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen_DetailMV')}>
                            <View style={styles.wrapElementVideo}>
                                <Image style={styles.imgStyle} source={require('../../img/mvHot/mv3.jpg')} />
                                <View style={styles.iconPlayCenterStyle}>
                                    <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_black.png')} />
                                </View>
                                <View style={styles.wrapView} />
                                <View style={styles.wrapTextView}>
                                    <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')} />
                                    <Text style={styles.textView}>678K</Text>
                                </View>
                                <Text style={styles.textVideoTittle}>Sống Xa Anh Chẳng Dễ Dàng</Text>
                                <Text style={styles.textVideoContent}>Bảo Anh</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.wrapElementVideo}>
                            <Image style={styles.imgStyle} source={require('../../img/mvHot/mv4.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_black.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>123k</Text>
                            </View>
                            <View style={styles.wrapVideoContent}>
                                <Text style={styles.textVideoTittle}>Mashup Christmas Songs</Text>
                                <Text style={styles.textVideoContent}>JSOL, CARA</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.wrapRowVideo}>
                        <View style={styles.wrapElementVideo}>
                            <Image style={styles.imgStyle} source={require('../../img/mvHot/mv5.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_black.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>789K</Text>
                            </View>
                            <Text style={styles.textVideoTittle}>Bao Giờ Lấy Chồng?</Text>
                            <Text style={styles.textVideoContent}>Bích Phương</Text>
                        </View>
                        <View style={styles.wrapElementVideo}>
                            <Image style={styles.imgStyle} source={require('../../img/mvHot/mv6.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_black.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>592K</Text>
                            </View>
                            <View style={styles.wrapVideoContent}>
                                <Text style={styles.textVideoTittle}>Em Sai Rồi Anh Xin Lỗi Em Đi</Text>
                                <Text style={styles.textVideoContent}>Chi Pu</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: imageWidth,
        marginTop: 25
    },
    wraptitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: imageWidth,
        height: imageWidth / 9,
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        marginLeft: 10
    },
    content: {
        fontFamily: 'sans-serif-medium',
        color: '#7847A3',
        fontSize: 15,
        marginRight: 10
    },
    touchTitle: {
        width: imageWidth,
        height: imageWidth / 9,
    },
    wrapAllVideo: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5
    },
    wrapRowVideo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    wrapElementVideo: {
        width: (imageWidth / 2) - 15,
        borderRadius: 5,
    },
    imgStyle: {
        width: (imageWidth / 2) - 15,
        height: (((imageWidth / 2) - 15) * 9) / 16,
        borderRadius: 5,
    },
    iconPlayCenterStyle: {
        width: (imageWidth / 2) - 15,
        height: (((imageWidth / 2) - 15) * 9) / 16,
        borderRadius: 5,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconPlayCenter: {
        position: 'absolute',
        width: 33,
        height: 33,
    },
    wrapView: {
        width: 65,
        height: 25,
        position: 'absolute',
        backgroundColor: 'black',
        opacity: 0.5,
        borderRadius: 25,
        top: 0,
        alignSelf: 'flex-start',
        marginTop: 5,
        marginLeft: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    wrapTextView: {
        width: 65,
        height: 25,
        position: 'absolute',
        marginTop: 5,
        marginLeft: 5,
        borderRadius: 25,
        top: 0,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textView: {
        fontFamily: 'sans-serif-condensed',
        color: 'white',
        alignSelf: 'center',
        marginRight: 7
    },
    iconPlayView: {
        width: 15,
        height: 15,
        alignSelf: 'center',
        marginLeft: 7,
    },
    wrapVideoContent: {
        flexWrap: 'wrap',
        marginRight: 10
    },
    textVideoTittle: {
        fontFamily: 'sans-serif-medium',
        color: '#2d2d2d',
        fontSize: 15,
    },
    textVideoContent: {
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
    },
});
