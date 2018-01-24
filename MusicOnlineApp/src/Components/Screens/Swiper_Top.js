import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const imageWidth = width;

export default class SwiperTop extends Component {
    render() {
        return (
            <View style={{ width: imageWidth, height: (imageWidth * 9) / 16 }}>
                <Swiper
                    width={imageWidth} height={(imageWidth * 9) / 16} autoplay autoplayTimeout={5}
                    dot={<View
                        style={{
                            backgroundColor: 'rgba(207,207,207,.3)',
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: (((imageWidth * 9) / 16) - 50),
                        }}
                    />}
                    activeDot={<View
                        style={{
                            backgroundColor: '#fdfdfd',
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: (((imageWidth * 9) / 16) - 50),
                        }}
                    />}
                >
                    <TouchableHighlight onPress={() => {}} style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../../img/swiperTop/swiper1.jpg')} style={styles.imageStyle} />
                            <View style={styles.blendBackGround} />
                            <View style={styles.wrapContenet}>
                                <Image source={require('../../img/swiperTop/avatar1.jpg')} style={styles.avartar} />
                                <View style={styles.imgContent}>
                                    <Text style={styles.title}>Mr. Siro</Text>
                                    <Text style={styles.content}>Những ca khúc hay nhất của Mr. Siro</Text>
                                </View>
                                <Image source={require('../../img/icon/play_white.png')} style={styles.play} />
                            </View>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => {}} style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../../img/swiperTop/swiper2.png')} style={styles.imageStyle} />
                            <View style={styles.blendBackGround} />
                            <View style={styles.wrapContenet}>
                                <Image source={require('../../img/swiperTop/avatar2.jpg')} style={styles.avartar} />
                                <View style={styles.imgContent}>
                                    <Text style={styles.title}>Tháng Năm Bên Nhau</Text>
                                    <Text style={styles.content}>Hồ Quỳnh Hương bắt tay cùng Vũ Cát Tường trong sản phẩm...</Text>
                                </View>
                                <Image source={require('../../img/icon/play_white.png')} style={styles.play} />
                            </View>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => {}} style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../../img/swiperTop/swiper3.png')} style={styles.imageStyle} />
                            <View style={styles.blendBackGround} />
                            <View style={styles.wrapContenet}>
                                <Image source={require('../../img/swiperTop/avatar3.jpg')} style={styles.avartar} />
                                <View style={styles.imgContent}>
                                    <Text style={styles.title}>Mashup Christmas Songs</Text>
                                    <Text style={styles.content}>'Anh trai rau' JSOL và nàng Cara xinh đẹp kết hợp trong MV giáng sinh...</Text>
                                </View>
                                <Image source={require('../../img/icon/play_white.png')} style={styles.play} />
                            </View>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => {}} style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../../img/swiperTop/swiper4.png')} style={styles.imageStyle} />
                            <View style={styles.blendBackGround} />
                            <View style={styles.wrapContenet}>
                                <Image source={require('../../img/swiperTop/avatar4.jpg')} style={styles.avartar} />
                                <View style={styles.imgContent}>
                                    <Text style={styles.title}>Without You</Text>
                                    <Text style={styles.content}>Thả mình trong chút ngẩn ngơ, chút buồn, chút đau đớn của tình yêu...</Text>
                                </View>
                                <Image source={require('../../img/icon/play_white.png')} style={styles.play} />
                            </View>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => {}} style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../../img/swiperTop/swiper5.png')} style={styles.imageStyle} />
                            <View style={styles.blendBackGround} />
                            <View style={styles.wrapContenet}>
                                <Image source={require('../../img/swiperTop/avatar5.png')} style={styles.avartar} />
                                <View style={styles.imgContent}>
                                    <Text style={styles.title}>Embee Music Connection</Text>
                                    <Text style={styles.content}>Tuyển tập các ca khúc hít của dàn line-up sự kiện Embee Music...</Text>
                                </View>
                                <Image source={require('../../img/icon/play_white.png')} style={styles.play} />
                            </View>
                        </View>
                    </TouchableHighlight>
                </Swiper>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    imageStyle: {
        height: (imageWidth * 9) / 16,
        width: imageWidth,
    },
    imgContent: {
        width: imageWidth / 1.5,
        height: imageWidth / 6.7,
        marginLeft: 10,
        marginBottom: 10,
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        fontWeight: '300',
        color: 'white'
    },
    blendBackGround: {
        width: imageWidth,
        height: imageWidth / 5,
        backgroundColor: 'black',
        opacity: 0.3,
        position: 'absolute',
        bottom: 0
    },
    wrapContenet: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 1,
        justifyContent: 'space-between'
    },
    content: {
        color: 'white',
        flexWrap: 'wrap',
        fontFamily: 'sans-serif-medium',
        fontSize: 14,
        marginRight: 40,
        fontWeight: '100'
    },
    avartar: {
        width: imageWidth / 6.7,
        height: imageWidth / 6.7,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 10,
        marginBottom: 10
    },
    play: {
        width: 33,
        height: 33,
        marginRight: 10,
        marginBottom: 10
    }
});
