import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet,
        Image, TouchableOpacity, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class DetailTopicHot extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.wrapIcon} onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.iconStyle} source={require('../../../img/search/back.png')} />
                    </TouchableOpacity>
                    <View style={styles.wrapText}>
                        <Text style={styles.title}>THE BEST OF 2017</Text>
                    </View>
                    <TouchableOpacity style={styles.wrapIcon} onPress={() => this.props.navigation.navigate('Screen_Search', { check: true })} >
                        <Image style={styles.iconStyle} source={require('../../../img/icon/search.png')} />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapRowAlbum}>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background1.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>1,2M</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Nhạc Việt Hay Nhất 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background2.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>418K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Song Ca/Nhóm Ca Nổi Bật 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background5.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>456K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Nghệ Sĩ Nam Nổi Bật 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background6.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>700K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Nghệ Sĩ Nữ Nổi Bật 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background11.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>379K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Nghệ Sĩ Indie/Underground Nổi Bật 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background12.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>333K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Những Bài Hát Bolero Hay Nhất 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background13.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>279K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Ca Sĩ Bolero Nổi Bật 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background14.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>373K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Ca Sĩ Bolero Triển Vọng 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background3.png')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>112K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Top US-UK Songs Of 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background4.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>220K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Top Rock Songs of 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background7.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>2,2MK</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Top Dance/ Electronic Songs Of 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background8.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>357K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Top Rap Songs Of 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background9.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>123K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Top R&B/Hip-Hop Songs of 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background10.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>399K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Top Latin Songs Of 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background16.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>599K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Top Male Artists of 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background15.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>299K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Top Digital Song Sales Of 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background17.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>699K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Top K-Pop Digital Of Boygroups 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background18.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>799K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Top K-Pop Songs Of 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background19.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>299K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Top K-Pop Girlgroup Songs Of 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background20.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>299K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Top K-Pop Dance Songs Of 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background21.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>329K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Top K-Pop Ballad Songs Of 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
                        </View>
                        <View style={styles.wrapElementAlbum}>
                            <Image style={styles.imgStyle} source={require('../../../img/detailTopicHot/background22.jpg')} />
                            <View style={styles.iconPlayCenterStyle}>
                                <Image style={styles.iconPlayCenter} source={require('../../../img/icon/play_white.png')} />
                            </View>
                            <View style={styles.wrapView} />
                            <View style={styles.wrapTextView}>
                                <Image style={styles.iconPlayView} source={require('../../../img/icon/play_view.png')} />
                                <Text style={styles.textView}>459K</Text>
                            </View>
                            <Text style={styles.textAlbumTittle}>Top K-Pop Rookies of 2017</Text>
                            <Text style={styles.textAlbumContent}>Various Artists</Text>
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
