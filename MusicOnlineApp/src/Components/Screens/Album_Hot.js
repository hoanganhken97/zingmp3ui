import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet,
        Image, TouchableHighlight, ScrollView, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class AlbumHot extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => { this.props.navigation.navigate('Screen_DetailAlbumHot'); }} style={styles.touchTitle} underlayColor='#C4BABA'>
                    <View style={styles.wraptitle}>
                        <Text style={styles.title}>ALBUM HOT</Text>
                        <Text style={styles.content}>Xem thêm</Text>
                    </View>
                </TouchableHighlight>
                <ScrollView style={{ marginLeft: 10 }} horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.wrapRowAlbum}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen_DetailAlbum')}>
                            <View style={styles.wrapElementAlbum}>
                                <Image style={styles.imgStyle} source={require('../../img/albumHot/album1.jpg')} />
                                <View style={styles.iconPlayCenterStyle}>
                                    <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_white.png')} />
                                </View>
                                <View style={styles.wrapView} />
                                <View style={styles.wrapTextView}>
                                    <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')} />
                                    <Text style={styles.textView}>365K</Text>
                                </View>
                                <Text style={styles.textAlbumTittle}>Anh Đã Quen Với Cô Đơn (Single)</Text>
                                <Text style={styles.textAlbumContent}>Soobin Hoàng Sơn</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../img/albumHot/album2.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>418K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Bao Lâu Chưa Gặp Nhau (Single)</Text>
                            <Text style={styles.textAlbumContent}>Bạch Công Khanh</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../img/albumHot/album3.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>112K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>I Lab You (Single)</Text>
                            <Text style={styles.textAlbumContent}>Tiên Tiên</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../img/albumHot/album4.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>220K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Cảm Nắng (Single)</Text>
                            <Text style={styles.textAlbumContent}>Suna Hạ Linh</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../img/albumHot/album5.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>438K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Chưa Bao Giờ Mẹ Kể (Single)</Text>
                            <Text style={styles.textAlbumContent}>MIN, ERIK, Phạm Hoài...</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../img/albumHot/album6.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>438K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Mặt Trời Của Em (Single)</Text>
                            <Text style={styles.textAlbumContent}>Phương Ly</Text>
                        </View>
                    </View>
                </ScrollView>
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
    wrapRowAlbum: {
        marginTop: 15,
        flexDirection: 'row'
    },
    wrapElementAlbum: {
        width: imageWidth / 2.5,
        borderRadius: 5,
        marginRight: 10
    },
    imgStyle: {
        width: imageWidth / 2.5,
        height: imageWidth / 2.5,
        borderRadius: 5,
    },
    iconPlayCenterStyle: {
        width: imageWidth / 2.5,
        height: imageWidth / 2.5,
        borderRadius: 5,
        position: 'absolute',
    },
    iconPlayCenter: {
        position: 'absolute',
        width: 33,
        height: 33,
        right: 10,
        bottom: 10
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
    textAlbumTittle: {
        fontFamily: 'sans-serif-medium',
        color: '#2d2d2d',
        fontSize: 15,
    },
    textALbumContent: {
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
    },
});
