import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet,
        Image, TouchableOpacity, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class DetailAlbumHot extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.wrapIcon} onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.iconStyle} source={require('../../../img/search/back.png')} />
                    </TouchableOpacity>
                    <View style={styles.wrapText}>
                        <Text style={styles.title}>ALBUM HOT</Text>
                    </View>
                    <TouchableOpacity style={styles.wrapIcon} onPress={() => this.props.navigation.navigate('Screen_Search', { check: true })} >
                        <Image style={styles.iconStyle} source={require('../../../img/icon/search.png')} />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapRowAlbum}>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/albumHot/album1.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>365K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Anh Đã Quen Với Cô Đơn (Single)</Text>
                            <Text style={styles.textAlbumContent}>Soobin Hoàng Sơn</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/albumHot/album2.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>418K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Bao Lâu Chưa Gặp Nhau (Single)</Text>
                            <Text style={styles.textAlbumContent}>Bạch Công Khanh</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/albumHot/album3.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>112K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>I Lab You (Single)</Text>
                            <Text style={styles.textAlbumContent}>Tiên Tiên</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/albumHot/album4.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>220K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Cảm Nắng (Single)</Text>
                            <Text style={styles.textAlbumContent}>Suna Hạ Linh</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/albumHot/album5.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>438K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Chưa Bao Giờ Mẹ Kể (Single)</Text>
                            <Text style={styles.textAlbumContent}>MIN, ERIK, Phạm Hoài...</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/albumHot/album6.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>777K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Mặt Trời Của Em (Single)</Text>
                            <Text style={styles.textAlbumContent}>Phương Ly</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailAlbumHot/album7.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>453K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Khúc Tình Xuyên Thời Gian</Text>
                            <Text style={styles.textAlbumContent}>Hà Thế Dũng</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailAlbumHot/album8.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>357K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Chuyện Ngày Xưa</Text>
                            <Text style={styles.textAlbumContent}>Bolero</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailAlbumHot/album9.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>222K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Bông Hồng Không Dành Cho Con</Text>
                            <Text style={styles.textAlbumContent}>Vũ Hoàng, Thạch Thảo</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailAlbumHot/album10.png')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>379K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Ngày Tết Quê Em (Single)</Text>
                            <Text style={styles.textAlbumContent}>Đào Nguyễn Ánh</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailAlbumHot/album11.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>246K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Em Gái Mưa</Text>
                            <Text style={styles.textAlbumContent}>Hương Tràm</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailAlbumHot/album12.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>479K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Buồn Của Anh (Masew Mix)</Text>
                            <Text style={styles.textAlbumContent}>Masew, Đạt G, K-ICM</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailAlbumHot/album13.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>579K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Yêu Thôi Anh Ah (Single)</Text>
                            <Text style={styles.textAlbumContent}>Vân Shi, Chi Dân, Him Phạm</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailAlbumHot/album14.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>679K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Người Lạ Ơi (Single)</Text>
                            <Text style={styles.textAlbumContent}>Karik, Orange, Superbrothers</Text>
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
        flex: 1,
        paddingBottom: 15,
        backgroundColor: '#FEFEFE',
    },
    header: {
        width,
        height: width / 7,
        backgroundColor: '#FEFEFE',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrapIcon: {
        width: width / 7,
        height: width / 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    wrapText: {
        width: (width / 7) * 5,
        height: width / 9,
        backgroundColor: '#FEFEFE',
        justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        marginLeft: 10,
    },
    content: {
        fontFamily: 'sans-serif-medium',
        color: '#7847A3',
        fontSize: 15,
        marginRight: 10
    },
    wrapRowAlbum: {
        marginTop: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    wrapElementAlbum: {
        width: (imageWidth / 2) - 15,
        borderRadius: 5,
        //marginRight: 10,
        marginLeft: 10,
        marginTop: 10
    },
    imgStyle: {
        width: (imageWidth / 2) - 15,
        height: (imageWidth / 2) - 15,
        borderRadius: 5,
    },
    iconPlayCenterStyle: {
        width: (imageWidth / 2) - 15,
        height: (imageWidth / 2) - 15,
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
