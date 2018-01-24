import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image,
        TouchableHighlight, ScrollView, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class DetailAlbum extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imgBackGround} source={require('../../../img/detailAlbum/background.jpg')} />
                <View style={styles.wrapBackGround} />
                <View style={styles.containerContentAlbum}>
                    <View style={styles.wrapAlbum}>
                        <Image style={styles.avatar} source={require('../../../img/detailAlbum/avatar.jpg')} />
                        <View style={styles.wrapContentAlbum}>
                            <Text style={styles.textAlbumTittle}>Anh Đã Quen Với Cô Đơn (Single)</Text>
                            <Text style={styles.textAlbumContent}>Soobin Hoàng Sơn - 1 bài hát</Text>
                            <View style={styles.wrapBorder}>
                                <Text style={styles.textAlbumContent}>ALBUM</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.wrapIconHeader} onPress={() => this.props.navigation.navigate('Screen_Main')}>
                        <Image style={styles.iconStyle} source={require('../../../img/icon/backWhite.png')} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.wrapIconHeader}>
                            <Image style={styles.iconStyle} source={require('../../../img/icon/favorite.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wrapIconHeader}>
                            <Image style={styles.iconStyle} source={require('../../../img/icon/share.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.wrapShuffle}>
                    <Image style={styles.imgShuffle} source={require('../../../img/icon/shuffle_album.png')} />
                    <Text style={styles.txtShuffle} >NGHE NGẪU NHIÊN</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapSongAlbum}>
                        <View style={styles.wrapDownload}>
                          <Image style={styles.imgDownload} source={require('../../../img/icon/download.png')} />
                          <Text style={styles.textDownload}>Download</Text>
                          <Image style={styles.imgChoose} source={require('../../../img/icon/choose.png')} />
                        </View>
                    </View>
                    <View style={styles.wrapRealSong}>
                        <View style={styles.wrapTopElement}>
                            <Text style={styles.textTopOther}>1</Text>
                            <View style={styles.wrapTextTop}>
                                <Text style={styles.textTopTittle}>Anh Đã Quen Với Cô Đơn (Single)</Text>
                                <Text style={styles.textTopContent}>Soobin Hoàng Sơn</Text>
                            </View>
                            <View style={styles.wrapIcon}>
                                <Image style={styles.iconPlayVideo} source={require('../../../img/icon/play_video.png')} />
                                <Image style={styles.iconMore} source={require('../../../img/icon/more.png')} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerView}>
                        <View style={styles.wrapView}>
                            <Image style={styles.imgView} source={require('../../../img/icon/playBlack.png')} />
                            <Text style={styles.textTopTittle}>371K</Text>
                        </View>
                        <View style={styles.wrapView}>
                            <Image style={styles.imgView} source={require('../../../img/icon/favoriteBlack.png')} />
                            <Text style={styles.textTopTittle}>1,9K</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen_DetailComment')}>
                        <View style={styles.containerComment}>
                            <Image style={styles.imgComment} source={require('../../../img/icon/comment.png')} />
                            <Text style={styles.txtComment}>Bình luận (5)</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: imageWidth,
        flex: 1,
        paddingBottom: 15,
        backgroundColor: '#FEFEFE',
    },
    imgBackGround: {
        width: imageWidth,
        height: imageWidth,
    },
    wrapBackGround: {
        width: imageWidth,
        height: imageWidth,
        backgroundColor: 'black',
        opacity: 0.7,
        position: 'absolute'
    },
    containerContentAlbum: {
        width: imageWidth,
        height: imageWidth,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapAlbum: {
        width: width / 1.5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    avatar: {
        width: width / 2,
        height: width / 2,
    },
    header: {
        width,
        height: width / 7,
        // backgroundColor: 'black',
        // opacity: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute'
    },
    wrapIconHeader: {
        width: width / 7,
        height: width / 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
    wrapText: {
        width: (width / 7) * 5,
        height: width / 9,
        justifyContent: 'center'
    },
    wrapContentAlbum: {
        alignItems: 'center',
        marginTop: 15
    },
    textAlbumTittle: {
        fontFamily: 'sans-serif-medium',
        color: '#ffffff',
        fontSize: 15
    },
    textAlbumContent: {
        fontFamily: 'sans-serif-condensed',
        color: '#ffffff',
        fontSize: 14,
    },
    wrapBorder: {
        width: imageWidth / 6,
        borderWidth: 0.5,
        borderColor: 'white',
        borderRadius: imageWidth / 12,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 3
    },
    wrapShuffle: {
        width: imageWidth / 2.3,
        borderRadius: imageWidth / 4.6,
        backgroundColor: '#8e44ad',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: imageWidth - 15
    },
    imgShuffle: {
        width: 25,
        height: 25
    },
    txtShuffle: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 15,
        color: 'white',
        marginLeft: 10
    },
    wrapSongAlbum: {
        marginTop: 25
    },
    wrapDownload: {
        flexDirection: 'row',
        alignItems: 'center',
        height: imageWidth / 10,
        borderBottomWidth: 0.5,
    },
    imgDownload: {
        width: 22,
        height: 22,
        marginLeft: 10
    },
    imgChoose: {
        width: 22,
        height: 22,
        position: 'absolute',
        right: 10
    },
    textDownload: {
        alignSelf: 'center',
        fontFamily: 'sans-serif-medium',
        color: '#1a1a1a',
        fontSize: 15,
        marginLeft: 10
    },
    wrapRealSong: {
        marginTop: 5,
    },
    wrapTopElement: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    textTopColor: {
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 15,
        fontSize: 15
    },
    textTopOther: {
        fontFamily: 'sans-serif-medium',
        alignSelf: 'center',
        marginLeft: 15,
        fontSize: 15,
    },
    wrapImgTop: {
        width: imageWidth / 6.7,
        height: imageWidth / 6.7,
        alignSelf: 'center',
        marginLeft: 15,
        borderRadius: 5
    },
    wrapTextTop: {
        width: imageWidth / 1.5,
        height: imageWidth / 6.7,
        alignSelf: 'center',
        marginLeft: 25,
        justifyContent: 'center',
    },
    textTopTittle: {
        fontFamily: 'sans-serif-medium',
        color: '#2d2d2d',
        fontSize: 15
    },
    textTopContent: {
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
    },
    iconPlayVideo: {
        width: imageWidth / 12,
        height: imageWidth / 12,
        alignSelf: 'center',
    },
    iconMore: {
        width: imageWidth / 8,
        height: imageWidth / 8,
        alignSelf: 'center',
    },
    wrapIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        right: 0,
        alignItems: 'center',
        position: 'absolute'
    },
    containerView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: imageWidth / 10,
        backgroundColor: '#ededed',
        marginTop: 25,
        justifyContent: 'space-around'
    },
    imgView: {
        width: 25,
        height: 25,
        marginRight: 10
    },
    wrapView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerComment: {
        flexDirection: 'row',
        alignItems: 'center',
        height: imageWidth / 10,
        backgroundColor: '#ededed',
        marginTop: 25,
    },
    imgComment: {
        width: 25,
        height: 25,
        marginLeft: 10,
        marginRight: 10
    },
    txtComment: {
        fontFamily: 'sans-serif-medium',
        color: '#7847A3',
        fontSize: 15,
    }
})
