import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions,
        Image, Switch } from 'react-native';

const { width } = Dimensions.get('window');

export default class HomePage extends Component {
    render() {
        return (
            <ScrollView style={styles.Menu} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Image style={styles.imgHeader}source={require('../img/Menu/header.png')} />
                    <Text style={styles.txtHeader1}>M4U</Text>
                    <Text style={styles.txtHeader2}>mp3</Text>
                </View>
                <View>
                    <View style={styles.wrapRow}>
                        <View style={styles.wrapIconNotification}>
                            <Image style={styles.iconStyle} source={require('../img/Menu/notification.png')} />
                        </View>
                        <Text style={styles.txtRow}>Thông báo</Text>
                        <View style={styles.numberStyle}>
                            <Text style={styles.txtNumber}>1</Text>
                        </View>
                    </View>
                    <View style={styles.wrapRow}>
                        <View style={styles.wrapIcon}>
                            <Image style={styles.iconStyle} source={require('../img/Menu/scan.png')} />
                        </View>
                        <Text style={styles.txtRow}>Quét nhạc</Text>
                    </View>
                </View>
                <View style={styles.wrapComponentMenu}>
                    <View style={styles.headerSetting}>
                        <Text style={styles.txtHeaderSetting}>DỊCH VỤ</Text>
                    </View>
                    <View style={styles.wrapRow}>
                        <View style={styles.wrapIcon}>
                            <Image style={styles.iconVipStyle} source={require('../img/Menu/vip.png')} />
                        </View>
                        <Text style={styles.txtRow}>Mua VIP</Text>
                    </View>
                    <View style={styles.wrapRow}>
                        <View style={styles.wrapIcon}>
                            <Image style={styles.icon3gVipStyle} source={require('../img/Menu/3gvip.png')} />
                        </View>
                        <Text style={styles.txtRow}>Miễn phí 3GVIP</Text>
                    </View>
                </View>
                <View style={styles.wrapComponentMenu}>
                    <View style={styles.headerSetting}>
                        <Text style={styles.txtHeaderSetting}>CÀI ĐẶT</Text>
                    </View>
                    <View style={styles.wrapRow}>
                        <View style={styles.wrapIcon}>
                            <Image style={styles.iconStyle} source={require('../img/Menu/3g.png')} />
                        </View>
                        <Text style={styles.txtRow}>Tải nhạc qua mạng di động</Text>
                        <View style={{ position: 'absolute', right: 10 }}>
                            <Switch value={false} thumbTintColor='#EFEFEF' tintColor='#B2B2B2' />
                        </View>
                    </View>
                    <View style={styles.wrapRow}>
                        <View style={styles.wrapIcon}>
                            <Image style={styles.iconStyle} source={require('../img/Menu/karaoke.png')} />
                        </View>
                        <Text style={styles.txtRow}>Karaoke lyrics</Text>
                        <View style={{ position: 'absolute', right: 10 }}>
                            <Switch value={true} thumbTintColor='#8e44ad' onTintColor='#D0ACDF' />
                        </View>
                    </View>
                    <View style={styles.wrapRow}>
                        <View style={styles.wrapIcon}>
                            <Image style={styles.iconStyle} source={require('../img/Menu/floating.png')} />
                        </View>
                        <Text style={styles.txtRow}>Floating lyrics</Text>
                        <View style={{ position: 'absolute', right: 10 }}>
                            <Switch value={false} thumbTintColor='#EFEFEF' tintColor='#B2B2B2' />
                        </View>
                    </View>
                    <View style={styles.wrapRow}>
                        <View style={styles.wrapIcon}>
                            <Image style={styles.iconStyle} source={require('../img/Menu/more.png')} />
                        </View>
                        <Text style={styles.txtRow}>Cài đặt khác</Text>
                    </View>
                </View>
                <View style={styles.wrapComponentMenu}>
                    <View style={styles.headerSetting}>
                        <Text style={styles.txtHeaderSetting}>THÔNG TIN</Text>
                    </View>
                    <View style={styles.wrapRow}>
                        <View style={styles.wrapIcon}>
                            <Image style={styles.iconStyle} source={require('../img/Menu/info.png')} />
                        </View>
                        <Text style={styles.txtRow}>Phiên bản</Text>
                        <View style={styles.numberVersion}>
                            <Text style={styles.txtNumberVersion}>3.5.7</Text>
                        </View>
                    </View>
                    <View style={styles.wrapRow}>
                        <View style={styles.wrapIcon}>
                            <Image style={styles.iconStyle} source={require('../img/Menu/report.png')} />
                        </View>
                        <Text style={styles.txtRow}>Góp ý, báo lỗi</Text>
                    </View>
                    <View style={[styles.wrapRow, { marginBottom: 15 }]}>
                        <View style={styles.wrapIcon}>
                            <Image style={styles.iconStyle} source={require('../img/Menu/rate.png')} />
                        </View>
                        <Text style={styles.txtRow}>Bình chọn cho M4U MP3</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    Menu: {
        backgroundColor: '#fdfdfd',
        flex: 1
    },
    header: {
        width: width * 0.75,
        height: ((width * 0.75) * 270) / 1080,
        justifyContent: 'center',
    }, //1080 270
    imgHeader: {
        width: width * 0.75,
        height: ((width * 0.75) * 270) / 1080
    },
    txtHeader1: {
        fontFamily: 'sans-serif-medium',
        fontSize: 33,
        color: 'white',
        position: 'absolute',
        marginLeft: 10
    },
    txtHeader2: {
        fontFamily: 'sans-serif-medium',
        fontSize: 20,
        color: 'white',
        position: 'absolute',
        marginLeft: 90
    },
    wrapNotification: {
        width: width * 0.75,
    },
    wrapRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 15,
    },
    wrapIconNotification: {
        width: 37,
        height: 37,
        borderRadius: 33 / 2,
        backgroundColor: '#7847A3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtRow: {
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
        color: 'black',
        marginLeft: 10,
        fontWeight: '300'
    },
    numberStyle: {
        width: 33,
        height: 25,
        borderRadius: 5,
        backgroundColor: '#7847A3',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        marginRight: 10
    },
    txtNumber: {
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
        color: 'white'
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    icon3gVipStyle: {
        width: 25,
        height: (25 * 18) / 75
    },
    iconVipStyle: {
        width: 33,
        height: (33 * 42) / 90
    },
    wrapComponentMenu: {
        width: width * 0.75,
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
