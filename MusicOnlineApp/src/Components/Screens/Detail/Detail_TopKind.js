import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity,
        TouchableHighlight, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class DetailTopKind extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.wrapIcon} onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.iconStyle} source={require('../../../img/search/back.png')} />
                    </TouchableOpacity>
                    <View style={styles.wrapText}>
                        <Text style={styles.title}>Tất Cả Chủ Đề & Thể Loại</Text>
                    </View>
                    <TouchableOpacity style={styles.wrapIcon} onPress={() => this.props.navigation.navigate('Screen_Search', { check: true })} >
                        <Image style={styles.iconStyle} source={require('../../../img/icon/search.png')} />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.wrapTopic}>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/nhachot.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/bolero.jpg')} />
                            </View>
                        </View>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/casivietnam.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/gym.jpg')} />
                            </View>
                        </View>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/bathu.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/cuoituan.jpg')} />
                            </View>
                        </View>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/caphe.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/lamviec.jpg')} />
                            </View>
                        </View>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/acoustic.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/top100.jpg')} />
                            </View>
                        </View>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/cunghoangdao.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/buon.jpg')} />
                            </View>
                        </View>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/dinner.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/dulich.jpg')} />
                            </View>
                        </View>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/edm.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/goodmorning.jpg')} />
                            </View>
                        </View>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/hpny.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/indie.jpg')} />
                            </View>
                        </View>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/karaoke.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/love.jpg')} />
                            </View>
                        </View>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/mua.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/ngaycuoi.jpg')} />
                            </View>
                        </View>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/nghesinghegi.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/ngungon.jpg')} />
                            </View>
                        </View>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/nhacaumy.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/nhachan.jpg')} />
                            </View>
                        </View>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/nhachoa.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/nhacnhat.jpg')} />
                            </View>
                        </View>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/nhacthuynga.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/nhactre.jpg')} />
                            </View>
                        </View>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/nhactrinh.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/party.jpg')} />
                            </View>
                        </View>
                        <View style={styles.wrapRowTopic}>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/radio.jpg')} />
                            </View>
                            <View style={styles.wrapElementTopic}>
                                <Image style={styles.imgStyle} source={require('../../../img/Topic_Kind/thugian.jpg')} />
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
    touchTitle: {
        width: imageWidth,
        height: imageWidth / 9,
    },
    wrapTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: imageWidth,
        height: imageWidth / 9,
    },
    content: {
      fontFamily: 'sans-serif-medium',
      color: '#7847A3',
      fontSize: 15,
      marginRight: 10
    },
    wrapTopic: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5
    },
    wrapRowTopic: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    wrapElementTopic: {
        width: (imageWidth / 2) - 15,
        borderRadius: 3,
    },
    imgStyle: {
        width: (imageWidth / 2) - 15,
        height: (((imageWidth / 2) - 15) * 9) / 16,
        borderRadius: 3,
    },
});
