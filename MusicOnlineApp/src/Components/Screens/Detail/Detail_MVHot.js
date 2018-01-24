import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet,
        Image, TouchableOpacity, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class DetailMVHot extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.wrapIcon} onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.iconStyle} source={require('../../../img/search/back.png')} />
                    </TouchableOpacity>
                    <View style={styles.wrapText}>
                        <Text style={styles.title}>MV HOT</Text>
                    </View>
                    <TouchableOpacity style={styles.wrapIcon} onPress={() => this.props.navigation.navigate('Screen_Search', { check: true })} >
                        <Image style={styles.iconStyle} source={require('../../../img/icon/search.png')} />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapAllVideo}>
                        <View style={styles.wrapRowVideo}>
                            <View style={styles.wrapElementVideo}>
                                <Image style={styles.imgStyle} source={require('../../../img/mvHot/mv1.jpg')} />
                                <View style={styles.iconPlayCenterStyle}>
                                    <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_black.png')} />
                                </View>
                                <View style={styles.wrapView} />
                                <View style={styles.wrapTextView}>
                                    <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                    <Text style={styles.textView}>357K</Text>
                                </View>
                                <Text style={styles.textVideoTittle}>Come Back Home</Text>
                                <Text style={styles.textVideoContent}>Vũ Cát Tường</Text>
                            </View>
                            <View style={styles.wrapElementVideo}>
                                <Image style={styles.imgStyle} source={require('../../../img/mvHot/mv2.jpg')} />
                                <View style={styles.iconPlayCenterStyle}>
                                    <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_black.png')} />
                                </View>
                                <View style={styles.wrapView} />
                                <View style={styles.wrapTextView}>
                                    <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                    <Text style={styles.textView}>456K</Text>
                                </View>
                                <View style={styles.wrapVideoContent}>
                                    <Text style={styles.textVideoTittle}>Chạm Khẽ Tim Anh Một Chút Thôi</Text>
                                    <Text style={styles.textVideoContent}>Noo Phước Thịnh</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.wrapRowVideo}>
                            <View style={styles.wrapElementVideo}>
                                <Image style={styles.imgStyle} source={require('../../../img/mvHot/mv3.jpg')} />
                                <View style={styles.iconPlayCenterStyle}>
                                    <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_black.png')} />
                                </View>
                                <View style={styles.wrapView} />
                                <View style={styles.wrapTextView}>
                                    <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                    <Text style={styles.textView}>678K</Text>
                                </View>
                                <Text style={styles.textVideoTittle}>Sống Xa Anh Chẳng Dễ Dàng</Text>
                                <Text style={styles.textVideoContent}>Bảo Anh</Text>
                            </View>
                            <View style={styles.wrapElementVideo}>
                                <Image style={styles.imgStyle} source={require('../../../img/mvHot/mv4.jpg')} />
                                <View style={styles.iconPlayCenterStyle}>
                                    <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_black.png')} />
                                </View>
                                <View style={styles.wrapView} />
                                <View style={styles.wrapTextView}>
                                    <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
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
                                <Image style={styles.imgStyle} source={require('../../../img/mvHot/mv5.jpg')} />
                                <View style={styles.iconPlayCenterStyle}>
                                    <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_black.png')} />
                                </View>
                                <View style={styles.wrapView} />
                                <View style={styles.wrapTextView}>
                                    <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                    <Text style={styles.textView}>789K</Text>
                                </View>
                                <Text style={styles.textVideoTittle}>Bao Giờ Lấy Chồng?</Text>
                                <Text style={styles.textVideoContent}>Bích Phương</Text>
                            </View>
                            <View style={styles.wrapElementVideo}>
                                <Image style={styles.imgStyle} source={require('../../../img/mvHot/mv6.jpg')} />
                                <View style={styles.iconPlayCenterStyle}>
                                    <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_black.png')} />
                                </View>
                                <View style={styles.wrapView} />
                                <View style={styles.wrapTextView}>
                                    <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                    <Text style={styles.textView}>592K</Text>
                                </View>
                                <View style={styles.wrapVideoContent}>
                                    <Text style={styles.textVideoTittle}>Em Sai Rồi Anh Xin Lỗi Em Đi</Text>
                                    <Text style={styles.textVideoContent}>Chi Pu</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.wrapRowVideo}>
                            <View style={styles.wrapElementVideo}>
                                <Image style={styles.imgStyle} source={require('../../../img/detailMVHot/mv7.jpg')} />
                                <View style={styles.iconPlayCenterStyle}>
                                    <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_black.png')} />
                                </View>
                                <View style={styles.wrapView} />
                                <View style={styles.wrapTextView}>
                                    <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                    <Text style={styles.textView}>719K</Text>
                                </View>
                                <Text style={styles.textVideoTittle}>Không Sao Đâu</Text>
                                <Text style={styles.textVideoContent}>Trịnh Thăng Bình</Text>
                            </View>
                            <View style={styles.wrapElementVideo}>
                                <Image style={styles.imgStyle} source={require('../../../img/detailMVHot/mv8.jpg')} />
                                <View style={styles.iconPlayCenterStyle}>
                                    <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_black.png')} />
                                </View>
                                <View style={styles.wrapView} />
                                <View style={styles.wrapTextView}>
                                    <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                    <Text style={styles.textView}>562K</Text>
                                </View>
                                <View style={styles.wrapVideoContent}>
                                    <Text style={styles.textVideoTittle}>Yêu Thôi Anh Ah</Text>
                                    <Text style={styles.textVideoContent}>Vân Shi, Chi Dân, Him...</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.wrapRowVideo}>
                            <View style={styles.wrapElementVideo}>
                                <Image style={styles.imgStyle} source={require('../../../img/detailMVHot/mv9.jpg')} />
                                <View style={styles.iconPlayCenterStyle}>
                                    <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_black.png')} />
                                </View>
                                <View style={styles.wrapView} />
                                <View style={styles.wrapTextView}>
                                    <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                    <Text style={styles.textView}>157K</Text>
                                </View>
                                <Text style={styles.textVideoTittle}>Nói Thương Nhau Thì Đừng Làm Trái Tim Em Đau</Text>
                                <Text style={styles.textVideoContent}>Bích Phương</Text>
                            </View>
                            <View style={styles.wrapElementVideo}>
                                <Image style={styles.imgStyle} source={require('../../../img/detailMVHot/mv10.png')} />
                                <View style={styles.iconPlayCenterStyle}>
                                    <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_black.png')} />
                                </View>
                                <View style={styles.wrapView} />
                                <View style={styles.wrapTextView}>
                                    <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                    <Text style={styles.textView}>246K</Text>
                                </View>
                                <View style={styles.wrapVideoContent}>
                                    <Text style={styles.textVideoTittle}>Người Lạ Ơi</Text>
                                    <Text style={styles.textVideoContent}>Karik, Orange, Super...</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.wrapRowVideo}>
                            <View style={styles.wrapElementVideo}>
                                <Image style={styles.imgStyle} source={require('../../../img/detailMVHot/mv11.jpg')} />
                                <View style={styles.iconPlayCenterStyle}>
                                    <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_black.png')} />
                                </View>
                                <View style={styles.wrapView} />
                                <View style={styles.wrapTextView}>
                                    <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                    <Text style={styles.textView}>237K</Text>
                                </View>
                                <Text style={styles.textVideoTittle}>Anh Vẫn Cứ Lo</Text>
                                <Text style={styles.textVideoContent}>JSOL</Text>
                            </View>
                            <View style={styles.wrapElementVideo}>
                                <Image style={styles.imgStyle} source={require('../../../img/detailMVHot/mv12.jpg')} />
                                <View style={styles.iconPlayCenterStyle}>
                                    <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_black.png')} />
                                </View>
                                <View style={styles.wrapView} />
                                <View style={styles.wrapTextView}>
                                    <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                    <Text style={styles.textView}>255K</Text>
                                </View>
                                <View style={styles.wrapVideoContent}>
                                    <Text style={styles.textVideoTittle}>Nơi Này Có Anh</Text>
                                    <Text style={styles.textVideoContent}>Sơn Tùng M-TP</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.wrapRowVideo}>
                            <View style={styles.wrapElementVideo}>
                                <Image style={styles.imgStyle} source={require('../../../img/detailMVHot/mv13.jpg')} />
                                <View style={styles.iconPlayCenterStyle}>
                                    <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_black.png')} />
                                </View>
                                <View style={styles.wrapView} />
                                <View style={styles.wrapTextView}>
                                    <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                    <Text style={styles.textView}>337K</Text>
                                </View>
                                <Text style={styles.textVideoTittle}>Buồn Của Anh</Text>
                                <Text style={styles.textVideoContent}>K-ICM, Đạt G, Masew</Text>
                            </View>
                            <View style={styles.wrapElementVideo}>
                                <Image style={styles.imgStyle} source={require('../../../img/detailMVHot/mv14.jpg')} />
                                <View style={styles.iconPlayCenterStyle}>
                                    <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_black.png')} />
                                </View>
                                <View style={styles.wrapView} />
                                <View style={styles.wrapTextView}>
                                    <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                    <Text style={styles.textView}>1,2M</Text>
                                </View>
                                <View style={styles.wrapVideoContent}>
                                    <Text style={styles.textVideoTittle}>Em Gái Mưa</Text>
                                    <Text style={styles.textVideoContent}>Hương Tràm</Text>
                                </View>
                            </View>
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
