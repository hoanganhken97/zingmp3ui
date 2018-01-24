import React, { Component } from 'react';
import { StyleSheet, ListView, View,
        Dimensions, Image, Text, ScrollView,
        TouchableHighlight, TouchableOpacity } from 'react-native';

import Header from './Header';
import Global from './Global';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class User extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
          dataSource: ds.cloneWithRows([0]),
        };
    }

    componentDidMount() {
        Global.isSelect(false);
    }

    openMenu() {
        const { navigation } = this.props;
        navigation.navigate('DrawerOpen');
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.homeView}>
                <Header openMenu={this.openMenu.bind(this)} navigation={navigation} />
                <ListView
                    enableEmptySections
                    removeClippedSubviews={false}
                    dataSource={this.state.dataSource}
                    renderRow={() =>
                        <View>
                            <View style={styles.headerContainer}>
                                <Image style={styles.backgroundStyle} source={require('../img/user/user.png')} />
                                <Image style={styles.avatar} source={require('../img/user/avatar.png')} />
                                <View style={styles.wrapContent}>
                                    <Text style={styles.txtName}>Minh Nguyên</Text>
                                    <Image style={styles.imgVip} source={require('../img/user/vip.png')} />
                                </View>
                                <Image style={styles.forWardStyle} source={require('../img/user/forward.png')} />
                            </View>

                            <View style={styles.wrapFavorite}>
                                <View style={styles.wrapIconFavorite}>
                                    <Image style={styles.iconStyle} source={require('../img/user/favorite.png')} />
                                </View>
                                <Text style={styles.txtRow}>Nhạc yêu thích</Text>
                            </View>

                            <View style={styles.container}>
                                <TouchableHighlight onPress={() => {}} style={styles.touchTitle} underlayColor='#C4BABA'>
                                    <View style={styles.wraptitle}>
                                        <Text style={styles.title}>NGHE GẦN ĐÂY</Text>
                                        <Text style={styles.content}>Xem thêm</Text>
                                    </View>
                                </TouchableHighlight>
                                <ScrollView style={{ marginLeft: 10 }} horizontal showsHorizontalScrollIndicator={false}>
                                    <View style={styles.wrapRowAlbum}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen_DetailAlbum')}>
                                            <View style={styles.wrapElementAlbum}>
                                                <Image style={styles.imgStyle} source={require('../img/albumHot/album1.jpg')} />
                                                <View style={styles.iconPlayCenterStyle}>
                                                    <Image style={styles.iconPlayCenter} source={require('../img/icon/play_white.png')} />
                                                </View>
                                                <Text style={styles.textAlbumTittle}>Anh Đã Quen Với Cô Đơn (Single)</Text>
                                                <Text style={styles.textAlbumContent}>Soobin Hoàng Sơn</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <View style={styles.wrapElementAlbum}>
                                            <Image style={styles.imgStyle} source={require('../img/albumHot/album2.jpg')} />
                                            <View style={styles.iconPlayCenterStyle}>
                                                <Image style={styles.iconPlayCenter} source={require('../img/icon/play_white.png')} />
                                            </View>
                                            <Text style={styles.textAlbumTittle}>Bao Lâu Chưa Gặp Nhau (Single)</Text>
                                            <Text style={styles.textAlbumContent}>Bạch Công Khanh</Text>
                                        </View>
                                        <View style={styles.wrapElementAlbum}>
                                            <Image style={styles.imgStyle} source={require('../img/albumHot/album3.jpg')} />
                                            <View style={styles.iconPlayCenterStyle}>
                                                <Image style={styles.iconPlayCenter} source={require('../img/icon/play_white.png')} />
                                            </View>
                                            <Text style={styles.textAlbumTittle}>I Lab You (Single)</Text>
                                            <Text style={styles.textAlbumContent}>Tiên Tiên</Text>
                                        </View>
                                        <View style={styles.wrapElementAlbum}>
                                            <Image style={styles.imgStyle} source={require('../img/albumHot/album4.jpg')} />
                                            <View style={styles.iconPlayCenterStyle}>
                                                <Image style={styles.iconPlayCenter} source={require('../img/icon/play_white.png')} />
                                            </View>
                                            <Text style={styles.textAlbumTittle}>Cảm Nắng (Single)</Text>
                                            <Text style={styles.textAlbumContent}>Suna Hạ Linh</Text>
                                        </View>
                                        <View style={styles.wrapElementAlbum}>
                                            <Image style={styles.imgStyle} source={require('../img/albumHot/album5.jpg')} />
                                            <View style={styles.iconPlayCenterStyle}>
                                                <Image style={styles.iconPlayCenter} source={require('../img/icon/play_white.png')} />
                                            </View>
                                            <Text style={styles.textAlbumTittle}>Chưa Bao Giờ Mẹ Kể (Single)</Text>
                                            <Text style={styles.textAlbumContent}>MIN, ERIK, Phạm Hoài...</Text>
                                        </View>
                                        <View style={styles.wrapElementAlbum}>
                                            <Image style={styles.imgStyle} source={require('../img/albumHot/album6.jpg')} />
                                            <View style={styles.iconPlayCenterStyle}>
                                                <Image style={styles.iconPlayCenter} source={require('../img/icon/play_white.png')} />
                                            </View>
                                            <Text style={styles.textAlbumTittle}>Mặt Trời Của Em (Single)</Text>
                                            <Text style={styles.textAlbumContent}>Phương Ly</Text>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>

                            <View style={styles.wrapComponentMenu}>
                                <View style={styles.headerSetting}>
                                    <Text style={styles.txtHeaderSetting}>NHẠC OFFLINE</Text>
                                </View>
                                <View style={styles.wrapRow}>
                                    <View style={styles.wrapIcon}>
                                        <Image style={styles.iconStyle} source={require('../img/user/playlist.png')} />
                                    </View>
                                    <Text style={styles.txtRow}>Playlist</Text>
                                    <View style={styles.numberVersion}>
                                        <Text style={styles.txtNumberVersion}>0</Text>
                                    </View>
                                </View>
                                <View style={styles.wrapRow}>
                                    <View style={styles.wrapIcon}>
                                        <Image style={styles.iconStyle} source={require('../img/user/song.png')} />
                                    </View>
                                    <Text style={styles.txtRow}>Bài hát</Text>
                                    <View style={styles.numberVersion}>
                                        <Text style={styles.txtNumberVersion}>1.010</Text>
                                    </View>
                                </View>
                                <View style={styles.wrapRow}>
                                    <View style={styles.wrapIcon}>
                                        <Image style={styles.iconStyle} source={require('../img/user/album.png')} />
                                    </View>
                                    <Text style={styles.txtRow}>Album</Text>
                                    <View style={styles.numberVersion}>
                                        <Text style={styles.txtNumberVersion}>413</Text>
                                    </View>
                                </View>
                                <View style={styles.wrapRow}>
                                    <View style={styles.wrapIcon}>
                                        <Image style={styles.iconStyle} source={require('../img/user/artist.png')} />
                                    </View>
                                    <Text style={styles.txtRow}>Ca sĩ</Text>
                                    <View style={styles.numberVersion}>
                                        <Text style={styles.txtNumberVersion}>439</Text>
                                    </View>
                                </View>
                                <View style={styles.wrapRow}>
                                    <View style={styles.wrapIcon}>
                                        <Image style={styles.iconStyle} source={require('../img/user/folder.png')} />
                                    </View>
                                    <Text style={styles.txtRow}>Thư mục</Text>
                                    <View style={styles.numberVersion}>
                                        <Text style={styles.txtNumberVersion}>9</Text>
                                    </View>
                                </View>
                                <View style={styles.wrapRow}>
                                    <View style={styles.wrapIcon}>
                                        <Image style={styles.iconStyle} source={require('../img/user/download.png')} />
                                    </View>
                                    <Text style={styles.txtRow}>Download</Text>
                                    <View style={styles.numberVersion}>
                                        <Text style={styles.txtNumberVersion}>0</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={[styles.wrapComponentMenu, { marginBottom: 15 }]}>
                                <View style={styles.headerSetting}>
                                    <Text style={styles.txtHeaderSetting}>NHẠC ONLINE</Text>
                                </View>
                                <View style={styles.wrapRow}>
                                    <View style={styles.wrapIcon}>
                                        <Image style={styles.iconStyle} source={require('../img/user/playlist.png')} />
                                    </View>
                                    <Text style={styles.txtRow}>Playlist</Text>
                                </View>
                                <View style={styles.wrapRow}>
                                    <View style={styles.wrapIcon}>
                                        <Image style={styles.iconStyle} source={require('../img/user/upload.png')} />
                                    </View>
                                    <Text style={styles.txtRow}>Upload</Text>
                                </View>
                                <View style={styles.wrapRow}>
                                    <View style={styles.wrapIcon}>
                                        <Image style={styles.iconStyle} source={require('../img/user/follow.png')} />
                                    </View>
                                    <Text style={styles.txtRow}>Quan tâm</Text>
                                </View>
                                <View style={styles.wrapRow}>
                                    <View style={styles.wrapIcon}>
                                        <Image style={styles.iconStyle} source={require('../img/user/restore.png')} />
                                    </View>
                                    <Text style={styles.txtRow}>Khôi phục</Text>
                                </View>
                            </View>
                        </View>
                    }
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    homeView: {
        backgroundColor: '#FEFEFE',
        flex: 1
    },
    headerContainer: {
        width,
        height: (width * 267) / 1076,
        flexDirection: 'row',
        alignItems: 'center'
    },
    backgroundStyle: {
        width,
        height: (width * 267) / 1076,
    },
    avatar: {
        width: 77,
        height: 77,
        borderRadius: 77 / 2,
        borderWidth: 3,
        borderColor: 'white',
        position: 'absolute',
        marginLeft: 10
    },
    wrapContent: {
        height: 55,
        justifyContent: 'space-between',
        position: 'absolute',
        marginLeft: 97
    },
    txtName: {
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        fontWeight: '300',
        color: 'white'
    },
    imgVip: {
        width: 37,
        height: (37 * 42) / 90
    },
    forWardStyle: {
        width: 33,
        height: 33,
        position: 'absolute',
        right: 0,
    },
    wrapFavorite: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        paddingLeft: 10
    },
    wrapIconFavorite: {
        width: 37,
        height: 37,
        borderRadius: 37 / 2,
        backgroundColor: '#7847A3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    txtRow: {
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
        color: 'black',
        marginLeft: 10
    },
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
    wrapComponentMenu: {
        width: imageWidth,
        marginTop: 25
    },
    headerSetting: {
        marginLeft: 10,
    },
    txtHeaderSetting: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'sans-serif-medium',
    },
    wrapRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 15
    },
    wrapIcon: {
        width: 37,
        height: 37,
        borderRadius: 33 / 2,
        backgroundColor: '#EFEFEF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberVersion: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        marginRight: 10
    },
    txtNumberVersion: {
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
        color: '#6C6C6C'
    },
});
